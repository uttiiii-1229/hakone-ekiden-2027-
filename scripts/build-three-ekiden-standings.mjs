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
  return (tableHtml.match(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi)||[]).map(tr=>[...tr.matchAll(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/gi)].map(m=>cleanCell(m[1]))).filter(r=>r.length);
}
function normalizeUniversity(name=''){
  return name.replace(/國學院大学/g,'國學院大學').replace(/國學院大$/,'國學院大學').trim();
}
function normalizeTime(t=''){
  let s=String(t).trim().replace(/\s/g,'').replace(/[★◎○]/g,'');
  if(/^\d+:\d{2}:\d{2}$/.test(s)||/^\d+:\d{2}$/.test(s)) return s;
  let m=s.match(/^(?:(\d+)[°度])?(?:(\d+)[′'分])(?:(\d+)[″"秒])$/);
  if(m) return `${Number(m[1]||0)}:${String(Number(m[2]||0)).padStart(2,'0')}:${String(Number(m[3]||0)).padStart(2,'0')}`;
  m=s.match(/^(?:(\d+)時間)?(?:(\d+)分)?(?:(\d+)秒)?$/);
  if(m&&(m[1]||m[2]||m[3])) return `${Number(m[1]||0)}:${String(Number(m[2]||0)).padStart(2,'0')}:${String(Number(m[3]||0)).padStart(2,'0')}`;
  return String(t).trim();
}
function looksLikeTime(s=''){
  const t=normalizeTime(s);
  return /^\d+:\d{2}(?::\d{2})?$/.test(t);
}
async function fetchDecoded(url,legacy=false){
  const res=await fetch(url,{headers:{'user-agent':'Hakone2027StandingsBuilder/1.2'}});
  if(!res.ok) return null;
  const buf=await res.arrayBuffer();
  if(legacy){
    try{return new TextDecoder('shift_jis').decode(buf);}catch{}
  }
  return new TextDecoder('utf-8').decode(buf);
}

async function buildIzumo(){
  const out={};
  for(let year=2007;year<=2026;year++){
    const edition=year-1988;
    if(year===2014||year===2020){out[year]={edition,status:'中止',results:[]};continue;}
    if(year===2026){out[year]={edition,status:'未開催',results:[]};continue;}
    const yy=String(year).slice(-2);
    const candidates=[
      {url:`https://www.izumo-ekiden.jp/${edition}/record/record.html`,legacy:false},
      {url:`https://www.izumo-ekiden.jp/${edition}/record/record_all.html`,legacy:false},
      {url:`https://www.izumo-ekiden.jp/${edition}/m/record_all.html`,legacy:false},
      {url:`https://www.izumo-ekiden.jp/${edition}/ke_all.html`,legacy:true},
      {url:`https://www.izumo-ekiden.jp/${yy}/ke_all.html`,legacy:true}
    ];
    let html='',used='',legacy=false;
    for(const c of candidates){const text=await fetchDecoded(c.url,c.legacy);if(text){html=text;used=c.url;legacy=c.legacy;break;}}
    if(!html) throw new Error(`Izumo ${year} no result page`);
    const rows=parseRows(html); const results=[]; const seen=new Set();
    for(let i=0;i<rows.length;i++){
      const row=rows[i]; if(row.length<3) continue;
      const rankRaw=String(row[0]).trim();
      if(!/^\d+$/.test(rankRaw)&&!/^OPN$/i.test(rankRaw)&&rankRaw!=='参考') continue;
      const team=normalizeUniversity(row[2]); if(!team||seen.has(team)) continue;
      let time='';
      if(row[3]&&looksLikeTime(row[3])) time=normalizeTime(row[3]);
      if(!time&&legacy){
        const next=rows[i+1]||[];
        for(let j=next.length-1;j>=0;j--){if(looksLikeTime(next[j])){time=normalizeTime(next[j]);break;}}
      }
      if(!time) continue;
      seen.add(team);
      results.push({rank:/^\d+$/.test(rankRaw)?Number(rankRaw):'OPN',team,time});
    }
    if(results.length<10) throw new Error(`Izumo ${year} parsed only ${results.length} rows from ${used}`);
    out[year]={edition,status:'開催',results};
    console.log(`Izumo ${year}: ${results.length} (${used})`);
    await new Promise(r=>setTimeout(r,100));
  }
  return out;
}

async function buildZennihon(){
  const res=await fetch('https://daigaku-ekiden.com/datafile/',{headers:{'user-agent':'Hakone2027StandingsBuilder/1.2'}});
  if(!res.ok) throw new Error(`Zennihon datafile -> ${res.status}`);
  const html=await res.text(); const headings=[...html.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi)]; const out={};
  for(let year=2007;year<=2026;year++){
    const edition=year-1968;
    if(year===2026){out[year]={edition,status:'未開催',results:[]};continue;}
    const h=headings.find(m=>cleanCell(m[1]).replace(/\s/g,'').includes(`第${edition}回大会総合成績`));
    if(!h) throw new Error(`Zennihon ${year} heading not found`);
    const tm=html.slice(h.index+h[0].length).match(/<table\b[^>]*>[\s\S]*?<\/table>/i);
    if(!tm) throw new Error(`Zennihon ${year} table not found`);
    const results=[]; const seen=new Set();
    for(const row of parseRows(tm[0])){
      if(row.length<3) continue;
      const rankText=row[0].replace(/\s/g,''); const team=normalizeUniversity(row[1]); const time=normalizeTime(row[2]);
      if(!team||!time||/大学名|総合タイム/.test(team)) continue;
      let rank=null;if(rankText==='優勝')rank=1;else{const m=rankText.match(/^(\d+)位$/);if(m)rank=Number(m[1]);}
      if(rank===null&&!/^--?$/.test(rankText)&&rankText!=='') continue;
      if(seen.has(team)) continue;seen.add(team);results.push({rank:rank??'OPN',team,time});
    }
    if(results.length<10) throw new Error(`Zennihon ${year} parsed only ${results.length} rows`);
    out[year]={edition,status:'開催',results}; console.log(`Zennihon ${year}: ${results.length}`);
  }
  return out;
}

const [izumo,zennihon]=await Promise.all([buildIzumo(),buildZennihon()]);
const output=`// AUTO-GENERATED official standings database\n// Generated: ${new Date().toISOString()}\nwindow.threeEkidenStandingsDB = ${JSON.stringify({izumo,zennihon})};\n`;
await fs.writeFile('hakone2027-site 3/three-ekiden-standings-db.js',output,'utf8');
console.log('wrote three-ekiden-standings-db.js');