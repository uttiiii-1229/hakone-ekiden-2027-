// 2020 (第97回) 箱根駅伝予選会 個人成績補完 432-458位
// Sources:
// - KGRR official individual result referenced at https://www.kgrr.org/event/2020/kgrr/97yosen/kojin.pdf
// - https://hakonesaijo.sakura.ne.jp/97yosenkai-kojin.htm
// - https://marathon-world.blogspot.com/2020/10/97.html (文字化け箇所の照合)
(() => {
 const existing=window.hakoneQualifierDB?.years?.['2020']; if(!existing)return;
 if(!Array.isArray(existing.individuals))existing.individuals=[];
 const rows=[
[432,'1:10:52','山﨑 健聖','2','帝京平成大学'],[433,'1:10:53','熊澤 諒哉','1','湘南工科大学'],[434,'1:10:53','出淵 文也','2','高崎経済大学'],[435,'1:10:56','油井 星羅','M2','東京大学大学院'],[436,'1:10:58','松本 一希','3','東京理科大学'],[437,'1:10:58','石堂 爽空','1','帝京平成大学'],[438,'1:11:06','岡田 拓巳','2','帝京平成大学'],[439,'1:11:09','西河 豪志','2','帝京平成大学'],[440,'1:11:10','宮澤 賢太','4','上智大学'],[441,'1:11:12','麻田 悠馬','4','学習院大学'],[442,'1:11:13','島田 淳志','1','高崎経済大学'],[443,'1:11:15','原 昇平','M2','東京工業大学大学院'],[444,'1:11:16','永野 航太郎','4','帝京平成大学'],[445,'1:11:17','小坂 健悟','4','学習院大学'],[446,'1:11:22','毛利 陽人','4','一橋大学'],[447,'1:11:27','石嵜 寛之','1','上智大学'],[448,'1:11:29','金子 暖慈','3','茨城大学'],[449,'1:11:33','遠藤 佳輝','2','東京理科大学'],[450,'1:11:35','安部 竜太郎','1','高崎経済大学'],[451,'1:11:38','伊藤 俊太','4','高崎経済大学'],[452,'1:11:42','戸髙 裕太','2','一橋大学'],[453,'1:11:46','西尾 元','1','一橋大学'],[454,'1:11:49','鬼頭 壮平','3','東京大学'],[455,'1:11:55','宮田 一馬','2','東京大学'],[456,'1:12:01','小河 弘樹','3','東京大学'],[457,'1:12:15','渡辺 龍平','2','高崎経済大学'],[458,'1:12:21','古賀 淳平','M1','東京大学大学院']
].map(([rank,time,name,grade,team])=>({rank,time,name,grade,team}));
 const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　・]/g,'').replace(/髙/g,'高').replace(/﨑/g,'崎');
 const byKey=new Map(existing.individuals.map(x=>[`${x.rank}|${norm(x.name)}|${norm(x.team)}`,x]));
 rows.forEach(x=>{const key=`${x.rank}|${norm(x.name)}|${norm(x.team)}`;const old=byKey.get(key);if(!old){existing.individuals.push(x);byKey.set(key,x);return;}['time','grade'].forEach(k=>{if((old[k]===undefined||old[k]===null||old[k]==='')&&x[k])old[k]=x[k];});});
 existing.individuals.sort((a,b)=>(a.rank||9999)-(b.rank||9999));
 existing.supplementalSources=Array.from(new Set([...(existing.supplementalSources||[]),'https://hakonesaijo.sakura.ne.jp/97yosenkai-kojin.htm','https://marathon-world.blogspot.com/2020/10/97.html']));
})();