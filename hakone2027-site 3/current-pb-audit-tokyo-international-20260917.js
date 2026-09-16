// Official 2026 Tokyo International University PB audit.
// Sources: TIU Ekiden official 2026 results (Hokuren Chitose), 2026-07-04;
// current roster: TIU Ekiden members page, 2026-07.
// Only values explicitly identified as PB by the official university result are added.
(()=>{
  const team='東京国際大学';
  const updates=[
    {name:'アモス・ベット',grade:4,pb5000:'13:11.33',pb10000:null,half:null,source:'東京国際大学 駅伝部 2026年度試合速報・ホクレン千歳5000mA（PB表記）',sourceDate:'2026-07-04'}
  ];
  const norm=s=>String(s||'').normalize('NFKC').replace(/[・･\s　]/g,'').trim();
  const faster=(a,b)=>{
    if(!a||a==='—')return b||a;
    if(!b||b==='—')return a;
    const sec=v=>{const p=String(v).split(':').map(Number);return p.length===3?p[0]*3600+p[1]*60+p[2]:p[0]*60+p[1];};
    return sec(b)<sec(a)?b:a;
  };
  const apply=(rows)=>{
    if(!Array.isArray(rows))return;
    updates.forEach(u=>{
      const r=rows.find(x=>norm(x.name||x[0])===norm(u.name));
      if(!r)return;
      if(Array.isArray(r)){
        if(u.pb5000)r[2]=faster(r[2],u.pb5000);
        if(u.pb10000)r[3]=faster(r[3],u.pb10000);
        if(u.half)r[4]=faster(r[4],u.half);
      }else{
        if(u.pb5000)r.pb5000=faster(r.pb5000,u.pb5000);
        if(u.pb10000)r.pb10000=faster(r.pb10000,u.pb10000);
        if(u.half)r.half=faster(r.half,u.half);
      }
    });
  };
  if(window.currentAthletePbJson2026)apply(window.currentAthletePbJson2026[team]);
  if(window.expandedTopAthletes2027)apply(window.expandedTopAthletes2027[team]);
  window.currentPbAudit20260917=window.currentPbAudit20260917||{};
  window.currentPbAudit20260917[team]=updates;
})();
