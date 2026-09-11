// Current-athlete PB audit: Juntendo / Toyo / Senshu — updated 2026-09-12
// Sources: Kanto Student Athletics Federation official 2026 Kanto Inter-University results;
// Senshu University Athletics Club official 2026 meet results.
// Only results explicitly marked PB/self-best by the official result system are applied. Missing values are never inferred.
(() => {
  const audits={
    '順天堂大学':{
      '松尾 和真':['—','28:23.90','—']
    },
    '東洋大学':{
      '濱中 尊':['—','28:56.97','—']
    },
    '専修大学':{
      '佐藤 瑞城':['—','30:23.18','—'],
      '水津 智哉':['—','29:48.88','—'],
      '小川 恵裕':['14:42.79','—','—'],
      '下江 太翔':['14:44.03','—','—'],
      '戸津 大輝':['14:25.80','—','—'],
      '田口 萩太':['14:26.94','—','—']
    }
  };
  const grades={
    '順天堂大学':{'松尾 和真':'2'},
    '東洋大学':{'濱中 尊':'4'},
    '専修大学':{
      '佐藤 瑞城':'1','水津 智哉':'3','小川 恵裕':'1','下江 太翔':'1','戸津 大輝':'3','田口 萩太':'3'
    }
  };
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  Object.entries(audits).forEach(([team,pb])=>{
    verified[team]=Object.assign(verified[team]||{},pb);
  });

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
    Object.entries(audits).forEach(([team,pb])=>{
      const rows=(expandedTopAthletes2027[team]||[]).map(r=>r.slice());
      const byName=new Map(rows.map(r=>[norm(r[0]),r]));
      Object.entries(pb).forEach(([name,v])=>{
        const key=norm(name);
        let row=byName.get(key);
        if(!row){row=[name,grades[team]?.[name]||'','—','—','—'];rows.push(row);byName.set(key,row);}
        if(!row[1])row[1]=grades[team]?.[name]||'';
        row[2]=better(row[2],v[0]); row[3]=better(row[3],v[1]); row[4]=better(row[4],v[2]);
      });
      rows.sort((a,b)=>(sec(a[3])??Infinity)-(sec(b[3])??Infinity)||(sec(a[2])??Infinity)-(sec(b[2])??Infinity)||String(a[0]).localeCompare(String(b[0]),'ja'));
      expandedTopAthletes2027[team]=rows;
    });
  }

  const resolver=window.currentAthletePbResolver;
  if(!resolver?.currentRows || resolver.__juntendoToyoSenshuOfficialAudit20260912)return;
  const base=resolver.currentRows.bind(resolver);
  const teamNorm=s=>String(s||'').normalize('NFKC').replace('國學院大学','國學院大學').trim();
  resolver.currentRows=function(currentTeam){
    const team=teamNorm(currentTeam);
    const rows=base(currentTeam).map(r=>({...r,sources:Array.isArray(r.sources)?r.sources.slice():[]}));
    const pb=audits[team];
    if(!pb)return rows;
    const byName=new Map(rows.map(r=>[norm(r.name),r]));
    Object.entries(pb).forEach(([name,v])=>{
      const key=norm(name);
      const row=byName.get(key)||{name,grade:grades[team]?.[name]||'',pb5000:'—',pb10000:'—',half:'—',sources:[]};
      row.grade=grades[team]?.[name]||row.grade||'';
      row.pb5000=better(row.pb5000,v[0]); row.pb10000=better(row.pb10000,v[1]); row.half=better(row.half,v[2]);
      const source=team==='専修大学'?'Senshu official 2026':'KGRR official 2026';
      if(!row.sources.includes(source))row.sources.push(source);
      if(!byName.has(key)){rows.push(row);byName.set(key,row);}
    });
    return rows.sort((a,b)=>{
      const a10=resolver.timeSeconds(a.pb10000),b10=resolver.timeSeconds(b.pb10000);
      const a5=resolver.timeSeconds(a.pb5000),b5=resolver.timeSeconds(b.pb5000);
      return (a10??Infinity)-(b10??Infinity)||(a5??Infinity)-(b5??Infinity)||a.name.localeCompare(b.name,'ja');
    });
  };
  resolver.__juntendoToyoSenshuOfficialAudit20260912=true;
})();