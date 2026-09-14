// 日本大学 2026年度 現役長距離選手・公式PB監査
// Source: 秩父宮賜杯第58回全日本大学駅伝関東地区選考会 男子10000m (2026-05-04)
// 後藤玄樹 28:45.16 PB
// https://www.kgrr.org/event/event/2026/osejinukideisejihe/rel005.html
// 方針: 公式大会結果でPB表記を確認できた実記録のみ採用し、未確認値は補完しない。
(() => {
  const team='日本大学';
  const audits={'後藤 玄樹':['—','28:45.16','—']};
  const source='KGRR All Japan University Ekiden Kanto Selection official result (2026-05-04)';
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const toSec=v=>{const p=String(v||'').trim().split(':').map(Number);if(!p.length||p.some(x=>!Number.isFinite(x)))return null;return p.length===3?p[0]*3600+p[1]*60+p[2]:p.length===2?p[0]*60+p[1]:null;};
  const better=(oldValue,newValue)=>{if(!newValue||newValue==='—')return oldValue||'—';const a=toSec(oldValue),b=toSec(newValue);return b!==null&&(a===null||b<a)?newValue:(oldValue||'—');};
  window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  const verified=window.verifiedCurrentPb2026[team]=window.verifiedCurrentPb2026[team]||{};
  Object.entries(audits).forEach(([name,pb])=>{const old=verified[name]||['—','—','—'];verified[name]=[better(old[0],pb[0]),better(old[1],pb[1]),better(old[2],pb[2])];});
  if(window.expandedTopAthletes2027?.[team]) window.expandedTopAthletes2027[team]=window.expandedTopAthletes2027[team].map(row=>{const hit=Object.entries(audits).find(([name])=>norm(name)===norm(row?.[0]));if(!hit)return row;const pb=hit[1];return [row[0],row[1],better(row[2],pb[0]),better(row[3],pb[1]),better(row[4],pb[2])];});
  const resolver=window.currentAthletePbResolver;
  if(resolver?.currentRows&&!resolver.__nihonOfficialAudit20260914){
    const base=resolver.currentRows.bind(resolver);
    resolver.currentRows=function(requestedTeam){const rows=base(requestedTeam);if(norm(requestedTeam)!==norm(team))return rows;return (rows||[]).map(row=>{const hit=Object.entries(audits).find(([name])=>norm(name)===norm(row?.name));if(!hit)return row;const pb=hit[1];return {...row,pb5000:better(row.pb5000,pb[0]),pb10000:better(row.pb10000,pb[1]),half:better(row.half,pb[2]),source};});};
    resolver.__nihonOfficialAudit20260914=true;
  }
})();
