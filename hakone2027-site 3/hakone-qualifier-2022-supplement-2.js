// Historical supplement: 2022 (第99回) 箱根駅伝予選会 team standings
// Cross-checked against contemporary result archives; existing confirmed values are never overwritten.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  if (!window.hakoneQualifierDB.years['2022']) window.hakoneQualifierDB.years['2022'] = { year:2022,eventYear:2022,hakoneEdition:99,teams:[],individuals:[] };
  const y=window.hakoneQualifierDB.years['2022'];
  if(!Array.isArray(y.teams)) y.teams=[];
  const norm=v=>String(v??'').normalize('NFKC').replace(/\s+/g,'').replace(/[髙高]/g,'高').replace(/[﨑崎]/g,'崎').replace(/[・･]/g,'').replace(/大学$/,'大');
  const has=v=>v!==undefined&&v!==null&&String(v).trim()!=='';
  const rows=[
    [1,'大東文化大学','10:40:39'],[2,'明治大学','10:41:41'],[3,'城西大学','10:42:09'],[4,'早稲田大学','10:42:29'],[5,'日本体育大学','10:43:34'],[6,'立教大学','10:46:18'],[7,'山梨学院大学','10:46:55'],[8,'専修大学','10:46:56'],[9,'東海大学','10:47:03'],[10,'国士舘大学','10:48:55'],
    [11,'神奈川大学','10:49:29'],[12,'中央学院大学','10:51:25'],[13,'日本大学','10:52:02'],[14,'麗澤大学','10:52:40'],[15,'筑波大学','10:53:50'],[16,'日本薬科大学','10:55:00'],[17,'東京農業大学','10:55:01'],[18,'拓殖大学','10:55:44'],[19,'駿河台大学','10:56:07'],[20,'芝浦工業大学','10:59:27'],
    [21,'上武大学','11:02:29'],[22,'明治学院大学','11:02:49'],[23,'育英大学','11:03:36'],[24,'亜細亜大学','11:04:06'],[25,'関東学院大学','11:06:30'],[26,'慶應義塾大学','11:07:02'],[27,'桜美林大学','11:08:23'],[28,'東京経済大学','11:08:49'],[29,'平成国際大学','11:12:53'],[30,'流通経済大学','11:15:58'],
    [31,'立正大学','11:18:18'],[32,'武蔵野学院大学','11:24:54'],[33,'湘南工科大学','11:31:47'],[34,'東京大学大学院','11:35:18'],[35,'東京大学','11:50:04'],[36,'清和大学','11:58:36'],[37,'東京工業大学','12:04:04'],[38,'帝京平成大学','12:08:14'],[39,'東京理科大学','12:35:36'],[40,'高崎経済大学','12:38:08'],[41,'成蹊大学','12:41:49']
  ].map(([rank,team,time])=>({rank,team,time}));
  for(const row of rows){
    const found=y.teams.find(x=>Number(x.rank)===row.rank||norm(x.team||x.name)===norm(row.team));
    if(!found)y.teams.push(row); else { if(!has(found.rank))found.rank=row.rank; if(!has(found.team)&&!has(found.name))found.team=row.team; if(!has(found.time))found.time=row.time; }
  }
  y.teams.sort((a,b)=>(Number(a.rank)||9999)-(Number(b.rank)||9999));
  if(!Array.isArray(y.supplementalSources))y.supplementalSources=[];
  ['https://4years.asahi.com/article/14743195','https://chuo-ldt.net/2022/10/15/99hakoneyosen/'].forEach(src=>{if(!y.supplementalSources.includes(src))y.supplementalSources.push(src);});
  if(typeof document!=='undefined'&&!document.querySelector('script[data-hq-2022-s3]')){const s=document.createElement('script');s.src='hakone-qualifier-2022-supplement-3.js';s.dataset.hq2022S3='1';document.head.appendChild(s);}
})();