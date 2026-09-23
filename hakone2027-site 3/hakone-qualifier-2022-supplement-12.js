// Historical supplement: 2022 (第99回) 箱根駅伝予選会 individual ranks 251-275
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
    {rank:251,name:'今村 愁',team:'日本薬科大学',time:'1:06:46',grade:'1'},
    {rank:252,name:'倉田 蓮',team:'大東文化大学',time:'1:06:46'},
    {rank:253,name:'中川 裕斗',team:'流通経済大学',time:'1:06:46'},
    {rank:254,name:'銘苅 春史',team:'武蔵野学院大学',time:'1:06:47',grade:'2'},
    {rank:255,name:'栗原 光弘',team:'山梨学院大学',time:'1:06:47'},
    {rank:256,name:'濱田 祐知',team:'日本大学',time:'1:06:50'},
    {rank:257,name:'菖蒲 敦司',team:'早稲田大学',time:'1:06:52'},
    {rank:258,name:'丸山 翔太郎',team:'東京大学大学院',time:'1:06:52',grade:'M1'},
    {rank:259,name:'瀬川 翔誠',team:'国士舘大学',time:'1:06:52'},
    {rank:260,name:'高山 匠也',team:'東京農業大学',time:'1:06:53',grade:'2'},
    {rank:261,name:'尾形 拓海',team:'武蔵野学院大学',time:'1:06:53',grade:'3'},
    {rank:262,name:'山田 龍',team:'関東学院大学',time:'1:06:53'},
    {rank:263,name:'安田 陸人',team:'慶應義塾大学',time:'1:06:56'},
    {rank:264,name:'植松 孝太',team:'日本体育大学',time:'1:06:56'},
    {rank:265,name:'山田 蓮太',team:'亜細亜大学',time:'1:06:58'},
    {rank:266,name:'竹原 俊太郎',team:'明治学院大学',time:'1:06:59'},
    {rank:267,name:'丹井 遥斗',team:'上武大学',time:'1:07:00'},
    {rank:268,name:'西中 慈音',team:'平成国際大学',time:'1:07:01'},
    {rank:269,name:'森 いつき',team:'流通経済大学',time:'1:07:01'},
    {rank:270,name:'川上 勇士',team:'東海大学',time:'1:07:01'},
    {rank:271,name:'小泉 謙',team:'駿河台大学',time:'1:07:04',grade:'4'},
    {rank:272,name:'日向野 駿',team:'立正大学',time:'1:07:06',grade:'3'},
    {rank:273,name:'宇都木 秀太',team:'麗澤大学',time:'1:07:06'},
    {rank:274,name:'小玉 歩葵',team:'東京農業大学',time:'1:07:07'},
    {rank:275,name:'水谷 耀介',team:'育英大学',time:'1:07:07'}
  ];
  for(const row of rows){const f=y.individuals.find(x=>Number(x.rank)===row.rank||(norm(x.name)===norm(row.name)&&norm(x.team)===norm(row.team)));if(!f)y.individuals.push(row);else for(const k of ['rank','name','team','time','grade'])if(!has(f[k])&&has(row[k]))f[k]=row[k];}
  y.individuals.sort((a,b)=>(Number(a.rank)||9999)-(Number(b.rank)||9999));
  if(!Array.isArray(y.supplementalSources))y.supplementalSources=[];
  const src='https://www.hakone-ekiden.jp/_assets/2022/4db97c19ab23303c7b5bb45ce022f554e0052804.pdf';if(!y.supplementalSources.includes(src))y.supplementalSources.push(src);
  if(!document.querySelector('script[data-hakone-q-2022-s13]')){const s=document.createElement('script');s.src='hakone-qualifier-2022-supplement-13.js';s.dataset.hakoneQ2022S13='1';document.head.appendChild(s);}
})();