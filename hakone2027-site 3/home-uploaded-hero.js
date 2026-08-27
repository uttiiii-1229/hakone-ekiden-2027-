// Replace the generated runner illustration on the home screen with the uploaded sketch image.
(() => {
  function applyUploadedHero(){
    document.querySelectorAll('.home-v2-art').forEach((art) => {
      if (art.querySelector('.uploaded-home-hero')) return;
      art.innerHTML = '<img class="uploaded-home-hero" src="home-hero-sketch.webp" alt="東京箱根間往復大学駅伝競走のスタートを描いたスケッチ風イラスト">';
    });
  }

  const appRoot = document.querySelector('#app');
  if (appRoot) {
    new MutationObserver(applyUploadedHero).observe(appRoot, {childList:true, subtree:true});
  }
  applyUploadedHero();
})();
