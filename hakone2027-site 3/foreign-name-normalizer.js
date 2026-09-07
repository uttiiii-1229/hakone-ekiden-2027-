// Athlete-name display normalization.
// Goals:
// 1) legacy half-width katakana -> full-width katakana
// 2) foreign athletes -> katakana-only display
// 3) remove duplicated romanized suffixes / legacy reading strings
// 4) keep raw DB values intact upstream; normalize safely at display/runtime layer
(() => {
  const exact = {
    "Max King":"マックス キング","SAMUEL MWANGI":"サムエル ムワンギ","Pat Tarpey":"パット ターピー","GEOFFREY NGUGI":"ジェフリー ングギ",
    "Jonathan Marcus":"ジョナサン マーカス","Jordan Kinley":"ジョーダン キンリー","Courtney Jaworski":"コートニー ジャウォースキー",
    "AZZOUZI ABDELAAZIZ":"アズージ アブデラジズ","AZZOUZI ABDELA AZIZ":"アズージ アブデラジズ","Azzouai Abdelaaziz":"アズージ アブデラジズ",
    "Steve Sundell":"スティーブ サンデル","KIBET KIPNG'ENO":"キベト キプンゲノ","Sage Canaday":"セージ カナデイ",
    "Emory Mort":"エモリー モート","Owen Washburn":"オーウェン ウォッシュバーン","Ari Zamir":"アリ ザミール",
    "Jon-Paul Mandelburg":"ジョンポール マンデルバーグ","Ondiba Cosmas":"オンディバ コスマス","ONDIBA Cosmas":"オンディバ コスマス",
    "KIRAGU NJUGUNA":"キラグ ヌジュグナ","Mark Olivier":"マーク オリビエ","Gandu Benjamin":"ガンドゥ ベンジャミン",
    "Ben True":"ベン トゥルー","David Nightingale":"デイビッド ナイチンゲール","Zachary Hine":"ザカリー ハイン",
    "WANJOHI KARUIRU":"ワンジョヒ カルイル","Murat kayali":"ムラト カヤリ","Gitau Daniel":"ギタウ ダニエル",
    "Lucas Meyer":"ルーカス マイヤー","ELHAMRI MOHMAUD":"エルハムリ モハマド","Frank Tinney":"フランク ティニー",
    "Michael Maag":"マイケル マーグ","Zach Hines":"ザック ハインズ","Sam Luff":"サム ラフ","Duncan Muthee":"ダンカン ムセー",
    "Christopher Landry":"クリストファー ランドリー","Scott Smith":"スコット スミス","Landon Peacock":"ランドン ピーコック",
    "Andrew Benford":"アンドリュー ベンフォード","Thomas Robbins":"トーマス ロビンズ","John Maina":"ジョン マイナ",
    "Jonathan Grey":"ジョナサン グレイ","JHON KARIUKI":"ジョン カリウキ","JOHN KARIUKI":"ジョン カリウキ",
    "Elliott Heath":"エリオット ヒース","Julian de Rubira":"ジュリアン デ ルビラ","John Thomas Sullivan":"ジョン トーマス サリバン",
    "Brendan Gregg":"ブレンダン グレッグ","Enock Omwamba":"エノック オムワンバ","Matt LＬano":"マット リャノ",
    "Matt Llano":"マット リャノ","Joseph Stilin":"ジョセフ スティリン","Mark Amirault":"マーク アミロール",
    "Daniel Lowry":"ダニエル ローリー","Kyle Merber":"カイル マーバー","Trevor Van Ackeren":"トレバー バンアッカレン",
    "Brendan Martin":"ブレンダン マーティン","Samuel Pons":"サミュエル ポンス","Tyler Udland":"タイラー アドランド",
    "Christopher Bendtsen":"クリストファー ベンツェン","Alejandro Arroyo Yamin":"アレハンドロ アロヨ ヤミン",
    "Will Geiken":"ウィル ガイケン","Dominic Nyairo":"ドミニク ニャイロ","James Leakos":"ジェームズ リーコス",
    "Geoffrey Gichia":"ジェフリー ギチア","Henry Sterling":"ヘンリー スターリング","John Gregorek":"ジョン グレゴレク",
    "Steven Mangan":"スティーブン マンガン","William Geoghegan":"ウィリアム ゲーガン","Jacob Sienko":"ジェイコブ シエンコ",
    "Jordan Mann":"ジョーダン マン","Brian Eimstad":"ブライアン エイムスタッド","Julian Heninger":"ジュリアン ヘニンガー",
    "Benjamin de Haan":"ベンジャミン デ ハーン","Lawrence Ngure":"ローレンス ングレ","Lawrence NGURE":"ローレンス ングレ",
    "LAWRENCE Ngure":"ローレンス ングレ","Dan Nestor":"ダン ネスター","Daniel Nestor":"ダニエル ネスター",
    "Workneh Derese":"ウォルクネ デレセ","Kevin Dooney":"ケビン ドゥーニー","Matthew McDonald":"マシュー マクドナルド",
    "Ahnida Saleh":"アニダ サレ","Timothy Gorman":"ティモシー ゴーマン","Razini Lemeteki":"ラジニ レメテキ",
    "Christopher Hatler":"クリストファー ハトラー","Connor Clark":"コナー クラーク","James Randon":"ジェームズ ランドン",
    "PHILIP Mulwa":"フィリップ ムルワ","YEGON Vincent":"ビンセント イェゴン","Hugo Milner":"ヒューゴ ミルナー",
    "Will Battershill":"ウィル バターシル","Matthew Pereira":"マシュー ペレイラ","Jakob Kintzele":"ヤコブ キンツェレ",
    "Owen Ritz":"オーウェン リッツ","Kevin Berry":"ケビン ベリー","Kieran Tuntivate":"キーラン タンティベート",
    "Tyler Berg":"タイラー バーグ","Acer Iverson":"エイサー アイバーソン","Robert Miranda":"ロバート ミランダ",
    "Benjamin Rosa":"ベンジャミン ローザ","Graham Blanks":"グラハム ブランクス","Derek Amicon":"デレク アミコン",
    "James Lawrence":"ジェームズ ローレンス","Stephen Muthini":"スティーブン ムチーニ","Solomon Mutuku":"ソロモン ムトゥク",

    "Paul Morrison":"ポール モリソン","Alasdair Mclean-Foreman":"アラスデア マクリーン＝フォアマン",
    "Komen Edwin Kipkoech":"コメン エドウィン キプコエチ","Patrick Tarpy":"パトリック ターピー",
    "Mike Baird":"マイク ベアード","Josh Ordway":"ジョシュ オールドウェイ","Karl Dusen":"カール デューセン",
    "KIPRONO MUTAI":"キプロノ ムタイ","Frank Macreery":"フランク マクリリー","LOKWIAMUK JOEL":"ロクウィアムク ジョエル",
    "Mike Smith":"マイク スミス","David Nash":"デイビッド ナッシュ",

    "エティーリ":"リチャード エティーリ","Ｒ.エティーリ":"リチャード エティーリ","R.エティーリ":"リチャード エティーリ",
    "キムタイ":"ヴィクター キムタイ","ムチーニ":"スティーブン ムチーニ","ムトゥク":"ソロモン ムトゥク"
  };

  const folded = new Map(Object.entries(exact).map(([k,v]) => [k.normalize('NFKC').trim().toLowerCase(), v]));
  const hasCJK = s => /[一-龯々〆ヵヶぁ-ん]/.test(s);
  const hasKana = s => /[ァ-ヶー]/.test(s);

  function cleanupLegacy(name){
    let s=String(name||'').normalize('NFKC').replace(/[\u3099\u309A](?=\s|$)/g,'').replace(/\s+/g,' ').trim();
    if(!s) return s;

    const mapped = folded.get(s.toLowerCase());
    if(mapped) return mapped;

    // Japanese athletes in old All-Japan tables often include grade + kana reading.
    // "田子 康宏 (3) タゴ ヤスヒロ" -> "田子 康宏"
    if(hasCJK(s)){
      s=s.replace(/\s*\([^)]*\)\s*[ァ-ヶー・\s]+$/,'').trim();
      s=s.replace(/\s+[MD]$/,'').trim();
      return s;
    }

    // Legacy foreign format:
    // "ポール・モリソン MORRISON,Paul" -> "ポール・モリソン"
    // "ディラング・サイモン(1) ディラング・サイモン" -> "ディラング・サイモン"
    if(hasKana(s)){
      s=s.replace(/\s+[A-Za-z][A-Za-z .,'’\-]*$/,'').trim();
      const gradeDup=s.match(/^(.+?)\s*\([^)]*\)\s*\1$/);
      if(gradeDup) s=gradeDup[1];
      s=s.replace(/\s*\([^)]*\)\s*$/,'').trim();
      const parts=s.split(/\s+/);
      if(parts.length>=2){
        const half=Math.floor(parts.length/2);
        if(parts.length%2===0 && parts.slice(0,half).join(' ')===parts.slice(half).join(' ')){
          s=parts.slice(0,half).join(' ');
        }
      }
      return s.replace(/\s*・\s*/g,'・').trim();
    }

    // ASCII-only names should all be covered by the exact map above.
    // If a new one appears, keep it visible rather than corrupting it.
    return s;
  }

  window.normalizeForeignAthleteName = cleanupLegacy;

  const db=window.threeEkidenSectionsDB||{};
  Object.values(db).forEach(race=>Object.values(race||{}).forEach(yd=>{
    Object.values(yd?.sections||{}).forEach(rows=>(rows||[]).forEach(r=>{
      if(r?.athlete) r.athlete=cleanupLegacy(r.athlete);
    }));
  }));

  if(typeof expandedTopAthletes2027!=='undefined'){
    Object.values(expandedTopAthletes2027).forEach(rows=>(rows||[]).forEach(r=>{
      if(r?.[0]) r[0]=cleanupLegacy(r[0]);
    }));
  }
})();
