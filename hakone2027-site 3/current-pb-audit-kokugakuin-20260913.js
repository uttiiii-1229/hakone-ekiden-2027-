// Current-athlete PB audit: Kokugakuin University — 2026-09-13
// Sources: Kokugakuin University Track & Field Club official 2026 results.
// 2026-04-12 Nittaidai: https://www.kokugakuin.com/result/4009/
// 2026-04-25 Nittaidai: https://www.kokugakuin.com/result/4038/
// 2026-05-04 Golden Games: https://www.kokugakuin.com/result/4074/
// 2026-05-21 Kanto Intercollegiate: https://www.kokugakuin.com/result/4083/
// 2026-07-08 Hokuren Abashiri: https://www.kokugakuin.com/result/4192/
// Only records explicitly identified as PB/self-best by official sources are applied.
// Missing values are never inferred.
(() => {
  const team='國學院大學';
  const audits={
    '添田 陽大':['14:26.34','—','—'],
    '古井 海成':['14:10.44','28:51.80','—'],
    '鼻野木 悠翔':['13:51.62','28:32.24','—'],
    '塚本 瑞起':['14:09.23','28:53.15','—'],
    '飯國 新太':['13:51.98','28:23.35','—'],
    '野中 恒亨':['13:28.47','—','—'],
    '野田 顕臣':['—','28:47.16','—'],
    '髙石 樹':['—','27:57.71','—'],
    '辻原 輝':['—','28:24.68','—']
  };
  const grades={
    '添田 陽大':'3','古井 海成':'2','鼻野木 悠翔':'3','塚本 瑞起':'3',
    '飯國 新太':'3','野中 恒亨':'4','野田 顕臣':'2','髙石 樹':'2','辻原 輝':'4'
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
  if(!resolver?.currentRows || resolver.__kokugakuinOfficialAudit20260913)return;
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
      if(!row.sources.includes('Kokugakuin official 2026'))row.sources.push('Kokugakuin official 2026');
      if(!byName.has(key)){rows.push(row);byName.set(key,row);}
    });
    return rows.sort((a,b)=>{
      const a10=resolver.timeSeconds(a.pb10000),b10=resolver.timeSeconds(b.pb10000);
      const a5=resolver.timeSeconds(a.pb5000),b5=resolver.timeSeconds(b.pb5000);
      return (a10??Infinity)-(b10??Infinity)||(a5??Infinity)-(b5??Infinity)||a.name.localeCompare(b.name,'ja');
    });
  };
  resolver.__kokugakuinOfficialAudit20260913=true;
})();
