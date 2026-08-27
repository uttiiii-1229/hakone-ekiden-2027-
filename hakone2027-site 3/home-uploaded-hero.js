// Replace the generated runner illustration on the home screen with a verified JPEG copy of the uploaded sketch.
(() => {
  const HERO_SRC = 'home-hero-sketch-final.jpg?v=20260827-5';

  function buildImage(){
    const img = document.createElement('img');
    img.className = 'uploaded-home-hero';
    img.alt = '東京箱根間往復大学駅伝競走のスタートを描いたスケッチ風イラスト';
    img.loading = 'eager';
    img.decoding = 'sync';
    img.src = HERO_SRC;
    return img;
  }

  function applyUploadedHero(){
    document.querySelectorAll('.home-v2-art').forEach((art) => {
      const img = art.querySelector('.uploaded-home-hero');
      if (!img || img.getAttribute('src') !== HERO_SRC) {
        art.replaceChildren(buildImage());
      }
    });
  }

  const appRoot = document.querySelector('#app');
  if (appRoot) {
    new MutationObserver(applyUploadedHero).observe(appRoot, { childList: true, subtree: true });
  }
  applyUploadedHero();
})();
