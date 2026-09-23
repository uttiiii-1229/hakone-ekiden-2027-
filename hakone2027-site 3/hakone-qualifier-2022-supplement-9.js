// Historical supplement: 2022 (第99回) 箱根駅伝予選会 individual ranks 178-200
// Primary source: 箱根駅伝公式 / 関東学生陸上競技連盟 記録表. Grade 178 cross-checked with 日本薬科大学公式.
// Existing confirmed values are never overwritten.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB={years:{}};
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years={};
  if (!window.hakoneQualifierDB.years['2022']) window.hakoneQualifierDB.years['2022']={year:2022,eventYear:2022,hakoneEdition:99,teams:[],individuals:[]};
  const y=window.hakoneQualifierDB.years['2022']; if(!Array.isArray(y.individuals))y.individuals=[];
  const norm=v=>String(v??'').normalize('NFKC').replace(/\s+/g,'').replace(/[髙高]/g,'高').replace(/[﨑崎]/g,'崎').replace(/[・･]/g,'');
  const has=v=>v!==undefined&&v!==null&&String(v).trim()!=='';
  const rows=[
    {rank:178,name:'谷口 蓮',team:'日本薬科大学',time:'1:05:43',grade:4},
    {rank:179,name:'近田 陽路',team:'中央学院大学',time:'1:05:43'},
    {rank:180,name:'入田 優希',team:'東海大学',time:'1:05:44'},
    {rank:181,name:'富永 匠海',team:'拓殖大学',time:'1:05:44'},
    {rank:182,name:'冨永 裕憂',team:'専修大学',time:'1:05:44'},
    {rank:183,name:'元村 航大',team:'育英大学',time:'1:05:44'},
    {rank:184,name:'藤井 正斗',team:'城西大学',time:'1:05:45'},
    {rank:185,name:'忠内 侑士',team:'立教大学',time:'1:05:46'},
    {rank:186,name:'白石 大以夢',team:'日本薬科大学',time:'1:05:47'},
    {rank:187,name:'鈴木 健太',team:'関東学院大学',time:'1:05:48'},
    {rank:188,name:'工藤 巧夢',team:'中央学院大学',time:'1:05:49'},
    {rank:189,name:'小林 政澄',team:'神奈川大学',time:'1:05:51'},
    {rank:190,name:'箱田 優馬',team:'明治学院大学',time:'1:05:51'},
    {rank:191,name:'西川 優太',team:'立正大学',time:'1:05:55'},
    {rank:192,name:'関本 敬太',team:'上武大学',time:'1:05:57'},
    {rank:193,name:'本田 大和',team:'東京経済大学',time:'1:05:57'},
    {rank:194,name:'森田 剛史',team:'慶應義塾大学',time:'1:05:58'},
    {rank:195,name:'大塚 稜介',team:'東京農業大学',time:'1:05:58'},
    {rank:196,name:'杉本 将太',team:'東海大学',time:'1:05:59'},
    {rank:197,name:'篠原 楓',team:'山梨学院大学',time:'1:05:59'},
    {rank:198,name:'村田 悠樹',team:'東京経済大学',time:'1:06:00'},
    {rank:199,name:'榎本 正樹',team:'日本薬科大学',time:'1:06:00'},
    {rank:200,name:'鈴木 伸弥',team:'国士舘大学',time:'1:06:00'}
  ];
  for(const row of rows){const f=y.individuals.find(x=>Number(x.rank)===row.rank||(norm(x.name)===norm(row.name)&&norm(x.team)===norm(row.team)));if(!f)y.individuals.push(row);else for(const k of ['rank','name','team','time','grade'])if(!has(f[k])&&has(row[k]))f[k]=row[k];}
  y.individuals.sort((a,b)=>(Number(a.rank)||9999)-(Number(b.rank)||9999));
  if(!Array.isArray(y.supplementalSources))y.supplementalSources=[];
  for(const src of ['https://www.hakone-ekiden.jp/_assets/2022/4db97c19ab23303c7b5bb45ce022f554e0052804.pdf','https://www.nichiyaku.ac.jp/trackclub/news/18592/'])if(!y.supplementalSources.includes(src))y.supplementalSources.push(src);
  if(!document.querySelector('script[data-hakone-q-2022-s10]')){const s=document.createElement('script');s.src='hakone-qualifier-2022-supplement-10.js';s.dataset.hakoneQ2022S10='1';document.head.appendChild(s);}
})();