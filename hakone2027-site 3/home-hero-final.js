// Final, render-safe homepage hero replacement.
// Use an absolute GitHub raw URL so the image does not depend on Vercel static asset resolution.
(() => {
  const HERO_SRC = 'https://raw.githubusercontent.com/uttiiii-1229/hakone-ekiden-2027-/main/hakone2027-site%203/home-hero-sketch.webp?v=20260827-4';
  const HERO_FALLBACK = 'https://raw.githubusercontent.com/uttiiii-1229/hakone-ekiden-2027-/main/hakone2027-site%203/hakone-home-hero-2027.jpg?v=20260827-4';
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
      img.referrerPolicy = 'no-referrer';
      art.appendChild(img);
    }

    if (!img.dataset.heroErrorBound) {
      img.dataset.heroErrorBound = '1';
      img.addEventListener('error', () => {
        if (img.src !== HERO_FALLBACK) img.src = HERO_FALLBACK;
      });
    }

    if (img.getAttribute('src') !== HERO_SRC && img.getAttribute('src') !== HERO_FALLBACK) {
      img.setAttribute('src', HERO_SRC);
    }
  }

  queueMicrotask(applyHomeHero);
  requestAnimationFrame(applyHomeHero);
  window.addEventListener('load', applyHomeHero, {once:true});

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
