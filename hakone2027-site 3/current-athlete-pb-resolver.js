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

  function currentRows(team){
    team=teamNorm(team);
    const map=new Map();
    const upsert=(name,data={})=>{
      if(!name) return;
      const key=norm(name);
      const prev=map.get(key)||{name:String(name).trim(),grade:'',pb5000:'—',pb10000:'—',half:'—',sources:new Set()};
      if(data.grade) prev.grade=String(data.grade);
      if(data.pb5000&&data.pb5000!=='—') prev.pb5000=better(prev.pb5000,data.pb5000);
      if(data.pb10000&&data.pb10000!=='—') prev.pb10000=better(prev.pb10000,data.pb10000);
      if(data.half&&data.half!=='—') prev.half=better(prev.half,data.half);
      if(data.source) prev.sources.add(data.source);
      map.set(key,prev);
    };

    // Authoritative membership must come from an official/current roster when available.
    const officialRoster=window.currentRosterOfficial2026?.[team]||[];
    const legacyRoster=window.fullRosterData?.[team]||[];
    const authoritativeRoster=officialRoster.length?officialRoster:legacyRoster;
    const hasAuthoritativeRoster=authoritativeRoster.length>0;

    authoritativeRoster.forEach(r=>upsert(r?.[0],{
      grade:r?.[1],
      pb10000:officialRoster.length?'—':r?.[2],
      half:officialRoster.length?'—':r?.[3],
      source:officialRoster.length?'official current roster':'2026 roster'
    }));

    const mayEnrich=name=>!hasAuthoritativeRoster||map.has(norm(name));

    // PB snapshots are enrichment only. They must never create a "current" athlete
    // when an authoritative roster exists.
    (window.expandedTopAthletes2027?.[team]||[]).forEach(r=>{
      // Legacy ranking data is never proof of current membership.
      if(!map.has(norm(r?.[0]))) return;
      upsert(r?.[0],{
        grade:r?.[1],pb5000:r?.[2],pb10000:r?.[3],half:r?.[4],source:'legacy selected PB enrichment'
      });
    });

    Object.entries(window.verifiedCurrentPb2026?.[team]||{}).forEach(([name,pb])=>{
      if(!mayEnrich(name)) return;
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
          if(teamNorm(r?.[2])!==team||!mayEnrich(r?.[1])) return;
          const val=metric?recordCandidate(r?.[4]):null;
          const data={grade:r?.[3],source:'2026 official meet'};
          if(metric&&val) data[metric]=val;
          upsert(r?.[1],data);
        });
      });
    });

    const arr=[...map.values()].map(r=>({...r,sources:[...r.sources]}));
    return arr.sort((a,b)=>{
      const a10=timeSeconds(a.pb10000),b10=timeSeconds(b.pb10000);
      const a5=timeSeconds(a.pb5000),b5=timeSeconds(b.pb5000);
      return (a10??Infinity)-(b10??Infinity)||(a5??Infinity)-(b5??Infinity)||a.name.localeCompare(b.name,'ja');
    });
  }

  window.currentAthletePbResolver={currentRows,timeSeconds,eventMetric};
})();