// Current-athlete PB audit: Rikkyo / Nippon Sport Science — 2026-09-07
// Sources: official team pages + 102nd Hakone official team-entry records.
// Missing values are never inferred.
(() => {
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  const grades=window.currentAthleteGrade2026=window.currentAthleteGrade2026||{};
  const gradeMeta=window.currentAthleteGradeMeta2026=window.currentAthleteGradeMeta2026||{};
  const gradePri=window.currentAthleteGradePriority2026=window.currentAthleteGradePriority2026||{};
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const setGrade=(team,name,grade)=>{
    grades[team]=grades[team]||{}; gradeMeta[team]=gradeMeta[team]||{}; gradePri[team]=gradePri[team]||{};
    const k=norm(name); grades[team][k]=String(grade); gradeMeta[team][k]='Rikkyo official 2026 current athlete / Hakone 102 entry'; gradePri[team][k]=99;
  };

  const rikkyoReturners={
    '伊藤 匠海':['13:57.31','28:34.63','1:04:50'],
    '木代 博也':['14:38.53','—','1:03:56'],
    '木島 陸':['14:18.66','29:12.71','1:03:42'],
    '野口 颯汰':['14:17.95','30:13.07','1:03:22'],
    '原田 颯大':['14:06.50','28:38.67','1:02:20'],
    '鈴木 愛音':['14:07.63','29:49.15','1:04:20'],
    '本宮 慶尚':['14:16.95','29:33.54','1:04:21'],
    '森川 祐暉':['14:29.93','—','1:04:57'],
    '山下 翔吾':['13:52.67','29:10.07','1:03:44'],
    '尾関 柊太':['14:23.92','30:21.94','1:04:01'],
    '向津 翼':['14:09.29','29:07.38','—']
  };
  verified['立教大学']=Object.assign(verified['立教大学']||{},rikkyoReturners);
  ['伊藤 匠海','木代 博也','木島 陸','野口 颯汰','原田 颯大'].forEach(n=>setGrade('立教大学',n,'4'));
  ['鈴木 愛音','本宮 慶尚','森川 祐暉','山下 翔吾'].forEach(n=>setGrade('立教大学',n,'3'));
  ['尾関 柊太','向津 翼'].forEach(n=>setGrade('立教大学',n,'2'));

  if(window.expandedTopAthletes2027){
    const freshmen=window.expandedTopAthletes2027['立教大学']||[];
    const rows=[
      ['伊藤 匠海','4','13:57.31','28:34.63','1:04:50'],['原田 颯大','4','14:06.50','28:38.67','1:02:20'],
      ['向津 翼','2','14:09.29','29:07.38','—'],['山下 翔吾','3','13:52.67','29:10.07','1:03:44'],
      ['木島 陸','4','14:18.66','29:12.71','1:03:42'],['本宮 慶尚','3','14:16.95','29:33.54','1:04:21'],
      ['鈴木 愛音','3','14:07.63','29:49.15','1:04:20'],['野口 颯汰','4','14:17.95','30:13.07','1:03:22'],
      ['尾関 柊太','2','14:23.92','30:21.94','1:04:01'],['木代 博也','4','14:38.53','—','1:03:56'],
      ['森川 祐暉','3','14:29.93','—','1:04:57']
    ];
    const seen=new Set(rows.map(r=>norm(r[0])));
    freshmen.forEach(r=>{if(!seen.has(norm(r?.[0]))) rows.push(r);});
    window.expandedTopAthletes2027['立教大学']=rows;
  }

  // Nippon Sport Science: remove graduates retained from the old profile snapshot and
  // rebuild the visible PB group from athletes who remained enrolled for academic 2026.
  const nittai={
    '天瀬 海斗':['14:20.26','29:13.14','1:03:05'],
    '吉田 黎大':['14:15.16','29:09.64','1:04:08'],
    '荻野 桂輔':['14:28.94','29:14.81','1:03:56'],
    '佐藤 大和':['14:09.99','28:37.62','1:03:44'],
    '永見 進之介':['14:34.49','29:37.11','1:04:48'],
    '樋村 銀河':['14:20.82','29:34.98','1:05:11'],
    '山上 勇希':['14:19.05','29:05.65','1:07:05'],
    '吉岡 斗真':['13:56.99','29:34.06','—'],
    '水津 勇人':['14:32.99','29:46.58','1:04:36'],
    '夏見 虹郎':['14:15.75','28:29.82','1:04:17']
  };
  verified['日本体育大学']=nittai;
  if(window.expandedTopAthletes2027){
    window.expandedTopAthletes2027['日本体育大学']=[
      ['夏見 虹郎','2','14:15.75','28:29.82','1:04:17'],['佐藤 大和','3','14:09.99','28:37.62','1:03:44'],
      ['山上 勇希','3','14:19.05','29:05.65','1:07:05'],['吉田 黎大','4','14:15.16','29:09.64','1:04:08'],
      ['天瀬 海斗','4','14:20.26','29:13.14','1:03:05'],['荻野 桂輔','3','14:28.94','29:14.81','1:03:56'],
      ['吉岡 斗真','3','13:56.99','29:34.06','—'],['樋村 銀河','3','14:20.82','29:34.98','1:05:11'],
      ['永見 進之介','3','14:34.49','29:37.11','1:04:48'],['水津 勇人','2','14:32.99','29:46.58','1:04:36']
    ];
  }
  if(window.fullRosterData){
    window.fullRosterData['日本体育大学']=[
      ['天瀬 海斗','4','29:13.14','1:03:05'],['吉田 黎大','4','29:09.64','1:04:08'],
      ['荻野 桂輔','3','29:14.81','1:03:56'],['佐藤 大和','3','28:37.62','1:03:44'],
      ['永見 進之介','3','29:37.11','1:04:48'],['樋村 銀河','3','29:34.98','1:05:11'],
      ['山上 勇希','3','29:05.65','1:07:05'],['吉岡 斗真','3','29:34.06','—'],
      ['水津 勇人','2','29:46.58','1:04:36'],['夏見 虹郎','2','28:29.82','1:04:17']
    ];
  }
})();