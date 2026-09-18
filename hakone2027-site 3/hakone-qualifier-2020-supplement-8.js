// 2020 (第97回) 箱根駅伝予選会 個人成績補完 261-283位
// Primary check for 261: 桜美林大学公式 https://www.obirin.ac.jp/sports/ekiden/topics/y_2020/amhute0000026out.html
// Result archive: https://hakonesaijo.sakura.ne.jp/97yosenkai-kojin.htm
(() => {
  const existing=window.hakoneQualifierDB?.years?.['2020']; if(!existing) return;
  if(!Array.isArray(existing.individuals)) existing.individuals=[];
  const rows=[
    [261,'1:05:12','城戸口 俊希','2','桜美林大学'],
    [262,'1:05:13','内田 賢利','1','立教大学'],
    [263,'1:05:15','千田 悠人','4','亜細亜大学'],
    [264,'1:05:15','遠田 光太郎','4','日本大学'],
    [265,'1:05:15','熊澤 優良','2','立正大学'],
    [266,'1:05:16','馬場 竜之介','3','中央学院大学'],
    [267,'1:05:16','鈴木 涼太','3','関東学院大学'],
    [268,'1:05:18','今泉 祐哉','2','上武大学'],
    [271,'1:05:20','関根 大地','2','拓殖大学'],
    [272,'1:05:20','加藤 立誠','4','麗澤大学'],
    [273,'1:05:24','内藤 拓海','3','慶應義塾大学'],
    [274,'1:05:25','石山 大輝','4','駿河台大学'],
    [275,'1:05:26','渋江 海斗','4','流通経済大学'],
    [276,'1:05:27','白石 大以夢','2','日本薬科大学'],
    [277,'1:05:28','大倉 秀太','4','日本薬科大学'],
    [278,'1:05:29','中西 勝輝','1','亜細亜大学'],
    [279,'1:05:30','佐藤 拓夢','4','武蔵野学院大学'],
    [280,'1:05:31','盛本 聖也','2','日本体育大学'],
    [281,'1:05:31','北島 辰也','2','関東学院大学'],
    [282,'1:05:32','樋田 侑司','3','東京経済大学'],
    [283,'1:05:32','増井 大介','4','立教大学']
  ].map(([rank,time,name,grade,team])=>({rank,time,name,grade,team}));
  // 269,270 are intentionally withheld because the archive text has garbled names; do not guess.
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　・]/g,'').replace(/髙/g,'高').replace(/﨑/g,'崎');
  const byKey=new Map(existing.individuals.map(x=>[`${x.rank}|${norm(x.name)}|${norm(x.team)}`,x]));
  rows.forEach(x=>{const key=`${x.rank}|${norm(x.name)}|${norm(x.team)}`;const old=byKey.get(key);if(!old){existing.individuals.push(x);byKey.set(key,x);return;}['time','grade'].forEach(k=>{if((old[k]===undefined||old[k]===null||old[k]==='')&&x[k])old[k]=x[k];});});
  existing.individuals.sort((a,b)=>(a.rank||9999)-(b.rank||9999));
  existing.supplementalSources=Array.from(new Set([...(existing.supplementalSources||[]),'https://www.obirin.ac.jp/sports/ekiden/topics/y_2020/amhute0000026out.html','https://hakonesaijo.sakura.ne.jp/97yosenkai-kojin.htm']));
})();
