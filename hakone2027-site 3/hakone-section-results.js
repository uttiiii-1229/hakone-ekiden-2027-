// 箱根駅伝 2017〜2026 区間記録ナビゲーション
// 東京箱根間往復大学駅伝競走公式サイトの過去記録を基準に確認。
// 全選手データを誤転記しないため、各年・各区間から公式の全選手順位へ直接遷移できる構成。

const hakoneMeets = {
  2026:{edition:'第102回',tn:106},
  2025:{edition:'第101回',tn:104},
  2024:{edition:'第100回',tn:103},
  2023:{edition:'第99回',tn:102},
  2022:{edition:'第98回',tn:101},
  2021:{edition:'第97回',tn:99},
  2020:{edition:'第96回',tn:96},
  2019:{edition:'第95回',tn:95},
  2018:{edition:'第94回',tn:94},
  2017:{edition:'第93回',tn:93}
};

function officialSectionUrl(year, section){
  const meet=hakoneMeets[year];
  return meet ? `https://www.hakone-ekiden.jp/record/record04.php?sec=${section}&tn=${meet.tn}` : '#';
}

function hakoneDetailedHistory(year){
  const meet=hakoneMeets[year];
  if(!meet) return '';
  return `<div class="section-results">
    <h2>${meet.edition} ${year}年 箱根駅伝 区間成績</h2>
    <p class="muted">1〜10区を選ぶと、箱根駅伝公式の全出走選手について区間順位・大学・選手名・区間タイムを確認できます。</p>
    <div class="tabs section-tabs">${Array.from({length:10},(_,i)=>`<a class="tab section-tab" href="${officialSectionUrl(year,i+1)}" target="_blank" rel="noopener">${i+1}区</a>`).join('')}</div>
    <div class="notice"><strong>データ精度優先:</strong> 2017〜2026年の全10大会を大会番号まで照合し、各区間の公式記録へ接続しています。大量データの転記ミスを避けるため、全選手の順位・タイムは公式記録を直接表示します。</div>
  </div>`;
}

// 過去大会ページに2017〜2026の箱根区間成績ナビを追加
const originalHistoryTemplateForSections = historyTemplate;
historyTemplate = function(){
  const base=originalHistoryTemplateForSections();
  const years=Object.keys(hakoneMeets).map(Number).sort((a,b)=>b-a);
  return base + `<section class="container page" style="padding-top:0">
    <div class="page-header"><h1>箱根駅伝・全選手区間成績</h1><p>2017〜2026年の10大会を収録。年を選択し、1〜10区から全選手の区間順位・区間タイムを確認できます。</p></div>
    <div class="tabs">${years.map((y,i)=>`<button class="tab ${i===0?'active':''}" data-hakone-year="${y}">${y}年</button>`).join('')}</div>
    <div id="hakoneDetailedHistory">${hakoneDetailedHistory(2026)}</div>
  </section>`;
};

if(typeof templates!=='undefined') templates.history=historyTemplate;

document.addEventListener('click',e=>{
  const btn=e.target.closest('[data-hakone-year]');
  if(!btn)return;
  document.querySelectorAll('[data-hakone-year]').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  const year=Number(btn.dataset.hakoneYear);
  const target=document.querySelector('#hakoneDetailedHistory');
  if(target) target.innerHTML=hakoneDetailedHistory(year);
});
