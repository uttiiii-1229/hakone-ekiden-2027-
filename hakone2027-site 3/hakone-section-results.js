// 箱根駅伝 2007〜2026 区間記録ナビゲーション
// 10年ごとに整理し、年→区間の順で閲覧できる構成。

const hakoneMeets = {};
for(let year=2007; year<=2026; year++){
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

const hakoneDecades = {
  recent:{label:'2017–2026', years:[2026,2025,2024,2023,2022,2021,2020,2019,2018,2017]},
  previous:{label:'2007–2016', years:[2016,2015,2014,2013,2012,2011,2010,2009,2008,2007]}
};

let activeHakoneDecade = 'recent';
let activeHakoneYear = 2026;

function officialSectionUrl(year, section){
  const meet=hakoneMeets[year];
  return meet ? `https://www.hakone-ekiden.jp/record/record04.php?sec=${section}&tn=${meet.tn}` : '#';
}

// 後続のDBビューアがこの関数を上書きする。
function hakoneDetailedHistory(year){
  const meet=hakoneMeets[year];
  if(!meet) return '';
  return `<div class="section-results"><h2>${meet.edition} ${year}年 箱根駅伝</h2><p class="muted">区間データを読み込んでいます。</p></div>`;
}

function hakoneYearTabs(decadeKey){
  const group=hakoneDecades[decadeKey]||hakoneDecades.recent;
  return group.years.map(y=>`<button class="tab ${y===activeHakoneYear?'active':''}" data-hakone-year-v3="${y}">${y}年</button>`).join('');
}

const originalHistoryTemplateForSections = historyTemplate;
historyTemplate = function(){
  const base=originalHistoryTemplateForSections();
  return base + `<section class="container page" style="padding-top:0">
    <div class="page-header"><h1>箱根駅伝・全選手区間成績</h1><p>2007〜2026年の20大会を収録。10年ごとのタブから年を選び、1〜10区の区間順位・通過順位・区間タイムを確認できます。</p></div>
    <div class="tabs hakone-decade-tabs">
      ${Object.entries(hakoneDecades).map(([key,g])=>`<button class="tab ${key===activeHakoneDecade?'active':''}" data-hakone-decade="${key}">${g.label}</button>`).join('')}
    </div>
    <div class="tabs" id="hakoneYearTabs">${hakoneYearTabs(activeHakoneDecade)}</div>
    <div id="hakoneDetailedHistory">${hakoneDetailedHistory(activeHakoneYear)}</div>
  </section>`;
};

if(typeof templates!=='undefined') templates.history=historyTemplate;

document.addEventListener('click',e=>{
  const decadeBtn=e.target.closest('[data-hakone-decade]');
  if(decadeBtn){
    activeHakoneDecade=decadeBtn.dataset.hakoneDecade;
    const group=hakoneDecades[activeHakoneDecade]||hakoneDecades.recent;
    activeHakoneYear=group.years[0];
    document.querySelectorAll('[data-hakone-decade]').forEach(x=>x.classList.toggle('active',x===decadeBtn));
    const yearHost=document.querySelector('#hakoneYearTabs');
    if(yearHost) yearHost.innerHTML=hakoneYearTabs(activeHakoneDecade);
    const target=document.querySelector('#hakoneDetailedHistory');
    if(target) target.innerHTML=hakoneDetailedHistory(activeHakoneYear);
    return;
  }

  const yearBtn=e.target.closest('[data-hakone-year-v3]');
  if(yearBtn){
    activeHakoneYear=Number(yearBtn.dataset.hakoneYearV3);
    document.querySelectorAll('[data-hakone-year-v3]').forEach(x=>x.classList.toggle('active',x===yearBtn));
    const target=document.querySelector('#hakoneDetailedHistory');
    if(target) target.innerHTML=hakoneDetailedHistory(activeHakoneYear);
  }
});
