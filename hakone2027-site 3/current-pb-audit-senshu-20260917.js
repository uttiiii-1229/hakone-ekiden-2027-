// Official 2026 Senshu University PB audit.
// Sources:
// - 専修大学陸上競技部「部内ランキング」(2026-09-22確認)
// - 専修大学陸上競技部 2026年度大会結果
// - 専修大学陸上競技部「全日本予選会 最終エントリー」(foreign-name identity/current roster confirmation)
// Only university-official PB/ranking values or results explicitly marked 自己新/PB are applied.
// Missing values are never inferred. The resolver keeps a faster existing verified PB when present.
(()=>{
  const team='専修大学';
  const updates=[
    {name:'ダンカン マイナ',pb5000:'13:31.54',pb10000:'27:52.97',half:'1:01:46'},
    {name:'ガユ サミュエル',pb5000:'13:33.78',pb10000:'28:27.88'},
    {name:'大西 裕翔',pb5000:'14:03.88',pb10000:'29:22.93'},
    {name:'上山 詩樹',pb5000:'14:04.59',pb10000:'28:44.27',half:'1:01:41'},
    {name:'水津 智哉',pb5000:'14:07.30',pb10000:'29:48.88'},
    {name:'大濵 優輝',pb5000:'14:07.48',pb10000:'29:14.98'},
    {name:'西 広翔',pb5000:'14:08.36',pb10000:'29:21.54'},
    {name:'江口 怜臣',pb5000:'14:08.67'},
    {name:'向田 泰誠',pb5000:'14:10.73'},
    {name:'坂元 南紬太',pb5000:'14:15.34'},
    {name:'丹 柊太郎',pb10000:'28:58.64',half:'1:01:56'},
    {name:'西岳 政宗',pb10000:'29:12.37'},
    {name:'和田 晴之',pb10000:'29:13.59',half:'1:03:16'},
    {name:'田口 萩太',pb5000:'14:26.94',pb10000:'29:24.65',half:'1:02:48'},
    {name:'平松 龍青',half:'1:02:05'},
    {name:'具志堅 一斗',half:'1:02:14'},
    {name:'安斎 陸久',half:'1:02:20'},
    {name:'佐藤 陸',half:'1:02:35'},
    {name:'中西 慶士郎',half:'1:03:04'},
    {name:'佐藤 瑞城',pb10000:'30:23.18'},
    {name:'小川 恵裕',pb5000:'14:42.79'},
    {name:'下江 太翔',pb5000:'14:44.03'},
    {name:'戸津 大輝',pb5000:'14:25.80'}
  ];
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  verified[team]=verified[team]||{};
  updates.forEach(u=>{
    const prev=verified[team][u.name]||['—','—','—'];
    verified[team][u.name]=[u.pb5000||prev[0],u.pb10000||prev[1],u.half||prev[2]];
  });
})();

// Official 2026 Josai University PB audit.
// Source: 城西大学 TEAM JOSAI 男子駅伝部公式・歴代記録表 (2026-09-20確認).
(()=>{
  const team='城西大学';
  const updates=[
    {name:'柴田 侑',pb5000:'13:22.46',pb10000:'28:05.07'},
    {name:'中島 巨翔',half:'1:01:24'}
  ];
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  verified[team]=verified[team]||{};
  updates.forEach(u=>{
    const prev=verified[team][u.name]||['—','—','—'];
    verified[team][u.name]=[u.pb5000||prev[0],u.pb10000||prev[1],u.half||prev[2]];
  });
})();

// Waseda official PB audit is mirrored here because this bundle is already loaded by index.html.
// Source: Waseda University Track & Field official athlete profiles / competition results.
(()=>{
  const audits={'早稲田大学':{
    '山口 竣平':['13:17.19','27:59.47','—'],
    '吉倉 ナヤブ直希':['13:37.61','28:13.07','—'],
    '本田 桜二郎':['13:32.61','—','—'],
    '増子 陽季':['—','29:36.19','—'],
    '辻 陽介':['—','31:25.69','—'],
    '増子 陽太':['13:20.35','—','—']
  }};
  const grades={'早稲田大学':{'山口 竣平':'3','吉倉 ナヤブ直希':'3','本田 桜二郎':'1','増子 陽季':'4','辻 陽介':'3','増子 陽太':'1'}};
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  Object.entries(audits).forEach(([team,pb])=>{verified[team]=Object.assign(verified[team]||{},pb);});
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const sec=v=>{const s=String(v||'').trim();if(!s||s==='—')return null;const p=s.split(':').map(Number);if(p.some(x=>!Number.isFinite(x)))return null;if(p.length===3)return p[0]*3600+p[1]*60+p[2];if(p.length===2)return p[0]*60+p[1];return null;};
  const better=(a,b)=>{const av=sec(a),bv=sec(b);if(av==null)return b||'—';if(bv==null)return a||'—';return bv<av?b:a;};
  if(typeof expandedTopAthletes2027!=='undefined'){
    Object.entries(audits).forEach(([team,pb])=>{
      const rows=(expandedTopAthletes2027[team]||[]).map(r=>r.slice());
      const byName=new Map(rows.map(r=>[norm(r[0]),r]));
      Object.entries(pb).forEach(([name,v])=>{
        let row=byName.get(norm(name));
        if(!row && team==='早稲田大学' && norm(name)===norm('増子 陽太')){row=[name,grades[team][name],v[0],v[1],v[2]];rows.push(row);byName.set(norm(name),row);return;}
        if(!row)return;
        row[2]=better(row[2],v[0]);row[3]=better(row[3],v[1]);row[4]=better(row[4],v[2]);
      });
      expandedTopAthletes2027[team]=rows;
    });
  }
  const resolver=window.currentAthletePbResolver;
  if(!resolver?.currentRows||resolver.__wasedaOfficialAudit20260921)return;
  const base=resolver.currentRows.bind(resolver);
  resolver.currentRows=function(currentTeam){
    const team=String(currentTeam||'').normalize('NFKC').trim();
    const rows=base(currentTeam).map(r=>({...r,sources:Array.isArray(r.sources)?r.sources.slice():[]}));
    const pb=audits[team];if(!pb)return rows;
    const byName=new Map(rows.map(r=>[norm(r.name),r]));
    Object.entries(pb).forEach(([name,v])=>{
      let row=byName.get(norm(name));
      if(!row && team==='早稲田大学' && norm(name)===norm('増子 陽太')){row={name,grade:'1',pb5000:v[0],pb10000:v[1],half:v[2],sources:['Waseda official 2026 roster/PB']};rows.push(row);byName.set(norm(name),row);return;}
      if(!row)return;
      row.pb5000=better(row.pb5000,v[0]);row.pb10000=better(row.pb10000,v[1]);row.half=better(row.half,v[2]);if(!row.sources.includes('Waseda official 2026 PB'))row.sources.push('Waseda official 2026 PB');
    });
    return rows.sort((a,b)=>(Number(b.grade)||0)-(Number(a.grade)||0)||String(a.name).localeCompare(String(b.name),'ja'));
  };
  resolver.__wasedaOfficialAudit20260921=true;
})();
