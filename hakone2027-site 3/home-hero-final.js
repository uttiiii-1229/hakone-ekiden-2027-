// Stable homepage hero replacement using a normal local JPEG asset.
(() => {
  const HERO_SRC = 'home-hero-stable.jpg?v=20260828-1';

  function applyHero() {
    document.querySelectorAll('.home-v2-art').forEach((art) => {
      const current = art.querySelector('img.home-hero-stable');
      if (current) return;

      const img = document.createElement('img');
      img.className = 'uploaded-home-hero home-hero-stable';
      img.src = HERO_SRC;
      img.alt = '東京箱根間往復大学駅伝競走のスタートを描いたスケッチ風イラスト';
      img.loading = 'eager';
      img.decoding = 'async';
      art.replaceChildren(img);
    });
  }

  const root = document.getElementById('app');
  if (root) {
    const observer = new MutationObserver(() => requestAnimationFrame(applyHero));
    observer.observe(root, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyHero, { once: true });
  } else {
    applyHero();
  }
})();
