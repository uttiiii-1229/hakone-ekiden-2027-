// Historical supplement: 2022 (第99回) 箱根駅伝予選会 individual ranks 326-350
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
    {rank:326,name:'白石 翔馬',team:'立正大学',time:'1:08:00',grade:'1'},
    {rank:327,name:'志村 紘佑',team:'桜美林大学',time:'1:08:02'},
    {rank:328,name:'福本 陽樹',team:'武蔵野学院大学',time:'1:08:04',grade:'2'},
    {rank:329,name:'安倍 立矩',team:'慶應義塾大学',time:'1:08:04'},
    {rank:330,name:'森下 翔太',team:'明治大学',time:'1:08:06'},
    {rank:331,name:'高島 侑翔',team:'東京農業大学',time:'1:08:07'},
    {rank:332,name:'瀬川 莉玖',team:'東京大学',time:'1:08:13',grade:'4'},
    {rank:333,name:'青﨑 僚雅',team:'関東学院大学',time:'1:08:14'},
    {rank:334,name:'熊澤 優良',team:'立正大学',time:'1:08:17',grade:'4'},
    {rank:335,name:'宮川 虎太朗',team:'拓殖大学',time:'1:08:21'},
    {rank:336,name:'三田 洸',team:'立正大学',time:'1:08:22',grade:'3'},
    {rank:337,name:'藤原 潤乃佑',team:'筑波大学',time:'1:08:23'},
    {rank:338,name:'原田 大希',team:'拓殖大学',time:'1:08:25'},
    {rank:339,name:'源河 開偉',team:'関東学院大学',time:'1:08:26'},
    {rank:340,name:'富永 恭平',team:'桜美林大学',time:'1:08:27'},
    {rank:341,name:'大沼 亨尭',team:'上武大学',time:'1:08:27'},
    {rank:342,name:'鎌田 歩夢',team:'流通経済大学',time:'1:08:30'},
    {rank:343,name:'伊藤 陸歩',team:'平成国際大学',time:'1:08:30'},
    {rank:344,name:'佐藤 俊介',team:'流通経済大学',time:'1:08:31'},
    {rank:345,name:'秋吉 拓真',team:'東京大学',time:'1:08:32',grade:'1'},
    {rank:346,name:'ﾑｿﾆ･ｼﾞｮｰ･ｷｱﾘｴ',team:'立正大学',time:'1:08:32',grade:'1'},
    {rank:347,name:'小山 洋生',team:'筑波大学',time:'1:08:35'},
    {rank:348,name:'瀬底 正樹',team:'武蔵野学院大学',time:'1:08:35',grade:'2'},
    {rank:349,name:'島津 謙介',team:'東京経済大学',time:'1:08:36'},
    {rank:350,name:'奥谷 研祐',team:'湘南工科大学',time:'1:08:39',grade:'4'}
  ];
  for(const row of rows){const f=y.individuals.find(x=>Number(x.rank)===row.rank||(norm(x.name)===norm(row.name)&&norm(x.team)===norm(row.team)));if(!f)y.individuals.push(row);else for(const k of ['rank','name','team','time','grade'])if(!has(f[k])&&has(row[k]))f[k]=row[k];}
  y.individuals.sort((a,b)=>(Number(a.rank)||9999)-(Number(b.rank)||9999));
  if(!Array.isArray(y.supplementalSources))y.supplementalSources=[];
  const src='https://www.hakone-ekiden.jp/_assets/2022/4db97c19ab23303c7b5bb45ce022f554e0052804.pdf';if(!y.supplementalSources.includes(src))y.supplementalSources.push(src);
})();