// 2020 (第97回) 箱根駅伝予選会 個人成績補完 最終完走者・前回欠損
// Sources:
// - KGRR official individual result: https://www.kgrr.org/event/2020/kgrr/97yosen/kojin.pdf
// - https://hakonesaijo.sakura.ne.jp/97yosenkai-kojin.htm
// 確認できた値のみ追加。既存の確認済み値は空値で上書きしない。
(() => {
 const existing=window.hakoneQualifierDB?.years?.['2020']; if(!existing)return;
 if(!Array.isArray(existing.individuals))existing.individuals=[];
 const rows=[
[500,'1:14:26','田中 遼太郎','4','一橋大学'],
[511,'1:15:20','小久井 健将','4','茨城大学'],
[515,'1:16:18','福澤 元己','4','一橋大学'],
[519,'1:17:07','森野 隆盛','2','東京理科大学'],
[520,'1:17:35','木村 純一郎','4','武蔵野学院大学'],
[521,'1:18:00','茅根 史哉','1','学習院大学'],
[529,'1:18:56','大浦 巧','4','埼玉大学'],
[531,'1:19:10','中村 奨','3','東京工業大学'],
[535,'1:21:31','佐々木 康祐','2','埼玉大学'],
[537,'1:22:06','佐藤 悠介','M2','東京大学大学院'],
[540,'1:22:40','久松 啓真','2','上智大学'],
[541,'1:23:25','多田 駿介','M1','東京工業大学大学院']
].map(([rank,time,name,grade,team])=>({rank,time,name,grade,team}));
 const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　・]/g,'').replace(/髙/g,'高').replace(/﨑/g,'崎');
 const byKey=new Map(existing.individuals.map(x=>[`${x.rank}|${norm(x.name)}|${norm(x.team)}`,x]));
 rows.forEach(x=>{const key=`${x.rank}|${norm(x.name)}|${norm(x.team)}`;const old=byKey.get(key);if(!old){existing.individuals.push(x);byKey.set(key,x);return;}['time','grade'].forEach(k=>{if((old[k]===undefined||old[k]===null||old[k]==='')&&x[k])old[k]=x[k];});});
 existing.individuals.sort((a,b)=>(a.rank||9999)-(b.rank||9999));
 existing.supplementalSources=Array.from(new Set([...(existing.supplementalSources||[]),'https://www.kgrr.org/event/2020/kgrr/97yosen/kojin.pdf','https://hakonesaijo.sakura.ne.jp/97yosenkai-kojin.htm']));
})();
