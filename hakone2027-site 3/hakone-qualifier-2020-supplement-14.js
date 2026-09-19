// 2020 (第97回) 箱根駅伝予選会 個人成績補完 459-498位（確認できた選手）
// Sources:
// - KGRR official individual result: https://www.kgrr.org/event/2020/kgrr/97yosen/kojin.pdf
// - https://kjyossy.net/hakone/97th/h97ysogo.html
// 学年は今回の照合元で確認できないため空欄。既存の確認済み学年は上書きしない。
(() => {
 const existing=window.hakoneQualifierDB?.years?.['2020']; if(!existing)return;
 if(!Array.isArray(existing.individuals))existing.individuals=[];
 const rows=[
[459,'1:12:27','矢吹 雅行','','茨城大学'],[460,'1:12:28','井上 暁人','','東京工業大学大学院'],[461,'1:12:33','古川 裕隆','','茨城大学'],[463,'1:12:36','清﨑 佑','','一橋大学'],[465,'1:12:49','牧原 大信','','茨城大学'],[466,'1:12:50','柳田 旭潤','','湘南工科大学'],[467,'1:12:50','森 基哉','','東京工業大学'],[469,'1:12:57','奈良 悠冬','','東京工業大学大学院'],[470,'1:12:58','松尾 凌雅','','湘南工科大学'],[471,'1:13:00','石飛 朝陽','','埼玉大学'],[472,'1:13:02','萱原 亮太','','一橋大学'],[473,'1:13:03','小川 悠太郎','','東京理科大学'],[474,'1:13:04','梶山 拓真','','学習院大学'],[475,'1:13:05','小野瀬 樹','','茨城大学'],[476,'1:13:06','武藤 佳暉','','上智大学'],[477,'1:13:10','浅水 丈拓','','埼玉大学'],[479,'1:13:19','福井 隆真','','一橋大学'],[480,'1:13:21','國松 士','','学習院大学'],[481,'1:13:22','鹿島 光平','','埼玉大学'],[482,'1:13:24','中元 康貴','','防衛大学校'],[483,'1:13:24','岡部 耕平','','東京理科大学'],[484,'1:13:27','椛澤 勇樹','','湘南工科大学'],[486,'1:13:36','大野 成輝','','東京工業大学'],[487,'1:13:38','長谷川 光','','湘南工科大学'],[488,'1:13:43','吉田 啓一郎','','東京工業大学大学院'],[490,'1:13:44','小堀 優太','','茨城大学'],[491,'1:13:45','安部 閑喜','','防衛大学校'],[492,'1:13:50','鬼澤 大地','','茨城大学'],[493,'1:13:55','嶋崎 拓海','','茨城大学'],[494,'1:14:05','伊熊 岳大','','東京理科大学'],[495,'1:14:12','三浦 友靖','','防衛大学校'],[496,'1:14:13','吉留 佑悟','','埼玉大学'],[497,'1:14:14','野崎 達哉','','上智大学'],[498,'1:14:15','吉川 大智','','湘南工科大学']
].map(([rank,time,name,grade,team])=>({rank,time,name,grade,team}));
 const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　・]/g,'').replace(/髙/g,'高').replace(/﨑/g,'崎');
 const byKey=new Map(existing.individuals.map(x=>[`${x.rank}|${norm(x.name)}|${norm(x.team)}`,x]));
 rows.forEach(x=>{const key=`${x.rank}|${norm(x.name)}|${norm(x.team)}`;const old=byKey.get(key);if(!old){existing.individuals.push(x);byKey.set(key,x);return;}['time','grade'].forEach(k=>{if((old[k]===undefined||old[k]===null||old[k]==='')&&x[k])old[k]=x[k];});});
 existing.individuals.sort((a,b)=>(a.rank||9999)-(b.rank||9999));
 existing.supplementalSources=Array.from(new Set([...(existing.supplementalSources||[]),'https://www.kgrr.org/event/2020/kgrr/97yosen/kojin.pdf','https://kjyossy.net/hakone/97th/h97ysogo.html']));
})();
