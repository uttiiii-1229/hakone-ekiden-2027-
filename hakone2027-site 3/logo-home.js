// 左上ブランドロゴを押したら、どのページからでもホームへ戻す
(() => {
  const brand = document.querySelector('.brand');
  if (!brand) return;

  brand.addEventListener('click', (event) => {
    event.preventDefault();

    // SPAのホームルートへ切り替え
    if (location.hash !== '#home') {
      location.hash = 'home';
    }

    // hashchangeに依存せず確実にホームを再描画
    if (typeof render === 'function') {
      render('home');
    }

    // モバイルメニューが開いていた場合は閉じる
    const nav = document.querySelector('#mainNav');
    const menuButton = document.querySelector('#menuButton');
    if (nav) nav.classList.remove('open');
    if (menuButton) menuButton.setAttribute('aria-expanded', 'false');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
