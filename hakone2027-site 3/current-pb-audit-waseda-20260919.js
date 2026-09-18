// Current-athlete PB audit: Waseda University — 2026-09-19
// Source: Waseda University Track & Field official competition results.
// Only results explicitly marked PB / 自己新記録 by the official site are applied.
// Missing values are never inferred.
(() => {
  const audits={
    '早稲田大学':{
      '山口 竣平':['13:17.19','27:59.47','—'],
      '吉倉 ナヤブ直希':['13:37.61','28:13.07','—'],
      '本田 桜二郎':['13:32.61','—','—'],
      '増子 陽季':['—','29:36.19','—'],
      '辻 陽介':['—','31:25.69','—']
    }
  };
  const grades={'早稲田大学':{'山口 竣平':'3','吉倉 ナヤブ直希':'3','本田 桜二郎':'1','増子 陽季':'4','辻 陽介':'3'}};
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  Object.entries(audits).forEach(([team,pb])=>{verified[team]=Object.assign(verified[team]||{},pb);});
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const sec=v=>{const s=String(v||'').trim();if(!s||s==='—')return null;const p=s.split(':').map(Number);if(p.some(x=>!Number.isFinite(x)))return null;if(p.length===3)return p[0]*3600+p[1]*60+p[2];if(p.length===2)return p[0]*60+p[1];return null;};
  const better=(a,b)=>{const av=sec(a),bv=sec(b);if(av==null)return b||'—';if(bv==null)return a||'—';return bv<av?b:a;};
  if(typeof expandedTopAthletes2027!=='undefined'){
    Object.entries(audits).forEach(([team,pb])=>{
      const rows=(expandedTopAthletes2027[team]||[]).map(r=>r.slice());
      const byName=new Map(rows.map(r=>[norm(r[0]),r]));
      Object.entries(pb).forEach(([name,v])=>{const row=byName.get(norm(name));if(!row)return;row[2]=better(row[2],v[0]);row[3]=better(row[3],v[1]);row[4]=better(row[4],v[2]);});
      expandedTopAthletes2027[team]=rows;
    });
  }
  const resolver=window.currentAthletePbResolver;
  if(!resolver?.currentRows||resolver.__wasedaOfficialAudit20260919)return;
  const base=resolver.currentRows.bind(resolver);
  resolver.currentRows=function(currentTeam){
    const team=String(currentTeam||'').normalize('NFKC').trim();
    const rows=base(currentTeam).map(r=>({...r,sources:Array.isArray(r.sources)?r.sources.slice():[]}));
    const pb=audits[team];if(!pb)return rows;
    const byName=new Map(rows.map(r=>[norm(r.name),r]));
    Object.entries(pb).forEach(([name,v])=>{const row=byName.get(norm(name));if(!row)return;row.pb5000=better(row.pb5000,v[0]);row.pb10000=better(row.pb10000,v[1]);row.half=better(row.half,v[2]);if(!row.sources.includes('Waseda official 2026 PB'))row.sources.push('Waseda official 2026 PB');});
    return rows;
  };
  resolver.__wasedaOfficialAudit20260919=true;
})();
