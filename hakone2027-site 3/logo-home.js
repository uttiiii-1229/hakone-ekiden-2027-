// 左上ブランドロゴを押したら、どのページからでもホームへ戻す
(() => {
  const brand = document.querySelector('.brand');
  if (brand) {
    brand.addEventListener('click', (event) => {
      event.preventDefault();
      if (location.hash !== '#home') location.hash = 'home';
      if (typeof render === 'function') render('home');
      const nav = document.querySelector('#mainNav');
      const menuButton = document.querySelector('#menuButton');
      if (nav) nav.classList.remove('open');
      if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 金栗四三杯ページをトピックメニューへ追加。独立アセットとして遅延読込することで
  // 既存ページの初期描画や他のトピック機能に影響させない。
  const topicMenu=document.querySelector('.topic-dropdown-menu');
  if(topicMenu&&!topicMenu.querySelector('[data-route="kanakuri"]')){
    const button=document.createElement('button');
    button.type='button';
    button.className='race-dropdown-item topic-dropdown-item';
    button.setAttribute('role','menuitem');
    button.dataset.route='kanakuri';
    button.textContent='箱根駅伝 金栗四三杯獲得者';
    topicMenu.appendChild(button);
  }
  const footer=document.querySelector('.footer-links');
  if(footer&&!footer.querySelector('[data-route="kanakuri"]')){
    const button=document.createElement('button');
    button.dataset.route='kanakuri';
    button.textContent='箱根駅伝 金栗四三杯獲得者';
    footer.appendChild(button);
  }
  if(!document.querySelector('link[data-kanakuri-style]')){
    const link=document.createElement('link');
    link.rel='stylesheet';link.href='kanakuri-shiso-cup.css?v=20260910-1';link.dataset.kanakuriStyle='';
    document.head.appendChild(link);
  }
  if(!document.querySelector('script[data-kanakuri-page]')){
    const script=document.createElement('script');
    script.src='kanakuri-shiso-cup.js?v=20260910-1';script.dataset.kanakuriPage='';
    document.body.appendChild(script);
  }
})();
