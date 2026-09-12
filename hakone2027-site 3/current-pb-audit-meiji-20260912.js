// Current-athlete PB audit: Meiji University — 2026-09-12
// Source: Meiji University Track & Field Club official 2026 competition results.
// Only marks/results explicitly identified as PB by the official club are applied.
// Missing values are never inferred.
(() => {
  const team='明治大学';
  const audits={
    '田中 秀磨':['14:24.76','—','—'],
    '小松 映智':['14:21.67','30:45.45','—'],
    '三平 弦徳':['14:24.19','—','—'],
    '阿部 宥人':['14:16.09','—','—'],
    '河田 珠夏':['14:19.86','—','—'],
    '綾 秀人':['14:16.69','—','—'],
    '大江 秀弥':['14:09.10','29:45.19','—']
  };
  const grades={
    '田中 秀磨':'1','小松 映智':'2','三平 弦徳':'2','阿部 宥人':'2',
    '河田 珠夏':'2','綾 秀人':'1','大江 秀弥':'1'
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
  if(!resolver?.currentRows || resolver.__meijiOfficialAudit20260912)return;
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
      if(!row.sources.includes('Meiji official 2026'))row.sources.push('Meiji official 2026');
      if(!byName.has(key)){rows.push(row);byName.set(key,row);}
    });
    return rows.sort((a,b)=>{
      const a10=resolver.timeSeconds(a.pb10000),b10=resolver.timeSeconds(b.pb10000);
      const a5=resolver.timeSeconds(a.pb5000),b5=resolver.timeSeconds(b.pb5000);
      return (a10??Infinity)-(b10??Infinity)||(a5??Infinity)-(b5??Infinity)||a.name.localeCompare(b.name,'ja');
    });
  };
  resolver.__meijiOfficialAudit20260912=true;
})();
