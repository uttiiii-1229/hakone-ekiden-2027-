// Historical supplement: 2022 (第99回) 箱根駅伝予選会 individual ranks 151-175
// Source: 箱根駅伝公式 / 関東学生陸上競技連盟 記録表. Existing confirmed values are never overwritten.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB={years:{}};
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years={};
  if (!window.hakoneQualifierDB.years['2022']) window.hakoneQualifierDB.years['2022']={year:2022,eventYear:2022,hakoneEdition:99,teams:[],individuals:[]};
  const y=window.hakoneQualifierDB.years['2022']; if(!Array.isArray(y.individuals))y.individuals=[];
  const norm=v=>String(v??'').normalize('NFKC').replace(/\s+/g,'').replace(/[髙高]/g,'高').replace(/[﨑崎]/g,'崎').replace(/[・･]/g,'');
  const has=v=>v!==undefined&&v!==null&&String(v).trim()!=='';
  const rows=[
[151,'安田 隼人','明治学院大学','1:05:21'],[152,'吉屋 佑晟','立教大学','1:05:22'],[153,'西川 千青','大東文化大学','1:05:22'],[154,'鈴木 祐太','明治大学','1:05:23'],[155,'白川 大地','桜美林大学','1:05:23'],[156,'工藤 翼','拓殖大学','1:05:25'],[157,'横尾 皓','芝浦工業大学','1:05:26'],[158,'櫻井 悠人','明治学院大学','1:05:26'],[159,'今野 純','麗澤大学','1:05:28'],[160,'染谷 雄輝','育英大学','1:05:29'],[161,'金澤 有真','東海大学','1:05:31'],[162,'室井 慶太','芝浦工業大学','1:05:31'],[163,'渡辺 大喜','国士舘大学','1:05:32'],[164,'木實 優斗','立正大学','1:05:35'],[165,'土井 拓実','日本大学','1:05:35'],[166,'吉村 陸','拓殖大学','1:05:35'],[167,'松浦 凜太郎','日本体育大学','1:05:37'],[168,'飯塚 達也','中央学院大学','1:05:38'],[169,'下尾 悠真','日本大学','1:05:38'],[170,'江口 清洋','拓殖大学','1:05:39'],[171,'佐藤 颯','亜細亜大学','1:05:39'],[172,'出仙 龍之介','駿河台大学','1:05:39'],[173,'粟江 倫太郎','専修大学','1:05:41'],[174,'杉 彩文海','明治大学','1:05:41'],[175,'大西 陸','山梨学院大学','1:05:41']
  ].map(([rank,name,team,time])=>({rank,name,team,time}));
  for(const row of rows){const f=y.individuals.find(x=>Number(x.rank)===row.rank||(norm(x.name)===norm(row.name)&&norm(x.team)===norm(row.team)));if(!f)y.individuals.push(row);else for(const k of ['rank','name','team','time'])if(!has(f[k])&&has(row[k]))f[k]=row[k];}
  y.individuals.sort((a,b)=>(Number(a.rank)||9999)-(Number(b.rank)||9999));
  if(!Array.isArray(y.supplementalSources))y.supplementalSources=[];
  const src='https://www.hakone-ekiden.jp/_assets/2022/9db7bc18070086e3f5837f9791b3993b83cc5a1d.pdf'; if(!y.supplementalSources.includes(src))y.supplementalSources.push(src);
})();