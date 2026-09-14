// Ensure Daito Bunka's complete official 2026 roster is seeded into the all-athlete directory source.
(() => {
  const team='大東文化大学';
  const roster=window.currentRosterOfficial2026?.[team]||[];
  const verified=window.verifiedCurrentPb2026?.[team]||{};
  const db=window.currentAthletePbJson2026=window.currentAthletePbJson2026||{};
  const rows=Array.isArray(db[team])?db[team]:[];
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const names=new Set(rows.map(r=>norm(r?.name)));
  roster.forEach(([name,grade])=>{
    if(names.has(norm(name)))return;
    const p=verified[name]||['—','—','—'];
    rows.push({
      name,
      grade:Number(grade)||grade||'',
      pb5000:p[0]&&p[0]!=='—'?p[0]:null,
      pb10000:p[1]&&p[1]!=='—'?p[1]:null,
      half:p[2]&&p[2]!=='—'?p[2]:null
    });
    names.add(norm(name));
  });
  db[team]=rows;
  const meta=window.currentAthletePbJsonMeta2026=window.currentAthletePbJsonMeta2026||{};
  meta[team]=Object.assign({},meta[team]||{}, {
    season:2026,
    data_as_of:'2026-09-11',
    verification_status:'official_reverified',
    athlete_count:roster.length
  });
})();

// Load official current-roster/PB audits before the athlete directories are built.
if(typeof document!=='undefined' && document.readyState==='loading'){
  document.write('<script src="current-pb-audit-kanagawa-20260913.js?v=20260913-audit1"><\/script>');
  document.write('<script src="current-pb-audit-soka-20260913.js?v=20260913-audit1"><\/script>');
  document.write('<script src="current-pb-audit-teikyo-20260914.js?v=20260914-audit1"><\/script>');
  document.write('<script src="current-pb-audit-nihon-20260914.js?v=20260914-audit1"><\/script>');
  document.write('<script src="current-pb-audit-kokugakuin-20260914.js?v=20260914-audit1"><\/script>');
}
