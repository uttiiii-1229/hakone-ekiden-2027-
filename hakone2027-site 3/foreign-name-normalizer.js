// Foreign athlete display normalization: all site-visible foreign athlete names use Katakana.
(() => {
  const map = {
    "Max King":"マックス キング","SAMUEL MWANGI":"サムエル ムワンギ","Pat Tarpey":"パット ターピー","GEOFFREY NGUGI":"ジェフリー ングギ",
    "Jonathan Marcus":"ジョナサン マーカス","Jordan Kinley":"ジョーダン キンリー","Courtney Jaworski":"コートニー ジャウォースキー",
    "AZZOUZI ABDELAAZIZ":"アズージ アブデラジズ","Steve Sundell":"スティーブ サンデル","KIBET KIPNG'ENO":"キベト キプンゲノ",
    "Sage Canaday":"セージ カナデイ","Emory Mort":"エモリー モート","Owen Washburn":"オーウェン ウォッシュバーン","Ari Zamir":"アリ ザミール",
    "Jon-Paul Mandelburg":"ジョンポール マンデルバーグ","Ondiba Cosmas":"オンディバ コスマス","ONDIBA Cosmas":"オンディバ コスマス",
    "KIRAGU NJUGUNA":"キラグ ヌジュグナ","Mark Olivier":"マーク オリビエ","Gandu Benjamin":"ガンドゥ ベンジャミン","Ben True":"ベン トゥルー",
    "David Nightingale":"デイビッド ナイチンゲール","Zachary Hine":"ザカリー ハイン","WANJOHI KARUIRU":"ワンジョヒ カルイル",
    "Murat kayali":"ムラト カヤリ","Gitau Daniel":"ギタウ ダニエル","Lucas Meyer":"ルーカス マイヤー","ELHAMRI MOHMAUD":"エルハムリ モハマド",
    "Frank Tinney":"フランク ティニー","Michael Maag":"マイケル マーグ","Zach Hines":"ザック ハインズ","Sam Luff":"サム ラフ",
    "Duncan Muthee":"ダンカン ムセー","Christopher Landry":"クリストファー ランドリー","Scott Smith":"スコット スミス","Landon Peacock":"ランドン ピーコック",
    "Andrew Benford":"アンドリュー ベンフォード","Thomas Robbins":"トーマス ロビンズ","John Maina":"ジョン マイナ","Jonathan Grey":"ジョナサン グレイ",
    "JHON KARIUKI":"ジョン カリウキ","JOHN KARIUKI":"ジョン カリウキ","Elliott Heath":"エリオット ヒース","Julian de Rubira":"ジュリアン デ ルビラ",
    "John Thomas Sullivan":"ジョン トーマス サリバン","Brendan Gregg":"ブレンダン グレッグ","Enock Omwamba":"エノック オムワンバ",
    "Matt LＬano":"マット リャノ","Matt Llano":"マット リャノ","Joseph Stilin":"ジョセフ スティリン","Mark Amirault":"マーク アミロール","Daniel Lowry":"ダニエル ローリー",
    "Kyle Merber":"カイル マーバー","Trevor Van Ackeren":"トレバー バンアッカレン","Brendan Martin":"ブレンダン マーティン","Samuel Pons":"サミュエル ポンス",
    "Tyler Udland":"タイラー アドランド","Christopher Bendtsen":"クリストファー ベンツェン","Alejandro Arroyo Yamin":"アレハンドロ アロヨ ヤミン",
    "Will Geiken":"ウィル ガイケン","Dominic Nyairo":"ドミニク ニャイロ","James Leakos":"ジェームズ リーコス","Geoffrey Gichia":"ジェフリー ギチア",
    "Henry Sterling":"ヘンリー スターリング","John Gregorek":"ジョン グレゴレク","Steven Mangan":"スティーブン マンガン","William Geoghegan":"ウィリアム ゲーガン",
    "Jacob Sienko":"ジェイコブ シエンコ","Jordan Mann":"ジョーダン マン","Brian Eimstad":"ブライアン エイムスタッド","Julian Heninger":"ジュリアン ヘニンガー",
    "Benjamin de Haan":"ベンジャミン デ ハーン","Lawrence Ngure":"ローレンス ングレ","Lawrence NGURE":"ローレンス ングレ","LAWRENCE Ngure":"ローレンス ングレ",
    "Dan Nestor":"ダン ネスター","Daniel Nestor":"ダニエル ネスター","Workneh Derese":"ウォルクネ デレセ","Kevin Dooney":"ケビン ドゥーニー",
    "Matthew McDonald":"マシュー マクドナルド","Ahnida Saleh":"アニダ サレ","Timothy Gorman":"ティモシー ゴーマン","Razini Lemeteki":"ラジニ レメテキ",
    "Christopher Hatler":"クリストファー ハトラー","Connor Clark":"コナー クラーク","James Randon":"ジェームズ ランドン","PHILIP Mulwa":"フィリップ ムルワ",
    "YEGON Vincent":"ビンセント イェゴン","Hugo Milner":"ヒューゴ ミルナー","Will Battershill":"ウィル バターシル","Matthew Pereira":"マシュー ペレイラ",
    "Jakob Kintzele":"ヤコブ キンツェレ","Owen Ritz":"オーウェン リッツ","Kevin Berry":"ケビン ベリー","Kieran Tuntivate":"キーラン タンティベート",
    "Tyler Berg":"タイラー バーグ","Acer Iverson":"エイサー アイバーソン","Robert Miranda":"ロバート ミランダ","Benjamin Rosa":"ベンジャミン ローザ",
    "Graham Blanks":"グラハム ブランクス","Derek Amicon":"デレク アミコン","James Lawrence":"ジェームズ ローレンス",
    "Stephen Muthini":"スティーブン ムチーニ","Solomon Mutuku":"ソロモン ムトゥク"
  };
  const normalize = (name) => {
    const s=String(name||'').trim();
    if(map[s]) return map[s];
    return s;
  };
  window.normalizeForeignAthleteName = normalize;

  const db=window.threeEkidenSectionsDB||{};
  Object.values(db).forEach(race=>Object.values(race||{}).forEach(yd=>{
    Object.values(yd?.sections||{}).forEach(rows=>(rows||[]).forEach(r=>{ if(r?.athlete) r.athlete=normalize(r.athlete); }));
  }));

  if(typeof expandedTopAthletes2027!=='undefined'){
    Object.values(expandedTopAthletes2027).forEach(rows=>(rows||[]).forEach(r=>{ if(r?.[0]) r[0]=normalize(r[0]); }));
  }
})();