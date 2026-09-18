// Official 2026 current-athlete PB audit additions.
// Sources are official university competition results; only values explicitly marked PB/self-best are applied.
(()=>{
  const datasets={
    '東京国際大学':[
      {name:'アモス・ベット',grade:4,pb5000:'13:11.33',pb10000:null,half:null,source:'東京国際大学 駅伝部 2026年度試合速報・ホクレン千歳5000mA（PB表記）',sourceDate:'2026-07-04'}
    ],
    '早稲田大学':[
      {name:'山口竣平',grade:3,pb5000:'13:17.19',pb10000:'27:59.47',half:null,source:'早稲田大学競走部 公式競技結果（PB表記）',sourceDate:'2026-07-04'},
      {name:'吉倉ナヤブ直希',grade:3,pb5000:'13:37.61',pb10000:'28:13.07',half:null,source:'早稲田大学競走部 公式競技結果（PB表記）',sourceDate:'2026-07-04'},
      {name:'本田桜二郎',grade:1,pb5000:'13:32.61',pb10000:null,half:null,source:'早稲田大学競走部 ホクレン千歳5000mB（PB表記）',sourceDate:'2026-07-04'},
      {name:'増子陽季',grade:4,pb5000:null,pb10000:'29:36.19',half:null,source:'早稲田大学競走部 第9回早稲田大学競技会（PB表記）',sourceDate:'2026-02-14'},
      {name:'辻陽介',grade:3,pb5000:null,pb10000:'31:25.69',half:null,source:'早稲田大学競走部 第9回早稲田大学競技会（PB表記）',sourceDate:'2026-02-14'}
    ]
  };
  const norm=s=>String(s||'').normalize('NFKC').replace(/[・･\s　]/g,'').trim();
  const faster=(a,b)=>{
    if(!a||a==='—')return b||a;
    if(!b||b==='—')return a;
    const sec=v=>{const p=String(v).split(':').map(Number);return p.length===3?p[0]*3600+p[1]*60+p[2]:p[0]*60+p[1];};
    return sec(b)<sec(a)?b:a;
  };
  const apply=(rows,updates)=>{
    if(!Array.isArray(rows))return;
    updates.forEach(u=>{
      const r=rows.find(x=>norm(x.name||x[0])===norm(u.name));
      if(!r)return; // never create current membership from a PB result alone
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
  Object.entries(datasets).forEach(([team,updates])=>{
    if(window.currentAthletePbJson2026)apply(window.currentAthletePbJson2026[team],updates);
    if(window.expandedTopAthletes2027)apply(window.expandedTopAthletes2027[team],updates);
    const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
    verified[team]=verified[team]||{};
    updates.forEach(u=>{
      const prev=verified[team][u.name]||['—','—','—'];
      verified[team][u.name]=[faster(prev[0],u.pb5000),faster(prev[1],u.pb10000),faster(prev[2],u.half)];
    });
  });
  window.currentPbAudit20260917=window.currentPbAudit20260917||{};
  Object.entries(datasets).forEach(([team,updates])=>{window.currentPbAudit20260917[team]=updates;});
})();
