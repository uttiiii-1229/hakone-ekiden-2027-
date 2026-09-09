// Current-athlete PB audit: Tokyo University of Agriculture — 2026-09-08
// Source: Tokyo University of Agriculture Track & Field Men's Long Distance official 2026 member pages.
// Member pages are dated 2026-04-01 and list records as of 2026-03-31 (4th year) / 2026-06-21 (1st-3rd year).
// Missing values are never inferred.
(() => {
  const team='東京農業大学';
  const roster=window.currentRosterOfficial2026=window.currentRosterOfficial2026||{};
  const meta=window.currentRosterOfficialMeta2026=window.currentRosterOfficialMeta2026||{};
  roster[team]=[
    ['磯 光清','4'],['植月 俊太','4'],['栗本 航希','4'],['執行 隆之介','4'],['鈴木 真琴','4'],['髙木 志朗','4'],['前田 和摩','4'],['松江 耕輔','4'],['渡邉 有翔','4'],
    ['生田 鼓太郎','3'],['石田 雄大','3'],['川上 温','3'],['菅野 優空','3'],['齋藤 東方','3'],['佐藤 大心','3'],['菅原 匠人','3'],['中西 葉太郎','3'],['野口 周大','3'],['古屋 匠己','3'],['武藤 稜河','3'],['山内 悠良','3'],['渡邉 輝翔','3'],
    ['穴井 伸幸','2'],['井坂 光','2'],['石田 悠太朗','2'],['内田 温規','2'],['川島 遥人','2'],['小島 嵩倖','2'],['武富 大輝','2'],['田端 悠','2'],['服部 司','2'],['藤谷 海空斗','2'],['森本 守勇','2'],
    ['石浦 巧都','1'],['大谷 謙心','1'],['香取 駿太郎','1'],['清久 時臣','1'],['五藤 大智','1'],['下森 実直','1'],['田玄 呼次郎','1'],['田中 壱基','1'],['中村 龍堂','1'],['野田 修人','1'],['樋口 翔太','1'],['福田 倫久','1'],['森田 啓斗','1'],['吉田 琉希','1']
  ];
  meta[team]={season:2026,asOf:'2026-06-21',source:'東京農大陸上部男子長距離 公式メンバー紹介'};

  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  const pb={
    '磯 光清':['14:23.35','29:38.48','1:04:14'],
    '植月 俊太':['14:14.73','29:35.14','1:04:06'],
    '栗本 航希':['14:14.95','28:42.81','1:01:47'],
    '執行 隆之介':['14:40.74','30:43.20','1:06:01'],
    '鈴木 真琴':['14:35.77','29:43.50','1:06:34'],
    '髙木 志朗':['14:34.94','30:51.44','—'],
    '前田 和摩':['13:46.71','27:21.52','1:01:42'],
    '松江 耕輔':['14:16.03','29:46.26','1:04:49'],
    '渡邉 有翔':['14:29.22','29:57.40','1:04:06'],
    '生田 鼓太郎':['14:24.86','29:54.13','1:03:28'],
    '石田 雄大':['14:37.04','30:09.38','1:05:49'],
    '川上 温':['14:20.01','29:32.22','1:03:49'],
    '菅野 優空':['14:22.09','29:20.08','1:04:53'],
    '齋藤 東方':['14:50.65','31:31.92','—'],
    '佐藤 大心':['14:29.20','29:55.67','1:05:19'],
    '菅原 匠人':['14:18.67','29:24.41','1:03:03'],
    '中西 葉太郎':['14:37.10','30:12.86','—'],
    '野口 周大':['14:36.80','—','1:07:20'],
    '古屋 匠己':['14:51.03','32:19.05','—'],
    '武藤 稜河':['14:37.94','30:03.42','1:06:47'],
    '山内 悠良':['14:14.80','30:50.70','—'],
    '渡邉 輝翔':['14:22.47','29:53.99','1:04:19'],
    '穴井 伸幸':['14:28.57','—','—'],
    '井坂 光':['14:11.59','28:50.80','1:03:45'],
    '石田 悠太朗':['14:34.79','31:22.28','—'],
    '内田 温規':['14:00.09','29:30.98','1:02:13'],
    '川島 遥人':['14:25.76','32:45.99','—'],
    '小島 嵩倖':['14:36.53','30:31.64','1:04:54'],
    '武富 大輝':['14:45.07','30:50.56','—'],
    '田端 悠':['14:44.40','31:17.89','1:06:12'],
    '服部 司':['14:29.46','30:46.18','1:05:15'],
    '藤谷 海空斗':['14:49.82','31:52.26','—'],
    '森本 守勇':['14:13.56','29:41.05','1:04:11'],
    '石浦 巧都':['14:30.50','30:46.30','—'],
    '大谷 謙心':['14:34.96','31:24.64','—'],
    '香取 駿太郎':['15:23.45','—','—'],
    '清久 時臣':['14:34.95','31:30.26','1:07:40'],
    '五藤 大智':['14:23.99','33:27.86','—'],
    '下森 実直':['14:04.53','31:31.79','—'],
    '田玄 呼次郎':['14:54.08','31:32.86','—'],
    '田中 壱基':['14:42.53','32:49.87','—'],
    '中村 龍堂':['14:34.47','—','—'],
    '野田 修人':['14:32.46','30:55.40','—'],
    '樋口 翔太':['14:39.09','—','—'],
    '福田 倫久':['14:50.33','—','—'],
    '森田 啓斗':['15:57.14','—','—'],
    '吉田 琉希':['14:34.94','31:26.97','—']
  };
  verified[team]=Object.assign(verified[team]||{},pb);

  if(typeof expandedTopAthletes2027!=='undefined'){
    const grade=new Map(roster[team].map(r=>[r[0],r[1]]));
    expandedTopAthletes2027[team]=Object.entries(pb).map(([name,v])=>[name,grade.get(name)||'',v[0],v[1],v[2]]);
  }

  const resolver=window.currentAthletePbResolver;
  if(!resolver?.currentRows || resolver.__tokyoNodaiOfficialAudit20260908) return;
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
    const grades=new Map(roster[team].map(r=>[norm(r[0]),r[1]]));
    Object.entries(pb).forEach(([name,v])=>{
      const key=norm(name);
      const row=byName.get(key)||{name,grade:grades.get(key)||'',pb5000:'—',pb10000:'—',half:'—',sources:[]};
      row.grade=grades.get(key)||row.grade||'';
      row.pb5000=better(row.pb5000,v[0]);
      row.pb10000=better(row.pb10000,v[1]);
      row.half=better(row.half,v[2]);
      if(!row.sources.includes('Tokyo Nodai official member profile 2026')) row.sources.push('Tokyo Nodai official member profile 2026');
      if(!byName.has(key)){rows.push(row);byName.set(key,row);}
    });
    return rows.sort((a,b)=>{
      const a10=resolver.timeSeconds(a.pb10000),b10=resolver.timeSeconds(b.pb10000);
      const a5=resolver.timeSeconds(a.pb5000),b5=resolver.timeSeconds(b.pb5000);
      return (a10??Infinity)-(b10??Infinity)||(a5??Infinity)-(b5??Infinity)||a.name.localeCompare(b.name,'ja');
    });
  };
  resolver.__tokyoNodaiOfficialAudit20260908=true;
})();

// Current-athlete PB audit: Surugadai University — 2026-09-09
// Source: Surugadai University Sports official current Ekiden athlete profiles.
// Only values printed on current profiles are used; missing values are never inferred.
(() => {
  const team='駿河台大学';
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  const pb={
    '浅見 壮太':['14:35','30:55','1:07:19'],
    '大橋 正昊':['13:59.82','29:14','—'],
    '下中野 篤将':['14:26.80','30:29.59','1:08:33'],
    '河原 蒼':['14:45.00','31:47.85','1:06:36'],
    '木立 孝治':['15:37.89','—','—'],
    '藤井 達希':['14:30.00','31:12.97','1:06:58'],
    '江澤 聖悟':['15:05.41','—','—'],
    '侭田 宇生':['14:29.41','30:40.83','1:08:30'],
    '末永 諒馬':['15:18.69','—','—'],
    '佐藤 我駆人':['13:52.03','28:35.78','1:01:49'],
    '宫﨑 太陽':['14:54.44','—','—']
  };
  const grades={
    '浅見 壮太':'4','大橋 正昊':'4','下中野 篤将':'4','河原 蒼':'4','木立 孝治':'4','藤井 達希':'4',
    '江澤 聖悟':'3','侭田 宇生':'3','末永 諒馬':'3','佐藤 我駆人':'3','宫﨑 太陽':'3'
  };
  verified[team]=Object.assign(verified[team]||{},pb);

  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const sec=v=>{
    const s=String(v||'').trim(); if(!s||s==='—') return null;
    const p=s.split(':').map(Number); if(p.some(x=>!Number.isFinite(x))) return null;
    if(p.length===3)return p[0]*3600+p[1]*60+p[2];
    if(p.length===2)return p[0]*60+p[1];
    return null;
  };
  const better=(a,b)=>{
    const av=sec(a),bv=sec(b);
    if(av==null)return b||'—';
    if(bv==null)return a||'—';
    return bv<av?b:a;
  };

  if(typeof expandedTopAthletes2027!=='undefined'){
    const rows=(expandedTopAthletes2027[team]||[]).map(r=>r.slice());
    const byName=new Map(rows.map(r=>[norm(r[0]),r]));
    Object.entries(pb).forEach(([name,v])=>{
      const key=norm(name);
      let row=byName.get(key);
      if(!row){row=[name,grades[name]||'','—','—','—'];rows.push(row);byName.set(key,row);}
      if(!row[1])row[1]=grades[name]||'';
      row[2]=better(row[2],v[0]); row[3]=better(row[3],v[1]); row[4]=better(row[4],v[2]);
    });
    rows.sort((a,b)=>(sec(a[3])??Infinity)-(sec(b[3])??Infinity)||(sec(a[2])??Infinity)-(sec(b[2])??Infinity)||String(a[0]).localeCompare(String(b[0]),'ja'));
    expandedTopAthletes2027[team]=rows;
  }

  const resolver=window.currentAthletePbResolver;
  if(!resolver?.currentRows || resolver.__surugadaaiOfficialAudit20260909)return;
  const base=resolver.currentRows.bind(resolver);
  const teamNorm=s=>String(s||'').normalize('NFKC').replace('國學院大学','國學院大學').trim();
  resolver.currentRows=function(currentTeam){
    const rows=base(currentTeam).map(r=>({...r,sources:Array.isArray(r.sources)?r.sources.slice():[]}));
    if(teamNorm(currentTeam)!==team)return rows;
    const byName=new Map(rows.map(r=>[norm(r.name),r]));
    Object.entries(pb).forEach(([name,v])=>{
      const key=norm(name);
      const row=byName.get(key)||{name,grade:grades[name]||'',pb5000:'—',pb10000:'—',half:'—',sources:[]};
      if(!row.grade)row.grade=grades[name]||'';
      row.pb5000=better(row.pb5000,v[0]); row.pb10000=better(row.pb10000,v[1]); row.half=better(row.half,v[2]);
      if(!row.sources.includes('Surugadai official current profile 2026'))row.sources.push('Surugadai official current profile 2026');
      if(!byName.has(key)){rows.push(row);byName.set(key,row);}
    });
    return rows.sort((a,b)=>(resolver.timeSeconds(a.pb10000)??Infinity)-(resolver.timeSeconds(b.pb10000)??Infinity)||(resolver.timeSeconds(a.pb5000)??Infinity)-(resolver.timeSeconds(b.pb5000)??Infinity)||a.name.localeCompare(b.name,'ja'));
  };
  resolver.__surugadaaiOfficialAudit20260909=true;
})();