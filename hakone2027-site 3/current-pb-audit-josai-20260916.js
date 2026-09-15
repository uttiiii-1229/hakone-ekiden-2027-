// 城西大学 2026年度 現役長距離選手・公式競技結果PB監査
// Source: 関東学生陸上競技連盟「関東学生網走夏季記録挑戦競技会」2026-07-12
(() => {
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  const team='城西大学';
  const pb=verified[team]=verified[team]||{};
  const add=(name,p5000='—',p10000='—',half='—')=>{
    const old=pb[name]||['—','—','—'];
    pb[name]=[p5000==='—'?old[0]||'—':p5000,p10000==='—'?old[1]||'—':p10000,half==='—'?old[2]||'—':half];
  };
  // KGRR official result explicitly marks this performance as PB.
  add('徳永 航大','—','29:53.72','—');
})();
