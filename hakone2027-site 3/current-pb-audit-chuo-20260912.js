// Current-athlete PB audit: Chuo University — 2026-09-12
// Source: Chuo University Ekiden official 2026 competition results.
// Only marks explicitly identified as PB by the official team are applied.
// Missing values are never inferred.
(() => {
  const team='中央大学';
  const audits={
    '岡田 開成':['13:19.44','—','—'],'栗村 凌':['13:21.99','—','—'],'三宅 悠斗':['13:28.66','—','—'],'七枝 直':['13:30.35','—','—'],'田中 伶央':['—','28:45.80','—'],'後藤 琉太朗':['14:04.55','—','—']
  };
  const grades={'岡田 開成':'3','栗村 凌':'1','三宅 悠斗':'2','七枝 直':'3','田中 伶央':'3','後藤 琉太朗':'4'};
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{}; verified[team]=Object.assign(verified[team]||{},audits);
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const sec=v=>{const s=String(v||'').trim();if(!s||s==='—')return null;const p=s.split(':').map(Number);if(p.some(x=>!Number.isFinite(x)))return null;if(p.length===3)return p[0]*3600+p[1]*60+p[2];if(p.length===2)return p[0]*60+p[1];return null;};
  const better=(a,b)=>{const av=sec(a),bv=sec(b);if(av==null)return b||'—';if(bv==null)return a||'—';return bv<av?b:a;};
  if(typeof expandedTopAthletes2027!=='undefined'){const rows=(expandedTopAthletes2027[team]||[]).map(r=>r.slice());const byName=new Map(rows.map(r=>[norm(r[0]),r]));Object.entries(audits).forEach(([name,v])=>{const key=norm(name);let row=byName.get(key);if(!row){row=[name,grades[name]||'','—','—','—'];rows.push(row);byName.set(key,row);}if(!row[1])row[1]=grades[name]||'';row[2]=better(row[2],v[0]);row[3]=better(row[3],v[1]);row[4]=better(row[4],v[2]);});expandedTopAthletes2027[team]=rows;}
  const resolver=window.currentAthletePbResolver;if(!resolver?.currentRows||resolver.__chuoOfficialAudit20260912)return;const base=resolver.currentRows.bind(resolver);resolver.currentRows=function(currentTeam){const rows=base(currentTeam).map(r=>({...r,sources:Array.isArray(r.sources)?r.sources.slice():[]}));if(String(currentTeam||'').normalize('NFKC').trim()!==team)return rows;const byName=new Map(rows.map(r=>[norm(r.name),r]));Object.entries(audits).forEach(([name,v])=>{const key=norm(name);const row=byName.get(key)||{name,grade:grades[name]||'',pb5000:'—',pb10000:'—',half:'—',sources:[]};row.grade=grades[name]||row.grade||'';row.pb5000=better(row.pb5000,v[0]);row.pb10000=better(row.pb10000,v[1]);row.half=better(row.half,v[2]);if(!row.sources.includes('Chuo official 2026'))row.sources.push('Chuo official 2026');if(!byName.has(key)){rows.push(row);byName.set(key,row);}});return rows;};resolver.__chuoOfficialAudit20260912=true;
})();

// Verified current PBs: Aoyama Gakuin University. Official long-distance team pages/results, rechecked 2026-09-16.
(() => {
  const team='青山学院大学';
  const audits={
    '黒田 然':['13:42.18','—','—'],'平松 享祐':['13:34.05','—','—'],'佐藤 愛斗':['13:42.37','—','—'],'石川 浩輝':['13:47.76','—','—'],'松田 祐真':['13:54.64','—','—'],'大竹 実吹':['14:20.27','—','—'],
    '大藪 遙斗':['14:10.22','—','—'],'寺内 頼':['—','30:32.63','—'],'新見 春陽':['14:06.72','—','—'],'古川 陽樹':['13:50.55','—','—'],'前田 蒼空':['14:18.99','—','—'],'横畑 僚大':['—','33:24.28','—']
  };
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};verified[team]=Object.assign(verified[team]||{},audits);
})();

// Verified current PBs: Waseda University. Official Waseda Track & Field competition results.
// 2026-04-24 Japan Inter-University Championships 10000m: both marks explicitly labelled PB.
(() => {
  const team='早稲田大学';
  const audits={'山口 竣平':['—','27:59.47','—'],'吉倉 ナヤブ直希':['—','28:13.07','—']};
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};verified[team]=Object.assign(verified[team]||{},audits);
})();

// Verified current PBs: Chuo Gakuin University. Official 2026 roster/profile pages and meet results.
(() => {
  const team='中央学院大学';
  const audits={
    '林 愛斗':['—','28:47.11','—'],'米田 昂太':['14:14.09','—','—'],'三代田 宏太朗':['—','29:14.26','—'],'小川 優晴':['—','29:16.78','—'],
    '福山 裕咲':['14:37.95','—','—'],'松井 健人':['14:37.25','—','—'],'湯澤 芳優':['14:29.17','29:56.93','1:09:37'],'近藤 健斗':['14:28.09','30:12.98','1:08:17']
  };
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};verified[team]=Object.assign(verified[team]||{},audits);
})();

// Synchronously load the Kanagawa University official profile audit before ranking/page scripts run.
if(typeof document!=='undefined' && document.readyState==='loading'){
  document.write('<script src="current-pb-audit-kanagawa-20260913.js?v=20260913-audit1"><\/script>');
}