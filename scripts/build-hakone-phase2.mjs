import fs from 'node:fs/promises';

const meets = {
  2025:104, 2024:103, 2023:102, 2022:101, 2021:99,
  2020:96, 2019:95, 2018:94, 2017:93,
  2016:92, 2015:91, 2014:90, 2013:89, 2012:88,
  2011:87, 2010:86, 2009:85, 2008:84, 2007:83
};

function decodeHtml(s='') {
  const named = {
    '&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'",'&nbsp;':' ',
    '&ensp;':' ','&emsp;':' ','&thinsp;':' '
  };
  s = s.replace(/&(amp|lt|gt|quot|#39|nbsp|ensp|emsp|thinsp);/g, m => named[m] || m);
  s = s.replace(/&#(\d+);/g, (_,n) => String.fromCodePoint(Number(n)));
  s = s.replace(/&#x([0-9a-f]+);/gi, (_,n) => String.fromCodePoint(parseInt(n,16)));
  return s;
}

function cleanCell(html='') {
  return decodeHtml(html)
    .replace(/<br\s*\/?>/gi,' ')
    .replace(/<[^>]*>/g,'')
    .replace(/　/g,' ')
    .replace(/[\t\r\n]+/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}

function normalizeTime(text='') {
  const m = text.match(/(?:(\d+)時間)?(?:(\d+)分)?(?:(\d+)秒)?/);
  if(!m || (!m[1] && !m[2] && !m[3])) return text;
  return `${Number(m[1]||0)}:${String(Number(m[2]||0)).padStart(2,'0')}:${String(Number(m[3]||0)).padStart(2,'0')}`;
}

function parsePage(html) {
  const rows = [];
  const trs = html.match(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi) || [];
  for(const tr of trs) {
    const cells = [...tr.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map(m=>cleanCell(m[1]));
    if(cells.length < 5) continue;
    const [rankRaw, overallRaw, universityRaw, athleteRaw, timeRaw] = cells;
    if(!universityRaw || !athleteRaw || !timeRaw) continue;
    if(!/^\d+$/.test(rankRaw) && rankRaw !== '参考') continue;
    const sectionRank = rankRaw === '0' || rankRaw === '参考' ? '参考' : Number(rankRaw);
    const passingRank = overallRaw === '参考' ? '参考' : (/^\d+$/.test(overallRaw) ? Number(overallRaw) : overallRaw);
    rows.push([
      sectionRank,
      passingRank,
      universityRaw.replace(/國學院大学/g,'國學院大學'),
      athleteRaw,
      normalizeTime(timeRaw)
    ]);
  }
  return rows;
}

const db = {};
for(const [yearStr, tn] of Object.entries(meets)) {
  const year = Number(yearStr);
  db[year] = {};
  for(let section=1; section<=10; section++) {
    const url = `https://www.hakone-ekiden.jp/record/record04.php?sec=${section}&tn=${tn}`;
    console.log(`fetch ${year} ${section}区`);
    const res = await fetch(url, {headers:{'user-agent':'Hakone2027StaticDBBuilder/1.1'}});
    if(!res.ok) throw new Error(`${url} -> ${res.status}`);
    const html = await res.text();
    const rows = parsePage(html);
    // Some historical sections have fewer than 20 classified finishers in the official table.
    // Preserve exactly what the official page lists, while rejecting obviously broken parsing.
    if(rows.length < 10) throw new Error(`${year} ${section}区 parsed only ${rows.length} rows`);
    if(rows.length < 20) console.warn(`${year} ${section}区: official table contains ${rows.length} parsed rows`);
    db[year][section] = rows;
    await new Promise(r=>setTimeout(r,120));
  }
}

const out = `// AUTO-GENERATED from 東京箱根間往復大学駅伝競走 公式「過去の記録」\n// 2007-2025 / Generated: ${new Date().toISOString()}\nwindow.hakonePhase2StaticDB = ${JSON.stringify(db)};\n`;
await fs.writeFile('hakone2027-site 3/hakone-phase2-static-db.js', out, 'utf8');
console.log('wrote hakone2027-site 3/hakone-phase2-static-db.js');
