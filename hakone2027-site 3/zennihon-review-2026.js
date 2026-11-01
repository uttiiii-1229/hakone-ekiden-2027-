// Compare the saved pre-race forecasts with the 2026 race results.
(() => {
  const result=window.threeEkidenStandingsDB?.zennihon?.[2026];
  const splits=window.threeEkidenSectionsDB?.zennihon?.[2026];
  if(!result?.results?.length||!splits?.sections)return;
  const predictions=zennihonFinalScores20261101;
  const orders=zennihonOrders20261030;
  const key=n=>String(n??'').normalize('NFKC').replace(/[\s・･.]/g,'').replace(/椙/g,'榅').replace(/傅/g,'傳').replace(/橋/g,'𣘺');
  const esc=n=>String(n??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  const predictedTeams=new Set(predictions.map(r=>r.team));
  const actual=result.results.filter(r=>predictedTeams.has(r.team)).sort((a,b)=>a.rank-b.rank);
  const actualRank=new Map(actual.map((r,i)=>[r.team,i+1]));
  const predictedRank=new Map(predictions.map((r,i)=>[r.team,i+1]));
  const teamSplits=team=>Array.from({length:8},(_,i)=>splits.sections[i+1].find(r=>r.team===team));
  const errors=actual.map(r=>Math.abs(actualRank.get(r.team)-predictedRank.get(r.team)));
  const perTeam=new Map(actual.map(r=>{const names=orders[r.team],ss=teamSplits(r.team);return [r.team,{placements:ss.filter((s,i)=>key(s.athlete)===key(names[i])).length,selected:ss.filter(s=>names.some(n=>key(n)===key(s.athlete))).length}];}));
  const placements=[...perTeam.values()].reduce((a,r)=>a+r.placements,0),selected=[...perTeam.values()].reduce((a,r)=>a+r.selected,0);
  const seedHits=actual.slice(0,8).filter(r=>predictedRank.get(r.team)<=8).length;
  const pct=(n,d)=>(n/d*100).toFixed(1)+'%';
  const notes={
    '早稲田大学':'1位予想→1位で優勝予想は的中。増子2区30:51、新妻3区32:45、鈴木5区34:31が区間新、工藤8区56:20で締めた。事前に不確定要素とした堀野も6区3位・36:55で支え、全員が区間4位以内。エースだけでなく中盤までの再現性を高く評価すべき内容だった。',
    '國學院大學':'2位予想→2位で一致。飯國4区と吉田6区が区間賞、吉田は36:41の区間新。1区13位から2区5位・3区3位・4区2位と立て直したが、早稲田の2・3・5区での大きな上積みに届かなかった。中盤と長区間の厚みという評価は妥当だった。',
    '創価大学':'5位予想→3位。小池4区2位・33:18、ムチーニ7区2位・50:48、山口8区3位・57:20の組み合わせをなお過小評価した。6区終了時8位から7区終了時5位、最後に3位へ。序盤の1年生起用を慎重に見すぎ、後半2区間で順位を取り戻す幅を小さく見積もった。',
    '青山学院大学':'6位予想→4位。榅山1区区間賞、松田3区5位、黒田4区5位・小河原5区3位・飯田6区4位とつながった。出雲11位と補員を使わない布陣に慎重になりすぎ、実際に走る中盤の4人の安定感を十分反映できなかった。',
    '中央大学':'3位予想→5位。栗村2区13位・32:42で通過12位となり、佐藤大介3区3位、並川6区2位でも先頭争いには届かなかった。確定した中盤・長区間の実績を重く見た一方、序盤で離された後に取り戻す難しさを過小評価した。駒澤とは同タイムだが掲載順位は中央が5位。',
    '駒澤大学':'8位予想→6位。上岡1区3位、鈴木2区3位・30:57、牟田凜太3区6位で通過2位。下級生4人の前半を一括して慎重に採点しすぎた。一方、8区13位・59:48で4位から6位へ下がり、長区間の懸念は一部表れた。前半と最長区間の評価を分けるべきだった。',
    '大東文化大学':'13位予想→7位で最大の見落とし。上田3区2位・33:44、菅﨑4区6位、松浦8区5位・58:06が押し上げた。中澤・清水が走者に入らなかった点を減点しすぎ、代わって走った選手の区間適性を低く見積もった。補員の知名度で確定8人の力を下げないことが改善点。',
    '帝京大学':'4位予想→8位。楠岡2区は30:51の区間新で区間賞となり、通過2位へ。しかし3〜5区は区間10・11・9位、7・8区も9・11位。主軸の実績を高く評価しすぎ、エース区間以外の積み重ねを総合点へ十分反映できなかった。',
    '順天堂大学':'7位予想→9位。池間3区4位、山本5区6位で5区終了時6位だったが、永原6区14位・38:18で通過10位へ。最長区間の変更を主な懸念とした予想に対し、実際の差は6区で大きく広がった。長い2区間だけでなく6区までのつなぎも重く見る必要がある。',
    '日本大学':'9位予想→10位で±1位以内。6区終了時14位からキップケメイ7区区間賞・49:45で10位へ戻した。エースの効果は捉えたが、2〜6区が区間13〜15位で推移した差を小さく見積もった。留学生が走る前の6人の合計を別に評価したい。',
    '東海大学':'11位予想→11位で一致。永本2区4位で通過4位へ浮上したが、7区16位で12位となり、南坂8区6位で11位に戻した。総合順位は当たった一方、中野7区を強みとした評価と、実際の区間ごとの得失にはずれがあった。',
    '神奈川大学':'15位予想→12位。上田2区6位、平川3区8位、山崎4区7位で4区終了時6位。1年生起用を不確実性として下げすぎた。終盤7区12位・8区14位で順位を落としたため、前半の適性と後半の持続力をまとめて減点しない評価が必要。',
    '中央学院大学':'14位予想→13位で±1位以内。1区8位から4区終了時13位となり、その後も13位を維持。小川8区7位・58:26の長区間での粘りは、事前評価より上だった。全区間で大きく崩れない点も含めて評価する。',
    '山梨学院大学':'12位予想→14位。1〜7区は区間11〜17位で、7区終了時15位。キピエゴ8区2位・56:29でも挽回は1つにとどまった。アンカーの強さは正しく捉えたが、そこまでの7人の差を十分に織り込めなかった。',
    '東洋大学':'10位予想→15位。予選会1位と宮崎4区3位の強みを総合評価に広げすぎた。2区21位、7区15位、8区23位と区間ごとの負担が大きく、4区終了時12位から順位を落とした。予選会のハーフ適性と全日本の区間別の速度を分けて評価したい。連戦疲労は結果だけでは断定しない。'
  };
  function sectionCards(team){
    const names=orders[team];return `<div class="forecast-section-grid">${teamSplits(team).map((r,i)=>{const hit=names&&key(names[i])===key(r.athlete);return `<article class="forecast-section-card zen-entry-comparison"><h3>${i+1}区 <small>${ekidenCourse2026.zennihon[i][0].toFixed(1)}km</small></h3><div class="zen-member-line"><span class="zen-member-label">結果速報</span><strong>${esc(r.athlete)}</strong><small>${esc(r.grade)}年 · 区間${r.rank}位 · <b>${r.time}</b>${r.record?' ※区間新':''}<br>通過${r.passingRank==='OPN'?'OPN':r.passingRank+'位'}</small></div>${names?`<div class="zen-member-line zen-predicted-line ${hit?'':'is-change'}"><span class="zen-member-label">事前予想</span><strong>${esc(names[i])}</strong><small>${hit?'配置一致':'配置は不一致'}</small></div>`:''}</article>`;}).join('')}</div>`;
  }
  function teamCard(r){
    const p=predictions.find(p=>p.team===r.team),rank=predictedRank.get(r.team),m=perTeam.get(r.team),delta=p?rank-actualRank.get(r.team):null;
    const [icon,color,ink]=forecastTeamVisual20261012(r.team);
    return `<details class="forecast-rank-card izumo-review-team" style="--forecast-team-color:${color};--forecast-team-ink:${ink}"><summary class="izumo-review-team-summary"><div class="forecast-team-identity"><span class="forecast-team-icon" aria-hidden="true">${icon}</span><h3>${esc(r.team)}</h3></div><div class="izumo-review-line is-official"><span>結果速報</span><strong>${r.rank==='OPN'?'OPN':r.rank+'位'}</strong><span>${r.time}</span></div><div class="izumo-review-line"><span>事前予想</span><strong>${p?rank+'位':'対象外'}</strong><span>${p?p.parts.reduce((a,b)=>a+b,0)+'点':'順位・区間とも未予想'}</span></div>${m?`<p class="izumo-review-delta">${delta===0?'順位的中':delta>0?'予想より'+delta+'順位上':'予想より'+(-delta)+'順位下'} · 配置 ${m.placements}/8 · 選出 ${m.selected}/8</p>`:''}<small class="izumo-review-expand-label">全8区間の結果・予想比較を見る ▾</small></summary>${sectionCards(r.team)}${notes[r.team]?`<h4>予想の振り返り</h4><p>${notes[r.team]}</p>`:''}</details>`;
  }
  function sectionTables(){return `<details class="izumo-review-section-rankings"><summary>全8区間の区間順位・通過順位を見る</summary>${Array.from({length:8},(_,i)=>`<details><summary>${i+1}区 · ${ekidenCourse2026.zennihon[i][0].toFixed(1)}km</summary><div class="table-wrap"><table><thead><tr><th>区間順位</th><th>通過順位</th><th>大学・選手</th><th>タイム</th></tr></thead><tbody>${splits.sections[i+1].map(r=>`<tr><td>${r.rank}${r.openParticipation?'（参考）':''}</td><td>${r.passingRank==='OPN'?'OPN':r.passingRank}</td><td><strong>${esc(r.team)}</strong><br>${esc(r.athlete)} ${esc(r.grade)}年</td><td>${r.time}${r.record?' ※':''}</td></tr>`).join('')}</tbody></table></div></details>`).join('')}</details>`;}
  const archive=templates['zennihon-prediction'];
  function reviewPage(){
    const metrics=[['順位の完全一致',pct(errors.filter(n=>n===0).length,15),errors.filter(n=>n===0).length+'／15校'],['±1位以内',pct(errors.filter(n=>n<=1).length,15),errors.filter(n=>n<=1).length+'／15校'],['平均順位誤差',(errors.reduce((a,b)=>a+b,0)/15).toFixed(2)+'位','差の絶対値の平均'],['区間配置の一致',pct(placements,120),placements+'／120区間'],['出走8人の選出一致',pct(selected,120),selected+'／120人・区間不問'],['シード8校の選出',pct(seedHits,8),seedHits+'／8校'],['優勝予想','的中','早稲田大学：予想1位 → 結果1位']];
    return `<section class="container page forecast-refresh-page izumo-prediction-page zennihon-review-page"><div class="page-header"><h1>2026 全日本大学駅伝 予想と結果</h1><p>11月1日更新 · 最終エントリー後の順位予想と、10月30日保存の区間予想を結果と比較。</p></div><div class="notice"><strong>結果速報・公式照合前</strong><p>${esc(result.updated)}更新。日刊スポーツの全区間速報と月陸の総合成績を使用しています。関東15校の総合順位・タイムは両記事を確認。その他の総合順位・タイムは区間速報の合算による暫定値です。全27チーム・216区間を掲載し、OPNは順位評価から除外しています。</p><a href="${result.source}" target="_blank" rel="noopener">全区間の出典</a> ／ <a href="${result.overallSource}" target="_blank" rel="noopener">総合成績の出典</a></div><section class="izumo-review"><h2>的中率と予想の振り返り</h2><div class="izumo-review-metrics">${metrics.map(([label,value,detail])=>`<article><span>${label}</span><strong>${value}</strong><small>${detail}</small></article>`).join('')}</div><p class="izumo-order-note">順位評価は関東15大学内の順位を比較しています。順位予想・点数は最終エントリー後の保存版、区間予想は10月30日版から変更していません。確定エントリー自体を「的中」とは数えません。区間順位やタイムは事前の数値予想がないため、的中率を算出していません。区間順位の参考値にはOPN走者を含み、通過順位の1〜6区は文化放送掲載値、7区は区間速報累計、8区は総合順位です。</p><article class="izumo-review-lessons"><h3>外した要因と次の改善</h3><ul><li><strong>大東文化の代替走者を過小評価。</strong>13位予想から7位。上田3区2位・菅﨑4区6位・松浦8区5位を、主力の出否だけでなく区間別に評価する必要がありました。</li><li><strong>予選会の好結果を全日本へ広げすぎた。</strong>東洋は10位予想から15位。宮崎4区3位の強みと、2・7・8区の得失を分けるべきでした。</li><li><strong>長区間の逆転幅を小さく見積もった。</strong>創価は6区終了時8位から3位へ。ムチーニ7区・山口8区の合計を個別に見積もり、序盤で負う差と比較したいところです。</li><li><strong>エース以外の区間の合計が甘かった。</strong>帝京は楠岡の区間賞があっても8位。中央も2区で通過12位となり、中盤の好走だけでは優勝圏へ戻れませんでした。</li></ul><p>ここでの要因は成績からの当サイトの分析です。選手の体調や故障、監督の意図は結果だけでは断定しません。</p></article><h2>大学別 結果と予想の比較</h2><p>大学名をタップすると、上段に結果、下段に事前の区間予想と各大学の振り返りを表示します。</p><div class="forecast-rank-grid">${actual.map(teamCard).join('')}</div><details class="izumo-other-rankings"><summary>関東以外10大学・OPN2チームの結果</summary><div class="forecast-rank-grid">${result.results.filter(r=>!predictedTeams.has(r.team)).map(teamCard).join('')}</div></details>${sectionTables()}<details class="forecast-course-guide"><summary>全8区間のコース特徴</summary>${courseGuide2026('zennihon')}</details><details class="izumo-other-rankings"><summary>保存した事前予想・点数の内訳・最終エントリーを見る</summary>${archive()}</details><p><a href="#zennihon">大会データを見る</a></p></section></section>`;
  }
  templates['zennihon-prediction']=reviewPage;
  if(location.hash.replace('#','')==='zennihon-prediction'&&typeof render==='function')render('zennihon-prediction');
})();
