// Historical supplement: 2022 (第99回) 箱根駅伝予選会 individual ranks 176-177
// Sources: 第99回予選会 result archive / university-team result archive. Existing confirmed values are never overwritten.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB={years:{}};
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years={};
  if (!window.hakoneQualifierDB.years['2022']) window.hakoneQualifierDB.years['2022']={year:2022,eventYear:2022,hakoneEdition:99,teams:[],individuals:[]};
  const y=window.hakoneQualifierDB.years['2022']; if(!Array.isArray(y.individuals))y.individuals=[];
  const norm=v=>String(v??'').normalize('NFKC').replace(/\s+/g,'').replace(/[髙高]/g,'高').replace(/[﨑崎]/g,'崎').replace(/[・･]/g,'');
  const has=v=>v!==undefined&&v!==null&&String(v).trim()!=='';
  const rows=[
    {rank:176,name:'大仲 竜平',team:'日本大学',time:'1:05:42',grade:1},
    {rank:177,name:'内田 賢利',team:'立教大学',time:'1:05:42',grade:3}
  ];
  for(const row of rows){const f=y.individuals.find(x=>Number(x.rank)===row.rank||(norm(x.name)===norm(row.name)&&norm(x.team)===norm(row.team)));if(!f)y.individuals.push(row);else for(const k of ['rank','name','team','time','grade'])if(!has(f[k])&&has(row[k]))f[k]=row[k];}
  y.individuals.sort((a,b)=>(Number(a.rank)||9999)-(Number(b.rank)||9999));
  if(!Array.isArray(y.supplementalSources))y.supplementalSources=[];
  for(const src of ['https://hakonankit-fd.com/article/post-19988.html','https://gakusei-ld-kansoku.blog.jp/archives/32342412.html'])if(!y.supplementalSources.includes(src))y.supplementalSources.push(src);
})();