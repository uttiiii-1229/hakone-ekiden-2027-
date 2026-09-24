// Historical supplement: 2022 (第99回) 箱根駅伝予選会 individual ranks 301-325
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
    {rank:301,name:'前原 裕磨',team:'慶應義塾大学',time:'1:07:29'},
    {rank:302,name:'中原 優人',team:'神奈川大学',time:'1:07:29'},
    {rank:303,name:'杉本 翔',team:'流通経済大学',time:'1:07:29'},
    {rank:304,name:'下津 開生',team:'東京経済大学',time:'1:07:30'},
    {rank:305,name:'鞍野 陸人',team:'中央学院大学',time:'1:07:30'},
    {rank:306,name:'田口 翔太',team:'慶應義塾大学',time:'1:07:32'},
    {rank:307,name:'藤川 雅之',team:'育英大学',time:'1:07:33'},
    {rank:308,name:'松江 剛琉',team:'湘南工科大学',time:'1:07:40'},
    {rank:309,name:'広井 隆寿',team:'明治学院大学',time:'1:07:44'},
    {rank:310,name:'河合 紀舟',team:'育英大学',time:'1:07:44'},
    {rank:311,name:'土器屋 快都',team:'山梨学院大学',time:'1:07:45'},
    {rank:312,name:'西谷 陸斗',team:'流通経済大学',time:'1:07:46'},
    {rank:313,name:'置田 晴',team:'亜細亜大学',time:'1:07:47'},
    {rank:314,name:'奥田 歩凪',team:'育英大学',time:'1:07:48'},
    {rank:315,name:'田部 智暉',team:'桜美林大学',time:'1:07:48'},
    {rank:316,name:'東 叶夢',team:'慶應義塾大学',time:'1:07:51'},
    {rank:317,name:'上原 大和',team:'関東学院大学',time:'1:07:51'},
    {rank:318,name:'森田 一希',team:'流通経済大学',time:'1:07:52'},
    {rank:319,name:'石川 景次郎',team:'拓殖大学',time:'1:07:53'},
    {rank:320,name:'門田 雄誠',team:'亜細亜大学',time:'1:07:55'},
    {rank:321,name:'後藤 亮介',team:'東京経済大学',time:'1:07:57'},
    {rank:322,name:'宮田 謙太朗',team:'育英大学',time:'1:07:58'},
    {rank:323,name:'髙見 智志',team:'明治学院大学',time:'1:07:58'},
    {rank:324,name:'鳥塚 健太',team:'慶應義塾大学',time:'1:07:59'},
    {rank:325,name:'山城 弘弐',team:'専修大学',time:'1:08:00'}
  ];
  for(const row of rows){const f=y.individuals.find(x=>Number(x.rank)===row.rank||(norm(x.name)===norm(row.name)&&norm(x.team)===norm(row.team)));if(!f)y.individuals.push(row);else for(const k of ['rank','name','team','time','grade'])if(!has(f[k])&&has(row[k]))f[k]=row[k];}
  y.individuals.sort((a,b)=>(Number(a.rank)||9999)-(Number(b.rank)||9999));
  if(!Array.isArray(y.supplementalSources))y.supplementalSources=[];
  const src='https://www.hakone-ekiden.jp/_assets/2022/4db97c19ab23303c7b5bb45ce022f554e0052804.pdf';if(!y.supplementalSources.includes(src))y.supplementalSources.push(src);
  if(!document.querySelector('script[data-hakone-q-2022-s15]')){const s=document.createElement('script');s.src='hakone-qualifier-2022-supplement-15.js';s.dataset.hakoneQ2022S15='1';document.head.appendChild(s);}
})();