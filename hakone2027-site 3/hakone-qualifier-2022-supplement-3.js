// Historical supplement: 2022 (第99回) 箱根駅伝予選会 individual ranks 1-50
// Source: 箱根駅伝公式 / 関東学生陸上競技連盟 記録表. Existing confirmed values are never overwritten.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB={years:{}};
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years={};
  if (!window.hakoneQualifierDB.years['2022']) window.hakoneQualifierDB.years['2022']={year:2022,eventYear:2022,hakoneEdition:99,teams:[],individuals:[]};
  const y=window.hakoneQualifierDB.years['2022']; if(!Array.isArray(y.individuals))y.individuals=[];
  const norm=v=>String(v??'').normalize('NFKC').replace(/\s+/g,'').replace(/[髙高]/g,'高').replace(/[﨑崎]/g,'崎').replace(/[・･]/g,'');
  const has=v=>v!==undefined&&v!==null&&String(v).trim()!=='';
  const rows=[
[1,'ワンジク・チャールズカマウ','武蔵野学院大学','1:00:58'],[2,'ジョセフ・ラジニ','拓殖大学','1:01:50'],[3,'ネルソン・マンデラ・ンビディ','桜美林大学','1:02:03'],[4,'ジェームス・ムトゥク','山梨学院大学','1:02:15'],[5,'ピーター・ワンジル','大東文化大学','1:02:16'],[6,'ヴィクター・キムタイ','城西大学','1:02:21'],[7,'ノア・キプリモ','日本薬科大学','1:02:29'],[8,'木村 暁仁','専修大学','1:02:32'],[9,'井川 龍人','早稲田大学','1:02:39'],[10,'富田 峻平','明治大学','1:02:39'],
[11,'児玉 真輝','明治大学','1:02:43'],[12,'高槻 芳照','東京農業大学','1:02:46'],[13,'鈴木 康也','麗澤大学','1:02:48'],[14,'有村 祐亮','神奈川大学','1:03:04'],[15,'福谷 颯太','筑波大学','1:03:05'],[16,'佐藤 航希','早稲田大学','1:03:05'],[17,'鈴木 創士','早稲田大学','1:03:07'],[18,'北村 惇生','山梨学院大学','1:03:07'],[19,'チャールズ・ドゥング','日本大学','1:03:09'],[20,'大野 陽人','大東文化大学','1:03:12'],
[21,'國安 広人','立教大学','1:03:13'],[22,'ピーター・カマウ','国士舘大学','1:03:14'],[23,'ダンカン・キサイサ','専修大学','1:03:14'],[24,'久保田 徹','大東文化大学','1:03:15'],[25,'デイビッド・シュンゲヤ・ネイヤイ','麗澤大学','1:03:15'],[26,'吉田 響','東海大学','1:03:18'],[27,'斎藤 将也','城西大学','1:03:18'],[28,'盛本 聖也','日本体育大学','1:03:21'],[29,'ステフィン・カマウ','平成国際大学','1:03:22'],[30,'田島 公太郎','慶應義塾大学','1:03:25'],
[31,'カマウ・パトリック','上武大学','1:03:27'],[32,'菊地 駿介','大東文化大学','1:03:27'],[33,'新田 颯','育英大学','1:03:28'],[34,'長谷川 瑠','流通経済大学','1:03:32'],[35,'中山 雄太','日本薬科大学','1:03:33'],[36,'橋本 章央','芝浦工業大学','1:03:37'],[37,'工藤 大和','麗澤大学','1:03:47'],[38,'清野 太成','駿河台大学','1:03:48'],[39,'伊藤 大志','早稲田大学','1:03:49'],[40,'若山 岳','日本大学','1:03:52'],
[41,'木山 達哉','山梨学院大学','1:03:53'],[42,'廣澤 優斗','日本体育大学','1:03:53'],[43,'入濵 輝大','大東文化大学','1:03:53'],[44,'山田 拓人','拓殖大学','1:03:54'],[45,'中山 凜斗','立教大学','1:03:54'],[46,'宇津野 篤','神奈川大学','1:03:56'],[47,'石原 翔太郎','東海大学','1:03:57'],[48,'町田 康誠','駿河台大学','1:04:00'],[49,'松崎 咲人','東海大学','1:04:01'],[50,'村上 航大','上武大学','1:04:02']
  ].map(([rank,name,team,time])=>({rank,name,team,time}));
  for(const row of rows){const f=y.individuals.find(x=>Number(x.rank)===row.rank||(norm(x.name)===norm(row.name)&&norm(x.team)===norm(row.team)));if(!f)y.individuals.push(row);else for(const k of ['rank','name','team','time'])if(!has(f[k])&&has(row[k]))f[k]=row[k];}
  y.individuals.sort((a,b)=>(Number(a.rank)||9999)-(Number(b.rank)||9999));
  if(!Array.isArray(y.supplementalSources))y.supplementalSources=[];
  const src='https://www.hakone-ekiden.jp/_assets/2022/9db7bc18070086e3f5837f9791b3993b83cc5a1d.pdf'; if(!y.supplementalSources.includes(src))y.supplementalSources.push(src);
  if(typeof document!=='undefined'&&!document.querySelector('script[data-hq-2022-s4]')){const s=document.createElement('script');s.src='hakone-qualifier-2022-supplement-4.js';s.dataset.hq2022S4='1';document.head.appendChild(s);}
})();