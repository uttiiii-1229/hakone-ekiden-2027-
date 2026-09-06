import fs from 'node:fs/promises';
import path from 'node:path';
import * as cheerio from 'cheerio';

const outPath=path.join(process.cwd(),'hakone2027-site 3','hakone-qualifier-db.js');
const years=Array.from({length:26},(_,i)=>2000+i);
const db={generatedAt:new Date().toISOString(),years:{}};

const norm=s=>String(s||'').normalize('NFKC').replace(/\s+/g,' ').trim();
async function fetchText(url){
  let last;
  for(let i=0;i<3;i++){
    try{
      const r=await fetch(url,{headers:{'user-agent':'Mozilla/5.0 (compatible; UniversityEkidenDatabase/1.0)'}});
      if(!r.ok) throw new Error(String(r.status));
      return await r.text();
    }catch(e){last=e;await new Promise(r=>setTimeout(r,1000*(i+1)));}
  }
  throw last;
}
function parseYear(html,year){
  const $=cheerio.load(html);
  const individuals=[],teams=[];
  $('table').each((_,table)=>{
    const rows=$(table).find('tr').toArray().map(tr=>$(tr).find('th,td').toArray().map(td=>norm($(td).text())));
    if(!rows.length)return;
    const head=rows[0].join('|');
    if(/選手名|氏名/.test(head)&&/所属/.test(head)&&/タイム|記録/.test(head)){
      rows.slice(1).forEach(c=>{
        if(c.length<4)return;
        const rank=c[0],time=c[1],name=c[2],grade=c[3],team=c[4]||'';
        if(!/^\d+$/.test(rank)||!name||!team)return;
        individuals.push({rank:Number(rank),time,name,grade,team});
      });
    }
    if(/チーム名|大学/.test(head)&&/順位/.test(head)&&/記録|タイム/.test(head)&&!/選手名|氏名/.test(head)){
      rows.slice(1).forEach(c=>{
        if(c.length<3)return;
        const rank=c[0],time=c[1],team=c[2];
        if(!/^\d+$/.test(rank)||!team)return;
        teams.push({rank:Number(rank),time,team});
      });
    }
  });
  // Some archive pages render semantic tables differently; fall back to text rows.
  if(!teams.length){
    const text=norm($.root().text());
    const sec=text.split('チーム順位')[1]||'';
    const re=/(\d+)\s+(\d{1,2}:\d{2}:\d{2})\s+([^\d]+?大学|防衛大学校)/g;
    let m;while((m=re.exec(sec)))teams.push({rank:+m[1],time:m[2],team:norm(m[3])});
  }
  return {year,eventYear:year,hakoneEdition:year-1923,teams,individuals,source:`https://genkimanman.com/halfmarathon/hakoneyosen/hakoneyosen${year}.html`};
}

for(const year of years){
  const url=`https://genkimanman.com/halfmarathon/hakoneyosen/hakoneyosen${year}.html`;
  try{
    const html=await fetchText(url);
    const d=parseYear(html,year);
    if(d.teams.length||d.individuals.length) db.years[year]=d;
    console.log(year,d.teams.length,d.individuals.length);
  }catch(e){console.warn('skip',year,e.message)}
}
if(!Object.keys(db.years).length) process.exit(2);
const js='// Auto-generated historical Hakone qualifier database\nwindow.hakoneQualifierDB = '+JSON.stringify(db,null,2)+';\n';
await fs.writeFile(outPath,js,'utf8');
console.log('wrote',Object.keys(db.years).length,'years');
