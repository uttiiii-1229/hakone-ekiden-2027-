import io, json, re, time
from pathlib import Path
from urllib.parse import urljoin

import pdfplumber
import requests
from bs4 import BeautifulSoup

UA={'User-Agent':'Hakone2027SectionsBuilder/1.0'}
OUT=Path('hakone2027-site 3/three-ekiden-sections-db.js')

def clean(s):
    return re.sub(r'\s+',' ',str(s or '').replace('\u3000',' ')).strip()

def norm_team(s):
    return clean(s).replace('國學院大学','國學院大學').replace('國學院大','國學院大學')

def norm_time(s):
    s=clean(s).replace('分',':').replace('秒','').replace('時間',':')
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

def parse_html_section(url):
    r=requests.get(url,headers=UA,timeout=30)
    if r.status_code!=200:return []
    r.encoding=r.apparent_encoding or 'utf-8'
    soup=BeautifulSoup(r.text,'html.parser')
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
            if len(row)<5:continue
            rk=rank_value(row[0]); athlete=clean(row[2]); team=norm_team(row[4] if len(row)>4 else ''); tm=norm_time(row[5] if len(row)>5 else '')
            if not athlete or not team or not re.search(r'\d',tm):continue
            out.append({'rank':rk,'athlete':athlete,'team':team,'time':tm})
        if len(out)>len(best):best=out
    return best

def build_izumo():
    db={}
    for year in range(2007,2027):
        ed=year-1988
        if year in (2014,2020):db[str(year)]={'edition':ed,'status':'中止','sections':{}};continue
        if year==2026:db[str(year)]={'edition':ed,'status':'未開催','sections':{}};continue
        sections={}
        for sec in range(1,7):
            candidates=[
                f'https://www.izumo-ekiden.jp/{ed}/record/{sec}b.html',
                f'https://www.izumo-ekiden.jp/{ed}/record/{sec}b.htm',
                f'https://www.izumo-ekiden.jp/{ed}/m/record/{sec}b.html',
                f'https://www.izumo-ekiden.jp/{ed}/m/{sec}b.html',
            ]
            rows=[]
            for u in candidates:
                rows=parse_html_section(u)
                if rows:break
            sections[str(sec)]=rows
            print(f'Izumo {year} {sec}: {len(rows)}')
            time.sleep(.08)
        db[str(year)]={'edition':ed,'status':'開催','sections':sections}
    return db

def find_pdf(year,html):
    soup=BeautifulSoup(html,'html.parser')
    preferred=[]
    for a in soup.find_all('a',href=True):
        href=a['href']
        if not href.lower().endswith('.pdf'):continue
        text=clean(a.get_text(' ',strip=True))
        if str(year) in href or f'第{year-1968}回' in text:preferred.append(urljoin('https://daigaku-ekiden.com/datafile/',href))
    preferred += [f'https://daigaku-ekiden.com/datafile/files/{year}result.pdf']
    seen=set()
    for u in preferred:
        if u in seen:continue
        seen.add(u)
        try:
            r=requests.get(u,headers=UA,timeout=30)
            if r.status_code==200 and r.content.startswith(b'%PDF'):return u,r.content
        except Exception:pass
    return None,None

def table_to_rows(table):
    if not table:return []
    header_i=None
    for i,row in enumerate(table):
        txt=' '.join(clean(x) for x in (row or []))
        if ('選手名' in txt or '氏名' in txt) and ('チーム名' in txt or '大学名' in txt) and ('区間記録' in txt or '記録' in txt):
            header_i=i;break
    if header_i is None:return []
    header=[clean(x) for x in table[header_i]]
    def idx(keys):
        for i,h in enumerate(header):
            if any(k in h for k in keys):return i
        return None
    ir=idx(['順','順位']); ia=idx(['選手名','氏名']); it=idx(['チーム名','大学名']); im=idx(['区間記録','記録'])
    if None in (ir,ia,it,im):return []
    out=[]
    for row in table[header_i+1:]:
        row=[clean(x) for x in (row or [])]
        if max(ir,ia,it,im)>=len(row):continue
        athlete=row[ia]; team=norm_team(row[it]); tm=norm_time(row[im]); rk=rank_value(row[ir])
        if not athlete or not team or not re.search(r'\d',tm):continue
        out.append({'rank':rk,'athlete':athlete,'team':team,'time':tm})
    return out

def build_zennihon():
    index=requests.get('https://daigaku-ekiden.com/datafile/',headers=UA,timeout=30)
    index.raise_for_status(); html=index.text
    db={}
    for year in range(2007,2027):
        ed=year-1968
        if year==2026:db[str(year)]={'edition':ed,'status':'未開催','sections':{}};continue
        url,pdf=find_pdf(year,html)
        if not pdf:
            print(f'Zennihon {year}: PDF missing')
            db[str(year)]={'edition':ed,'status':'開催','sections':{}};continue
        sections={str(i):[] for i in range(1,9)}
        with pdfplumber.open(io.BytesIO(pdf)) as doc:
            current=None
            for page in doc.pages:
                text=page.extract_text() or ''
                hits=re.findall(r'区間順位\s*([1-8])区',text)
                if hits:current=int(hits[0])
                tables=page.extract_tables() or []
                for table in tables:
                    rows=table_to_rows(table)
                    if not rows:continue
                    sec=current
                    joined=' '.join(clean(x) for row in (table[:2] if table else []) for x in (row or []))
                    m=re.search(r'([1-8])区',joined)
                    if m:sec=int(m.group(1))
                    if sec and len(rows)>len(sections[str(sec)]):sections[str(sec)]=rows
        print(f'Zennihon {year}: '+','.join(f'{s}:{len(v)}' for s,v in sections.items()))
        db[str(year)]={'edition':ed,'status':'開催','sections':sections,'source':url}
        time.sleep(.1)
    return db

izumo=build_izumo()
zennihon=build_zennihon()
OUT.write_text('// AUTO-GENERATED official section standings database\nwindow.threeEkidenSectionsDB = '+json.dumps({'izumo':izumo,'zennihon':zennihon},ensure_ascii=False,separators=(',',':'))+';\n',encoding='utf-8')
print('wrote',OUT)
