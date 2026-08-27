// Replace the generated runner illustration on the home screen with the uploaded sketch image.
(() => {
  const HERO_SRC = 'home-hero-sketch.webp?v=20260827-2';

  function applyUploadedHero(){
    document.querySelectorAll('.home-v2-art').forEach((art) => {
      const existing = art.querySelector('.uploaded-home-hero');
      if (existing) {
        if (existing.getAttribute('src') !== HERO_SRC) existing.setAttribute('src', HERO_SRC);
        return;
      }
      art.innerHTML = `<img class="uploaded-home-hero" src="${HERO_SRC}" alt="東京箱根間往復大学駅伝競走のスタートを描いたスケッチ風イラスト" loading="eager" decoding="async">`;
    });
  }

  const appRoot = document.querySelector('#app');
  if (appRoot) {
    new MutationObserver(applyUploadedHero).observe(appRoot, {childList:true, subtree:true});
  }
  applyUploadedHero();
})();
