// 2026-08-28: ホームの総合戦力ランキングを全校アイコン＋単色ゲージに統一。
(() => {
  function patchHomeRankingVisuals(){
    const visuals = (typeof teamVisuals2027 !== 'undefined') ? teamVisuals2027 : {};

    document.querySelectorAll('.home-rank-row').forEach((row) => {
      const nameEl = row.querySelector('.home-rank-team strong');
      const teamName = nameEl ? nameEl.textContent.trim() : '';
      if (!teamName) return;

      const v = visuals[teamName] || {
        gauge:'#49657f',
        icon:(teamName || '•').slice(0,1),
        iconBg:'#49657f',
        iconFg:'#fff'
      };

      const teamWrap = row.querySelector('.home-rank-team');
      let icon = teamWrap && teamWrap.querySelector('.home-rank-mark');
      if (teamWrap && !icon) {
        icon = document.createElement('span');
        icon.className = 'home-rank-mark';
        teamWrap.insertBefore(icon, nameEl);
      }
      if (icon) {
        icon.textContent = v.icon;
        icon.style.background = v.iconBg;
        icon.style.color = v.iconFg;
        icon.style.borderColor = v.iconBg;
        icon.style.backgroundImage = 'none';
      }

      const gauge = row.querySelector('.home-rank-meter > span');
      if (gauge) {
        gauge.style.background = v.gauge;
        gauge.style.backgroundColor = v.gauge;
        gauge.style.backgroundImage = 'none';
      }
    });
  }

  const root = document.getElementById('app');
  if (root) {
    new MutationObserver(() => requestAnimationFrame(patchHomeRankingVisuals))
      .observe(root, {childList:true, subtree:true});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', patchHomeRankingVisuals, {once:true});
  } else {
    patchHomeRankingVisuals();
  }
})();
