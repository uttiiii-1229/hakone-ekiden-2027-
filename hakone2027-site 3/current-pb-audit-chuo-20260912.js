// Current-athlete PB audit: Chuo University — 2026-09-12
// Source: Chuo University Ekiden official 2026 competition results.
// Only marks explicitly identified as PB by the official team are applied.
// Missing values are never inferred.
(() => {
  const team='中央大学';
  const audits={
    '岡田 開成':['13:19.44','—','—'],
    '栗村 凌':['13:21.99','—','—'],
    '三宅 悠斗':['13:28.66','—','—'],
    '七枝 直':['13:30.35','—','—'],
    '田中 伶央':['—','28:45.80','—'],
    '後藤 琉太朗':['14:04.55','—','—']
  };
  const grades={
    '岡田 開成':'3','栗村 凌':'1','三宅 悠斗':'2','七枝 直':'3',
    '田中 伶央':'3','後藤 琉太朗':'4'
  };

  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  verified[team]=Object.assign(verified[team]||{},audits);

  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const sec=v=>{
    const s=String(v||'').trim(); if(!s||s==='—')return null;
    const p=s.split(':').map(Number); if(p.some(x=>!Number.isFinite(x)))return null;
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
    Object.entries(audits).forEach(([name,v])=>{
      const key=norm(name);
      let row=byName.get(key);
      if(!row){row=[name,grades[name]||'','—','—','—'];rows.push(row);byName.set(key,row);}
      if(!row[1])row[1]=grades[name]||'';
      row[2]=better(row[2],v[0]); row[3]=better(row[3],v[1]); row[4]=better(row[4],v[2]);
    });
    expandedTopAthletes2027[team]=rows;
  }

  const resolver=window.currentAthletePbResolver;
  if(!resolver?.currentRows || resolver.__chuoOfficialAudit20260912)return;
  const base=resolver.currentRows.bind(resolver);
  resolver.currentRows=function(currentTeam){
    const rows=base(currentTeam).map(r=>({...r,sources:Array.isArray(r.sources)?r.sources.slice():[]}));
    if(String(currentTeam||'').normalize('NFKC').trim()!==team)return rows;
    const byName=new Map(rows.map(r=>[norm(r.name),r]));
    Object.entries(audits).forEach(([name,v])=>{
      const key=norm(name);
      const row=byName.get(key)||{name,grade:grades[name]||'',pb5000:'—',pb10000:'—',half:'—',sources:[]};
      row.grade=grades[name]||row.grade||'';
      row.pb5000=better(row.pb5000,v[0]); row.pb10000=better(row.pb10000,v[1]); row.half=better(row.half,v[2]);
      if(!row.sources.includes('Chuo official 2026'))row.sources.push('Chuo official 2026');
      if(!byName.has(key)){rows.push(row);byName.set(key,row);}
    });
    return rows.sort((a,b)=>{
      const a10=resolver.timeSeconds(a.pb10000),b10=resolver.timeSeconds(b.pb10000);
      const a5=resolver.timeSeconds(a.pb5000),b5=resolver.timeSeconds(b.pb5000);
      return (a10??Infinity)-(b10??Infinity)||(a5??Infinity)-(b5??Infinity)||a.name.localeCompare(b.name,'ja');
    });
  };
  resolver.__chuoOfficialAudit20260912=true;
})();