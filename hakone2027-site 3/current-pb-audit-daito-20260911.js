// Current-athlete PB audit: Daito Bunka University — 2026-09-11
// Sources: Daito Bunka University men's long-distance official Members / Records pages and official 2026 race reports.
// Official profile PBs are authoritative. Unknown events remain unfilled; no values are inferred.
(() => {
  const team='大東文化大学';
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  const pb={
    '石川 郁弥':['14:39.97','29:48.02','1:04:10'],
    '沖野 凌我':['14:18.62','29:42.86','1:04:27'],
    '小野寺 颯太':['14:18.33','29:35.98','1:08:41'],
    '庄司 瑞輝':['14:04.02','29:12.52','1:02:41'],
    '早乙女 良真':['14:29.76','30:41.30','1:04:13'],
    '高草木 架月':['14:24.78','—','—'],
    '西村 悠誠':['14:01.55','29:23.98','1:03:35'],
    '藤原 幹大':['14:10.38','28:50.30','1:02:34'],
    '宮倉 騎士':['14:04.83','29:25.74','1:03:29'],
    '棟方 一楽':['14:08.79','28:19.82','1:00:53'],
    '和田 麻里':['14:25.17','29:42.89','1:03:43'],
    'エヴァンス・キプロップ':['13:49.75','28:29.35','1:03:08'],
    '大澤 琉欧':['14:09.39','29:24.44','1:05:12'],
    '大濱 逞真':['13:35.78','28:31.28','1:00:48'],
    '清水 雄翔':['14:24.11','28:56.45','1:03:00'],
    '庄治 大翔':['14:19.32','29:53.49','1:06:39'],
    '鈴木 青空':['14:07.68','29:21.48','—'],
    '中澤 拓斗':['14:33.94','30:36.95','—'],
    '中澤 真大':['13:55.23','28:29.46','1:02:24'],
    '野﨑 想':['14:15.09','29:46.71','—'],
    '平田 碧':['13:59.00','29:27.77','1:04:07'],
    '福井 陽仁':['14:19.02','30:31.83','1:09:45'],
    '松浦 輝仁':['14:09.45','28:32.83','1:01:42'],
    '矢嶋 大悟':['14:18.79','30:22.45','1:06:31'],
    '井上 陸斗':['14:25.31','29:35.76','—'],
    '上田 翔大':['13:49.67','29:40.87','1:04:03'],
    '越前谷 洋武':['14:27.51','29:54.78','1:16:15'],
    '岡村 将英':['14:41.32','30:11.49','1:06:10'],
    '金子 大和':['14:26.93','29:57.26','—'],
    '菅﨑 大翔':['14:06.53','29:04.67','1:02:17'],
    '鈴木 要':['13:51.22','29:06.76','1:03:53'],
    '関 朝陽':['14:41.37','—','—'],
    '中村 一誠':['14:44.58','30:12.89','1:04:57'],
    '日髙 龍之助':['14:32.06','29:38.63','1:03:50'],
    '増子 岳':['14:18.98','29:45.70','1:03:20'],
    '稲垣 瑛心':['14:28.67','—','—'],
    '近江 亮':['13:54.99','29:40.68','—'],
    '小野 玲央':['14:40.05','30:04.24','—'],
    '坂尻 宗隆':['14:40.26','30:59.01','—'],
    '嶋岡 希':['14:16.92','—','—'],
    '菅井 涼司':['14:19.26','29:36.18','—'],
    '杉本 拓海':['14:07.32','—','—'],
    '永井 愛都':['14:37.70','30:00.17','—'],
    '宮野 丞':['14:39.46','30:21.25','—'],
    '若林 司':['13:51.30','—','—']
  };
  const grades={
    '石川 郁弥':'4','沖野 凌我':'4','小野寺 颯太':'4','庄司 瑞輝':'4','早乙女 良真':'4','高草木 架月':'4','西村 悠誠':'4','藤原 幹大':'4','宮倉 騎士':'4','棟方 一楽':'4','和田 麻里':'4',
    'エヴァンス・キプロップ':'3','大澤 琉欧':'3','大濱 逞真':'3','清水 雄翔':'3','庄治 大翔':'3','鈴木 青空':'3','中澤 拓斗':'3','中澤 真大':'3','野﨑 想':'3','平田 碧':'3','福井 陽仁':'3','松浦 輝仁':'3','矢嶋 大悟':'3',
    '井上 陸斗':'2','上田 翔大':'2','越前谷 洋武':'2','岡村 将英':'2','金子 大和':'2','菅﨑 大翔':'2','鈴木 要':'2','関 朝陽':'2','中村 一誠':'2','日髙 龍之助':'2','増子 岳':'2',
    '稲垣 瑛心':'1','近江 亮':'1','小野 玲央':'1','坂尻 宗隆':'1','嶋岡 希':'1','菅井 涼司':'1','杉本 拓海':'1','永井 愛都':'1','宮野 丞':'1','若林 司':'1'
  };
  verified[team]=Object.assign(verified[team]||{},pb);

  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const roster=window.currentRosterOfficial2026=window.currentRosterOfficial2026||{};
  // Members page confirms the complete 2026 athlete roster; replace any compiled roster so staff/old athletes do not leak into current rows.
  roster[team]=Object.keys(pb).map(name=>[name,grades[name]||'']);
  const meta=window.currentRosterOfficialMeta2026=window.currentRosterOfficialMeta2026||{};
  meta[team]={season:2026,asOf:'2026-09-11',source:'大東文化大学陸上競技部男子長距離ブロック公式 Members / Records・2026公式競技結果'};

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
      const key=norm(name); let row=byName.get(key);
      if(!row){row=[name,grades[name]||'','—','—','—'];rows.push(row);byName.set(key,row);}
      if(!row[1])row[1]=grades[name]||'';
      row[2]=better(row[2],v[0]); row[3]=better(row[3],v[1]); row[4]=better(row[4],v[2]);
    });
    rows.sort((a,b)=>(sec(a[3])??Infinity)-(sec(b[3])??Infinity)||(sec(a[2])??Infinity)-(sec(b[2])??Infinity)||String(a[0]).localeCompare(String(b[0]),'ja'));
    expandedTopAthletes2027[team]=rows;
  }

  const resolver=window.currentAthletePbResolver;
  if(!resolver?.currentRows || resolver.__daitoOfficialAudit20260911)return;
  const base=resolver.currentRows.bind(resolver);
  resolver.currentRows=function(currentTeam){
    const rows=base(currentTeam).map(r=>({...r,sources:Array.isArray(r.sources)?r.sources.slice():[]}));
    if(norm(currentTeam)!==norm(team))return rows;
    const officialNames=new Set(Object.keys(pb).map(norm));
    const currentRows=rows.filter(r=>officialNames.has(norm(r.name)));
    const byName=new Map(currentRows.map(r=>[norm(r.name),r]));
    Object.entries(pb).forEach(([name,v])=>{
      const key=norm(name);
      const row=byName.get(key)||{name,grade:grades[name]||'',pb5000:'—',pb10000:'—',half:'—',sources:[]};
      row.grade=grades[name]||row.grade||'';
      row.pb5000=better(row.pb5000,v[0]); row.pb10000=better(row.pb10000,v[1]); row.half=better(row.half,v[2]);
      if(!row.sources.includes('Daito Bunka University official 2026'))row.sources.push('Daito Bunka University official 2026');
      if(!byName.has(key)){currentRows.push(row);byName.set(key,row);}
    });
    return currentRows.sort((a,b)=>{
      const a10=resolver.timeSeconds(a.pb10000),b10=resolver.timeSeconds(b.pb10000);
      const a5=resolver.timeSeconds(a.pb5000),b5=resolver.timeSeconds(b.pb5000);
      return (a10??Infinity)-(b10??Infinity)||(a5??Infinity)-(b5??Infinity)||a.name.localeCompare(b.name,'ja');
    });
  };
  resolver.__daitoOfficialAudit20260911=true;
})();
