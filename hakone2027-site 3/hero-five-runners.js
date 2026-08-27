// ホームのメインビジュアルを注目5校のデフォルメ駅伝ランナーへ更新
(() => {
  const previousHomeTemplate = homeTemplate;

  const runner = (cls,x,scale,name,detail='') => `
    <g class="${cls}" transform="translate(${x} 0) scale(${scale})">
      <circle class="hr-hair" cx="50" cy="41" r="18"/>
      <circle class="hr-skin" cx="50" cy="48" r="14"/>
      <path class="hr-top" d="M32 68 Q50 58 68 68 L73 116 Q51 126 27 116 Z"/>
      <path class="hr-short" d="M28 114 L72 114 76 148 54 151 49 133 44 151 23 148Z"/>
      ${detail}
      <path class="hr-tasuki" d="M30 68 38 64 70 113 62 118Z"/>
      <text class="hr-tasuki-text" x="45" y="81" transform="rotate(53 45 81)">${name}</text>
      <rect class="hr-bib" x="35" y="94" width="30" height="18" rx="2"/>
      <text class="hr-bibtext" x="50" y="106">${name}</text>
      <line class="hr-arm" x1="31" y1="78" x2="8" y2="104"/><line class="hr-arm" x1="68" y1="78" x2="88" y2="99"/>
      <line class="hr-leg" x1="38" y1="145" x2="25" y2="190"/><line class="hr-leg" x1="61" y1="145" x2="84" y2="180"/>
      <line class="hr-shoe" x1="24" y1="191" x2="6" y2="195"/><line class="hr-shoe" x1="84" y1="180" x2="98" y2="184"/>
    </g>`;

  const artHero = `<section class="hero hero-2027-art"><div class="container hero-art-inner">
    <div class="hero-art-copy"><div class="eyebrow">Data update 2026.08.26</div><h1>想いを襷に、未来をつなぐ。</h1><h2>その一歩が、歴史をつくる。</h2><p>過去10年の三大駅伝実績と最新の選手データをもとに、箱根駅伝2027の展開と優勝争いを読み解く。</p></div>
    <div class="hero-art-stage"><svg viewBox="0 0 620 230" aria-label="注目5校の駅伝ランナーのイラスト" role="img">
      ${runner('runner-waseda',0,.92,'早稲田')}
      ${runner('runner-kokugakuin',105,.98,'國學院','<path class="hr-side" d="M31 70 37 67 43 117 34 119Z"/><path class="hr-side" d="M69 70 63 67 57 117 66 119Z"/>')}
      ${runner('runner-aogaku',222,1.08,'青山学院','<path class="hr-side" d="M32 70 36 68 40 116 34 118Z"/><path class="hr-side" d="M68 70 64 68 60 116 66 118Z"/>')}
      ${runner('runner-chuo',355,1.04,'中央','<path class="hr-side" d="M31 70 38 67 42 117 34 119Z"/><path class="hr-side" d="M69 70 62 67 58 117 66 119Z"/>')}
      ${runner('runner-komazawa',477,1.05,'駒澤','<rect class="hr-band" x="30" y="84" width="40" height="17" rx="1"/><text class="hr-bandtext" x="50" y="95">駒澤大學</text>')}
    </svg></div>
  </div></section>`;

  homeTemplate = function(){
    return previousHomeTemplate().replace(/<section class="hero">[\s\S]*?<\/section>/, artHero);
  };
  if (typeof templates !== 'undefined') templates.home = homeTemplate;
  if ((location.hash.replace('#','') || 'home') === 'home' && typeof render === 'function') render('home');
})();
