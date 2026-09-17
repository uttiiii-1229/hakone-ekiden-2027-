// 2020 (第97回) 箱根駅伝予選会 個人成績補完 60-86位
// Source: 箱根駅伝最高記録 個人別記録 https://hakonesaijo.sakura.ne.jp/97yosenkai-kojin.htm
(() => {
  const existing=window.hakoneQualifierDB?.years?.['2020']; if(!existing) return;
  if(!Array.isArray(existing.individuals)) existing.individuals=[];
  const rows=[
    [60,'1:02:58','清水 拓斗','3','国士舘大学'],[61,'1:03:00','高瀬 桂','2','専修大学'],[62,'1:03:00','加井 虎造','4','中央大学'],[63,'1:03:01','岩室 天輝','4','日本体育大学'],[64,'1:03:02','三ツ星 翔','4','大東文化大学'],
    [65,'1:03:02','藤井 正斗','2','城西大学'],[66,'1:03:02','杉山 魁声','3','筑波大学'],[67,'1:03:03','小島 慎也','2','中央学院大学'],[68,'1:03:03','佐々木 亮輔','1','神奈川大学'],[69,'1:03:04','植田 陽平','4','麗澤大学'],[70,'1:03:04','松川 雅虎','2','芝浦工業大学'],[71,'1:03:04','杉保 滉太','4','麗澤大学'],[72,'1:03:04','菅沼 隆佑','4','日本体育大学'],[73,'1:03:05','池田 勘汰','4','中央大学'],[74,'1:03:06','森山 真伍','4','山梨学院大学'],[75,'1:03:06','四釜 峻佑','2','順天堂大学'],[76,'1:03:06','小笠原 峰士','4','神奈川大学'],[77,'1:03:07','山本 龍神','1','国士舘大学'],[78,'1:03:09','大川 歩夢','2','東京経済大学'],[79,'1:03:09','松本 康汰','2','法政大学'],[80,'1:03:10','坪井 海門','3','山梨学院大学'],[81,'1:03:10','小坂 友我','3','日本大学'],[82,'1:03:10','福住 賢翔','4','日本体育大学'],[83,'1:03:11','竹井 祐貴','3','亜細亜大学'],[84,'1:03:11','片根 洋平','3','大東文化大学'],[85,'1:03:11','大内 宏樹','3','日本体育大学'],[86,'1:03:12','森島 嘉大','4','専修大学']
  ].map(([rank,time,name,grade,team])=>({rank,time,name,grade,team}));
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　・]/g,'').replace(/髙/g,'高').replace(/﨑/g,'崎');
  const byKey=new Map(existing.individuals.map(x=>[`${x.rank}|${norm(x.name)}|${norm(x.team)}`,x]));
  rows.forEach(x=>{const key=`${x.rank}|${norm(x.name)}|${norm(x.team)}`;const old=byKey.get(key);if(!old){existing.individuals.push(x);byKey.set(key,x);return;}['time','grade'].forEach(k=>{if((old[k]===undefined||old[k]===null||old[k]==='')&&x[k])old[k]=x[k];});});
  existing.individuals.sort((a,b)=>(a.rank||9999)-(b.rank||9999));
  existing.supplementalSources=Array.from(new Set([...(existing.supplementalSources||[]),'https://hakonesaijo.sakura.ne.jp/97yosenkai-kojin.htm']));
  if(!document.querySelector('script[data-hq2020-s4]')){const s=document.createElement('script');s.src='hakone-qualifier-2020-supplement-4.js';s.dataset.hq2020S4='1';document.head.appendChild(s);}
})();
