// Current-athlete PB audit: Surugadai University — 2026-09-09
// Source: Surugadai University Sports official 2026 Ekiden athlete profiles.
// Only values printed on current athlete profiles are used. Missing values are never inferred.
(() => {
  const team='駿河台大学';
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  const surugadai={
    '浅見 壮太':['14:35','30:55','1:07:19'],
    '大橋 正昊':['13:59.82','29:14','—'],
    '下中野 篤将':['14:26.80','30:29.59','1:08:33'],
    '河原 蒼':['14:45.00','31:47.85','1:06:36'],
    '木立 孝治':['15:37.89','—','—'],
    '藤井 達希':['14:30.00','31:12.97','1:06:58'],
    '江澤 聖悟':['15:05.41','—','—'],
    '侭田 宇生':['14:29.41','30:40.83','1:08:30'],
    '末永 諒馬':['15:18.69','—','—'],
    '佐藤 我駆人':['13:52.03','28:35.78','1:01:49'],
    '宫﨑 太陽':['14:54.44','—','—']
  };
  verified[team]=Object.assign(verified[team]||{},surugadai);

  const grades={
    '浅見 壮太':'4','大橋 正昊':'4','下中野 篤将':'4','河原 蒼':'4','木立 孝治':'4','藤井 達希':'4',
    '江澤 聖悟':'3','侭田 宇生':'3','末永 諒馬':'3','佐藤 我駆人':'3','宫﨑 太陽':'3'
  };
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const timeSeconds=v=>{
    const s=String(v||'').trim(); if(!s||s==='—') return null;
    const p=s.split(':').map(Number); if(p.some(x=>!Number.isFinite(x))) return null;
    if(p.length===3) return p[0]*3600+p[1]*60+p[2];
    if(p.length===2) return p[0]*60+p[1];
    return null;
  };
  const better=(a,b)=>{
    const av=timeSeconds(a),bv=timeSeconds(b);
    if(av==null) return b||'—';
    if(bv==null) return a||'—';
    return bv<av?b:a;
  };

  if(typeof expandedTopAthletes2027!=='undefined'){
    const rows=(expandedTopAthletes2027[team]||[]).map(r=>r.slice());
    const byName=new Map(rows.map(r=>[norm(r[0]),r]));
    Object.entries(surugadai).forEach(([name,pb])=>{
      const key=norm(name);
      let row=byName.get(key);
      if(!row){row=[name,grades[name]||'', '—','—','—'];rows.push(row);byName.set(key,row);}
      if(!row[1]&&grades[name]) row[1]=grades[name];
      row[2]=better(row[2],pb[0]);
      row[3]=better(row[3],pb[1]);
      row[4]=better(row[4],pb[2]);
    });
    rows.sort((a,b)=>(timeSeconds(a[3])??Infinity)-(timeSeconds(b[3])??Infinity)||(timeSeconds(a[2])??Infinity)-(timeSeconds(b[2])??Infinity)||String(a[0]).localeCompare(String(b[0]),'ja'));
    expandedTopAthletes2027[team]=rows;
  }

  const resolver=window.currentAthletePbResolver;
  if(!resolver?.currentRows || resolver.__surugadaiOfficialAudit20260909) return;
  const base=resolver.currentRows.bind(resolver);
  const teamNorm=s=>String(s||'').normalize('NFKC').replace('國學院大学','國學院大學').trim();
  resolver.currentRows=function(currentTeam){
    const rows=base(currentTeam).map(r=>({...r,sources:Array.isArray(r.sources)?r.sources.slice():[]}));
    if(teamNorm(currentTeam)!==team) return rows;
    const byName=new Map(rows.map(r=>[norm(r.name),r]));
    Object.entries(surugadai).forEach(([name,pb])=>{
      const key=norm(name);
      const row=byName.get(key)||{name,grade:grades[name]||'',pb5000:'—',pb10000:'—',half:'—',sources:[]};
      if(!row.grade&&grades[name]) row.grade=grades[name];
      row.pb5000=better(row.pb5000,pb[0]);
      row.pb10000=better(row.pb10000,pb[1]);
      row.half=better(row.half,pb[2]);
      if(!row.sources.includes('Surugadai official current profile 2026')) row.sources.push('Surugadai official current profile 2026');
      if(!byName.has(key)){rows.push(row);byName.set(key,row);}
    });
    return rows.sort((a,b)=>(resolver.timeSeconds(a.pb10000)??Infinity)-(resolver.timeSeconds(b.pb10000)??Infinity)||(resolver.timeSeconds(a.pb5000)??Infinity)-(resolver.timeSeconds(b.pb5000)??Infinity)||a.name.localeCompare(b.name,'ja'));
  };
  resolver.__surugadaiOfficialAudit20260909=true;
})();
