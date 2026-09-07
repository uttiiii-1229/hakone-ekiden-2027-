// Verified current-athlete PB overrides — 2026-09-07
// Source priority: university official athlete profiles / official active-player ranking.
// Never infer missing values. This file only overwrites values explicitly verified from official sources.
(() => {
  // full-rosters-v2.js / expanded-athletes-ranking.js declare their datasets with
  // top-level `const`. In a classic script that creates a global lexical binding,
  // but NOT a `window.*` property. Expose the already-loaded datasets explicitly.
  if (typeof fullRosterData !== 'undefined') window.fullRosterData = fullRosterData;
  if (typeof expandedTopAthletes2027 !== 'undefined') window.expandedTopAthletes2027 = expandedTopAthletes2027;

  // Audited against current official university/team athlete pages and official results.
  // Schema: [5000m PB, 10000m PB, half-marathon PB]
  const verified = {
    '青山学院大学': {
      '折田 壮太': ['13:28.78','27:43.92','1:02:51'],
      '飯田 翔大': ['13:34.20','27:51.51','1:03:18'],
      '佐藤 愛斗': ['13:44.48','27:55.93','1:01:57'],
      '鳥井 健太': ['13:36.73','28:10.02','1:02:23'],
      '安島 莉玖': ['13:48.45','28:19.81','1:02:16'],
      '黒田 然': ['13:55.10','28:24.38','1:02:22'],
      '平松 享祐': ['13:34.05','28:25.01','1:02:04'],
      '佐々木 大輝': ['13:46.97','28:26.34','1:03:06'],
      '小河原 陽琉': ['13:41.76','28:37.01','1:01:30'],
      '船越 碧': ['14:03.68','28:37.68','1:02:12']
    },
    '國學院大學': {
      '野中 恒亨': ['13:28.47','27:36.64','1:00:51'],
      '辻原 輝': ['13:35.30','28:24.68','1:00:33'],
      '飯國 新太': ['13:51.98','28:23.35','1:01:51'],
      '尾熊 迅斗': ['13:57.11','28:35.45','1:01:46'],
      '浅野 結太': ['13:47.17','28:47.08','1:01:12'],
      '後村 光星': ['13:47.46','28:30.39','1:03:16'],
      '田中 愛睦': ['13:58.56','28:42.68','1:02:04'],
      '鼻野木 悠翔': ['13:46.50','28:32.24','1:03:13'],
      '岡村 享一': ['14:04.73','28:40.97','1:02:52'],
      '吉田 蔵之介': ['13:57.72','29:04.52','1:02:01']
    },
    '中央大学': {
      '岡田 開成': ['13:19.44','27:37.06','1:01:11'],
      '藤田 大智': ['13:28.68','27:40.50','1:02:55'],
      '本間 颯': ['13:32.77','27:45.05','1:02:45'],
      '濵口 大和': ['13:26.23','27:53.85','1:02:25'],
      '佐藤 大介': ['13:34.57','28:10.82','1:00:40'],
      '並川 颯太': ['13:48.65','28:08.56','1:01:38'],
      '七枝 直': ['13:30.35','28:15.58','1:03:17'],
      '三宅 悠斗': ['13:28.66','27:44.45','1:01:11'],
      '柴田 大地': ['13:43.77','28:47.65','1:01:00'],
      '鈴木 耕太郎': ['13:47.38','28:37.51','1:02:28']
    },
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

  // Reconcile TOP10 dataset (schema: [name, grade, 5000m, 10000m, half]).
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
