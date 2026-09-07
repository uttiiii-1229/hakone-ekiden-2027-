// 2026 academic-year athlete grade database.
// Source priority:
// 1) authoritative 2026 official roster pages
// 2) current full roster snapshots already audited for 2026
// 3) official university member pages manually audited below
// 4) official IUAU/KGRR results projected to academic year 2026
// 5) curated 2026 selected-athlete snapshot, only as a last grade fallback
(() => {
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const teamNorm=s=>String(s||'').normalize('NFKC').replace('國學院大学','國學院大學').trim();
  const db=window.currentAthleteGrade2026=window.currentAthleteGrade2026||{};
  const meta=window.currentAthleteGradeMeta2026=window.currentAthleteGradeMeta2026||{};
  const pri=window.currentAthleteGradePriority2026=window.currentAthleteGradePriority2026||{};

  function cleanGrade(v){
    const s=String(v??'').normalize('NFKC').trim().replace(/年生?$/,'');
    return /^[1-4]$/.test(s)?s:'';
  }
  function set(team,name,grade,source,priority=0){
    team=teamNorm(team); const g=cleanGrade(grade); if(!team||!name||!g)return;
    const key=norm(name); db[team]=db[team]||{}; meta[team]=meta[team]||{}; pri[team]=pri[team]||{};
    if((pri[team][key]??-1)>priority) return;
    db[team][key]=g; meta[team][key]=source; pri[team][key]=priority;
  }

  // Current official roster tables.
  Object.entries(window.currentRosterOfficial2026||{}).forEach(([team,rows])=>{
    (rows||[]).forEach(r=>set(team,r?.[0],r?.[1],'2026 official roster',100));
  });

  // Audited 2026 full rosters (including Tokyo University of Agriculture injected earlier).
  Object.entries(window.fullRosterData||{}).forEach(([team,rows])=>{
    (rows||[]).forEach(r=>set(team,r?.[0],r?.[1],'2026 audited roster snapshot',90));
  });

  // Daito Bunka official current member page (2026).
  const daito={
    '4':['石川 郁弥','沖野 凌我','小野寺 颯太','庄司 瑞輝','西村 悠誠','宮倉 騎士','棟方 一楽','和田 麻里'],
    '3':['エヴァンス・キプロップ','大澤 琉欧','大濱 逞真','清水 雄翔','庄治 大翔','鈴木 青空','中澤 拓斗','中澤 真大','野﨑 想','平田 碧','福井 陽仁','松浦 輝仁','矢嶋 大悟'],
    '2':['井上 陸斗','上田 翔大','越前谷 洋武','菅﨑 大翔','鈴木 要','日髙 龍之助','増子 岳'],
    '1':['近江 亮','小野 玲央','坂尻 宗隆','菅井 涼司','杉本 拓海','永井 愛都','宮野 丞','若林 司']
  };
  Object.entries(daito).forEach(([g,names])=>names.forEach(n=>set('大東文化大学',n,g,'Daito official members 2026',98)));

  // Tokai official current team page / 2026 official meet pages.
  const tokai={
    '4':['永本 脩','南坂 柚汰','矢口 陽太','藤田 悠'],
    '3':['中野 純平','檜垣 蒼','平井 璃空','可児 悠貴','佐野 鈴太','水野 夢大','岩根 正悟','小野 真忠','田中 佑空'],
    '2':['荻原 太陽','大野 蒼来','小木曽 律','服部 哩旺','下條 拓馬','矢部 慎之介','山田 拓望','妹尾 祐聖','間野 至恩','榎戸 勇哉'],
    '1':[]
  };
  Object.entries(tokai).forEach(([g,names])=>names.forEach(n=>set('東海大学',n,g,'Tokai official team/results 2026',98)));

  // Official IUAU/KGRR meet results. All auto-DB sources are academic-year events
  // (April or later), so grade + (2026 - sourceYear) yields 2026 academic grade.
  Object.values(window.universityMeetResultsAutoDB?.meets||{}).forEach(meet=>{
    const y=Number(meet?.year); if(!Number.isInteger(y)||y<2022||y>2026)return;
    Object.values(meet?.events||{}).forEach(ev=>{
      const rows=Array.isArray(ev)?ev:(ev?.rows||[]);
      rows.forEach(r=>{
        const base=Number(cleanGrade(r?.[3])); if(!base)return;
        const projected=base+(2026-y);
        if(projected<1||projected>4)return;
        set(r?.[2],r?.[1],String(projected),`official meet ${y} projected to 2026`,70+y);
      });
    });
  });

  // Curated 2026 snapshot may fill a grade only if no stronger source exists.
  Object.entries(window.expandedTopAthletes2027||{}).forEach(([team,rows])=>{
    (rows||[]).forEach(r=>set(team,r?.[0],r?.[1],'2026 selected-athlete snapshot',60));
  });

  window.currentAthleteGradeResolver2026={
    get(team,name){return db[teamNorm(team)]?.[norm(name)]||'';},
    source(team,name){return meta[teamNorm(team)]?.[norm(name)]||'';},
    cleanGrade
  };
})();