// 2020 (第97回) 箱根駅伝予選会 個人成績補完 352-386位
// Source: https://hakonesaijo.sakura.ne.jp/97yosenkai-kojin.htm
(() => {
 const existing=window.hakoneQualifierDB?.years?.['2020']; if(!existing)return;
 if(!Array.isArray(existing.individuals))existing.individuals=[];
 const rows=[
[352,'1:06:42','河南 颯太','2','立正大学'],[353,'1:06:42','石鍋 拓海','3','立教大学'],[354,'1:06:45','設永 凱暉','1','日本薬科大学'],[355,'1:06:46','小西 竜矢','4','東京経済大学'],[356,'1:06:47','久田 淳司','3','東京大学'],[357,'1:06:47','余川 周','M1','東京工業大学大学院'],[358,'1:06:56','青田 楓祐','3','関東学院大学'],[359,'1:06:58','立崎 哲大','2','芝浦工業大学'],[360,'1:06:58','北村 尭之','4','学習院大学'],[361,'1:07:02','水谷 耀介','1','育英大学'],[362,'1:07:02','忠内 侑士','1','立教大学'],[363,'1:07:03','米谷 哲','3','桜美林大学'],[364,'1:07:07','大塚 嘉胤','1','立正大学'],[365,'1:07:07','瀬川 莉玖','2','東京大学'],[366,'1:07:08','丸山 翔太郎','3','東京理科大学'],[367,'1:07:09','都 翔','1','桜美林大学'],[368,'1:07:11','日向野 駿','1','立正大学'],[369,'1:07:11','金城 快','2','立教大学'],[370,'1:07:11','佐藤 茂哉','4','武蔵野学院大学'],[371,'1:07:12','神尾 祐樹','2','芝浦工業大学'],[372,'1:07:12','河合 紀舟','1','育英大学'],[373,'1:07:14','権守 遼大','1','立教大学'],[374,'1:07:17','峰村 織','1','平成国際大学'],[375,'1:07:19','海老原 優大','1','芝浦工業大学'],[376,'1:07:24','岩坂 優志','3','日本薬科大学'],[377,'1:07:26','鈴木 紀寛','1','桜美林大学'],[378,'1:07:27','栗原 佑輔','3','武蔵野学院大学'],[379,'1:07:30','伊藤 颯吾','3','東京工業大学'],[380,'1:07:34','上野 海斗','1','育英大学'],[381,'1:07:34','小林 飛斗','2','芝浦工業大学'],[382,'1:07:38','小泉 海人','3','明治学院大学'],[383,'1:07:39','竹岡 大','4','東京工業大学'],[384,'1:07:47','松本 啓岐','D1','東京大学大学院'],[385,'1:07:58','座間 武尊','3','明治学院大学'],[386,'1:08:05','塚田 雄大','1','桜美林大学']
].map(([rank,time,name,grade,team])=>({rank,time,name,grade,team}));
 const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　・]/g,'').replace(/髙/g,'高').replace(/﨑/g,'崎');
 const byKey=new Map(existing.individuals.map(x=>[`${x.rank}|${norm(x.name)}|${norm(x.team)}`,x]));
 rows.forEach(x=>{const key=`${x.rank}|${norm(x.name)}|${norm(x.team)}`;const old=byKey.get(key);if(!old){existing.individuals.push(x);byKey.set(key,x);return;}['time','grade'].forEach(k=>{if((old[k]===undefined||old[k]===null||old[k]==='')&&x[k])old[k]=x[k];});});
 existing.individuals.sort((a,b)=>(a.rank||9999)-(b.rank||9999));
 existing.supplementalSources=Array.from(new Set([...(existing.supplementalSources||[]),'https://hakonesaijo.sakura.ne.jp/97yosenkai-kojin.htm']));
 if(!document.querySelector('script[data-hakone-qualifier-2020-supplement="12"]')){const s=document.createElement('script');s.src='hakone-qualifier-2020-supplement-12.js';s.dataset.hakoneQualifier2020Supplement='12';document.head.appendChild(s);}
})();