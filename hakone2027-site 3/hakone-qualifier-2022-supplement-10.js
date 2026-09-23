// Historical supplement: 2022 (第99回) 箱根駅伝予選会 individual ranks 201-225
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
    {rank:201,name:'前田 篤志',team:'中央学院大学',time:'1:06:01'},
    {rank:202,name:'服部 凱杏',team:'立教大学',time:'1:06:02'},
    {rank:203,name:'熊澤 諒哉',team:'湘南工科大学',time:'1:06:02'},
    {rank:204,name:'鈴木 玲央',team:'神奈川大学',time:'1:06:02'},
    {rank:205,name:'飯塚 歩',team:'明治学院大学',time:'1:06:03'},
    {rank:206,name:'森屋 源太',team:'関東学院大学',time:'1:06:04'},
    {rank:207,name:'伊東 大暉',team:'山梨学院大学',time:'1:06:04'},
    {rank:208,name:'外間 郁也',team:'亜細亜大学',time:'1:06:05'},
    {rank:209,name:'秋山 滉貴',team:'芝浦工業大学',time:'1:06:06'},
    {rank:210,name:'原田 洋輔',team:'東京農業大学',time:'1:06:06'},
    {rank:211,name:'島津 裕太',team:'山梨学院大学',time:'1:06:07'},
    {rank:212,name:'福井 大夢',team:'国士舘大学',time:'1:06:14'},
    {rank:213,name:'小江 幸人',team:'駿河台大学',time:'1:06:14'},
    {rank:214,name:'永井 竜二',team:'駿河台大学',time:'1:06:14'},
    {rank:215,name:'石口 大地',team:'神奈川大学',time:'1:06:15'},
    {rank:216,name:'吉村 颯斗',team:'東京農業大学',time:'1:06:15'},
    {rank:217,name:'安田 博登',team:'早稲田大学',time:'1:06:15'},
    {rank:218,name:'新井 今生人',team:'平成国際大学',time:'1:06:17'},
    {rank:219,name:'根岸 賢',team:'拓殖大学',time:'1:06:18'},
    {rank:220,name:'長井 隆星',team:'筑波大学',time:'1:06:18'},
    {rank:221,name:'小田 恭平',team:'大東文化大学',time:'1:06:20'},
    {rank:222,name:'矢板 慈生',team:'日本薬科大学',time:'1:06:20'},
    {rank:223,name:'白崎 真拓',team:'育英大学',time:'1:06:21'},
    {rank:224,name:'中西 勝輝',team:'亜細亜大学',time:'1:06:24'},
    {rank:225,name:'村木 謙太',team:'明治学院大学',time:'1:06:25'}
  ];
  for(const row of rows){const f=y.individuals.find(x=>Number(x.rank)===row.rank||(norm(x.name)===norm(row.name)&&norm(x.team)===norm(row.team)));if(!f)y.individuals.push(row);else for(const k of ['rank','name','team','time','grade'])if(!has(f[k])&&has(row[k]))f[k]=row[k];}
  y.individuals.sort((a,b)=>(Number(a.rank)||9999)-(Number(b.rank)||9999));
  if(!Array.isArray(y.supplementalSources))y.supplementalSources=[];
  const src='https://www.hakone-ekiden.jp/_assets/2022/4db97c19ab23303c7b5bb45ce022f554e0052804.pdf';if(!y.supplementalSources.includes(src))y.supplementalSources.push(src);
})();