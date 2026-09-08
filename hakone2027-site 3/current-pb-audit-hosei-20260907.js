// Current-athlete PB audit: Hosei University — 2026-09-07
// Sources: Hosei University Track & Field official current member list and official athlete profiles.
// Only athletes visible on the current long-distance member list are added. Missing values are never inferred.
(() => {
  const team='法政大学';
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  const hosei={
    '野田 晶斗':['13:46.87','28:13.20','1:01:32'],
    '平井 蒼大':['14:40.25','28:46.94','1:03:28'],
    '田井中 悠成':['14:10.56','28:48.78','1:02:13'],
    '湯田 陽平兵':['14:03.98','28:52.35','1:03:48'],
    '星野 泰地':['14:01.26','29:00.99','1:02:17'],
    '山際 晃太朗':['14:19.11','29:08.36','1:02:31'],
    '加庭 翔太':['14:18.51','29:09.16','1:04:39'],
    '池永 航':['14:24.55','29:15.47','1:03:16'],
    '重山 弘徳':['14:18.65','29:16.81','1:03:27'],
    '深田 健斗':['14:24.76','29:23.21','1:06:13'],
    '町田 陽太':['14:23.12','29:26.03','1:06:16'],
    '福田 大馳':['14:08.93','29:27.83','1:04:08']
  };
  verified[team]=Object.assign(verified[team]||{},hosei);

  const resolver=window.currentAthletePbResolver;
  if(!resolver?.currentRows || resolver.__hoseiOfficialAudit20260907) return;
  const base=resolver.currentRows.bind(resolver);
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const teamNorm=s=>String(s||'').normalize('NFKC').replace('國學院大学','國學院大學').trim();
  const better=(a,b)=>{
    const av=resolver.timeSeconds(a),bv=resolver.timeSeconds(b);
    if(av==null) return b||'—';
    if(bv==null) return a||'—';
    return bv<av?b:a;
  };
  resolver.currentRows=function(currentTeam){
    const rows=base(currentTeam).map(r=>({...r,sources:Array.isArray(r.sources)?r.sources.slice():[]}));
    if(teamNorm(currentTeam)!==team) return rows;
    const byName=new Map(rows.map(r=>[norm(r.name),r]));
    Object.entries(hosei).forEach(([name,pb])=>{
      const key=norm(name);
      const row=byName.get(key)||{name,grade:'',pb5000:'—',pb10000:'—',half:'—',sources:[]};
      row.pb5000=better(row.pb5000,pb[0]);
      row.pb10000=better(row.pb10000,pb[1]);
      row.half=better(row.half,pb[2]);
      if(!row.sources.includes('Hosei official current profile 2026')) row.sources.push('Hosei official current profile 2026');
      if(!byName.has(key)){rows.push(row);byName.set(key,row);}
    });
    return rows.sort((a,b)=>{
      const a10=resolver.timeSeconds(a.pb10000),b10=resolver.timeSeconds(b.pb10000);
      const a5=resolver.timeSeconds(a.pb5000),b5=resolver.timeSeconds(b.pb5000);
      return (a10??Infinity)-(b10??Infinity)||(a5??Infinity)-(b5??Infinity)||a.name.localeCompare(b.name,'ja');
    });
  };
  resolver.__hoseiOfficialAudit20260907=true;
})();

// Current-athlete PB audit: Senshu University — 2026-09-08
// Sources: Senshu University Track & Field official current member profiles, official team PB ranking, and official 2026 results.
// Values are only added where the official team site confirms them.
(() => {
  const team='専修大学';
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  const senshu={
    'ダンカン マイナ':['13:31.54','27:52.97','1:01:46'],
    'ガユ サミュエル':['13:33.78','28:27.88','—'],
    '大西 裕翔':['14:03.88','29:22.93','1:04:41'],
    '上山 詩樹':['14:04.59','28:44.27','1:01:41'],
    '水津 智哉':['14:07.30','29:48.88','1:06:12'],
    '大濵 優輝':['14:07.48','29:14.98','—'],
    '西 広翔':['14:08.36','29:21.54','1:04:34'],
    '江口 怜臣':['14:08.67','31:50.95','—'],
    '向田 泰誠':['14:10.73','29:29.61','—'],
    '坂元 南紬太':['14:15.34','—','1:05:59'],
    '丹 柊太郎':['14:17.24','28:58.64','1:01:56'],
    '西岳 政宗':['—','29:12.37','1:06:28'],
    '和田 晴之':['14:27.63','29:13.59','1:03:16'],
    '田口 萩太':['14:26.94','29:24.65','1:02:48'],
    '平松 龍青':['14:17.58','29:26.17','1:02:05'],
    '具志堅 一斗':['14:24.70','29:29.31','1:02:14'],
    '安斎 陸久':['14:24.50','29:30.76','1:02:20'],
    '佐藤 陸':['14:24.54','29:39.63','1:02:35'],
    '中西 慶士郎':['14:27.56','30:16.91','1:03:04'],
    '佐藤 瑞城':['14:21.74','30:23.18','—'],
    '東 悠太':['14:28.43','30:17.28','1:06:05'],
    '松本 崇吹':['14:33.85','29:51.24','1:03:51'],
    '三上 陸空':['14:40.24','30:37.21','1:05:24'],
    '斉藤 圭祐':['14:56.16','30:17.63','1:07:53'],
    '渕 飛天':['14:29.06','30:04.77','1:06:55'],
    '佐藤 凜':['14:18.70','31:14.15','—']
  };
  verified[team]=Object.assign(verified[team]||{},senshu);

  if(typeof expandedTopAthletes2027!=='undefined'){
    expandedTopAthletes2027[team]=[
      ['ダンカン マイナ','3','13:31.54','27:52.97','1:01:46'],['ガユ サミュエル','1','13:33.78','28:27.88','—'],
      ['大西 裕翔','4','14:03.88','29:22.93','1:04:41'],['上山 詩樹','4','14:04.59','28:44.27','1:01:41'],
      ['水津 智哉','3','14:07.30','29:48.88','1:06:12'],['大濵 優輝','3','14:07.48','29:14.98','—'],
      ['西 広翔','2','14:08.36','29:21.54','1:04:34'],['江口 怜臣','1','14:08.67','31:50.95','—'],
      ['向田 泰誠','2','14:10.73','29:29.61','—'],['坂元 南紬太','3','14:15.34','—','1:05:59'],
      ['丹 柊太郎','4','14:17.24','28:58.64','1:01:56'],['西岳 政宗','3','—','29:12.37','1:06:28'],
      ['和田 晴之','4','14:27.63','29:13.59','1:03:16'],['田口 萩太','3','14:26.94','29:24.65','1:02:48'],
      ['平松 龍青','4','14:17.58','29:26.17','1:02:05'],['具志堅 一斗','4','14:24.70','29:29.31','1:02:14'],
      ['安斎 陸久','2','14:24.50','29:30.76','1:02:20'],['佐藤 陸','4','14:24.54','29:39.63','1:02:35'],
      ['中西 慶士郎','3','14:27.56','30:16.91','1:03:04'],['佐藤 瑞城','1','14:21.74','30:23.18','—'],
      ['東 悠太','3','14:28.43','30:17.28','1:06:05'],['松本 崇吹','2','14:33.85','29:51.24','1:03:51'],
      ['三上 陸空','2','14:40.24','30:37.21','1:05:24'],['斉藤 圭祐','2','14:56.16','30:17.63','1:07:53'],
      ['渕 飛天','2','14:29.06','30:04.77','1:06:55'],['佐藤 凜','2','14:18.70','31:14.15','—']
    ];
  }

  const resolver=window.currentAthletePbResolver;
  if(!resolver?.currentRows || resolver.__senshuOfficialAudit20260908) return;
  const base=resolver.currentRows.bind(resolver);
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const teamNorm=s=>String(s||'').normalize('NFKC').replace('國學院大学','國學院大學').trim();
  const better=(a,b)=>{
    const av=resolver.timeSeconds(a),bv=resolver.timeSeconds(b);
    if(av==null) return b||'—';
    if(bv==null) return a||'—';
    return bv<av?b:a;
  };
  resolver.currentRows=function(currentTeam){
    const rows=base(currentTeam).map(r=>({...r,sources:Array.isArray(r.sources)?r.sources.slice():[]}));
    if(teamNorm(currentTeam)!==team) return rows;
    const byName=new Map(rows.map(r=>[norm(r.name),r]));
    Object.entries(senshu).forEach(([name,pb])=>{
      const key=norm(name);
      const row=byName.get(key)||{name,grade:'',pb5000:'—',pb10000:'—',half:'—',sources:[]};
      row.pb5000=better(row.pb5000,pb[0]);
      row.pb10000=better(row.pb10000,pb[1]);
      row.half=better(row.half,pb[2]);
      if(!row.sources.includes('Senshu official current profile/ranking 2026')) row.sources.push('Senshu official current profile/ranking 2026');
      if(!byName.has(key)){rows.push(row);byName.set(key,row);}
    });
    return rows.sort((a,b)=>{
      const a10=resolver.timeSeconds(a.pb10000),b10=resolver.timeSeconds(b.pb10000);
      const a5=resolver.timeSeconds(a.pb5000),b5=resolver.timeSeconds(b.pb5000);
      return (a10??Infinity)-(b10??Infinity)||(a5??Infinity)-(b5??Infinity)||a.name.localeCompare(b.name,'ja');
    });
  };
  resolver.__senshuOfficialAudit20260908=true;
})();

// Current-athlete PB audit: Meiji University — 2026-09-09
// Sources: Meiji University Track & Field official 2026 competition results.
// Only officially PB-labelled results that improve the current site baseline are merged.
(() => {
  const team='明治大学';
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  const meta=window.currentRosterOfficialMeta2026=window.currentRosterOfficialMeta2026||{};
  verified[team]=Object.assign(verified[team]||{}, {
    '小松 映智':['—','30:45.45','—'],
    '大江 秀弥':['—','29:45.19','—']
  });
  meta[team]={season:2026,asOf:'2026-09-09',source:'明治大学体育会競走部 2026公式結果（第327回日体大長距離競技会／ホクレンDC網走）'};
})();
