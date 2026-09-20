// 2020 (第97回) 箱根駅伝予選会 個人成績補完 499位以降（確認できた選手）
// Sources:
// - KGRR official individual result: https://www.kgrr.org/event/2020/kgrr/97yosen/kojin.pdf
// - https://kjyossy.net/hakone/97th/h97ysogo.html
// 今回はチーム別総合結果で順位・氏名・記録を確認できた選手のみ追加。学年は確認できないため空欄。
(() => {
 const existing=window.hakoneQualifierDB?.years?.['2020']; if(!existing)return;
 if(!Array.isArray(existing.individuals))existing.individuals=[];
 const rows=[
[501,'1:14:26','向田 修大','','東京工業大学'],[502,'1:14:30','池田 凌斗','','上智大学'],[503,'1:14:31','下津 諒晏','','上智大学'],[504,'1:14:38','中野 康太郎','','学習院大学'],[505,'1:14:40','森嶋 瞬','','学習院大学'],[506,'1:14:50','高林 泰孝','','防衛大学校'],[507,'1:14:50','北條 大地','','茨城大学'],[508,'1:14:55','岩崎 瞭介','','東京大学大学院'],[509,'1:14:59','日比野 志紀','','防衛大学校'],[510,'1:15:01','吉田 航太','','学習院大学'],[512,'1:15:44','北見 嶺','','東京理科大学'],[513,'1:15:44','箱﨑 直喜','','東京工業大学'],[514,'1:16:06','鈴木 智仁','','防衛大学校'],[516,'1:16:21','青木 心海','','上智大学'],[517,'1:16:24','林 伸幸','','埼玉大学'],[518,'1:17:02','長田 将','','東京大学大学院'],[522,'1:18:06','阿川 陽','','東京工業大学大学院'],[523,'1:18:08','宮下 和也','','東京工業大学'],[524,'1:18:10','手塚 悠','','埼玉大学'],[525,'1:18:22','伊藤 慎','','東京大学大学院'],[526,'1:18:30','森 泰雅','','埼玉大学'],[527,'1:18:34','内藤 航平','','東京工業大学'],[528,'1:18:42','鈴木 大翔','','埼玉大学'],[530,'1:19:03','郷原 将哉','','防衛大学校'],[532,'1:19:46','坂本 航平','','防衛大学校'],[533,'1:19:59','吉田 琉颯','','防衛大学校'],[534,'1:20:52','松尾 直季','','上智大学'],[536,'1:22:03','土田 周治','','東京工業大学大学院'],[538,'1:22:19','佐々木 亮一','','東京工業大学大学院'],[539,'1:22:34','久司 駿三','','東京工業大学大学院']
].map(([rank,time,name,grade,team])=>({rank,time,name,grade,team}));
 const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　・]/g,'').replace(/髙/g,'高').replace(/﨑/g,'崎');
 const byKey=new Map(existing.individuals.map(x=>[`${x.rank}|${norm(x.name)}|${norm(x.team)}`,x]));
 rows.forEach(x=>{const key=`${x.rank}|${norm(x.name)}|${norm(x.team)}`;const old=byKey.get(key);if(!old){existing.individuals.push(x);byKey.set(key,x);return;}['time','grade'].forEach(k=>{if((old[k]===undefined||old[k]===null||old[k]==='')&&x[k])old[k]=x[k];});});
 existing.individuals.sort((a,b)=>(a.rank||9999)-(b.rank||9999));
 existing.supplementalSources=Array.from(new Set([...(existing.supplementalSources||[]),'https://www.kgrr.org/event/2020/kgrr/97yosen/kojin.pdf','https://kjyossy.net/hakone/97th/h97ysogo.html']));
 const s=document.createElement('script');s.src='hakone-qualifier-2020-supplement-16.js';document.head.appendChild(s);
})();
