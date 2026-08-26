// 大学データページを2026年度の現役選手データ対象校で描画する。
// 2026-08-26: 早稲田大学を追加。

function teamsTemplate(){
  const verifiedTeamNames = ['青山学院大学','國學院大學','中央大学','駒澤大学','早稲田大学'];
  const displayTeams = verifiedTeamNames.map(name => teams.find(t => t.name === name)).filter(Boolean);
  return `<section class="container page"><div class="page-header"><h1>大学・選手データ</h1><p>2026年8月26日更新。第103回箱根駅伝（2027年1月）に出走可能な2026年度在籍選手を対象に、大学公式サイト・公式競技結果で確認したPBを掲載しています。</p></div>${displayTeams.map(t=>`<article class="team-detail"><div class="team-detail-head"><div><h2>${t.name}</h2><p>${t.note}</p></div><div class="score-pill">戦力指数 ${t.score}</div></div>${athleteTable(t.name)}</article>`).join('')}<div class="notice">2026年3月までに卒業した選手は2027年大会向けの現役戦力データから除外しています。「—」は大学公式情報で該当PBを確認できていない項目です。</div></section>`;
}

render(location.hash.replace('#','') || 'home');
