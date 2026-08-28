import fs from 'node:fs/promises';

const meets = {
  2026:106, 2025:104, 2024:103, 2023:102, 2022:101, 2021:99,
  2020:96, 2019:95, 2018:94, 2017:93,
  2016:92, 2015:91, 2014:90, 2013:89, 2012:88,
  2011:87, 2010:86, 2009:85, 2008:84, 2007:83
};

function decodeHtml(s='') {
  const named={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'",'&nbsp;':' ','&ensp;':' ','&emsp;':' ','&thinsp;':' '};
  s=s.replace(/&(amp|lt|gt|quot|#39|nbsp|ensp|emsp|thinsp);/g,m=>named[m]||m);
  s=s.replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n)));
  s=s.replace(/&#x([0-9a-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16)));
  return s;
}
function cleanCell(html=''){
  return decodeHtml(html).replace(/<br\s*\/?>/gi,' ').replace(/<[^>]*>/g,'').replace(/　/g,' ').replace(/[\t\r\n]+/g,' ').replace(/\s+/g,' ').trim();
}
function normalizeUniversity(name=''){
  return String(name).replace(/國學院大学/g,'國學院大學').trim();
}
function normalizeTime(text=''){
  const raw=String(text).trim().replace(/\s+/g,'');
  if(!raw) return '';
  if(/^\d+:\d{2}:\d{2}$/.test(raw)) return raw;
  const m=raw.match(/^(?:(\d*)時間)?(?:(\d+)分)?(?:(\d+)秒)?$/);
  if(!m || (!m[1]&&!m[2]&&!m[3]&&!raw.includes('時間'))) return String(text).trim();
  return `${Number(m[1]||0)}:${String(Number(m[2]||0)).padStart(2,'0')}:${String(Number(m[3]||0)).padStart(2,'0')}`;
}
function timeSeconds(time=''){
  const p=String(time).split(':').map(Number);
  return p.length===3 && p.every(Number.isFinite) ? p[0]*3600+p[1]*60+p[2] : Number.POSITIVE_INFINITY;
}
function isReferenceTeam(name=''){
  return /関東.*(?:学連|学生連合)|学生連合|学連選抜/.test(name);
}
function parsePage(html){
  const rows=[];
  const seenTeams=new Set();
  const trs=html.match(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi)||[];
  for(const tr of trs){
    const cells=[...tr.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map(m=>cleanCell(m[1]));
    if(cells.length<5) continue;
    const [rankRaw,,universityRaw,athleteRaw,timeRaw]=cells;
    if(!universityRaw||!athleteRaw||!timeRaw) continue;
    if(!/^\d+$/.test(rankRaw)&&rankRaw!=='参考') continue;
    const university=normalizeUniversity(universityRaw);
    if(seenTeams.has(university)) continue;
    seenTeams.add(university);
    const reference=isReferenceTeam(university)||rankRaw==='0'||rankRaw==='参考';
    rows.push([reference?'参考':Number(rankRaw),null,university,athleteRaw,normalizeTime(timeRaw)]);
  }
  return rows;
}

// 公式「大会詳細」ページの総合順位をそのまま取り込む。
// 区間タイムの合算から総合順位を再計算しないことで、棄権・参考扱い・公式補正も忠実に反映する。
function parseOverallPage(html){
  const results=[];
  const seenTeams=new Set();
  const trs=html.match(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi)||[];
  for(const tr of trs){
    const cells=[...tr.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map(m=>cleanCell(m[1]));
    if(cells.length<3) continue;

    let rankRaw=cells[0]||'';
    let teamRaw=cells[1]||'';
    let timeRaw=cells[2]||'';

    // 一部大会で順位と大学名が同一セルに入る場合にも対応。
    const combined=rankRaw.match(/^(\d+|棄権|失格|参考|OPN)\s+(.+)$/);
    if(combined){
      rankRaw=combined[1];
      teamRaw=combined[2];
      timeRaw=cells[1]||'';
    }

    if(!/^\d+$/.test(rankRaw) && !/^(棄権|失格|参考|OPN)$/.test(rankRaw)) continue;
    const team=normalizeUniversity(teamRaw);
    if(!team || /大学$|大學$|選抜$|連合$/.test(team)===false) continue;
    if(seenTeams.has(team)) continue;
    seenTeams.add(team);

    const rank=/^\d+$/.test(rankRaw)?Number(rankRaw):rankRaw;
    results.push({rank,team,time:normalizeTime(timeRaw)});
  }
  return results;
}

function applyPassingRanks(yearDb){
  const cumulative=new Map();
  for(let section=1;section<=10;section++){
    const rows=yearDb[section]||[];
    for(const row of rows){
      const sec=timeSeconds(row[4]);
      if(!Number.isFinite(sec)) continue;
      cumulative.set(row[2],(cumulative.get(row[2])||0)+sec);
    }
    const competitive=rows
      .filter(r=>r[0]!=='参考'&&Number.isFinite(cumulative.get(r[2])))
      .map(r=>[r[2],cumulative.get(r[2])])
      .sort((a,b)=>a[1]-b[1]);
    const rankMap=new Map();
    let rank=0,prev=null;
    competitive.forEach(([team,total],i)=>{
      if(prev===null||total!==prev) rank=i+1;
      rankMap.set(team,rank); prev=total;
    });
    for(const row of rows) row[1]=row[0]==='参考'?'参考':(rankMap.get(row[2])??'—');
  }
}

const db={};
const overallDb={};
for(const [yearStr,tn] of Object.entries(meets)){
  const year=Number(yearStr); db[year]={};

  const overallUrl=`https://www.hakone-ekiden.jp/record/record02.php?tn=${tn}`;
  console.log(`fetch ${year} 総合成績`);
  const overallRes=await fetch(overallUrl,{headers:{'user-agent':'Hakone2027StaticDBBuilder/3.0'}});
  if(!overallRes.ok) throw new Error(`${overallUrl} -> ${overallRes.status}`);
  const overallRows=parseOverallPage(await overallRes.text());
  if(overallRows.length<10) throw new Error(`${year} overall parsed only ${overallRows.length} rows`);
  overallDb[year]={edition:year-1924,status:'開催',results:overallRows};
  await new Promise(r=>setTimeout(r,100));

  for(let section=1;section<=10;section++){
    const url=`https://www.hakone-ekiden.jp/record/record04.php?sec=${section}&tn=${tn}`;
    console.log(`fetch ${year} ${section}区`);
    const res=await fetch(url,{headers:{'user-agent':'Hakone2027StaticDBBuilder/3.0'}});
    if(!res.ok) throw new Error(`${url} -> ${res.status}`);
    const rows=parsePage(await res.text());
    if(rows.length<10) throw new Error(`${year} ${section}区 parsed only ${rows.length} rows`);
    db[year][section]=rows;
    await new Promise(r=>setTimeout(r,100));
  }
  applyPassingRanks(db[year]);
}

const out=`// AUTO-GENERATED from 東京箱根間往復大学駅伝競走 公式「過去の記録」\n// 2007-2026 / Generated: ${new Date().toISOString()}\n// section row = [区間順位, 通過順位, 大学, 選手, 区間タイム]\nwindow.hakonePhase2StaticDB = ${JSON.stringify(db)};\n// 総合成績は公式「大会詳細」の総合順位・総合記録を直接使用\nwindow.hakoneOfficialOverallDB = ${JSON.stringify(overallDb)};\n`;
await fs.writeFile('hakone2027-site 3/hakone-phase2-static-db.js',out,'utf8');
console.log('wrote hakone2027-site 3/hakone-phase2-static-db.js');