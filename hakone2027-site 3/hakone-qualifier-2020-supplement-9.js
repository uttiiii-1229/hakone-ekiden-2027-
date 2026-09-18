// 2020 (第97回) 箱根駅伝予選会 個人成績補完 285-306位
// Secondary result archive: https://hakonesaijo.sakura.ne.jp/97yosenkai-kojin.htm
// 284位は氏名文字化けのため保留（推測登録しない）。
(() => {
  const existing=window.hakoneQualifierDB?.years?.['2020']; if(!existing) return;
  if(!Array.isArray(existing.individuals)) existing.individuals=[];
  const rows=[
    [285,'1:05:34','脇山 隼斗','3','亜細亜大学'],[286,'1:05:36','塩田 匠','M2','東京工業大学大学院'],[287,'1:05:38','守谷 陸','3','東京経済大学'],[288,'1:05:38','兼次 祐希','4','亜細亜大学'],[289,'1:05:39','小林 陸大','4','日本大学'],[290,'1:05:40','稲留 涼斗','4','大東文化大学'],[291,'1:05:41','堀内 弘輝','4','駿河台大学'],[293,'1:05:42','大久保 友貴','3','帝京平成大学'],[294,'1:05:44','三代 和弥','3','国士舘大学'],[295,'1:05:44','時任 一輝','4','平成国際大学'],[296,'1:05:45','小池 彪','2','東京経済大学'],[297,'1:05:45','森屋 源太','2','関東学院大学'],[298,'1:05:47','平松 幸記','2','立正大学'],[299,'1:05:47','奈良 大寿','1','上智大学'],[300,'1:05:47','山田 直樹','4','日本薬科大学'],[301,'1:05:48','村田 悠樹','1','東京経済大学'],[302,'1:05:49','山形 祥貴','4','芝浦工業大学'],[303,'1:05:49','小笠原 大智','1','平成国際大学'],[304,'1:05:49','上原 大和','2','関東学院大学'],[305,'1:05:50','田中 龍之介','3','関東学院大学'],[306,'1:05:53','穴澤 友崇','2','平成国際大学']
  ].map(([rank,time,name,grade,team])=>({rank,time,name,grade,team}));
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　・]/g,'').replace(/髙/g,'高').replace(/﨑/g,'崎');
  const byKey=new Map(existing.individuals.map(x=>[`${x.rank}|${norm(x.name)}|${norm(x.team)}`,x]));
  rows.forEach(x=>{const key=`${x.rank}|${norm(x.name)}|${norm(x.team)}`;const old=byKey.get(key);if(!old){existing.individuals.push(x);byKey.set(key,x);return;}['time','grade'].forEach(k=>{if((old[k]===undefined||old[k]===null||old[k]==='')&&x[k])old[k]=x[k];});});
  existing.individuals.sort((a,b)=>(a.rank||9999)-(b.rank||9999));
  existing.supplementalSources=Array.from(new Set([...(existing.supplementalSources||[]),'https://hakonesaijo.sakura.ne.jp/97yosenkai-kojin.htm']));
})();

// Continue with the next verified 2020 individual-result supplement.
(() => {
  if (document.querySelector('script[data-hq-2020-s10]')) return;
  const s=document.createElement('script');
  s.src='hakone-qualifier-2020-supplement-10.js';
  s.defer=true;
  s.dataset.hq2020S10='1';
  document.head.appendChild(s);
})();
