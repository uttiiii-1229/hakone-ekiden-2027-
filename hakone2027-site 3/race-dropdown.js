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
      const raceRoutes=['history','izumo','zennihon'];
      dropdown.classList.toggle('active',raceRoutes.includes(route));
      dropdown.querySelectorAll('.race-dropdown-item').forEach(btn=>btn.classList.toggle('active',btn.dataset.route===route));
      closeMenu();
    };
    const route=location.hash.replace('#','')||'home';
    dropdown.classList.toggle('active',['history','izumo','zennihon'].includes(route));
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
      const topicRoutes=['topics','athletes'];
      dropdown.classList.toggle('active',topicRoutes.includes(route));
      dropdown.querySelectorAll('.topic-dropdown-item').forEach(btn=>btn.classList.toggle('active',btn.dataset.route===route));
      closeMenu();
    };
    const route=location.hash.replace('#','')||'home';
    dropdown.classList.toggle('active',['topics','athletes'].includes(route));
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
      const routes=['teams','meets','pbupdates','grade-rankings'];
      dropdown.classList.toggle('active',routes.includes(route));
      dropdown.querySelectorAll('.university-dropdown-item').forEach(btn=>btn.classList.toggle('active',btn.dataset.route===route));
      closeMenu();
    };
    const route=location.hash.replace('#','')||'home';
    dropdown.classList.toggle('active',['teams','meets','pbupdates','grade-rankings'].includes(route));
    dropdown.querySelectorAll('.university-dropdown-item').forEach(btn=>btn.classList.toggle('active',btn.dataset.route===route));
  }
})();