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
  "'佐藤 大和':['14:05.12','28:37.62','1:03:44']",
  "'夏見 虹郎':['14:15.75','28:29.82','1:04:17']",
  "'吉田 黎大':['14:15.16','29:09.64','1:04:08']"
]){
  if(!universityPbText.includes(expected)) throw new Error('NSSU 2026 current PB snapshot is stale: '+expected);
}
for(const graduate of ['平島 龍斗','田島 駿介','二村 昇太朗','山崎 丞']){
  if(universityPbText.includes("'"+graduate+"':")) throw new Error('Graduated NSSU athlete remains in current PB DB: '+graduate);
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

for(const active of ['天瀬 海斗','吉田 黎大','佐藤 大和','夏見 虹郎','宗像 琢馬']){
  if(!currentRosterText.includes(active)) throw new Error('NSSU active roster missing '+active);
}
for(const stale of ['平島 龍斗','田島 駿介','二村 昇太朗','山崎 丞','植松 孝太','富永 椋太']){
  if(currentRosterText.includes(stale)) throw new Error('NSSU graduate/stale athlete leaked into official roster '+stale);
}
for(const gradeCheck of [
  "['天瀬 海斗','4']","['吉田 黎大','4']","['佐藤 大和','3']","['夏見 虹郎','2']","['宗像 琢馬','1']"
]){
  if(!currentRosterText.includes(gradeCheck)) throw new Error('NSSU academic-year grade mismatch: '+gradeCheck);
}
if(!currentResolverText.includes('PB snapshots are enrichment only') ||
   !currentResolverText.includes('if(!isKnownCurrent') ||
   !currentResolverText.includes('authoritativeRoster') ||
   !currentResolverText.includes('Never overwrite an authoritative roster grade')){
  throw new Error('Current resolver can re-create athletes from stale PB data');
}
console.log('Authoritative current-roster filtering validation passed.');


const nssuSetCount=(universityPbText.match(/set\('日本体育大学'/g)||[]).length;
if(nssuSetCount!==1) throw new Error('NSSU display PB set must be defined exactly once; got '+nssuSetCount);
for(const graduate of ['平島 龍斗','田島 駿介','二村 昇太朗','山崎 丞']){
  if(currentRosterText.includes(graduate)) throw new Error('Academic-year regression: graduate in current roster '+graduate);
}
if(!currentRosterText.includes("season:2026")) throw new Error('Current roster metadata must declare academic season 2026');
console.log('Academic-year roster boundary validation passed.');

const universityPageText=fs.readFileSync('hakone2027-site 3/university-data-pages.js','utf8');
if(!universityViewText.includes('function gradeLabel(') || !universityPageText.includes('function gradeLabel(')){
  throw new Error('University athlete views must use safe gradeLabel rendering');
}
if(universityViewText.includes("'+r[1]+'年")){
  throw new Error('Unsafe unconditional grade suffix rendering remains in university directory');
}
if(!currentResolverText.includes('gradeCandidates') ||
   !currentResolverText.includes('rememberGrade') ||
   !currentResolverText.includes('normalizeGrade')){
  throw new Error('Current athlete resolver is missing grade backfill/normalization');
}
for(const expected of [
  "['天瀬 海斗','4']",
  "['佐藤 大和','3']",
  "['夏見 虹郎','2']",
  "['宗像 琢馬','1']"
]){
  if(!currentRosterText.includes(expected)) throw new Error('Authoritative NSSU grade missing: '+expected);
}
console.log('Current athlete grade display/backfill validation passed.');

const gradeDbText=fs.readFileSync('hakone2027-site 3/current-athlete-grade-db-2026.js','utf8');
if(!gradeDbText.includes('currentAthleteGrade2026') ||
   !gradeDbText.includes('official meet') ||
   !gradeDbText.includes('2026 official roster')){
  throw new Error('Dedicated 2026 athlete grade DB is missing required sources');
}
if(!resolverText.includes('currentAthleteGradeResolver2026')){
  throw new Error('Current PB resolver is not connected to the dedicated grade DB');
}
if(!indexText.includes('current-athlete-grade-db-2026.js')){
  throw new Error('Dedicated grade DB is not loaded by index.html');
}
for(const unsafe of ["'+r[1]+'年",'${r.grade}年','${r[3]}年']){
  if(universityViewText.includes(unsafe) || universityPageText.includes(unsafe)){
    throw new Error('Unsafe bare year rendering remains: '+unsafe);
  }
}
console.log('Dedicated athlete grade DB wiring validation passed.');
