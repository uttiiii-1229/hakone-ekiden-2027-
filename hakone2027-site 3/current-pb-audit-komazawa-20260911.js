// Current-athlete PB audit: Komazawa University — 2026-09-11
// Sources: Komazawa University Sports Newspaper (KOMASPO) official 2026 athlete features and race reports.
// Only records explicitly identified as a PB / first attempt, or current freshman profile PBs, are used. Missing values are never inferred.
(() => {
  const team='駒澤大学';
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  const pb={
    '植阪 嶺児':['13:49.34','28:23.41','—'],
    '桑田 駿介':['—','28:07.63','—'],
    '秋山 稟央':['14:11.26','—','—'],
    '井本 正凪':['13:56.70','—','—'],
    '上岡 煌':['13:58.04','—','—'],
    '牟田 凜太':['13:49.16','28:22.98','1:02:08'],
    '中野 颯人':['—','—','1:04:19'],
    '大西 功起':['—','—','1:05:56'],
    '池谷 陸斗':['13:55.61','—','—'],
    '今村 仁':['13:48.83','—','—'],
    '大濵 康瑛':['14:30.19','—','—'],
    '河合 芳倖':['14:42.07','—','—'],
    '岸本 莞爾':['14:28.73','—','—'],
    '小沼 虎白':['14:09.55','—','—'],
    '後藤 颯星':['14:13.97','—','—'],
    '鈴木 大翔':['13:46.10','—','—'],
    '土間 董哉':['13:39.13','—','—'],
    '根ヶ山 蓮':['14:31.93','—','—'],
    '前田 陽向':['14:21.00','—','—'],
    '山口 幸太郎':['14:17.65','—','—']
  };
  const grades={
    '植阪 嶺児':'4','桑田 駿介':'3','秋山 稟央':'3','井本 正凪':'2','上岡 煌':'2','牟田 凜太':'2','中野 颯人':'3','大西 功起':'2',
    '池谷 陸斗':'1','今村 仁':'1','大濵 康瑛':'1','河合 芳倖':'1','岸本 莞爾':'1','小沼 虎白':'1','後藤 颯星':'1','鈴木 大翔':'1','土間 董哉':'1','根ヶ山 蓮':'1','前田 陽向':'1','山口 幸太郎':'1'
  };
  verified[team]=Object.assign(verified[team]||{},pb);

  // The official 2026 freshman feature confirms 12 athlete freshmen (plus 2 managers).
  // Add those athletes to the official-roster overlay without replacing already verified upperclassmen.
  const roster=window.currentRosterOfficial2026=window.currentRosterOfficial2026||{};
  const current=Array.isArray(roster[team])?roster[team].map(r=>r.slice()):[];
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const rosterNames=new Set(current.map(r=>norm(r[0])));
  ['池谷 陸斗','今村 仁','大濵 康瑛','河合 芳倖','岸本 莞爾','小沼 虎白','後藤 颯星','鈴木 大翔','土間 董哉','根ヶ山 蓮','前田 陽向','山口 幸太郎'].forEach(name=>{
    if(!rosterNames.has(norm(name))) current.push([name,'1']);
  });
  roster[team]=current;
  const meta=window.currentRosterOfficialMeta2026=window.currentRosterOfficialMeta2026||{};
  meta[team]=Object.assign({},meta[team]||{}, {season:2026,asOf:'2026-06-29',source:'駒澤大学スポーツ新聞編集部 2026新入生特集・公式競技結果'});

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
  if(!resolver?.currentRows || resolver.__komazawaOfficialAudit20260911)return;
  const base=resolver.currentRows.bind(resolver);
  const teamNorm=s=>String(s||'').normalize('NFKC').replace('國學院大学','國學院大學').trim();
  resolver.currentRows=function(currentTeam){
    const rows=base(currentTeam).map(r=>({...r,sources:Array.isArray(r.sources)?r.sources.slice():[]}));
    if(teamNorm(currentTeam)!==team)return rows;
    const byName=new Map(rows.map(r=>[norm(r.name),r]));
    Object.entries(pb).forEach(([name,v])=>{
      const key=norm(name);
      const row=byName.get(key)||{name,grade:grades[name]||'',pb5000:'—',pb10000:'—',half:'—',sources:[]};
      row.grade=grades[name]||row.grade||'';
      row.pb5000=better(row.pb5000,v[0]); row.pb10000=better(row.pb10000,v[1]); row.half=better(row.half,v[2]);
      if(!row.sources.includes('Komazawa University official 2026'))row.sources.push('Komazawa University official 2026');
      if(!byName.has(key)){rows.push(row);byName.set(key,row);}
    });
    return rows.sort((a,b)=>{
      const a10=resolver.timeSeconds(a.pb10000),b10=resolver.timeSeconds(b.pb10000);
      const a5=resolver.timeSeconds(a.pb5000),b5=resolver.timeSeconds(b.pb5000);
      return (a10??Infinity)-(b10??Infinity)||(a5??Infinity)-(b5??Infinity)||a.name.localeCompare(b.name,'ja');
    });
  };
  resolver.__komazawaOfficialAudit20260911=true;
})();
