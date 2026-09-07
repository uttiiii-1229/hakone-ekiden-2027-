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
    "Ｒ・エティーリ":"リチャード エティーリ","R・エティーリ":"リチャード エティーリ","リチャード・エティーリ":"リチャード エティーリ",
    "RICHARD Etir":"リチャード エティーリ","Richard Etir":"リチャード エティーリ","Richard Etiri":"リチャード エティーリ",
    "V.キムタイ":"ヴィクター キムタイ","Ｖ.キムタイ":"ヴィクター キムタイ","ヴィクター・キムタイ":"ヴィクター キムタイ","キムタイ":"ヴィクター キムタイ",
    "S.キップケメイ":"シャドラック キップケメイ","Ｓ.キップケメイ":"シャドラック キップケメイ",
    "B.キピエゴ":"ブライアン キピエゴ","Ｂ.キピエゴ":"ブライアン キピエゴ",
    "Y.ヴィンセント":"イェゴン ヴィンセント","Ｙ.ヴィンセント":"イェゴン ヴィンセント",
    "S.ムチーニ":"スティーブン ムチーニ","Ｓ.ムチーニ":"スティーブン ムチーニ","ムチーニ":"スティーブン ムチーニ",
    "A.ベット":"アモス ベット","Ａ.ベット":"アモス ベット"
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

  // Some official race tables intentionally use only a surname.
  // Never turn those ambiguous labels into a global athlete ID without context.
  // Identity resolution must include at least team/year/race where available.
  const ambiguousBareAliases = new Set(['エティーリ','キムタイ','ムチーニ']);
  const contextAliases = [
    {team:'東京国際大学',from:2023,to:2026,aliases:['エティーリ'],canonical:'リチャード エティーリ'},
    {team:'城西大学',from:2023,to:2026,aliases:['キムタイ'],canonical:'ヴィクター キムタイ'},
    {team:'創価大学',from:2024,to:2026,aliases:['ムチーニ'],canonical:'スティーブン ムチーニ'}
  ];
  const contextKey=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();

  function canonicalIdentity(name,context={}){
    const raw=String(name||'').normalize('NFKC').replace(/[\u3099\u309A](?=\s|$)/g,'').replace(/\s+/g,' ').trim();
    if(!raw) return raw;
    const team=contextKey(context.team);
    const year=Number(context.year);
    const alias=contextAliases.find(a=>
      contextKey(a.team)===team &&
      a.aliases.some(x=>contextKey(x)===contextKey(raw)) &&
      (!Number.isFinite(year)||(year>=a.from&&year<=a.to))
    );
    if(alias) return alias.canonical;

    // Initial + surname or a full romanized/kana name is explicit enough to use
    // the ordinary display normalizer. Bare surnames remain bare unless the
    // team/year context above proves the identity.
    if(ambiguousBareAliases.has(contextKey(raw))) return raw;
    return cleanupLegacy(raw);
  }

  window.normalizeForeignAthleteName = cleanupLegacy;
  window.canonicalAthleteName = cleanupLegacy;
  window.canonicalAthleteIdentity = canonicalIdentity;

  // IMPORTANT: do not mutate race DB rows here.
  // Historical source labels are evidence and must remain intact. Mutating them
  // at load time destroyed the distinction between "display normalization" and
  // "athlete identity", which could merge a future athlete sharing a surname.
})();
