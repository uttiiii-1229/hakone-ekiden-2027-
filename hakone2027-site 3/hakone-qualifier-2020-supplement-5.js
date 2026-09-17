// 2020 (第97回) 箱根駅伝予選会 個人成績補完 137-160位
// Primary archive: https://hakonesaijo.sakura.ne.jp/97yosenkai-kojin.htm
// Cross-check for garbled archive names (159,160): https://hakonankit-fd.com/article/post-15817.html
(() => {
  const existing=window.hakoneQualifierDB?.years?.['2020']; if(!existing) return;
  if(!Array.isArray(existing.individuals)) existing.individuals=[];
  const rows=[
    [137,'1:03:43','小泉 謙','2','駿河台大学'],
    [138,'1:03:43','新本 駿','1','山梨学院大学'],
    [139,'1:03:44','稲毛 崇斗','1','法政大学'],
    [140,'1:03:44','西村 暉','3','上武大学'],
    [141,'1:03:44','木下 雄斗','4','武蔵野学院大学'],
    [142,'1:03:44','岡嶋 翼','3','日本体育大学'],
    [143,'1:03:45','大土手 嵩','4','筑波大学'],
    [144,'1:03:45','雲井 崚太','4','城西大学'],
    [145,'1:03:45','皆川 和範','1','筑波大学'],
    [146,'1:03:45','友村 俊介','3','武蔵野学院大学'],
    [147,'1:03:46','平間 大貴','4','東京農業大学'],
    [148,'1:03:46','綱島 辰弥','2','国士舘大学'],
    [149,'1:03:47','森下 滉太','4','日本体育大学'],
    [150,'1:03:48','阿部 飛雄馬','M1','東京大学大学院'],
    [151,'1:03:48','原川 凌','3','東京経済大学'],
    [152,'1:03:49','福井 大夢','2','国士舘大学'],
    [153,'1:03:49','佐藤 琉稀','3','平成国際大学'],
    [154,'1:03:49','前原 裕磨','2','慶應義塾大学'],
    [155,'1:03:50','宮下 資大','3','流通経済大学'],
    [156,'1:03:50','市原 拓実','4','明治学院大学'],
    [157,'1:03:50','徳永 裕樹','2','法政大学'],
    [158,'1:03:51','中園 慎太朗','2','法政大学'],
    [159,'1:03:51','野村 颯斗','1','城西大学'],
    [160,'1:03:52','高橋 達彦','3','拓殖大学']
  ].map(([rank,time,name,grade,team])=>({rank,time,name,grade,team}));
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　・]/g,'').replace(/髙/g,'高').replace(/﨑/g,'崎');
  const byKey=new Map(existing.individuals.map(x=>[`${x.rank}|${norm(x.name)}|${norm(x.team)}`,x]));
  rows.forEach(x=>{const key=`${x.rank}|${norm(x.name)}|${norm(x.team)}`;const old=byKey.get(key);if(!old){existing.individuals.push(x);byKey.set(key,x);return;}['time','grade'].forEach(k=>{if((old[k]===undefined||old[k]===null||old[k]==='')&&x[k])old[k]=x[k];});});
  existing.individuals.sort((a,b)=>(a.rank||9999)-(b.rank||9999));
  existing.supplementalSources=Array.from(new Set([...(existing.supplementalSources||[]),'https://hakonesaijo.sakura.ne.jp/97yosenkai-kojin.htm','https://hakonankit-fd.com/article/post-15817.html']));
})();
