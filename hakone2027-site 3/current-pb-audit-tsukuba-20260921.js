// Current-athlete PB audit: University of Tsukuba — 2026-09-21
// Source: University of Tsukuba Track & Field official result report, 2026 Kanto Intercollegiate Championships day 4 (2026-05-24).
// Official report explicitly marks Kobayashi Haruru's 5000m 14:06.50 as PB.
(() => {
  const team='筑波大学';
  const audits={'小林晴琉':['14:06.50','—','—']};
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  verified[team]=Object.assign(verified[team]||{},audits);
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const sec=v=>{const s=String(v||'').trim();if(!s||s==='—')return null;const p=s.split(':').map(Number);if(p.some(x=>!Number.isFinite(x)))return null;return p.length===3?p[0]*3600+p[1]*60+p[2]:p.length===2?p[0]*60+p[1]:null;};
  const better=(a,b)=>{const av=sec(a),bv=sec(b);if(av==null)return b||'—';if(bv==null)return a||'—';return bv<av?b:a;};
  if(typeof expandedTopAthletes2027!=='undefined'){
    const rows=(expandedTopAthletes2027[team]||[]).map(r=>r.slice());
    const row=rows.find(r=>norm(r[0])===norm('小林晴琉'));
    if(row) row[2]=better(row[2],'14:06.50');
    expandedTopAthletes2027[team]=rows;
  }
  const resolver=window.currentAthletePbResolver;
  if(!resolver?.currentRows||resolver.__tsukubaOfficialAudit20260921)return;
  const base=resolver.currentRows.bind(resolver);
  resolver.currentRows=function(currentTeam){
    const rows=base(currentTeam).map(r=>({...r,sources:Array.isArray(r.sources)?r.sources.slice():[]}));
    if(norm(currentTeam)!==norm(team))return rows;
    const row=rows.find(r=>norm(r.name)===norm('小林晴琉'));
    if(row){row.pb5000=better(row.pb5000,'14:06.50');if(!row.sources.includes('University of Tsukuba official 2026 Kanto IC result'))row.sources.push('University of Tsukuba official 2026 Kanto IC result');}
    return rows;
  };
  resolver.__tsukubaOfficialAudit20260921=true;
})();
