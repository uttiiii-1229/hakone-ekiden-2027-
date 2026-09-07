import fs from 'node:fs';

const dbText=fs.readFileSync('hakone2027-site 3/hakone-phase2-static-db.js','utf8');
const pbText=fs.readFileSync('hakone2027-site 3/tokyo-international-pb-correction-20260907.js','utf8');
const normText=fs.readFileSync('hakone2027-site 3/foreign-name-normalizer.js','utf8');

const marker='window.hakonePhase2StaticDB = ';
const start=dbText.indexOf(marker);
if(start<0) throw new Error('Hakone DB marker not found');
const rest=dbText.slice(start+marker.length);
const end=rest.indexOf(';\n');
if(end<0) throw new Error('Hakone DB terminator not found');
const db=JSON.parse(rest.slice(0,end));

const etiriAliases=['エティーリ','Ｒ.エティーリ','R.エティーリ','Ｒ・エティーリ','R・エティーリ','リチャード・エティーリ','リチャード エティーリ','RICHARD Etir','Richard Etir','Richard Etiri'];
const compact=s=>String(s||'').normalize('NFKC').replace(/[\s　・.．]/g,'').toLowerCase();
const aliasSet=new Set(etiriAliases.map(compact));
const isEtiri=name=>aliasSet.has(compact(name));

const history=[];
for(const [year,sections] of Object.entries(db)){
  for(let section=1;section<=10;section++){
    for(const row of sections?.[section]||[]){
      if(row?.[2]==='東京国際大学' && isEtiri(row?.[3])){
        history.push({year:Number(year),section,rank:row[0],time:row[4],name:row[3]});
      }
    }
  }
}

function requireRun(year,section,rank,time){
  const hit=history.find(r=>r.year===year&&r.section===section);
  if(!hit) throw new Error(`Etiri Hakone ${year} ${section}区 is missing`);
  if(Number(hit.rank)!==rank || hit.time!==time){
    throw new Error(`Etiri Hakone ${year} mismatch: got rank=${hit.rank}, time=${hit.time}; expected rank=${rank}, time=${time}`);
  }
}

requireRun(2025,2,1,'1:05:31');
requireRun(2026,2,7,'1:06:14');

if(!pbText.includes("'リチャード エティーリ'")){
  throw new Error('Current PB DB is not keyed by canonical Etiri name');
}
for(const alias of ['"エティーリ":"リチャード エティーリ"','"RICHARD Etir":"リチャード エティーリ"','"リチャード・エティーリ":"リチャード エティーリ"']){
  if(!normText.includes(alias)) throw new Error(`Foreign-name registry missing alias: ${alias}`);
}

console.log('Athlete identity link validation passed.');
console.log('Etiri official Hakone history:',history);
