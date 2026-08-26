// 箱根駅伝 過去大会：全出走選手・区間順位表示
// データは東京箱根間往復大学駅伝競走公式サイトを基準に段階的に収録。
// まずUIを全10区・全選手対応にし、公式確認済みの第101回データから掲載する。

const hakoneSectionResults = {
  2025: {
    edition: '第101回',
    sections: {
      1: [
        [1,'中央大学','吉居 駿恭','1:01:07'],[2,'駒澤大学','帰山 侑大','1:02:39'],[3,'日本体育大学','平島 龍斗','1:02:40'],[4,'早稲田大学','間瀬田 純平','1:02:43'],[10,'青山学院大学','宇田川 瞬矢','1:02:51']
      ],
      2: [[1,'東京国際大学','エティーリ','1:05:31'],[2,'創価大学','吉田 響','1:05:43'],[3,'青山学院大学','黒田 朝日','1:05:44'],[4,'駒澤大学','篠原 倖太朗','1:06:14']],
      3: [[1,'中央大学','本間 颯','1:00:16'],[2,'創価大学','ムチーニ','1:00:51'],[3,'早稲田大学','山口 竣平','1:01:15'],[4,'青山学院大学','鶴川 正也','1:01:51'],[6,'駒澤大学','谷中 晴','1:02:05']],
      4: [[1,'青山学院大学','太田 蒼生','1:00:24'],[3,'東洋大学','岸本 遼太郎','1:01:15'],[4,'駒澤大学','桑田 駿介','1:01:24'],[8,'早稲田大学','長屋 匡起','1:02:00'],[9,'中央大学','白川 陽大','1:02:03']],
      5: [[1,'青山学院大学','若林 宏樹','1:09:11'],[2,'早稲田大学','工藤 慎作','1:09:31'],[3,'城西大学','斎藤 将也','1:10:50'],[4,'駒澤大学','山川 拓馬','1:10:55'],[6,'中央大学','園木 大斗','1:11:43']],
      6: [[1,'青山学院大学','野村 昭夢','0:56:47'],[2,'駒澤大学','伊藤 蒼唯','0:57:38'],[3,'城西大学','小林 竜輝','0:58:06'],[5,'早稲田大学','山崎 一吹','0:58:45'],[6,'中央大学','浦田 優斗','0:58:49']],
      7: [[1,'駒澤大学','佐藤 圭汰','1:00:43'],[2,'順天堂大学','吉岡 大翔','1:02:21'],[2,'國學院大学','辻原 輝','1:02:21'],[7,'中央大学','岡田 開成','1:03:07'],[9,'青山学院大学','白石 光星','1:03:10']],
      8: [[1,'青山学院大学','塩出 翔太','1:04:14'],[2,'東洋大学','網本 佳悟','1:04:18'],[4,'駒澤大学','安原 海晴','1:04:31'],[11,'早稲田大学','伊福 陽太','1:05:54'],[20,'中央大学','佐藤 大介','1:09:51']],
      9: [[1,'城西大学','桜井 優我','1:08:27'],[2,'青山学院大学','田中 悠登','1:08:40'],[5,'駒澤大学','村上 響','1:09:04'],[8,'中央大学','吉中 祐太','1:09:46'],[15,'早稲田大学','石塚 陽士','1:10:36']],
      10:[[1,'青山学院大学','小河原 陽琉','1:08:27'],[2,'駒澤大学','小山 翔也','1:08:54'],[4,'中央大学','藤田 大智','1:09:28'],[5,'早稲田大学','菅野 雄太','1:09:36']]
    }
  }
};

function sectionResultTable(rows){
  if(!rows || !rows.length) return '<p class="muted">公式記録を確認中です。</p>';
  return `<div class="table-wrap"><table><thead><tr><th>区間順位</th><th>大学</th><th>選手</th><th>区間タイム</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r[0]}位</strong></td><td>${r[1]}</td><td><strong>${r[2]}</strong></td><td>${r[3]}</td></tr>`).join('')}</tbody></table></div>`;
}

function hakoneDetailedHistory(year){
  const meet = hakoneSectionResults[year];
  if(!meet) return `<div class="panel"><div class="panel-body"><p>この大会の全選手区間データは現在公式記録と照合中です。</p></div></div>`;
  return `<div class="section-results"><h2>${meet.edition} ${year}年 箱根駅伝 区間成績</h2><p class="muted">区間タブを選ぶと、その区間の出走選手・区間順位・区間タイムを確認できます。</p><div class="tabs section-tabs">${Array.from({length:10},(_,i)=>`<button class="tab section-tab ${i===0?'active':''}" data-section="${i+1}">${i+1}区</button>`).join('')}</div><div id="sectionResultBody">${sectionResultTable(meet.sections[1])}</div></div>`;
}

document.addEventListener('click', e=>{
  const tab=e.target.closest('.section-tab');
  if(!tab) return;
  document.querySelectorAll('.section-tab').forEach(x=>x.classList.remove('active'));
  tab.classList.add('active');
  const year=Number(document.querySelector('[data-hakone-year].active')?.dataset.hakoneYear || 2025);
  const sec=Number(tab.dataset.section);
  const body=document.querySelector('#sectionResultBody');
  if(body) body.innerHTML=sectionResultTable(hakoneSectionResults[year]?.sections?.[sec]);
});

// 過去大会ページに区間詳細エリアを追加する。
const originalHistoryTemplateForSections = historyTemplate;
historyTemplate = function(){
  const base=originalHistoryTemplateForSections();
  return base + `<section class="container page" style="padding-top:0"><div class="page-header"><h1>箱根駅伝・全選手区間成績</h1><p>過去10大会を対象に、全出走選手の区間順位・区間タイムを公式記録から順次収録します。</p></div><div class="tabs">${Object.keys(hakoneSectionResults).sort((a,b)=>b-a).map((y,i)=>`<button class="tab ${i===0?'active':''}" data-hakone-year="${y}">${y}年</button>`).join('')}</div><div id="hakoneDetailedHistory">${hakoneDetailedHistory(2025)}</div></section>`;
};

document.addEventListener('click',e=>{
 const btn=e.target.closest('[data-hakone-year]');
 if(!btn)return;
 document.querySelectorAll('[data-hakone-year]').forEach(x=>x.classList.remove('active'));
 btn.classList.add('active');
 const year=Number(btn.dataset.hakoneYear);
 const target=document.querySelector('#hakoneDetailedHistory');
 if(target) target.innerHTML=hakoneDetailedHistory(year);
});
