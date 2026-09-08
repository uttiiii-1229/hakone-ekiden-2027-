// Three major university ekiden quiz UI powered by three-ekiden-quiz-db.js
(() => {
  const levelMeta={
    beginner:{label:'初級',intro:'最近の優勝校や有名選手を中心に出題します。'},
    intermediate:{label:'中級',intro:'三大駅伝の大会構成やコースなど、基本知識を中心に出題します。'},
    advanced:{label:'上級',intro:'過去5開催を中心に、優勝校・往路優勝・有名選手を出題します。'},
    expert:{label:'超級',intro:'過去10開催の区間賞・復路優勝校・有名選手を中心に出題します。'},
    mania:{label:'マニア級',intro:'2000年以降のサイト内三大駅伝DBを横断し、順位・通過順位・タイム差・所属・上位順など細部まで出題します。'}
  };

  const state={level:'beginner',answers:{},session:null};
  const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  function ensureSession(force=false){
    if(!window.threeEkidenQuizDB?.makeSession) return false;
    if(force||!state.session){
      state.session=window.threeEkidenQuizDB.makeSession();
      state.answers={};
    }
    return true;
  }
  function questions(level){return state.session?.[level]||[];}
  function score(level){
    let n=0; questions(level).forEach((q,i)=>{if(state.answers[level]?.[i]===q.answer)n++;}); return n;
  }
  function answered(level){return Object.keys(state.answers[level]||{}).length;}

  function levelCards(){
    return Object.entries(levelMeta).map(([key,l])=>{
      const count=questions(key).length;
      return `<button class="quiz-level-card ${state.level===key?'active':''}" data-quiz-level="${key}">
        <span>${l.label}</span>
        <strong>${count}問</strong>
        <small>${esc(l.intro)}</small>
      </button>`;
    }).join('');
  }

  function questionList(){
    const qs=questions(state.level),ans=state.answers[state.level]||{};
    if(!qs.length) return '<div class="notice">問題データベースを読み込めませんでした。ページを再読み込みしてください。</div>';
    return qs.map((q,i)=>{
      const picked=ans[i],done=Number.isInteger(picked);
      return `<article class="quiz-question-card">
        <div class="quiz-q-head"><span>Q${i+1}</span><strong>${esc(q.q)}</strong></div>
        <div class="quiz-choice-grid">
          ${q.choices.map((c,j)=>{
            const cls=done?(j===q.answer?'correct':j===picked?'wrong':''):'';
            return `<button class="quiz-choice ${cls}" data-quiz-q="${i}" data-quiz-choice="${j}" ${done?'disabled':''}>${esc(c)}</button>`;
          }).join('')}
        </div>
        ${done?`<div class="quiz-feedback ${picked===q.answer?'is-correct':'is-wrong'}"><strong>${picked===q.answer?'正解！':'不正解'}</strong><span>${esc(q.ex)}</span></div>`:''}
      </article>`;
    }).join('');
  }

  function quizTemplate(){
    // render('quiz') is called while the old page still exists. If quiz-page is absent,
    // this is a fresh entry from another page, so draw a new random 10-question session.
    const freshEntry=!document.querySelector('.quiz-page');
    ensureSession(freshEntry);
    const meta=levelMeta[state.level],qs=questions(state.level);
    const done=answered(state.level),total=qs.length;
    return `<section class="container page quiz-page">
      <div class="page-header">
        <div class="eyebrow">TOPICS / QUIZ</div>
        <h1>三大駅伝クイズ</h1>
        <p>5段階の難易度から挑戦。ページに入るたび、問題DBから各難易度10問を無作為抽出し、問題順・選択肢順もランダムに変わります。</p>
      </div>
      <div class="quiz-random-note"><strong>RANDOM 10</strong><span>今回の10問はページ入場時に自動抽選されています。</span></div>
      <div class="quiz-level-grid">${levelCards()}</div>
      <section class="quiz-stage">
        <div class="quiz-stage-head">
          <div><span class="quiz-level-badge">${meta.label}</span><h2>${meta.label}クイズ</h2><p>${esc(meta.intro)}</p></div>
          <div class="quiz-progress"><strong>${done}/${total}</strong><span>回答済み</span></div>
        </div>
        ${questionList()}
        ${total>0&&done===total?`<div class="quiz-result"><span>${meta.label} 結果</span><strong>${score(state.level)} / ${total} 問正解</strong><button data-quiz-reset="${state.level}">別の10問に挑戦</button></div>`:''}
      </section>
    </section>`;
  }

  if(typeof templates!=='undefined') templates.quiz=quizTemplate;
  function rerender(){if(typeof render==='function') render('quiz');}

  document.addEventListener('click',e=>{
    const lv=e.target.closest('[data-quiz-level]');
    if(lv){
      state.level=lv.dataset.quizLevel;
      state.answers[state.level]=state.answers[state.level]||{};
      rerender(); return;
    }
    const choice=e.target.closest('[data-quiz-choice]');
    if(choice){
      const q=Number(choice.dataset.quizQ),picked=Number(choice.dataset.quizChoice);
      state.answers[state.level]=state.answers[state.level]||{};
      if(!Number.isInteger(state.answers[state.level][q])){
        state.answers[state.level][q]=picked; rerender();
      }
      return;
    }
    const reset=e.target.closest('[data-quiz-reset]');
    if(reset&&window.threeEkidenQuizDB?.pools){
      const level=reset.dataset.quizReset;
      const pool=window.threeEkidenQuizDB.pools[level]||[];
      const seen=new Set(),picked=[];
      for(const q of pool.slice().sort(()=>Math.random()-.5)){
        if(!q||seen.has(q.q))continue;seen.add(q.q);picked.push(q);if(picked.length===10)break;
      }
      state.session[level]=picked;
      state.answers[level]={};
      rerender();
    }
  });

  if((location.hash.replace('#','')||'home')==='quiz'&&typeof render==='function'){
    ensureSession(true);
    render('quiz');
  }
})();