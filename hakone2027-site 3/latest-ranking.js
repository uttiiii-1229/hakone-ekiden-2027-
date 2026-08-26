// 2027 箱根駅伝 予想ランキング更新
// 更新日: 2026-08-26
// 根拠: 2026箱根、2025出雲、2025全日本、既存の選手PBデータ。

teams.splice(0, teams.length,
  {
    name:'青山学院大学',
    chance:27.0,
    score:92,
    note:'2026箱根優勝で3連覇。箱根での再現性と選手層を最上位評価',
    tags:['2026箱根1位','3連覇','層の厚さ']
  },
  {
    name:'國學院大學',
    chance:26.0,
    score:91,
    note:'2025出雲優勝・2026箱根2位。長距離PB層も強く青学に肉薄',
    tags:['2025出雲1位','2026箱根2位','ハーフ']
  },
  {
    name:'中央大学',
    chance:18.0,
    score:85,
    note:'2025全日本2位。27分台の主力が揃い、スピード面を高評価',
    tags:['2025全日本2位','27分台','伸びしろ']
  },
  {
    name:'駒澤大学',
    chance:13.0,
    score:82,
    note:'2025全日本優勝。駅伝力は高いが、2027へ向けた卒業戦力の補正を反映',
    tags:['2025全日本1位','伝統','再構築']
  },
  {
    name:'早稲田大学',
    chance:10.0,
    score:80,
    note:'2025出雲2位・2026箱根4位・2025全日本5位で安定して上位',
    tags:['2025出雲2位','2026箱根4位','安定']
  },
  {
    name:'順天堂大学',
    chance:4.0,
    score:76,
    note:'2026箱根3位。箱根適性の高さを評価し、上位候補に追加',
    tags:['2026箱根3位','箱根適性','上昇']
  },
  {
    name:'その他',
    chance:2.0,
    score:68,
    note:'創価・城西・帝京なども今秋の駅伝結果次第で上昇余地あり',
    tags:['ダークホース','今秋注目']
  }
);

// app.js の初回描画後に、同じルートを最新データで再描画する。
render(location.hash.replace('#','') || 'home');

// トップページの更新表示を最新日に合わせる。
const updateLabel = document.querySelector('.eyebrow');
if (updateLabel) updateLabel.textContent = 'Data update 2026.08.26';

const modelLabel = document.querySelector('.quick-card[data-route="prediction"] small');
if (modelLabel) modelLabel.textContent = '試算モデル v0.3';
