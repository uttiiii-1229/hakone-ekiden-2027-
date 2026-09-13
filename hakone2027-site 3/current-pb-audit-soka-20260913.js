// 創価大学 2026年度 現役長距離選手・公式PB監査
// Sources:
// - 第105回関東学生陸上競技対校選手権大会 男子2部10000m (2026-05-21): 小池莉希 27:52.43 PB
//   https://www.kgrr.org/event/event/2026/kan-currywithgyoza/rel086.html
// - ホクレン・ディスタンスチャレンジ2026 千歳大会 男子5000mC (2026-07-04): 村上遵世 13:39.46
//   Official event result was published via JAAF / Hokuren DC official account.
// - 関東学生陸上競技連盟 関東学生網走夏季記録挑戦競技会 男子10000m (2026-07-12): 村上遵世 28:59.56
//   https://www.kgrr.org/event/event/2026/abashiri/rel009.html
// 方針: 公式大会結果で確認できた実記録のみ採用し、未確認値は補完しない。
(() => {
  const team='創価大学';
  const audits={
    '小池 莉希':['—','27:52.43','—'],
    '村上 遵世':['13:39.46','28:59.56','—']
  };
  const grades={'小池 莉希':'4','村上 遵世':'1'};
  const source='KGRR Kanto Intercollegiate / Hokuren Distance Challenge Chitose / KGRR Abashiri official results (2026)';
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const toSec=v=>{
    const p=String(v||'').trim().split(':').map(Number);
    if(!p.length||p.some(x=>!Number.isFinite(x))) return null;
    return p.length===3?p[0]*3600+p[1]*60+p[2]:p.length===2?p[0]*60+p[1]:null;
  };
  const better=(oldValue,newValue)=>{
    if(!newValue||newValue==='—') return oldValue||'—';
    const oldSec=toSec(oldValue),newSec=toSec(newValue);
    if(newSec===null) return oldValue||'—';
    return oldSec===null||newSec<oldSec?newValue:oldValue;
  };

  window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  const verified=window.verifiedCurrentPb2026[team]=window.verifiedCurrentPb2026[team]||{};
  Object.entries(audits).forEach(([name,pb])=>{
    const old=verified[name]||['—','—','—'];
    verified[name]=[
      better(old[0],pb[0]),
      better(old[1],pb[1]),
      better(old[2],pb[2])
    ];
  });

  if(window.expandedTopAthletes2027?.[team]){
    window.expandedTopAthletes2027[team]=window.expandedTopAthletes2027[team].map(row=>{
      const hit=Object.entries(audits).find(([name])=>norm(name)===norm(row?.[0]));
      if(!hit) return row;
      const [name,pb]=hit;
      return [row[0],grades[name]||row[1],better(row[2],pb[0]),better(row[3],pb[1]),better(row[4],pb[2])];
    });
  }

  const resolver=window.currentAthletePbResolver;
  if(resolver?.currentRows&&!resolver.__sokaOfficialAudit20260913){
    const baseCurrentRows=resolver.currentRows.bind(resolver);
    resolver.currentRows=function(requestedTeam){
      const rows=baseCurrentRows(requestedTeam);
      if(norm(requestedTeam)!==norm(team)) return rows;
      return (rows||[]).map(row=>{
        const hit=Object.entries(audits).find(([name])=>norm(name)===norm(row?.name));
        if(!hit) return row;
        const [name,pb]=hit;
        return {
          ...row,
          grade:grades[name]||row.grade,
          pb5000:better(row.pb5000,pb[0]),
          pb10000:better(row.pb10000,pb[1]),
          half:better(row.half,pb[2]),
          source
        };
      });
    };
    resolver.__sokaOfficialAudit20260913=true;
  }
})();
