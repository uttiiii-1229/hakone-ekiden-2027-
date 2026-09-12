// Current-athlete PB audit: Aoyama Gakuin University — 2026-09-13
// Source: Aoyama Gakuin University Track & Field Club (long-distance block) official 2026 results.
// Only marks explicitly identified as PB by the official team are applied.
// Missing values are never inferred.
(() => {
  const team='青山学院大学';
  const audits={
    '黒田 然':['13:42.18','—','—'],
    '平松 享祐':['13:34.05','—','—'],
    '佐藤 愛斗':['13:42.37','—','—'],
    '石川 浩輝':['13:47.76','—','—'],
    '松田 祐真':['13:54.64','—','—'],
    '大竹 実吹':['14:20.27','—','—']
  };
  const grades={
    '黒田 然':'3','平松 享祐':'4','佐藤 愛斗':'3',
    '石川 浩輝':'2','松田 祐真':'2','大竹 実吹':'1'
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
  if(!resolver?.currentRows || resolver.__aoyamaOfficialAudit20260913)return;
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
      if(!row.sources.includes('Aoyama Gakuin official 2026'))row.sources.push('Aoyama Gakuin official 2026');
      if(!byName.has(key)){rows.push(row);byName.set(key,row);}
    });
    return rows.sort((a,b)=>{
      const a10=resolver.timeSeconds(a.pb10000),b10=resolver.timeSeconds(b.pb10000);
      const a5=resolver.timeSeconds(a.pb5000),b5=resolver.timeSeconds(b.pb5000);
      return (a10??Infinity)-(b10??Infinity)||(a5??Infinity)-(b5??Infinity)||a.name.localeCompare(b.name,'ja');
    });
  };
  resolver.__aoyamaOfficialAudit20260913=true;
})();
