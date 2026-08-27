// Final, render-safe homepage hero replacement.
// Loaded last so later model/page scripts cannot restore the generated SVG artwork.
(() => {
  const HERO_SRC = 'home-hero-sketch.webp?v=20260827-3';
  const HERO_ALT = '東京箱根間往復大学駅伝競走のスタートを描いたスケッチ風イラスト';

  function applyHomeHero(){
    const art = document.querySelector('.home-v2-art');
    if (!art) return;
    let img = art.querySelector('.uploaded-home-hero');
    if (!img) {
      art.innerHTML = '';
      img = document.createElement('img');
      img.className = 'uploaded-home-hero';
      img.alt = HERO_ALT;
      img.loading = 'eager';
      img.decoding = 'async';
      art.appendChild(img);
    }
    if (img.getAttribute('src') !== HERO_SRC) img.setAttribute('src', HERO_SRC);
  }

  // Apply after all current scripts have completed their initial rendering.
  queueMicrotask(applyHomeHero);
  requestAnimationFrame(applyHomeHero);
  window.addEventListener('load', applyHomeHero, {once:true});

  // Any SPA re-render should immediately restore the uploaded image.
  if (typeof render === 'function' && !render.__homeHeroWrapped) {
    const baseRender = render;
    const wrappedRender = function(route='home') {
      const result = baseRender(route);
      if (route === 'home') {
        queueMicrotask(applyHomeHero);
        requestAnimationFrame(applyHomeHero);
      }
      return result;
    };
    wrappedRender.__homeHeroWrapped = true;
    render = wrappedRender;
  }

  const appRoot = document.querySelector('#app');
  if (appRoot) {
    new MutationObserver(() => {
      if (document.querySelector('.home-v2-art')) applyHomeHero();
    }).observe(appRoot, {childList:true, subtree:true});
  }
})();
