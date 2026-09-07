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


const universityPbText=fs.readFileSync('hakone2027-site 3/university-pb-expansion-20260907.js','utf8');
const universityViewText=fs.readFileSync('hakone2027-site 3/university-expanded-directory.js','utf8');

for(const expected of [
  "'田島 駿介':['13:46.12','28:11.41','1:02:04']",
  "'平島 龍斗':['13:42.84','27:56.84','1:01:02']",
  "'二村 昇太朗':['13:56.57','28:31.64','1:03:58']",
  "'山崎 丞':['13:52.09','28:19.16','1:02:06']"
]){
  if(!universityPbText.includes(expected)) throw new Error('NSSU current PB snapshot is stale: '+expected);
}
if(!universityViewText.includes('window.currentAthletePbResolver?.currentRows')){
  throw new Error('University directory does not use the unified current PB resolver');
}
console.log('University current-PB priority validation passed.');


const officialPbText=fs.readFileSync('hakone2027-site 3/current-pb-official-overrides-20260907.js','utf8');
const remainingPbText=fs.readFileSync('hakone2027-site 3/university-pb-expansion-remaining-20260907.js','utf8');
const rosterText=fs.readFileSync('hakone2027-site 3/full-rosters-v2.js','utf8');
const indexText=fs.readFileSync('hakone2027-site 3/index.html','utf8');
const resolverText=fs.readFileSync('hakone2027-site 3/current-athlete-pb-resolver.js','utf8');

const hakone2026Teams=[
  '青山学院大学','國學院大學','順天堂大学','早稲田大学','中央大学','駒澤大学','城西大学','創価大学','帝京大学','日本大学',
  '中央学院大学','東海大学','神奈川大学','東洋大学','日本体育大学','東京国際大学','山梨学院大学','東京農業大学','大東文化大学','立教大学'
];
const allCurrentSourceText=[officialPbText,universityPbText,remainingPbText,rosterText].join('\n');
for(const team of hakone2026Teams){
  if(!allCurrentSourceText.includes(team)) throw new Error('Missing current-athlete source for '+team);
}
for(const expected of [
  "'前田 和摩':['13:46.71','27:21.52','1:01:42']",
  "'井坂 光':['14:11.59','28:50.80','1:03:45']",
  "'内田 温規':['14:00.09','29:30.98','1:02:13']"
]){
  if(!remainingPbText.includes(expected)) throw new Error('Tokyo University of Agriculture current PB is missing: '+expected);
}
const meetPos=indexText.indexOf('university-meet-results-auto.js');
const resolverPos=indexText.indexOf('current-athlete-pb-resolver.js');
const athletePos=indexText.indexOf('all-athlete-directory-v2.js');
if(!(meetPos>=0&&resolverPos>meetPos&&athletePos>resolverPos)){
  throw new Error('Current PB scripts are loaded in the wrong order');
}
if(!resolverText.includes('verified current PB')||!resolverText.includes('2026 official meet')){
  throw new Error('Current PB resolver is missing verified/meet merge logic');
}
console.log('All 20 Hakone 2026 teams have a current-athlete PB source.');


const currentRosterText=fs.readFileSync('hakone2027-site 3/current-roster-official-20260907.js','utf8');
const currentResolverText=fs.readFileSync('hakone2027-site 3/current-athlete-pb-resolver.js','utf8');

for(const active of ['本島 尚緒','田島 駿介','平島 龍斗','阿知和 優汰','藤原 大竜','今野 健太']){
  if(!currentRosterText.includes(active)) throw new Error('NSSU active roster missing '+active);
}
for(const stale of ['植松 孝太','住原 聡太','杉本 訓也','高村 比呂飛','富永 椋太','溝上 賢伸','分須 尊紀']){
  if(currentRosterText.includes(stale)) throw new Error('NSSU stale athlete leaked into official roster '+stale);
}
if(!currentResolverText.includes('PB snapshots are enrichment only') ||
   !currentResolverText.includes('if(!mayEnrich') ||
   !currentResolverText.includes('authoritativeRoster')){
  throw new Error('Current resolver can re-create athletes from stale PB data');
}
console.log('Authoritative current-roster filtering validation passed.');
