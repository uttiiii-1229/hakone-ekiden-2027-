// Historical supplement: 2022 (第99回) 箱根駅伝予選会 individual ranks 276-300
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
    {rank:276,name:'丹野 滉太郎',team:'明治学院大学',time:'1:07:10'},
    {rank:277,name:'水口 翔太',team:'明治学院大学',time:'1:07:10'},
    {rank:278,name:'阿部 爽真',team:'上武大学',time:'1:07:12'},
    {rank:279,name:'福永 一聖',team:'日本薬科大学',time:'1:07:12'},
    {rank:280,name:'望月 武',team:'国士舘大学',time:'1:07:12'},
    {rank:281,name:'古澤 拓樹',team:'駿河台大学',time:'1:07:15'},
    {rank:282,name:'鎌田 虎太郎',team:'湘南工科大学',time:'1:07:15'},
    {rank:283,name:'黒澤 瑛紀',team:'慶應義塾大学',time:'1:07:17'},
    {rank:284,name:'野中 拓海',team:'関東学院大学',time:'1:07:20'},
    {rank:285,name:'村澤 佑磨',team:'清和大学',time:'1:07:20'},
    {rank:286,name:'水上 流輝亜',team:'麗澤大学',time:'1:07:20'},
    {rank:287,name:'古山 拓輝',team:'上武大学',time:'1:07:22'},
    {rank:288,name:'村松 丈',team:'東京経済大学',time:'1:07:23'},
    {rank:289,name:'山口 智規',team:'早稲田大学',time:'1:07:23'},
    {rank:290,name:'後藤 謙昌',team:'立教大学',time:'1:07:25'},
    {rank:291,name:'小林 将吾',team:'東京工業大学',time:'1:07:25'},
    {rank:292,name:'大道 隆之介',team:'駿河台大学',time:'1:07:26'},
    {rank:293,name:'山村 啓仁',team:'専修大学',time:'1:07:26'},
    {rank:294,name:'山内 亮威',team:'駿河台大学',time:'1:07:26'},
    {rank:295,name:'村重 亮達',team:'上武大学',time:'1:07:27'},
    {rank:296,name:'黒羽 俊輔',team:'平成国際大学',time:'1:07:27'},
    {rank:297,name:'立崎 哲大',team:'芝浦工業大学',time:'1:07:27'},
    {rank:298,name:'本多 健亮',team:'東京大学',time:'1:07:28'},
    {rank:299,name:'山本 樹',team:'立正大学',time:'1:07:28'},
    {rank:300,name:'穴澤 友崇',team:'平成国際大学',time:'1:07:29'}
  ];
  for(const row of rows){const f=y.individuals.find(x=>Number(x.rank)===row.rank||(norm(x.name)===norm(row.name)&&norm(x.team)===norm(row.team)));if(!f)y.individuals.push(row);else for(const k of ['rank','name','team','time','grade'])if(!has(f[k])&&has(row[k]))f[k]=row[k];}
  y.individuals.sort((a,b)=>(Number(a.rank)||9999)-(Number(b.rank)||9999));
  if(!Array.isArray(y.supplementalSources))y.supplementalSources=[];
  const src='https://www.hakone-ekiden.jp/_assets/2022/4db97c19ab23303c7b5bb45ce022f554e0052804.pdf';if(!y.supplementalSources.includes(src))y.supplementalSources.push(src);
})();