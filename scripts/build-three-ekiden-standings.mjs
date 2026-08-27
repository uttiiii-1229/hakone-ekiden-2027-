import fs from 'node:fs/promises';

function decodeHtml(s=''){
  const named={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'",'&nbsp;':' ','&ensp;':' ','&emsp;':' ','&thinsp;':' '};
  s=s.replace(/&(amp|lt|gt|quot|#39|nbsp|ensp|emsp|thinsp);/g,m=>named[m]||m);
  s=s.replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n)));
  s=s.replace(/&#x([0-9a-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16)));
  return s;
}
function cleanCell(html=''){
  return decodeHtml(html).replace(/<br\s*\/?>/gi,' ').replace(/<[^>]*>/g,'').replace(/　/g,' ').replace(/[\t\r\n]+/g,' ').replace(/\s+/g,' ').trim();
}
function parseRows(tableHtml=''){
  return (tableHtml.match(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi)||[]).map(tr=>
    [...tr.matchAll(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/gi)].map(m=>cleanCell(m[1]))
  ).filter(r=>r.length);
}
function normalizeUniversity(name=''){
  return name.replace(/國學院大学/g,'國學院大學').replace(/國學院大$/,'國學院大學').replace(/大学$/,'大学').trim();
}
function normalizeTime(t=''){
  const s=String(t).trim().replace(/\s/g,'');
  if(/^\d+:\d{2}:\d{2}$/.test(s)||/^\d+:\d{2}$/.test(s)) return s;
  const m=s.match(/(?:(\d+)時間)?(?:(\d+)分)?(?:(\d+)秒)?/);
  if(m&&(m[1]||m[2]||m[3])) return `${Number(m[1]||0)}:${String(Number(m[2]||0)).padStart(2,'0')}:${String(Number(m[3]||0)).padStart(2,'0')}`;
  return t;
}

async function buildIzumo(){
  const out={};
  for(let year=2007;year<=2026;year++){
    const edition=year-1988;
    if(year===2014||year===2020){ out[year]={edition,status:'中止',results:[]}; continue; }
    if(year===2026){ out[year]={edition,status:'未開催',results:[]}; continue; }
    const urls=[
      `https://www.izumo-ekiden.jp/${edition}/record/record.html`,
      `https://www.izumo-ekiden.jp/${edition}/record/record_all.html`,
      `https://www.izumo-ekiden.jp/${edition}/m/record_all.html`
    ];
    let html=''; let used='';
    for(const url of urls){
      const res=await fetch(url,{headers:{'user-agent':'Hakone2027StandingsBuilder/1.0'}});
      if(res.ok){ html=await res.text(); used=url; break; }
    }
    if(!html) throw new Error(`Izumo ${year} no result page`);
    const results=[]; const seen=new Set();
    for(const row of parseRows(html)){
      if(row.length<4) continue;
      const rankRaw=row[0];
      if(!/^\d+$/.test(rankRaw)&&!/^OPN$/i.test(rankRaw)&&rankRaw!=='参考') continue;
      const team=normalizeUniversity(row[2]); const time=normalizeTime(row[3]);
      if(!team||!time||seen.has(team)) continue;
      seen.add(team);
      results.push({rank:/^\d+$/.test(rankRaw)?Number(rankRaw):'OPN',team,time});
    }
    if(results.length<10) throw new Error(`Izumo ${year} parsed only ${results.length} rows from ${used}`);
    out[year]={edition,status:'開催',results};
    console.log(`Izumo ${year}: ${results.length}`);
    await new Promise(r=>setTimeout(r,120));
  }
  return out;
}

async function buildZennihon(){
  const res=await fetch('https://daigaku-ekiden.com/datafile/',{headers:{'user-agent':'Hakone2027StandingsBuilder/1.0'}});
  if(!res.ok) throw new Error(`Zennihon datafile -> ${res.status}`);
  const html=await res.text();
  const headings=[...html.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi)];
  const out={};
  for(let year=2007;year<=2026;year++){
    const edition=year-1968;
    if(year===2026){ out[year]={edition,status:'未開催',results:[]}; continue; }
    const h=headings.find(m=>cleanCell(m[1]).replace(/\s/g,'').includes(`第${edition}回大会総合成績`));
    if(!h) throw new Error(`Zennihon ${year} heading not found`);
    const after=html.slice(h.index+h[0].length);
    const tm=after.match(/<table\b[^>]*>[\s\S]*?<\/table>/i);
    if(!tm) throw new Error(`Zennihon ${year} table not found`);
    const results=[]; const seen=new Set();
    for(const row of parseRows(tm[0])){
      if(row.length<3) continue;
      const rankText=row[0].replace(/\s/g,'');
      const team=normalizeUniversity(row[1]); const time=normalizeTime(row[2]);
      if(!team||!time||/大学名|総合タイム/.test(team)) continue;
      let rank=null;
      if(rankText==='優勝') rank=1;
      else { const m=rankText.match(/^(\d+)位$/); if(m) rank=Number(m[1]); }
      if(rank===null && !/^--?$/.test(rankText) && rankText!=='') continue;
      if(seen.has(team)) continue; seen.add(team);
      results.push({rank:rank??'OPN',team,time});
    }
    if(results.length<10) throw new Error(`Zennihon ${year} parsed only ${results.length} rows`);
    out[year]={edition,status:'開催',results};
    console.log(`Zennihon ${year}: ${results.length}`);
  }
  return out;
}

const [izumo,zennihon]=await Promise.all([buildIzumo(),buildZennihon()]);
const output=`// AUTO-GENERATED official standings database\n// Generated: ${new Date().toISOString()}\nwindow.threeEkidenStandingsDB = ${JSON.stringify({izumo,zennihon})};\n`;
await fs.writeFile('hakone2027-site 3/three-ekiden-standings-db.js',output,'utf8');
console.log('wrote three-ekiden-standings-db.js');