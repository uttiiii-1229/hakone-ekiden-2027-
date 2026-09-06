(() => {
  function lockInitialTop(){
    let active=true;
    const stop=()=>{active=false;};
    ['touchstart','pointerdown','wheel','keydown'].forEach(ev=>window.addEventListener(ev,stop,{once:true,passive:true}));
    const start=performance.now();
    const tick=()=>{
      if(!active||performance.now()-start>2200)return;
      document.documentElement.scrollTop=0;
      document.body.scrollTop=0;
      window.scrollTo(0,0);
      requestAnimationFrame(tick);
    };
    tick();
  }

  function enforceAthleteTemplate(){
    if(window.allAthleteDirectoryV2?.template && typeof templates!=='undefined'){
      templates.athletes=window.allAthleteDirectoryV2.template;
      if((location.hash.replace('#','')||'home')==='athletes' && typeof render==='function'){
        render('athletes');
      }
    }
  }

  if('scrollRestoration' in history) history.scrollRestoration='manual';
  lockInitialTop();
  window.addEventListener('pageshow',lockInitialTop);
  window.addEventListener('load',()=>{enforceAthleteTemplate();lockInitialTop();});
  setTimeout(enforceAthleteTemplate,0);
  setTimeout(enforceAthleteTemplate,250);
})();