// トップページの「注目4校」を早稲田大学を含む「注目5校」に拡張
(() => {
  const originalHomeTemplate = homeTemplate;

  homeTemplate = function () {
    const html = originalHomeTemplate();
    const fiveTeams = teams.slice(0, 5);
    const crests = ['A', 'K', 'C', 'K', 'W'];

    const pickupMarkup = fiveTeams.map((t, i) => `
      <div class="team-card">
        <div class="team-row">
          <div class="crest">${crests[i]}</div>
          <div>
            <h4>${t.name}</h4>
            <p>${t.note}</p>
          </div>
        </div>
        <div class="tags">${t.tags.map(x => `<span class="tag">${x}</span>`).join('')}</div>
      </div>`).join('');

    return html
      .replace('注目4校の戦力', '注目5校の戦力')
      .replace(/<div class="panel-body pickup-grid">[\s\S]*?<\/div><\/article><aside class="sidebar">/, `<div class="panel-body pickup-grid">${pickupMarkup}</div></article><aside class="sidebar">`);
  };

  // 現在ホームを表示している場合は即時反映
  if ((location.hash.replace('#', '') || 'home') === 'home' && typeof render === 'function') {
    render('home');
  }
})();
