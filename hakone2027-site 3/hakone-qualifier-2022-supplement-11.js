// Historical supplement: 2022 (第99回) 箱根駅伝予選会 individual ranks 226-250
// Primary source: 箱根駅伝公式 / 関東学生陸上競技連盟 記録表.
// Existing confirmed values are never overwritten.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB={years:{}};
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years={};
  if (!window.hakoneQualifierDB.years['2022']) window.hakoneQualifierDB.years['2022']={year:2022,eventYear:2022,hakoneEdition:99,teams:[],individuals:[]};
  const y=window.hakoneQualifierDB.years['2022']; if(!Array.isArray(y.individuals))y.individuals=[];
  const norm=v=>String(v??'').normalize('NFKC').replace(/\s+/g,'').replace(/[髙高]/g,'高').replace(/[﨑崎]/g,'崎').replace(/[・･]/g,'');
  const has=v=>v!==undefined&&v!==null&&String(v).trim()!=='';
  const rows=[
    {rank:226,name:'上本 青空',team:'上武大学',time:'1:06:25'},
    {rank:227,name:'大谷 健斗',team:'芝浦工業大学',time:'1:06:26'},
    {rank:228,name:'吉岡 拓哉',team:'専修大学',time:'1:06:27'},
    {rank:229,name:'長谷川 嵩汰',team:'筑波大学',time:'1:06:28'},
    {rank:230,name:'山口 祐司',team:'麗澤大学',time:'1:06:29'},
    {rank:231,name:'松川 雅虎',team:'芝浦工業大学',time:'1:06:30'},
    {rank:232,name:'竹前 星汰',team:'湘南工科大学',time:'1:06:30'},
    {rank:233,name:'山本 航己',team:'関東学院大学',time:'1:06:30'},
    {rank:234,name:'新山 舜心',team:'駿河台大学',time:'1:06:31'},
    {rank:235,name:'吉田 海渡',team:'筑波大学',time:'1:06:32'},
    {rank:236,name:'湯野川 創',team:'東海大学',time:'1:06:32'},
    {rank:237,name:'中原 胡太郎',team:'亜細亜大学',time:'1:06:34'},
    {rank:238,name:'坂口 歩',team:'亜細亜大学',time:'1:06:34'},
    {rank:239,name:'松本 開渡',team:'麗澤大学',time:'1:06:34'},
    {rank:240,name:'大泉 真尋',team:'神奈川大学',time:'1:06:35'},
    {rank:241,name:'三山 翔太',team:'日本大学',time:'1:06:36'},
    {rank:242,name:'武下 孝輔',team:'桜美林大学',time:'1:06:39'},
    {rank:243,name:'益子 翔太郎',team:'東京経済大学',time:'1:06:40'},
    {rank:244,name:'江原 守平',team:'日本薬科大学',time:'1:06:41'},
    {rank:245,name:'堀田 晟礼',team:'中央学院大学',time:'1:06:43'},
    {rank:246,name:'盛重 完英',team:'桜美林大学',time:'1:06:43'},
    {rank:247,name:'東 佑飛',team:'清和大学',time:'1:06:45'},
    {rank:248,name:'菅原 昇真',team:'東京農業大学',time:'1:06:45'},
    {rank:249,name:'中田 侑希',team:'城西大学',time:'1:06:46'},
    {rank:250,name:'工藤 郁也',team:'麗澤大学',time:'1:06:46'}
  ];
  for(const row of rows){const f=y.individuals.find(x=>Number(x.rank)===row.rank||(norm(x.name)===norm(row.name)&&norm(x.team)===norm(row.team)));if(!f)y.individuals.push(row);else for(const k of ['rank','name','team','time','grade'])if(!has(f[k])&&has(row[k]))f[k]=row[k];}
  y.individuals.sort((a,b)=>(Number(a.rank)||9999)-(Number(b.rank)||9999));
  if(!Array.isArray(y.supplementalSources))y.supplementalSources=[];
  const src='https://www.hakone-ekiden.jp/_assets/2022/4db97c19ab23303c7b5bb45ce022f554e0052804.pdf';if(!y.supplementalSources.includes(src))y.supplementalSources.push(src);
})();