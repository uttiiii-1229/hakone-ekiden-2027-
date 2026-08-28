import io, json, re, time
from pathlib import Path
from urllib.parse import urljoin

import pdfplumber
import requests
from bs4 import BeautifulSoup

UA={'User-Agent':'Hakone2027SectionsBuilder/2.0'}
OUT=Path('hakone2027-site 3/three-ekiden-sections-db.js')

def clean(s):
    return re.sub(r'\s+',' ',str(s or '').replace('\u3000',' ')).strip()

def norm_team(s):
    return clean(s).replace('國學院大学','國學院大學').replace('國學院大','國學院大學')

def norm_time(s):
    s=clean(s).replace('◎','').replace('○','').replace('★','').replace('分',':').replace('秒','').replace('時間',':')
    s=re.sub(r'\[\d+\]','',s)
    m=re.fullmatch(r'(\d+):(\d{1,2})(?::(\d{1,2}))?',s)
    if not m:return clean(s)
    a,b,c=m.groups()
    if c is None:return f'{int(a)}:{int(b):02d}'
    return f'{int(a)}:{int(b):02d}:{int(c):02d}'

def rank_value(s):
    s=clean(s).replace('位','')
    if s.isdigit():return int(s)
    if s in ('--','－','—','オープン','OPN','参考'):return 'OPN'
    return s or '—'

def fetch_html(url):
    try:
        r=requests.get(url,headers=UA,timeout=20)
        if r.status_code!=200:return None
        r.encoding=r.apparent_encoding or 'utf-8'
        return r.text
    except Exception:
        return None

def parse_html_section(url):
    html=fetch_html(url)
    if not html:return []
    soup=BeautifulSoup(html,'html.parser')
    best=[]
    for table in soup.find_all('table'):
        rows=[]
        for tr in table.find_all('tr'):
            cells=[clean(x.get_text(' ',strip=True)) for x in tr.find_all(['th','td'])]
            if cells:rows.append(cells)
        if not rows:continue
        header=' '.join(rows[0])
        if '順位' not in header or ('氏名' not in header and '選手' not in header) or 'チーム' not in header:continue
        out=[]
        for row in rows[1:]:
            if len(row)<6:continue
            rk=rank_value(row[0]); athlete=clean(row[2]); team=norm_team(row[4]); tm=norm_time(row[5])
            if not athlete or not team or not re.search(r'\d',tm):continue
            out.append({'rank':rk,'athlete':athlete,'team':team,'time':tm})
        if len(out)>len(best):best=out
    return best

def izumo_candidates(year,sec):
    ed=year-1988; yy=str(year)[-2:]
    urls=[
        f'https://www.izumo-ekiden.jp/{ed}/record/{sec}b.html',
        f'https://www.izumo-ekiden.jp/{ed}/record/{sec}b.htm',
        f'https://www.izumo-ekiden.jp/{ed}/m/record_{sec}b.html',
        f'https://www.izumo-ekiden.jp/{ed}/m/record/{sec}b.html',
        f'https://www.izumo-ekiden.jp/{ed}/ke_{sec}b.html',
        f'https://www.izumo-ekiden.jp/{yy}/ke_{sec}b.html',
    ]
    if year==2025:
        urls.insert(0,f'https://www.izumo-ekiden.jp/record/{sec}b.html')
        urls.insert(1,f'https://www.izumo-ekiden.jp/37/record/{sec}b.html')
    return urls

def build_izumo():
    db={}
    for year in range(2007,2027):
        ed=year-1988
        if year in (2014,2020):db[str(year)]={'edition':ed,'status':'中止','sections':{}};continue
        if year==2026:db[str(year)]={'edition':ed,'status':'未開催','sections':{}};continue
        sections={}
        for sec in range(1,7):
            rows=[]; used=''
            for u in izumo_candidates(year,sec):
                rows=parse_html_section(u)
                if rows:used=u;break
            if len(rows)<10:
                raise RuntimeError(f'Izumo {year} {sec}: only {len(rows)} rows ({used or "no source"})')
            sections[str(sec)]=rows
            print(f'Izumo {year} {sec}: {len(rows)} {used}')
            time.sleep(.03)
        db[str(year)]={'edition':ed,'status':'開催','sections':sections}
    return db

def alljapan_pdf_map(html):
    soup=BeautifulSoup(html,'html.parser')
    mapping={}; current=None
    for node in soup.find_all(['h2','h3','h4','a']):
        if node.name in ('h2','h3','h4'):
            m=re.search(r'第\s*(\d+)\s*回大会',clean(node.get_text(' ',strip=True)))
            if m:current=int(m.group(1))
        elif current and node.has_attr('href') and '.pdf' in node['href'].lower():
            mapping.setdefault(current,urljoin('https://daigaku-ekiden.com/datafile/',node['href']))
    return mapping

def fetch_pdf(year,ed,pdf_map):
    candidates=[]
    if ed in pdf_map:candidates.append(pdf_map[ed])
    candidates += [
        f'https://daigaku-ekiden.com/datafile/files/{year}result.pdf',
        f'https://daigaku-ekiden.com/files/{year}_result.pdf',
        f'https://daigaku-ekiden.com/files/{year}result.pdf',
    ]
    seen=set()
    for u in candidates:
        if u in seen:continue
        seen.add(u)
        try:
            r=requests.get(u,headers=UA,timeout=30)
            if r.status_code==200 and r.content.startswith(b'%PDF'):
                return u,r.content
        except Exception:pass
    return None,None

def cluster_lines(words,tol=2.5):
    words=sorted(words,key=lambda w:(float(w['top']),float(w['x0'])))
    lines=[]
    for w in words:
        top=float(w['top'])
        if not lines or abs(top-lines[-1]['top'])>tol:
            lines.append({'top':top,'words':[w]})
        else:
            lines[-1]['words'].append(w)
            n=len(lines[-1]['words'])
            lines[-1]['top']=(lines[-1]['top']*(n-1)+top)/n
    for line in lines:line['words'].sort(key=lambda w:float(w['x0']))
    return lines

def token_time_rank(text):
    t=clean(text).replace('◎','').replace('○','')
    m=re.fullmatch(r'((?:\d+:)?\d{1,2}:\d{2})\[(\d+)\]',t)
    return (norm_time(m.group(1)),int(m.group(2))) if m else None

def line_time_words(line):
    out=[]
    for w in line['words']:
        parsed=token_time_rank(w['text'])
        if parsed:out.append((w,parsed))
    return out

def athlete_from_band(line,center,left,right):
    parts=[]
    for w in line['words']:
        c=(float(w['x0'])+float(w['x1']))/2
        if left<=c<right:parts.append(w['text'])
    return clean(' '.join(parts))

def parse_alljapan_pdf(pdf_bytes):
    sections={str(i):[] for i in range(1,9)}
    with pdfplumber.open(io.BytesIO(pdf_bytes)) as doc:
        for page in doc.pages:
            words=page.extract_words(x_tolerance=1.5,y_tolerance=2,keep_blank_chars=False) or []
            lines=cluster_lines(words)
            for i,line in enumerate(lines):
                tw=line_time_words(line)
                if len(tw)<8:continue
                first=clean(line['words'][0]['text']) if line['words'] else ''
                second=clean(line['words'][1]['text']) if len(line['words'])>1 else ''
                if not (first.isdigit() or first in ('--','－','—')) or not second.isdigit():continue
                first_time_idx=next((j for j,w in enumerate(line['words']) if token_time_rank(w['text'])),None)
                if first_time_idx is None or first_time_idx<3:continue
                team=norm_team(' '.join(w['text'] for w in line['words'][2:first_time_idx]))
                if not team:continue
                if i==0 or i+1>=len(lines):continue
                athlete_line=lines[i-1]
                section_line=lines[i+1]
                stw=line_time_words(section_line)
                if len(stw)<8:continue
                stw=stw[:8]
                centers=[(float(w['x0'])+float(w['x1']))/2 for w,_ in stw]
                for sec,(w,(tm,rk)) in enumerate(stw,start=1):
                    if sec==1:left=centers[0]-(centers[1]-centers[0])/2
                    else:left=(centers[sec-2]+centers[sec-1])/2
                    if sec==8:right=centers[-1]+(centers[-1]-centers[-2])/2
                    else:right=(centers[sec-1]+centers[sec])/2
                    athlete=athlete_from_band(athlete_line,centers[sec-1],left,right)
                    if athlete:
                        sections[str(sec)].append({'rank':rk,'athlete':athlete,'team':team,'time':tm})
    for sec in range(1,9):
        rows=sections[str(sec)]
        dedup={}
        for r in rows:
            key=(r['team'],r['athlete'])
            if key not in dedup:dedup[key]=r
        sections[str(sec)]=sorted(dedup.values(),key=lambda r:(r['rank'] if isinstance(r['rank'],int) else 999,r['team']))
    return sections

def build_zennihon():
    index=requests.get('https://daigaku-ekiden.com/datafile/',headers=UA,timeout=30)
    index.raise_for_status(); html=index.text
    pdf_map=alljapan_pdf_map(html)
    print('All-Japan PDF map:',sorted(pdf_map.items()))
    db={}
    for year in range(2007,2027):
        ed=year-1968
        if year==2026:db[str(year)]={'edition':ed,'status':'未開催','sections':{}};continue
        url,pdf=fetch_pdf(year,ed,pdf_map)
        if not pdf:raise RuntimeError(f'Zennihon {year}: PDF missing')
        sections=parse_alljapan_pdf(pdf)
        counts={s:len(v) for s,v in sections.items()}
        print(f'Zennihon {year}: {counts} {url}')
        for sec,n in counts.items():
            if n<15:raise RuntimeError(f'Zennihon {year} {sec}: only {n} rows from {url}')
        db[str(year)]={'edition':ed,'status':'開催','sections':sections,'source':url}
        time.sleep(.05)
    return db

izumo=build_izumo()
zennihon=build_zennihon()
OUT.write_text('// AUTO-GENERATED official section standings database\nwindow.threeEkidenSectionsDB = '+json.dumps({'izumo':izumo,'zennihon':zennihon},ensure_ascii=False,separators=(',',':'))+';\n',encoding='utf-8')
print('wrote',OUT)
