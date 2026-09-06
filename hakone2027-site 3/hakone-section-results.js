// 箱根駅伝 2000〜2026 区間記録ナビゲーション
// 年度は1つのプルダウンから直接選択する。
const hakoneMeets = {};
for(let year=2000; year<=2026; year++){
  const edition = year - 1924;
  let tn = edition;
  if(year===2021) tn=99;
  if(year===2022) tn=101;
  if(year===2023) tn=102;
  if(year===2024) tn=103;
  if(year===2025) tn=104;
  if(year===2026) tn=106;
  hakoneMeets[year] = {edition:`第${edition}回`,tn};
}
let activeHakoneYear = 2026;
const hakoneYears=Array.from({length:27},(_,i)=>2026-i);

function officialSectionUrl(year, section){
  const meet=hakoneMeets[year];
  return meet ? `https://www.hakone-ekiden.jp/record/record04.php?sec=${section}&tn=${meet.tn}` : '#';
}
function hakoneDetailedHistory(year){
  const meet=hakoneMeets[year];
  if(!meet) return '';
  return `<div class="section-results"><h2>${meet.edition} ${year}年 箱根駅伝</h2><p class="muted">区間データを読み込んでいます。</p></div>`;
}
function hakoneYearSelect(){
  return `<div class="year-select-control"><label for="hakoneYearSelect">年度</label><select class="year-select" id="hakoneYearSelect" data-hakone-year-select aria-label="箱根駅伝の年度を選択"><option value="" disabled>年を選択</option>${hakoneYears.map(y=>`<option value="${y}" ${y===activeHakoneYear?'selected':''}>${y}年</option>`).join('')}</select></div>`;
}
const originalHistoryTemplateForSections = historyTemplate;
historyTemplate = function(){
  const base=originalHistoryTemplateForSections();
  return base + `<section class="container page" style="padding-top:0">
    <div class="page-header"><h1>箱根駅伝・全選手区間成績</h1><p>2000〜2026年の27大会を収録。年度を選び、1〜10区の区間順位・通過順位・区間タイムを確認できます。</p></div>
    ${hakoneYearSelect()}
    <div id="hakoneDetailedHistory">${hakoneDetailedHistory(activeHakoneYear)}</div>
  </section>`;
};
if(typeof templates!=='undefined') templates.history=historyTemplate;
document.addEventListener('change',e=>{
  const sel=e.target.closest('[data-hakone-year-select]');
  if(!sel)return;
  activeHakoneYear=Number(sel.value);
  const target=document.querySelector('#hakoneDetailedHistory');
  if(target)target.innerHTML=hakoneDetailedHistory(activeHakoneYear);
});
