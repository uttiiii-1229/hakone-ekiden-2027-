// Historical supplement: 2022 (第99回) 箱根駅伝予選会 individual ranks 126-150
// Source: 箱根駅伝公式 / 関東学生陸上競技連盟 記録表. Existing confirmed values are never overwritten.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB={years:{}};
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years={};
  if (!window.hakoneQualifierDB.years['2022']) window.hakoneQualifierDB.years['2022']={year:2022,eventYear:2022,hakoneEdition:99,teams:[],individuals:[]};
  const y=window.hakoneQualifierDB.years['2022']; if(!Array.isArray(y.individuals))y.individuals=[];
  const norm=v=>String(v??'').normalize('NFKC').replace(/\s+/g,'').replace(/[髙高]/g,'高').replace(/[﨑崎]/g,'崎').replace(/[・･]/g,'');
  const has=v=>v!==undefined&&v!==null&&String(v).trim()!=='';
  const rows=[
[126,'中澤 星音','日本大学','1:04:58'],[127,'荻沼 直人','中央学院大学','1:05:00'],[128,'大沼 良太郎','城西大学','1:05:01'],[129,'桜井 優我','城西大学','1:05:03'],[130,'北村 光','早稲田大学','1:05:03'],[131,'小林 大祐','拓殖大学','1:05:05'],[132,'宮本 陽叶','神奈川大学','1:05:05'],[133,'奥田 祥弥','東京農業大学','1:05:06'],[134,'大澤 巧使','麗澤大学','1:05:07'],[135,'神尾 祐樹','芝浦工業大学','1:05:07'],[136,'小島 慎也','中央学院大学','1:05:09'],[137,'海村 蓮','上武大学','1:05:10'],[138,'分須 尊紀','日本体育大学','1:05:10'],[139,'久保出 雄太','城西大学','1:05:10'],[140,'西尾 元','一橋大学','1:05:11'],[141,'木山 凌','大東文化大学','1:05:12'],[142,'北田 大起','東京農業大学','1:05:13'],[143,'山本 羅生','立教大学','1:05:14'],[144,'山田 基貴','神奈川大学','1:05:15'],[145,'圓谷 吏生','東京農業大学','1:05:16'],[146,'竹割 真','東海大学','1:05:16'],[147,'賀来 葵伊','駿河台大学','1:05:18'],[148,'尾方 馨斗','神奈川大学','1:05:20'],[149,'廣瀬 啓伍','麗澤大学','1:05:20'],[150,'古川 大翔','亜細亜大学','1:05:20']
  ].map(([rank,name,team,time])=>({rank,name,team,time}));
  for(const row of rows){const f=y.individuals.find(x=>Number(x.rank)===row.rank||(norm(x.name)===norm(row.name)&&norm(x.team)===norm(row.team)));if(!f)y.individuals.push(row);else for(const k of ['rank','name','team','time'])if(!has(f[k])&&has(row[k]))f[k]=row[k];}
  y.individuals.sort((a,b)=>(Number(a.rank)||9999)-(Number(b.rank)||9999));
  if(!Array.isArray(y.supplementalSources))y.supplementalSources=[];
  const src='https://www.hakone-ekiden.jp/_assets/2022/9db7bc18070086e3f5837f9791b3993b83cc5a1d.pdf'; if(!y.supplementalSources.includes(src))y.supplementalSources.push(src);
  if(!document.querySelector('script[data-hakone-q-2022-s7]')){const s=document.createElement('script');s.src='hakone-qualifier-2022-supplement-7.js';s.dataset.hakoneQ2022S7='1';document.head.appendChild(s);}
})();