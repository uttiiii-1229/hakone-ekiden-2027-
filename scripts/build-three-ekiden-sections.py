import io, json, re, time
from pathlib import Path
from urllib.parse import urljoin

import pdfplumber
import requests
from bs4 import BeautifulSoup

UA={'User-Agent':'Hakone2027SectionsBuilder/2.3'}
OUT=Path('hakone2027-site 3/three-ekiden-sections-db.js')

def clean(s):
    return re.sub(r'\s+',' ',str(s or '').replace('\u3000',' ')).strip()

def norm_team(s):
    return clean(s).replace('國學院大学','國學院大學').replace('國學院大','國學院大學')

def norm_time(s):
    s=clean(s).replace('◎','').replace('○','').replace('★','').replace('′',':').replace('″','').replace('分',':').replace('秒','').replace('時間',':')
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
        r=requests.get(url,headers=UA,timeout=12)
        if r.status_code!=200:return None
        raw=r.content
        meta=re.search(br'charset\s*=\s*["\']?([A-Za-z0-9._-]+)',raw[:5000],re.I)
        encs=[]
        if meta:
            try:encs.append(meta.group(1).decode('ascii'))
            except Exception:pass
        encs += [r.apparent_encoding,'cp932','shift_jis','utf-8']
        for enc in encs:
            if not enc:continue
            try:
                text=raw.decode(enc)
                if '順位' in text or 'チーム' in text:return text
            except Exception:pass
        r.encoding=r.apparent_encoding or 'utf-8'
        return r.text
    except Exception:
        return None

def looks_time(s):
    return bool(re.search(r'(?:\d{1,2}:\d{2}|\d+分\s*\d+秒|\d+′\s*\d+″)',clean(s)))

def looks_team(s):
    s=clean(s)
    return bool(re.search(r'(?:大学|大學|学連選抜|学生選抜|リーグ選抜|IVY|アイビー|第一工業|東海大$|駒澤大$|駒沢大$)',s))

def generic_section_rows(rows):
    out=[]
    for row in rows:
        if len(row)<5:continue
        rk=rank_value(row[0])
        if not isinstance(rk,int) and rk!='OPN':continue
        ti=next((i for i,x in enumerate(row[1:],1) if looks_time(x)),None)
        team_i=next((i for i,x in enumerate(row[1:],1) if looks_team(x)),None)
        if ti is None or team_i is None:continue
        if ti==2 and team_i>=4:athlete_i=3
        elif team_i>=4:athlete_i=2
        else:
            candidates=[i for i in range(1,len(row)) if i not in (ti,team_i) and not row[i].isdigit() and not re.fullmatch(r'[\uFF61-\uFF9F A-Za-z]+',row[i])]
            athlete_i=candidates[0] if candidates else None
        if athlete_i is None or athlete_i>=len(row):continue
        athlete=clean(row[athlete_i]); team=norm_team(row[team_i]); tm=norm_time(row[ti])
        if athlete and team and re.search(r'\d',tm):out.append({'rank':rk,'athlete':athlete,'team':team,'time':tm})
    return out

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
        header_i=None;indices=None
        for i,row in enumerate(rows[:10]):
            joined=' '.join(row)
            if '順位' not in joined or 'チーム' not in joined or ('氏名' not in joined and '選手' not in joined):continue
            def find_idx(words):
                for j,h in enumerate(row):
                    if any(w in h for w in words):return j
                return None
            ir=find_idx(['順位']);ia=find_idx(['氏名','選手']);it=find_idx(['チーム']);im=find_idx(['記録','タイム'])
            if None not in (ir,ia,it,im):header_i=i;indices=(ir,ia,it,im);break
        out=[]
        if header_i is not None:
            ir,ia,it,im=indices
            for row in rows[header_i+1:]:
                if max(ir,ia,it,im)>=len(row):continue
                rk=rank_value(row[ir]);athlete=clean(row[ia]);team=norm_team(row[it]);tm=norm_time(row[im])
                if athlete and team and re.search(r'\d',tm) and (isinstance(rk,int) or rk=='OPN'):
                    out.append({'rank':rk,'athlete':athlete,'team':team,'time':tm})
        if len(out)<10:out=generic_section_rows(rows)
        if len(out)>len(best):best=out
    return best

def izumo_candidates(year,sec):
    ed=year-1988;yy=str(year)[-2:]
    old=[f'https://www.izumo-ekiden.jp/{yy}/ke_{sec}b.html',f'https://www.izumo-ekiden.jp/{ed}/ke_{sec}b.html',f'https://www.izumo-ekiden.jp/{ed}/ke_{sec}b.htm']
    modern=[f'https://www.izumo-ekiden.jp/{ed}/record/{sec}b.html',f'https://www.izumo-ekiden.jp/{ed}/record/{sec}b.htm',f'https://www.izumo-ekiden.jp/{ed}/m/record_{sec}b.html']
    urls=(old+modern) if year<=2010 else (modern+old)
    if year==2025:urls=[f'https://www.izumo-ekiden.jp/record/{sec}b.html',f'https://www.izumo-ekiden.jp/37/record/{sec}b.html']+urls
    return urls

def izumo_overall_candidates(year):
    ed=year-1988;yy=str(year)[-2:]
    urls=[]
    if year==2025:urls += ['https://www.izumo-ekiden.jp/record/record.html',f'https://www.izumo-ekiden.jp/{ed}/record/record.html']
    if year<=2010:urls += [f'https://www.izumo-ekiden.jp/{yy}/ke_all.html',f'https://www.izumo-ekiden.jp/{ed}/ke_all.html']
    urls += [f'https://www.izumo-ekiden.jp/{ed}/record/record.html',f'https://www.izumo-ekiden.jp/{ed}/record.html']
    return list(dict.fromkeys(urls))

def time_rank_pairs(text):
    text=clean(text).replace('′',':').replace('″','')
    pairs=[]
    for tm,rk in re.findall(r'(\d{1,2}:\d{2})\s*(?:\[|\(|（)?\s*(\d{1,2})\s*(?:\]|\)|）)?',text):
        # avoid interpreting bare adjacent numeric fields as a pair unless rank is plausible
        if 1<=int(rk)<=60:pairs.append((norm_time(tm),int(rk)))
    return pairs

def parse_izumo_overall(url):
    html=fetch_html(url)
    if not html:return None
    soup=BeautifulSoup(html,'html.parser')
    sections={str(i):[] for i in range(1,7)}
    for table in soup.find_all('table'):
        trs=table.find_all('tr')
        if not trs:continue
        table_text=clean(table.get_text(' ',strip=True))
        if '第1区' not in table_text or '第6区' not in table_text:continue
        i=0
        while i<len(trs):
            cells=trs[i].find_all(['th','td'],recursive=False)
            txt=[clean(c.get_text(' ',strip=True)) for c in cells]
            if not txt or not txt[0].isdigit():i+=1;continue
            team_i=next((j for j,x in enumerate(txt[:6]) if looks_team(x)),None)
            if team_i is None:i+=1;continue
            team=norm_team(txt[team_i]);athletes=[]
            for c in cells[team_i+1:]:
                parts=[clean(x) for x in c.stripped_strings if clean(x)]
                non=[x for x in parts if not looks_time(x) and not re.fullmatch(r'[\[\]（）()\d\s]+',x)]
                if non:athletes.append(non[0])
            if len(athletes)>6:athletes=athletes[-6:]

            # Section-time row is normally the second continuation row after the team/athlete row.
            candidates=[]
            for k in range(i,min(i+4,len(trs))):
                row_text=clean(trs[k].get_text(' ',strip=True))
                pairs=time_rank_pairs(row_text)
                times=re.findall(r'\d{1,2}(?:[:′])\d{2}(?:″)?',row_text)
                if len(pairs)>=6 or len(times)>=6:candidates.append((k,row_text,pairs,times))
            if candidates:
                k,row_text,pairs,times=candidates[-1]
                if len(pairs)>=6:
                    secvals=pairs[-6:]
                else:
                    # Some old pages put ranks in separate cells; calculate ranks from section times later.
                    secvals=[(norm_time(t),None) for t in times[-6:]]
                if len(athletes)>=6:
                    for sec in range(1,7):
                        tm,rk=secvals[sec-1]
                        sections[str(sec)].append({'rank':rk,'athlete':athletes[sec-1],'team':team,'time':tm})
            i+=1
    # If official rank could not be extracted, derive section rank from official section times.
    for sec in range(1,7):
        rows=sections[str(sec)]
        if not rows:continue
        def secs(t):
            p=norm_time(t).split(':')
            return int(p[-2])*60+int(p[-1]) if len(p)>=2 and all(x.isdigit() for x in p[-2:]) else 99999
        ordered=sorted(rows,key=lambda r:secs(r['time']))
        prev=None;rank=0
        for pos,r in enumerate(ordered,1):
            val=secs(r['time'])
            if val!=prev:rank=pos;prev=val
            if r['rank'] is None:r['rank']=rank
        sections[str(sec)]=sorted(rows,key=lambda r:(r['rank'] if isinstance(r['rank'],int) else 999,r['team']))
    counts=[len(sections[str(i)]) for i in range(1,7)]
    return sections if min(counts or [0])>=10 else None

def build_izumo():
    db={}
    for year in range(2007,2027):
        ed=year-1988
        if year in (2014,2020):db[str(year)]={'edition':ed,'status':'中止','sections':{}};continue
        if year==2026:db[str(year)]={'edition':ed,'status':'未開催','sections':{}};continue
        sections={};overall=None
        for sec in range(1,7):
            rows=[];used=''
            for u in izumo_candidates(year,sec):
                rows=parse_html_section(u)
                if len(rows)>=10:used=u;break
            if len(rows)<10:
                if overall is None:
                    for u in izumo_overall_candidates(year):
                        overall=parse_izumo_overall(u)
                        if overall:
                            print(f'Izumo {year}: overall fallback {u}')
                            break
                rows=(overall or {}).get(str(sec),[])
                used='overall-fallback' if rows else ''
            if len(rows)<10:raise RuntimeError(f'Izumo {year} {sec}: only {len(rows)} rows ({used or "no source"})')
            sections[str(sec)]=rows
            print(f'Izumo {year} {sec}: {len(rows)} {used}')
            time.sleep(.02)
        db[str(year)]={'edition':ed,'status':'開催','sections':sections}
    return db

def alljapan_pdf_map(html):
    soup=BeautifulSoup(html,'html.parser')
    mapping={};current=None
    for node in soup.find_all(['h2','h3','h4','a']):
        if node.name in ('h2','h3','h4'):
            m=re.search(r'第\s*(\d+)\s*回大会',clean(node.get_text(' ',strip=True)))
            if m:current=int(m.group(1))
        elif current and node.has_attr('href') and '.pdf' in node['href'].lower():mapping.setdefault(current,urljoin('https://daigaku-ekiden.com/datafile/',node['href']))
    return mapping

def fetch_pdf(year,ed,pdf_map):
    candidates=[]
    if ed in pdf_map:candidates.append(pdf_map[ed])
    candidates += [f'https://daigaku-ekiden.com/datafile/files/{year}result.pdf',f'https://daigaku-ekiden.com/files/{year}_result.pdf',f'https://daigaku-ekiden.com/files/{year}result.pdf']
    seen=set()
    for u in candidates:
        if u in seen:continue
        seen.add(u)
        try:
            r=requests.get(u,headers=UA,timeout=30)
            if r.status_code==200 and r.content.startswith(b'%PDF'):return u,r.content
        except Exception:pass
    return None,None

def cluster_lines(words,tol=2.5):
    words=sorted(words,key=lambda w:(float(w['top']),float(w['x0'])));lines=[]
    for w in words:
        top=float(w['top'])
        if not lines or abs(top-lines[-1]['top'])>tol:lines.append({'top':top,'words':[w]})
        else:
            lines[-1]['words'].append(w);n=len(lines[-1]['words']);lines[-1]['top']=(lines[-1]['top']*(n-1)+top)/n
    for line in lines:line['words'].sort(key=lambda w:float(w['x0']))
    return lines

def token_time_rank(text):
    t=clean(text).replace('◎','').replace('○','')
    m=re.fullmatch(r'((?:\d+:)?\d{1,2}:\d{2})\[(\d+)\]',t)
    return (norm_time(m.group(1)),int(m.group(2))) if m else None

def line_time_words(line):return [(w,p) for w in line['words'] if (p:=token_time_rank(w['text']))]

def athlete_from_band(line,left,right):
    return clean(' '.join(w['text'] for w in line['words'] if left<=((float(w['x0'])+float(w['x1']))/2)<right))

def parse_alljapan_pdf(pdf_bytes):
    sections={str(i):[] for i in range(1,9)}
    with pdfplumber.open(io.BytesIO(pdf_bytes)) as doc:
        for page in doc.pages:
            lines=cluster_lines(page.extract_words(x_tolerance=1.5,y_tolerance=2,keep_blank_chars=False) or [])
            for i,line in enumerate(lines):
                tw=line_time_words(line)
                if len(tw)<8:continue
                first=clean(line['words'][0]['text']) if line['words'] else '';second=clean(line['words'][1]['text']) if len(line['words'])>1 else ''
                if not (first.isdigit() or first in ('--','－','—')) or not second.isdigit():continue
                first_time_idx=next((j for j,w in enumerate(line['words']) if token_time_rank(w['text'])),None)
                if first_time_idx is None or first_time_idx<3 or i==0 or i+1>=len(lines):continue
                team=norm_team(' '.join(w['text'] for w in line['words'][2:first_time_idx]));stw=line_time_words(lines[i+1])
                if not team or len(stw)<8:continue
                athlete_line=lines[i-1];stw=stw[:8];centers=[(float(w['x0'])+float(w['x1']))/2 for w,_ in stw]
                for sec,(w,(tm,rk)) in enumerate(stw,start=1):
                    left=centers[0]-(centers[1]-centers[0])/2 if sec==1 else (centers[sec-2]+centers[sec-1])/2
                    right=centers[-1]+(centers[-1]-centers[-2])/2 if sec==8 else (centers[sec-1]+centers[sec])/2
                    athlete=athlete_from_band(athlete_line,left,right)
                    if athlete:sections[str(sec)].append({'rank':rk,'athlete':athlete,'team':team,'time':tm})
    for sec in range(1,9):
        dedup={}
        for r in sections[str(sec)]:dedup.setdefault((r['team'],r['athlete']),r)
        sections[str(sec)]=sorted(dedup.values(),key=lambda r:(r['rank'] if isinstance(r['rank'],int) else 999,r['team']))
    return sections

def build_zennihon():
    index=requests.get('https://daigaku-ekiden.com/datafile/',headers=UA,timeout=30);index.raise_for_status();html=index.text
    pdf_map=alljapan_pdf_map(html);print('All-Japan PDF map:',sorted(pdf_map.items()))
    db={}
    for year in range(2007,2027):
        ed=year-1968
        if year==2026:db[str(year)]={'edition':ed,'status':'未開催','sections':{}};continue
        url,pdf=fetch_pdf(year,ed,pdf_map)
        if not pdf:raise RuntimeError(f'Zennihon {year}: PDF missing')
        sections=parse_alljapan_pdf(pdf);counts={s:len(v) for s,v in sections.items()};print(f'Zennihon {year}: {counts} {url}')
        for sec,n in counts.items():
            if n<15:raise RuntimeError(f'Zennihon {year} {sec}: only {n} rows from {url}')
        db[str(year)]={'edition':ed,'status':'開催','sections':sections,'source':url};time.sleep(.04)
    return db

izumo=build_izumo();zennihon=build_zennihon()
OUT.write_text('// AUTO-GENERATED official section standings database\nwindow.threeEkidenSectionsDB = '+json.dumps({'izumo':izumo,'zennihon':zennihon},ensure_ascii=False,separators=(',',':'))+';\n',encoding='utf-8')
print('wrote',OUT)
