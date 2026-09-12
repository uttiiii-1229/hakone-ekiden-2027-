// Move 大会・記録会 from 大学データ to the bottom of 大会データ before dropdown handlers bind.
(() => {
  const universityMenu=document.querySelector('.university-dropdown-menu');
  const raceMenu=document.querySelector('.race-dropdown-menu:not(.university-dropdown-menu):not(.topic-dropdown-menu)');
  const meets=universityMenu?.querySelector('[data-route="meets"]');
  if(meets&&raceMenu){
    meets.classList.remove('university-dropdown-item');
    raceMenu.appendChild(meets);
  }
  // 大学データは「大学・選手データ → 学年別ランキング → PB更新幅ランキング」の順に統一。
  const grade=universityMenu?.querySelector('[data-route="grade-rankings"]');
  const pb=universityMenu?.querySelector('[data-route="pbupdates"]');
  if(pb){pb.textContent='PB更新幅ランキング';pb.classList.add('university-dropdown-item');}
  if(universityMenu&&grade)universityMenu.appendChild(grade);
  if(universityMenu&&pb)universityMenu.appendChild(pb);
  const footer=document.querySelector('.footer-links');
  const footerGrade=footer?.querySelector('[data-route="grade-rankings"]');
  const footerPb=footer?.querySelector('[data-route="pbupdates"]');
  if(footerPb)footerPb.textContent='PB更新幅ランキング';
  if(footer&&footerGrade)footer.appendChild(footerGrade);
  if(footer&&footerPb)footer.appendChild(footerPb);
})();

(() => {
  const dropdown=document.querySelector('.race-dropdown');
  const toggle=document.querySelector('.race-dropdown-toggle');
  if(!dropdown||!toggle) return;

  function closeMenu(){
    dropdown.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }

  toggle.addEventListener('click',e=>{
    e.stopPropagation();
    const open=dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
  });

  dropdown.querySelectorAll('[data-route]').forEach(btn=>{
    btn.addEventListener('click',()=>closeMenu());
  });

  document.addEventListener('click',e=>{
    if(!dropdown.contains(e.target)) closeMenu();
  });

  document.addEventListener('keydown',e=>{
    if(e.key==='Escape') closeMenu();
  });

  const originalRender=window.render;
  if(typeof originalRender==='function'){
    window.render=function(route='home'){
      originalRender(route);
      const raceRoutes=['history','qualifier','izumo','zennihon','meets'];
      dropdown.classList.toggle('active',raceRoutes.includes(route));
      dropdown.querySelectorAll('.race-dropdown-item').forEach(btn=>btn.classList.toggle('active',btn.dataset.route===route));
      closeMenu();
    };
    const route=location.hash.replace('#','')||'home';
    dropdown.classList.toggle('active',['history','qualifier','izumo','zennihon','meets'].includes(route));
    dropdown.querySelectorAll('.race-dropdown-item').forEach(btn=>btn.classList.toggle('active',btn.dataset.route===route));
  }
})();

(() => {
  const dropdown=document.querySelector('.topic-dropdown');
  const toggle=document.querySelector('.topic-dropdown-toggle');
  if(!dropdown||!toggle) return;

  function closeMenu(){
    dropdown.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }

  toggle.addEventListener('click',e=>{
    e.stopPropagation();
    const open=dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
  });

  dropdown.querySelectorAll('[data-route]').forEach(btn=>btn.addEventListener('click',closeMenu));
  document.addEventListener('click',e=>{if(!dropdown.contains(e.target))closeMenu();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});

  const previousRender=window.render;
  if(typeof previousRender==='function'){
    window.render=function(route='home'){
      previousRender(route);
      const topicRoutes=['topics','athletes','quiz'];
      dropdown.classList.toggle('active',topicRoutes.includes(route));
      dropdown.querySelectorAll('.topic-dropdown-item').forEach(btn=>btn.classList.toggle('active',btn.dataset.route===route));
      closeMenu();
    };
    const route=location.hash.replace('#','')||'home';
    dropdown.classList.toggle('active',['topics','athletes','quiz'].includes(route));
    dropdown.querySelectorAll('.topic-dropdown-item').forEach(btn=>btn.classList.toggle('active',btn.dataset.route===route));
  }
})();

(() => {
  const dropdown=document.querySelector('.university-dropdown');
  const toggle=document.querySelector('.university-dropdown-toggle');
  if(!dropdown||!toggle) return;
  function closeMenu(){dropdown.classList.remove('open');toggle.setAttribute('aria-expanded','false');}
  toggle.addEventListener('click',e=>{e.stopPropagation();const open=dropdown.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
  dropdown.querySelectorAll('[data-route]').forEach(btn=>btn.addEventListener('click',closeMenu));
  document.addEventListener('click',e=>{if(!dropdown.contains(e.target))closeMenu();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  const previousRender=window.render;
  if(typeof previousRender==='function'){
    window.render=function(route='home'){
      previousRender(route);
      const routes=['teams','grade-rankings','pbupdates'];
      dropdown.classList.toggle('active',routes.includes(route));
      dropdown.querySelectorAll('.university-dropdown-item').forEach(btn=>btn.classList.toggle('active',btn.dataset.route===route));
      closeMenu();
    };
    const route=location.hash.replace('#','')||'home';
    dropdown.classList.toggle('active',['teams','grade-rankings','pbupdates'].includes(route));
    dropdown.querySelectorAll('.university-dropdown-item').forEach(btn=>btn.classList.toggle('active',btn.dataset.route===route));
  }
})();
(() => {
  const dropdown=document.querySelector('.prediction-dropdown');
  const toggle=document.querySelector('.prediction-dropdown-toggle');
  if(!dropdown||!toggle)return;
  const routes=['prediction','qualifier-prediction'];
  function closeMenu(){dropdown.classList.remove('open');toggle.setAttribute('aria-expanded','false');}
  toggle.addEventListener('click',e=>{e.stopPropagation();const open=dropdown.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
  dropdown.querySelectorAll('[data-route]').forEach(btn=>btn.addEventListener('click',closeMenu));
  document.addEventListener('click',e=>{if(!dropdown.contains(e.target))closeMenu();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  const previousRender=window.render;
  if(typeof previousRender==='function'){
    window.render=function(route='home'){
      previousRender(route);
      dropdown.classList.toggle('active',routes.includes(route));
      dropdown.querySelectorAll('.prediction-dropdown-item').forEach(btn=>btn.classList.toggle('active',btn.dataset.route===route));
      closeMenu();
    };
    const route=location.hash.replace('#','')||'home';
    dropdown.classList.toggle('active',routes.includes(route));
    dropdown.querySelectorAll('.prediction-dropdown-item').forEach(btn=>btn.classList.toggle('active',btn.dataset.route===route));
  }
})();

// Load ranking extensions after university-data-pages.js has registered its base templates.
(() => {
  if(!document.querySelector('script[data-grade-rankings-all-years]')){
    const script=document.createElement('script');
    script.src='grade-rankings-all-years.js?v=20260912-all2';
    script.dataset.gradeRankingsAllYears='';
    script.async=false;
    document.body.appendChild(script);
  }
  function loadImprovementRanking(){
    if(document.querySelector('script[data-pb-improvement-ranking]'))return;
    const script=document.createElement('script');
    script.src='pb-improvement-ranking.js?v=20260912-imp2';
    script.dataset.pbImprovementRanking='';
    script.async=false;
    document.body.appendChild(script);
  }
  if(window.pbImprovementVerified2026){
    loadImprovementRanking();
  }else if(!document.querySelector('script[data-pb-improvement-data]')){
    const data=document.createElement('script');
    data.src='pb-improvement-ranking-data-20260912.js?v=20260912-data1';
    data.dataset.pbImprovementData='';
    data.async=false;
    data.onload=loadImprovementRanking;
    document.body.appendChild(data);
  }
})();