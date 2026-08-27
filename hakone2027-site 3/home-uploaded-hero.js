// Replace the generated runner illustration on the home screen with the uploaded sketch image.
(() => {
  const PRIMARY_SRC = 'home-hero-sketch.webp?v=20260827-4';
  const FALLBACK_SRC = 'hakone-home-hero-2027.jpg?v=20260827-4';

  function buildImage(){
    const img = document.createElement('img');
    img.className = 'uploaded-home-hero';
    img.alt = '東京箱根間往復大学駅伝競走のスタートを描いたスケッチ風イラスト';
    img.loading = 'eager';
    img.decoding = 'async';
    img.addEventListener('load', () => img.classList.add('is-loaded'));
    img.addEventListener('error', () => {
      if (img.dataset.fallbackApplied === '1') return;
      img.dataset.fallbackApplied = '1';
      img.src = FALLBACK_SRC;
    });
    img.src = PRIMARY_SRC;
    return img;
  }

  function applyUploadedHero(){
    document.querySelectorAll('.home-v2-art').forEach((art) => {
      let img = art.querySelector('.uploaded-home-hero');
      if (!img) {
        art.replaceChildren(buildImage());
        return;
      }
      if (!img.complete || img.naturalWidth > 0) return;
      const replacement = buildImage();
      art.replaceChildren(replacement);
    });
  }

  const appRoot = document.querySelector('#app');
  if (appRoot) {
    new MutationObserver(applyUploadedHero).observe(appRoot, { childList: true, subtree: true });
  }
  applyUploadedHero();
})();
