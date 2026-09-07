// Verified current-athlete PB overrides — 2026-09-07
// Source priority: university official athlete profiles / official active-player ranking.
// Never infer missing values. This file only overwrites values explicitly verified from official sources.
(() => {
  // full-rosters-v2.js / expanded-athletes-ranking.js declare their datasets with
  // top-level `const`. In a classic script that creates a global lexical binding,
  // but NOT a `window.*` property. The all-athlete directory intentionally reads
  // from window.*, so expose the already-loaded datasets explicitly here before
  // applying overrides and before all-athlete-directory-v2.js runs.
  if (typeof fullRosterData !== 'undefined') {
    window.fullRosterData = fullRosterData;
  }
  if (typeof expandedTopAthletes2027 !== 'undefined') {
    window.expandedTopAthletes2027 = expandedTopAthletes2027;
  }

  const verified = {
    '駒澤大学': {
      '桑田 駿介': ['13:39.47','28:07.63','1:00:13'],
      '牟田 凜太': ['13:49.16','28:22.98','1:02:08'],
      '安原 海晴': ['13:52.85','28:42.95','1:01:45'],
      '植阪 嶺児': ['13:49.34','28:23.41','1:02:28'],
      '菅谷 希弥': ['13:59.13','28:44.65','1:01:12'],
      '村上 響': ['14:00.88','29:13.89','1:01:46'],
      '新谷 倖生': ['14:07.65','29:04.64','1:02:11'],
      '小山 翔也': ['13:41.99','29:24.72','1:02:38'],
      '篠 和真': ['13:55.79','29:01.62','1:05:17'],
      '谷中 晴': ['13:49.71','28:34.14','1:00:57']
    }
  };

  const norm = s => String(s || '').normalize('NFKC').replace(/[\s　]+/g,'').trim();

  // Keep a public verified map for future roster expansion beyond TOP10.
  window.verifiedCurrentPb2026 = Object.assign(window.verifiedCurrentPb2026 || {}, verified);

  // Reconcile full roster (schema: [name, grade, 10000m, half]).
  if (window.fullRosterData) {
    Object.entries(verified).forEach(([team, athletes]) => {
      const rows = window.fullRosterData[team] || [];
      rows.forEach(row => {
        const hit = Object.entries(athletes).find(([name]) => norm(name) === norm(row[0]));
        if (!hit) return;
        const [, pb] = hit;
        if (pb[1] && pb[1] !== '—') row[2] = pb[1];
        if (pb[2] && pb[2] !== '—') row[3] = pb[2];
      });
    });
  }

  // Reconcile the TOP10 dataset (schema: [name, grade, 5000m, 10000m, half]).
  // University TOP10 averages/ranks are calculated dynamically from these rows.
  if (window.expandedTopAthletes2027) {
    Object.entries(verified).forEach(([team, athletes]) => {
      const rows = window.expandedTopAthletes2027[team] || [];
      rows.forEach(row => {
        const hit = Object.entries(athletes).find(([name]) => norm(name) === norm(row[0]));
        if (!hit) return;
        const [, pb] = hit;
        row[2] = pb[0] || row[2] || '—';
        row[3] = pb[1] || row[3] || '—';
        row[4] = pb[2] || row[4] || '—';
      });
    });
  }
})();
