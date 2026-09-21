// Historical supplement: 2022 (第99回) 箱根駅伝予選会 individual ranks 51-100
// Source: 箱根駅伝公式 / 関東学生陸上競技連盟 記録表. Existing confirmed values are never overwritten.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB={years:{}};
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years={};
  if (!window.hakoneQualifierDB.years['2022']) window.hakoneQualifierDB.years['2022']={year:2022,eventYear:2022,hakoneEdition:99,teams:[],individuals:[]};
  const y=window.hakoneQualifierDB.years['2022']; if(!Array.isArray(y.individuals))y.individuals=[];
  const norm=v=>String(v??'').normalize('NFKC').replace(/\s+/g,'').replace(/[髙高]/g,'高').replace(/[﨑崎]/g,'崎').replace(/[・･]/g,'');
  const has=v=>v!==undefined&&v!==null&&String(v).trim()!=='';
  const rows=[
[51,'石塚 陽士','早稲田大学','1:04:02'],[52,'内山 壽頼','芝浦工業大学','1:04:03'],[53,'安藤 圭佑','立教大学','1:04:03'],[54,'ムサンガ・ゴッドフリー','駿河台大学','1:04:04'],[55,'林 虎大朗','立教大学','1:04:04'],[56,'小林 篤貴','神奈川大学','1:04:04'],[57,'綱島 辰弥','国士舘大学','1:04:04'],[58,'鈴木 天智','東海大学','1:04:05'],[59,'野村 颯斗','城西大学','1:04:05'],[60,'山崎 丞','日本体育大学','1:04:05'],
[61,'小島 拓','城西大学','1:04:05'],[62,'下條 乃將','明治大学','1:04:09'],[63,'皆川 和範','筑波大学','1:04:10'],[64,'髙瀨 桂','専修大学','1:04:10'],[65,'山本 唯翔','城西大学','1:04:13'],[66,'新谷 紘ノ介','明治大学','1:04:15'],[67,'漆畑 瑠人','明治大学','1:04:16'],[68,'吉田 礼志','中央学院大学','1:04:17'],[69,'関口 絢太','立教大学','1:04:19'],[70,'名村 樹哉','日本体育大学','1:04:20'],
[71,'西代 雄豪','大東文化大学','1:04:22'],[72,'諸星 颯大','育英大学','1:04:24'],[73,'大森 椋太','日本体育大学','1:04:26'],[74,'川田 啓仁','中央学院大学','1:04:26'],[75,'山中 秀真','城西大学','1:04:26'],[76,'髙田 尚暉','山梨学院大学','1:04:27'],[77,'内野 李彗','関東学院大学','1:04:27'],[78,'小澤 大輝','明治大学','1:04:27'],[79,'平林 樹','城西大学','1:04:27'],[80,'田中 慎梧','日本体育大学','1:04:29'],
[81,'佐藤 俊輔','東海大学','1:04:29'],[82,'室田 安寿','明治大学','1:04:29'],[83,'波多江 隆人','日本薬科大学','1:04:29'],[84,'佐藤 碧','平成国際大学','1:04:30'],[85,'貝川 裕亮','慶應義塾大学','1:04:31'],[86,'田島 駿介','日本体育大学','1:04:33']
  ].map(([rank,name,team,time])=>({rank,name,team,time}));
  for(const row of rows){const f=y.individuals.find(x=>Number(x.rank)===row.rank||(norm(x.name)===norm(row.name)&&norm(x.team)===norm(row.team)));if(!f)y.individuals.push(row);else for(const k of ['rank','name','team','time'])if(!has(f[k])&&has(row[k]))f[k]=row[k];}
  y.individuals.sort((a,b)=>(Number(a.rank)||9999)-(Number(b.rank)||9999));
  if(!Array.isArray(y.supplementalSources))y.supplementalSources=[];
  const src='https://www.hakone-ekiden.jp/_assets/2022/9db7bc18070086e3f5837f9791b3993b83cc5a1d.pdf'; if(!y.supplementalSources.includes(src))y.supplementalSources.push(src);
})();