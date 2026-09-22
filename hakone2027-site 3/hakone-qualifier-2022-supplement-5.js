// Historical supplement: 2022 (第99回) 箱根駅伝予選会 individual ranks 101-125
// Source: 箱根駅伝公式 / 関東学生陸上競技連盟 記録表. Existing confirmed values are never overwritten.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB={years:{}};
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years={};
  if (!window.hakoneQualifierDB.years['2022']) window.hakoneQualifierDB.years['2022']={year:2022,eventYear:2022,hakoneEdition:99,teams:[],individuals:[]};
  const y=window.hakoneQualifierDB.years['2022']; if(!Array.isArray(y.individuals))y.individuals=[];
  const norm=v=>String(v??'').normalize('NFKC').replace(/\s+/g,'').replace(/[髙高]/g,'高').replace(/[﨑崎]/g,'崎').replace(/[・･]/g,'');
  const has=v=>v!==undefined&&v!==null&&String(v).trim()!=='';
  const rows=[
[101,'宇留田 竜希','東海大学','1:04:43'],[102,'石部 夏希','山梨学院大学','1:04:43'],[103,'水谷 勇登','専修大学','1:04:43'],[104,'並木 寧音','東京農業大学','1:04:43'],[105,'加藤 大誠','明治大学','1:04:43'],[106,'川勝 悠雅','国士舘大学','1:04:44'],[107,'稲葉 勇介','桜美林大学','1:04:44'],[108,'山本 龍神','国士舘大学','1:04:45'],[109,'塚田 萌成','筑波大学','1:04:45'],[110,'西村 翔太','日本大学','1:04:45'],[111,'谷口 辰煕','大東文化大学','1:04:46'],[112,'平山 大雅','筑波大学','1:04:46'],[113,'國井 辰磨','筑波大学','1:04:46'],[114,'間瀬田 純平','早稲田大学','1:04:50'],[115,'吉岡 竜希','亜細亜大学','1:04:50'],[116,'西田 大智','国士舘大学','1:04:51'],[117,'山本 雷我','国士舘大学','1:04:51'],[118,'小山 優輝','東京経済大学','1:04:51'],[119,'成島 航己','専修大学','1:04:51'],[120,'石川 晃大','東京経済大学','1:04:52'],[121,'大谷 章紘','大東文化大学','1:04:54'],[122,'千代島 宗汰','専修大学','1:04:55'],[123,'安藤 風羽','日本大学','1:04:57'],[124,'小林 駿介','関東学院大学','1:04:57'],[125,'諸冨 湧','早稲田大学','1:04:58']
  ].map(([rank,name,team,time])=>({rank,name,team,time}));
  for(const row of rows){const f=y.individuals.find(x=>Number(x.rank)===row.rank||(norm(x.name)===norm(row.name)&&norm(x.team)===norm(row.team)));if(!f)y.individuals.push(row);else for(const k of ['rank','name','team','time'])if(!has(f[k])&&has(row[k]))f[k]=row[k];}
  y.individuals.sort((a,b)=>(Number(a.rank)||9999)-(Number(b.rank)||9999));
  if(!Array.isArray(y.supplementalSources))y.supplementalSources=[];
  const src='https://www.hakone-ekiden.jp/_assets/2022/9db7bc18070086e3f5837f9791b3993b83cc5a1d.pdf'; if(!y.supplementalSources.includes(src))y.supplementalSources.push(src);
  if(!document.querySelector('script[data-hakone-q-2022-s6]')){const s=document.createElement('script');s.src='hakone-qualifier-2022-supplement-6.js';s.dataset.hakoneQ2022S6='1';document.head.appendChild(s);}
})();