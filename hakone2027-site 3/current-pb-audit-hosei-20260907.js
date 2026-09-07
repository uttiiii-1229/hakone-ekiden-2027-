// Current-athlete PB audit: Hosei University — 2026-09-07
// Sources: Hosei University Track & Field official current member list and official athlete profiles.
// Only athletes visible on the current long-distance member list are added. Missing values are never inferred.
(() => {
  const team='法政大学';
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  const hosei={
    '野田 晶斗':['13:46.87','28:13.20','1:01:32'],
    '平井 蒼大':['14:40.25','28:46.94','1:03:28'],
    '田井中 悠成':['14:10.56','28:48.78','1:02:13'],
    '湯田 陽平兵':['14:03.98','28:52.35','1:03:48'],
    '星野 泰地':['14:01.26','29:00.99','1:02:17'],
    '山際 晃太朗':['14:19.11','29:08.36','1:02:31'],
    '加庭 翔太':['14:18.51','29:09.16','1:04:39'],
    '池永 航':['14:24.55','29:15.47','1:03:16'],
    '重山 弘徳':['14:18.65','29:16.81','1:03:27'],
    '深田 健斗':['14:24.76','29:23.21','1:06:13'],
    '町田 陽太':['14:23.12','29:26.03','1:06:16'],
    '福田 大馳':['14:08.93','29:27.83','1:04:08']
  };
  verified[team]=Object.assign(verified[team]||{},hosei);

  // The official member page proves current membership, but does not expose a grade for every athlete.
  // Extend the unified resolver only for these explicitly verified current members so a partial audit
  // never replaces/excludes the rest of Hosei's roster.
  const resolver=window.currentAthletePbResolver;
  if(!resolver?.currentRows || resolver.__hoseiOfficialAudit20260907) return;
  const base=resolver.currentRows.bind(resolver);
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const teamNorm=s=>String(s||'').normalize('NFKC').replace('國學院大学','國學院大學').trim();
  const better=(a,b)=>{
    const av=resolver.timeSeconds(a),bv=resolver.timeSeconds(b);
    if(av==null) return b||'—';
    if(bv==null) return a||'—';
    return bv<av?b:a;
  };
  resolver.currentRows=function(currentTeam){
    const rows=base(currentTeam).map(r=>({...r,sources:Array.isArray(r.sources)?r.sources.slice():[]}));
    if(teamNorm(currentTeam)!==team) return rows;
    const byName=new Map(rows.map(r=>[norm(r.name),r]));
    Object.entries(hosei).forEach(([name,pb])=>{
      const key=norm(name);
      const row=byName.get(key)||{name,grade:'',pb5000:'—',pb10000:'—',half:'—',sources:[]};
      row.pb5000=better(row.pb5000,pb[0]);
      row.pb10000=better(row.pb10000,pb[1]);
      row.half=better(row.half,pb[2]);
      if(!row.sources.includes('Hosei official current profile 2026')) row.sources.push('Hosei official current profile 2026');
      if(!byName.has(key)){rows.push(row);byName.set(key,row);}
    });
    return rows.sort((a,b)=>{
      const a10=resolver.timeSeconds(a.pb10000),b10=resolver.timeSeconds(b.pb10000);
      const a5=resolver.timeSeconds(a.pb5000),b5=resolver.timeSeconds(b.pb5000);
      return (a10??Infinity)-(b10??Infinity)||(a5??Infinity)-(b5??Infinity)||a.name.localeCompare(b.name,'ja');
    });
  };
  resolver.__hoseiOfficialAudit20260907=true;
})();