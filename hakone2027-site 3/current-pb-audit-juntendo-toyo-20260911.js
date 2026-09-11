// Current-athlete PB audit: Juntendo / Toyo / Senshu / Chuo Gakuin — updated 2026-09-12
// Sources: Kanto Student Athletics Federation official 2026 results; university official 2026 rosters/results.
// Only official PB/profile values are applied. Missing values are never inferred.
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
    },
    '中央学院大学':{
      '林 愛斗':['—','28:47.11','—'],
      '米田 昂太':['14:14.09','—','—'],
      '三代田 宏太朗':['—','29:14.26','—'],
      '小川 優晴':['—','29:16.78','—'],
      '湯澤 芳優':['14:29.17','29:56.93','1:09:37'],
      '近藤 健斗':['14:28.09','30:12.98','1:08:17'],
      '藤重 大輔':['14:44.05','30:19.18','1:09:12'],
      '徳善 龍':['14:09.23','29:36.75','—'],
      '福山 裕咲':['14:37.95','—','—'],
      '松井 健人':['14:31.37','—','—'],
      '吉田 翔真':['14:33.08','29:53.74','1:09:07'],
      '保坂 航平':['14:23.58','—','—'],
      '松本 夏祁':['14:37.61','—','—'],
      '神田 雅貴':['14:45.54','—','—'],
      '森 亘生':['14:48.96','30:49.41','1:05:35'],
      '渡邉 大地':['14:55.83','—','—'],
      '藤本 晄太':['14:51.16','—','—'],
      '蓑毛 俊太':['14:57.60','—','—']
    }
  };
  const grades={
    '順天堂大学':{'松尾 和真':'2'},
    '東洋大学':{'濱中 尊':'4'},
    '専修大学':{
      '佐藤 瑞城':'1','水津 智哉':'3','小川 恵裕':'1','下江 太翔':'1','戸津 大輝':'3','田口 萩太':'3'
    },
    '中央学院大学':{
      '林 愛斗':'4','米田 昂太':'3','三代田 宏太朗':'3','小川 優晴':'2','湯澤 芳優':'1','近藤 健斗':'1','藤重 大輔':'1',
      '徳善 龍':'3','福山 裕咲':'2','松井 健人':'1','吉田 翔真':'1','保坂 航平':'3','松本 夏祁':'3','神田 雅貴':'2',
      '森 亘生':'2','渡邉 大地':'1','藤本 晄太':'1','蓑毛 俊太':'1'
    }
  };
  const excluded={
    // The 2026 official member page lists him as a manager, not a current long-distance athlete.
    '中央学院大学':new Set(['鯉沼大'])
  };
  const aliases={
    '中央学院大学':{'渡辺大地':'渡邉 大地'}
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
  const canonicalName=(team,name)=>{
    const map=aliases[team]||{};
    const hit=Object.entries(map).find(([from])=>norm(from)===norm(name));
    return hit?hit[1]:name;
  };
  const isExcluded=(team,name)=>excluded[team]?.has(norm(name))||false;

  if(typeof expandedTopAthletes2027!=='undefined'){
    Object.entries(audits).forEach(([team,pb])=>{
      let rows=(expandedTopAthletes2027[team]||[]).map(r=>{
        const copy=r.slice(); copy[0]=canonicalName(team,copy[0]); return copy;
      }).filter(r=>!isExcluded(team,r[0]));
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
  if(!resolver?.currentRows || resolver.__juntendoToyoSenshuChuoGakuinOfficialAudit20260912)return;
  const base=resolver.currentRows.bind(resolver);
  const teamNorm=s=>String(s||'').normalize('NFKC').replace('國學院大学','國學院大學').trim();
  resolver.currentRows=function(currentTeam){
    const team=teamNorm(currentTeam);
    let rows=base(currentTeam).map(r=>({...r,sources:Array.isArray(r.sources)?r.sources.slice():[]}));
    const pb=audits[team];
    if(!pb)return rows;
    rows=rows.map(r=>({...r,name:canonicalName(team,r.name)})).filter(r=>!isExcluded(team,r.name));
    const byName=new Map(rows.map(r=>[norm(r.name),r]));
    Object.entries(pb).forEach(([name,v])=>{
      const key=norm(name);
      const row=byName.get(key)||{name,grade:grades[team]?.[name]||'',pb5000:'—',pb10000:'—',half:'—',sources:[]};
      row.grade=grades[team]?.[name]||row.grade||'';
      row.pb5000=better(row.pb5000,v[0]); row.pb10000=better(row.pb10000,v[1]); row.half=better(row.half,v[2]);
      const source=team==='専修大学'?'Senshu official 2026':team==='中央学院大学'?'Chuo Gakuin official 2026':'KGRR official 2026';
      if(!row.sources.includes(source))row.sources.push(source);
      if(!byName.has(key)){rows.push(row);byName.set(key,row);}
    });
    return rows.sort((a,b)=>{
      const ag=Number(a.grade)||0,bg=Number(b.grade)||0;
      return bg-ag||a.name.localeCompare(b.name,'ja',{sensitivity:'base'});
    });
  };
  resolver.__juntendoToyoSenshuChuoGakuinOfficialAudit20260912=true;
})();