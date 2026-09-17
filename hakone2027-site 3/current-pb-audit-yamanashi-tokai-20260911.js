// Current-athlete PB audit: Yamanashi Gakuin / Tokai / Tsukuba — updated 2026-09-18
// Sources: university official current-athlete profiles and Kanto Student Athletics Federation official 2026 results.
// Missing values are never inferred. Existing faster verified values are preserved by the resolver.
(() => {
  const audits={
    '山梨学院大学':{
      '占部 大和':['—','28:34.91','—']
    },
    '東海大学':{
      '永本 脩':['13:34.17','28:44.15','1:02:23'],
      '南坂 柚汰':['13:39.08','28:21.62','1:01:45'],
      '矢口 陽太':['13:41.33','29:09.20','1:06:36'],
      '中野 純平':['13:39.31','28:19.39','1:03:01'],
      '檜垣 蒼':['13:51.99','28:54.44','1:04:35'],
      '平井 璃空':['13:52.41','28:57.47','1:03:32'],
      '佐野 鈴太':['13:54.65','29:26.85','1:03:17'],
      '松山 優太':['13:56.47','29:12.87','1:03:23'],
      '可児 悠貴':['13:53.31','29:07.73','1:04:25'],
      '藤田 悠':['14:37.13','29:48.14','1:03:23'],
      '服部 哩旺':['14:11.79','29:44.55','1:04:26'],
      '下條 拓馬':['14:29.06','29:45.00','1:04:15'],
      '岩根 正悟':['14:07.04','29:18.61','1:04:33'],
      '小木曽 律':['—','30:39.92','1:05:55'],
      '荻原 太陽':['14:35.23','—','—'],
      '髙澤 侑世':['14:31.03','—','—']
    },
    '筑波大学':{
      '小林 晴琉':['14:06.50','—','—']
    }
  };
  const grades={
    '山梨学院大学':{'占部 大和':'4'},
    '東海大学':{
      '永本 脩':'4','南坂 柚汰':'4','矢口 陽太':'4','藤田 悠':'4','服部 哩旺':'4','下條 拓馬':'4',
      '中野 純平':'3','檜垣 蒼':'3','平井 璃空':'3','佐野 鈴太':'3','岩根 正悟':'3',
      '松山 優太':'2','可児 悠貴':'4','小木曽 律':'2','荻原 太陽':'2','髙澤 侑世':'2'
    },
    '筑波大学':{'小林 晴琉':'2'}
  };
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  Object.entries(audits).forEach(([team,pb])=>{ verified[team]=Object.assign(verified[team]||{},pb); });

  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const sec=v=>{ const s=String(v||'').trim(); if(!s||s==='—')return null; const p=s.split(':').map(Number); if(p.some(x=>!Number.isFinite(x)))return null; if(p.length===3)return p[0]*3600+p[1]*60+p[2]; if(p.length===2)return p[0]*60+p[1]; return null; };
  const better=(a,b)=>{ const av=sec(a),bv=sec(b); if(av==null)return b||'—'; if(bv==null)return a||'—'; return bv<av?b:a; };

  if(typeof expandedTopAthletes2027!=='undefined'){
    Object.entries(audits).forEach(([team,pb])=>{
      const rows=(expandedTopAthletes2027[team]||[]).map(r=>r.slice());
      const byName=new Map(rows.map(r=>[norm(r[0]),r]));
      Object.entries(pb).forEach(([name,v])=>{
        const key=norm(name); let row=byName.get(key);
        if(!row){row=[name,grades[team]?.[name]||'','—','—','—'];rows.push(row);byName.set(key,row);}
        if(!row[1])row[1]=grades[team]?.[name]||'';
        row[2]=better(row[2],v[0]); row[3]=better(row[3],v[1]); row[4]=better(row[4],v[2]);
      });
      rows.sort((a,b)=>(sec(a[3])??Infinity)-(sec(b[3])??Infinity)||(sec(a[2])??Infinity)-(sec(b[2])??Infinity)||String(a[0]).localeCompare(String(b[0]),'ja'));
      expandedTopAthletes2027[team]=rows;
    });
  }

  const resolver=window.currentAthletePbResolver;
  if(!resolver?.currentRows || resolver.__kgrrOfficialAudit20260918)return;
  const base=resolver.currentRows.bind(resolver);
  const teamNorm=s=>String(s||'').normalize('NFKC').replace('國學院大学','國學院大學').trim();
  resolver.currentRows=function(currentTeam){
    const team=teamNorm(currentTeam);
    const rows=base(currentTeam).map(r=>({...r,sources:Array.isArray(r.sources)?r.sources.slice():[]}));
    const pb=audits[team]; if(!pb)return rows;
    const byName=new Map(rows.map(r=>[norm(r.name),r]));
    Object.entries(pb).forEach(([name,v])=>{
      const key=norm(name);
      // Do not create membership here when the current roster resolver does not contain the athlete.
      const row=byName.get(key); if(!row)return;
      row.grade=grades[team]?.[name]||row.grade||'';
      row.pb5000=better(row.pb5000,v[0]); row.pb10000=better(row.pb10000,v[1]); row.half=better(row.half,v[2]);
      if(!row.sources.includes('official current profile / KGRR 2026'))row.sources.push('official current profile / KGRR 2026');
    });
    return rows.sort((a,b)=>{ const a10=resolver.timeSeconds(a.pb10000),b10=resolver.timeSeconds(b.pb10000); const a5=resolver.timeSeconds(a.pb5000),b5=resolver.timeSeconds(b.pb5000); return (a10??Infinity)-(b10??Infinity)||(a5??Infinity)-(b5??Infinity)||a.name.localeCompare(b.name,'ja'); });
  };
  resolver.__kgrrOfficialAudit20260918=true;
})();
