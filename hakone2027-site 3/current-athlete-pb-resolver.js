// Resolve current (2026 season) athlete PBs from roster, verified PB snapshots and 2026 official meet results.
(() => {
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const teamNorm=s=>String(s||'').normalize('NFKC').replace('國學院大学','國學院大學').trim();

  function timeSeconds(v){
    const s=String(v||'').trim();
    if(!s||s==='—') return null;
    const p=s.split(':').map(Number);
    if(p.some(x=>!Number.isFinite(x))) return null;
    if(p.length===2) return p[0]*60+p[1];
    if(p.length===3) return p[0]*3600+p[1]*60+p[2];
    return null;
  }
  function better(a,b){
    const av=timeSeconds(a),bv=timeSeconds(b);
    if(av===null) return b||'—';
    if(bv===null) return a||'—';
    return bv<av?b:a;
  }
  function eventMetric(name=''){
    const n=String(name).normalize('NFKC').toLowerCase();
    if(/5000m\s*w|5000mw|競歩|walk/.test(n)) return null;
    if(/10000m\s*w|10000mw|競歩|walk/.test(n)) return null;
    if(/ハーフ|half\s*marathon/.test(n)) return 'half';
    if(/10000m/.test(n)) return 'pb10000';
    if(/5000m/.test(n)) return 'pb5000';
    return null;
  }
  function recordCandidate(v){
    const s=String(v||'').trim();
    return timeSeconds(s)!==null?s:null;
  }
  function normalizeGrade(v){
    const s=String(v??'').normalize('NFKC').trim().replace(/年生?$/,'');
    return /^[1-5]$/.test(s)?s:'';
  }

  function currentRows(team){
    team=teamNorm(team);

    // The supplied 2026 JSON is the current-roster/PB baseline. Officially verified
    // audit overrides must still be merged on top; otherwise later official PB fixes
    // would never reach University Data / All Athlete Directory for JSON-backed teams.
    const supplied=window.currentAthletePbJson2026?.[team]||[];
    if(supplied.length){
      const rows=supplied.map(r=>({
        name:String(r.name||'').trim(),
        grade:normalizeGrade(r.grade),
        pb5000:r.pb5000||'—',
        pb10000:r.pb10000||'—',
        half:r.half||'—',
        sources:['2026 PB JSON baseline']
      }));
      const byName=new Map(rows.map(r=>[norm(r.name),r]));
      Object.entries(window.verifiedCurrentPb2026?.[team]||{}).forEach(([name,pb])=>{
        const r=byName.get(norm(name));
        if(!r) return; // PB snapshot must not create current membership.
        if(pb?.[0]&&pb[0]!=='—') r.pb5000=better(r.pb5000,pb[0]);
        if(pb?.[1]&&pb[1]!=='—') r.pb10000=better(r.pb10000,pb[1]);
        if(pb?.[2]&&pb[2]!=='—') r.half=better(r.half,pb[2]);
        r.sources.push('verified current PB audit');
      });
      return rows.sort((a,b)=>{
        const a10=timeSeconds(a.pb10000),b10=timeSeconds(b.pb10000);
        const a5=timeSeconds(a.pb5000),b5=timeSeconds(b.pb5000);
        return (a10??Infinity)-(b10??Infinity)||(a5??Infinity)-(b5??Infinity)||a.name.localeCompare(b.name,'ja');
      });
    }

    const map=new Map();
    const upsert=(name,data={})=>{
      if(!name) return;
      const key=norm(name);
      const prev=map.get(key)||{name:String(name).trim(),grade:'',pb5000:'—',pb10000:'—',half:'—',sources:new Set()};
      const g=normalizeGrade(data.grade);
      if(g) prev.grade=g;
      if(data.pb5000&&data.pb5000!=='—') prev.pb5000=better(prev.pb5000,data.pb5000);
      if(data.pb10000&&data.pb10000!=='—') prev.pb10000=better(prev.pb10000,data.pb10000);
      if(data.half&&data.half!=='—') prev.half=better(prev.half,data.half);
      if(data.source) prev.sources.add(data.source);
      map.set(key,prev);
    };

    // Authoritative membership must come from an official/current roster when available.
    const officialRoster=window.currentRosterOfficial2026?.[team]||[];
    const legacyRoster=window.fullRosterData?.[team]||[];
    const gradeResolver=window.currentAthleteGradeResolver2026;
    const authoritativeRoster=officialRoster.length?officialRoster:legacyRoster;
    const hasAuthoritativeRoster=authoritativeRoster.length>0;
    const gradeCandidates=new Map();
    const rememberGrade=(name,grade)=>{
      const g=normalizeGrade(grade);
      if(name&&g&&!gradeCandidates.has(norm(name))) gradeCandidates.set(norm(name),g);
    };
    officialRoster.forEach(r=>rememberGrade(r?.[0],r?.[1]));
    legacyRoster.forEach(r=>rememberGrade(r?.[0],r?.[1]));
    (window.expandedTopAthletes2027?.[team]||[]).forEach(r=>rememberGrade(r?.[0],r?.[1]));

    authoritativeRoster.forEach(r=>upsert(r?.[0],{
      grade:gradeResolver?.get(team,r?.[0])||r?.[1],
      pb10000:officialRoster.length?'—':r?.[2],
      half:officialRoster.length?'—':r?.[3],
      source:officialRoster.length?'official current roster':'2026 roster'
    }));

    // For universities without a full current roster snapshot, an athlete is still
    // eligible when the dedicated grade DB has 2026 academic-year evidence.
    if(!hasAuthoritativeRoster){
      Object.keys(window.verifiedCurrentPb2026?.[team]||{}).forEach(name=>{
        const g=gradeResolver?.get(team,name)||'';
        if(g) upsert(name,{grade:g,source:'2026 grade DB membership'});
      });
    }

    const isKnownCurrent=name=>map.has(norm(name));

    // PB snapshots are enrichment only. They must never create a "current" athlete
    // when an authoritative roster exists.
    (window.expandedTopAthletes2027?.[team]||[]).forEach(r=>{
      if(!isKnownCurrent(r?.[0])) return;
      upsert(r?.[0],{
        grade:r?.[1],pb5000:r?.[2],pb10000:r?.[3],half:r?.[4],source:'legacy selected PB enrichment'
      });
    });

    Object.entries(window.verifiedCurrentPb2026?.[team]||{}).forEach(([name,pb])=>{
      if(!isKnownCurrent(name)) return;
      upsert(name,{
        pb5000:pb?.[0],pb10000:pb?.[1],half:pb?.[2],source:'verified current PB'
      });
    });

    // 2026 meet results can update records, but cannot bypass an authoritative roster.
    const meets=window.universityMeetResultsAutoDB?.meets||{};
    Object.values(meets).forEach(meet=>{
      if(Number(meet?.year)!==2026) return;
      Object.entries(meet?.events||{}).forEach(([eventName,event])=>{
        const metric=eventMetric(eventName);
        const rows=Array.isArray(event)?event:event?.rows||[];
        rows.forEach(r=>{
          if(teamNorm(r?.[2])!==team) return;
          const name=r?.[1];
          rememberGrade(name,r?.[3]);
          if(hasAuthoritativeRoster && !isKnownCurrent(name)) return;
          if(!hasAuthoritativeRoster && !isKnownCurrent(name)) upsert(name,{grade:r?.[3],source:'2026 official meet membership'});
          const comment=String(r?.[5]||'');
          const val=metric&&/\bPB\b|自己ベスト|自己新/i.test(comment)?recordCandidate(r?.[4]):null;
          const data={source:'2026 official meet PB'};
          if(!hasAuthoritativeRoster && r?.[3]) data.grade=r?.[3];
          if(metric&&val) data[metric]=val;
          upsert(name,data);
        });
      });
    });

    map.forEach((r,key)=>{
      const dbGrade=gradeResolver?.get(team,r.name)||'';
      if(dbGrade) r.grade=dbGrade;
      else if(!normalizeGrade(r.grade)){
        const g=gradeCandidates.get(key);
        if(g) r.grade=g;
      }
    });

    const arr=[...map.values()].map(r=>({...r,grade:normalizeGrade(r.grade),sources:[...r.sources]}));
    return arr.sort((a,b)=>{
      const a10=timeSeconds(a.pb10000),b10=timeSeconds(b.pb10000);
      const a5=timeSeconds(a.pb5000),b5=timeSeconds(b.pb5000);
      return (a10??Infinity)-(b10??Infinity)||(a5??Infinity)-(b5??Infinity)||a.name.localeCompare(b.name,'ja');
    });
  }

  window.currentAthletePbResolver={currentRows,timeSeconds,eventMetric,normalizeGrade};
})();