// Three major university ekiden quiz: beginner / intermediate / advanced / expert
(() => {
  const levels={
    beginner:{
      label:'初級',
      intro:'まずは三大駅伝の基本から。大会構成や区間数を中心に出題します。',
      questions:[
        {q:'箱根駅伝は、往路と復路を合わせて全部で何区ありますか？',choices:['6区','8区','10区','12区'],answer:2,ex:'箱根駅伝は往路5区・復路5区の合計10区です。'},
        {q:'出雲駅伝は全部で何区ありますか？',choices:['5区','6区','7区','8区'],answer:1,ex:'出雲駅伝は6区で争われます。'},
        {q:'全日本大学駅伝は全部で何区ありますか？',choices:['6区','7区','8区','10区'],answer:2,ex:'全日本大学駅伝は8区です。'},
        {q:'「大学三大駅伝」に含まれる組み合わせはどれですか？',choices:['箱根・出雲・全日本','箱根・都道府県・全日本','出雲・ニューイヤー・箱根','全日本・富士山・箱根'],answer:0,ex:'大学三大駅伝は箱根駅伝・出雲駅伝・全日本大学駅伝です。'},
        {q:'箱根駅伝で往路の最終区間は何区ですか？',choices:['4区','5区','6区','7区'],answer:1,ex:'往路は1区から5区までで、5区が往路の最終区間です。'}
      ]
    },
    intermediate:{
      label:'中級',
      intro:'コースや大会の特徴まで踏み込んだ問題です。',
      questions:[
        {q:'箱根駅伝で「山上り」と呼ばれる区間はどこですか？',choices:['3区','5区','6区','8区'],answer:1,ex:'5区は小田原から箱根・芦ノ湖方面へ上る山上り区間です。'},
        {q:'箱根駅伝で「山下り」と呼ばれる区間はどこですか？',choices:['4区','5区','6区','7区'],answer:2,ex:'6区は復路最初の区間で、箱根から小田原へ下る山下り区間です。'},
        {q:'出雲駅伝が開催される都道府県はどこですか？',choices:['島根県','鳥取県','広島県','岡山県'],answer:0,ex:'出雲駅伝は島根県出雲市を中心に開催されます。'},
        {q:'全日本大学駅伝のゴール地点として知られるのはどこですか？',choices:['明治神宮','伊勢神宮 内宮宇治橋前','出雲大社','芦ノ湖'],answer:1,ex:'全日本大学駅伝は伊勢神宮・内宮宇治橋前をゴールとする大会です。'},
        {q:'箱根駅伝のスタート地点として知られる場所はどこですか？',choices:['東京・大手町','横浜・みなとみらい','新宿・都庁前','千葉・幕張'],answer:0,ex:'箱根駅伝は東京・大手町をスタートします。'}
      ]
    },
    advanced:{
      label:'上級',
      intro:'近年の優勝校や大会結果を中心に出題します。',
      questions:[
        {q:'2026年の箱根駅伝（第102回）で総合優勝した大学はどこですか？',choices:['青山学院大学','國學院大學','駒澤大学','中央大学'],answer:0,ex:'第102回箱根駅伝は青山学院大学が総合優勝しました。'},
        {q:'2025年の出雲駅伝（第37回）で優勝した大学はどこですか？',choices:['駒澤大学','國學院大學','早稲田大学','創価大学'],answer:1,ex:'2025年の第37回出雲駅伝は國學院大學が優勝しました。'},
        {q:'2025年の全日本大学駅伝（第57回）で優勝した大学はどこですか？',choices:['中央大学','青山学院大学','國學院大學','駒澤大学'],answer:3,ex:'2025年の第57回全日本大学駅伝は駒澤大学が優勝しました。'},
        {q:'2024年の全日本大学駅伝（第56回）で優勝した大学はどこですか？',choices:['國學院大學','青山学院大学','駒澤大学','東洋大学'],answer:0,ex:'2024年の第56回全日本大学駅伝は國學院大學が優勝しました。'},
        {q:'2023年の出雲駅伝（第35回）で優勝した大学はどこですか？',choices:['城西大学','國學院大學','駒澤大学','青山学院大学'],answer:2,ex:'2023年の第35回出雲駅伝は駒澤大学が優勝しました。'}
      ]
    },
    expert:{
      label:'超級',
      intro:'過去大会までさかのぼる、駅伝ファン向けの難問です。',
      questions:[
        {q:'2007年の箱根駅伝（第83回）で総合優勝した大学はどこですか？',choices:['順天堂大学','東海大学','駒澤大学','日本大学'],answer:0,ex:'2007年の第83回箱根駅伝は順天堂大学が総合優勝しました。'},
        {q:'2019年の箱根駅伝（第95回）で総合優勝した大学はどこですか？',choices:['青山学院大学','東洋大学','東海大学','駒澤大学'],answer:2,ex:'2019年の第95回箱根駅伝は東海大学が総合優勝しました。'},
        {q:'2017年の全日本大学駅伝（第49回）で優勝した大学はどこですか？',choices:['神奈川大学','青山学院大学','東海大学','早稲田大学'],answer:0,ex:'2017年の第49回全日本大学駅伝は神奈川大学が優勝しました。'},
        {q:'2021年の出雲駅伝（第33回）で優勝した大学はどこですか？',choices:['東京国際大学','青山学院大学','東洋大学','國學院大學'],answer:0,ex:'2021年の第33回出雲駅伝は東京国際大学が優勝しました。'},
        {q:'2020年の出雲駅伝（第32回）はどうなりましたか？',choices:['通常開催された','距離短縮で開催された','大会中止となった','延期して翌春に開催された'],answer:2,ex:'2020年の第32回出雲駅伝は大会中止となりました。'}
      ]
    }
  };

  const state={level:'beginner',answers:{}};
  const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  function score(level){
    const qs=levels[level].questions;
    let n=0;
    qs.forEach((q,i)=>{if(state.answers[level]?.[i]===q.answer)n++;});
    return n;
  }
  function answered(level){return Object.keys(state.answers[level]||{}).length;}

  function levelCards(){
    return Object.entries(levels).map(([key,l])=>`
      <button class="quiz-level-card ${state.level===key?'active':''}" data-quiz-level="${key}">
        <span>${l.label}</span>
        <strong>${l.questions.length}問</strong>
        <small>${esc(l.intro)}</small>
      </button>`).join('');
  }

  function questionList(){
    const l=levels[state.level];
    const ans=state.answers[state.level]||{};
    return l.questions.map((q,i)=>{
      const picked=ans[i];
      const done=Number.isInteger(picked);
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
    const l=levels[state.level];
    const done=answered(state.level),total=l.questions.length;
    return `<section class="container page quiz-page">
      <div class="page-header">
        <div class="eyebrow">TOPICS / QUIZ</div>
        <h1>三大駅伝クイズ</h1>
        <p>箱根駅伝・出雲駅伝・全日本大学駅伝から出題。4段階の難易度で挑戦できます。</p>
      </div>
      <div class="quiz-level-grid">${levelCards()}</div>
      <section class="quiz-stage">
        <div class="quiz-stage-head">
          <div><span class="quiz-level-badge">${l.label}</span><h2>${l.label}クイズ</h2><p>${esc(l.intro)}</p></div>
          <div class="quiz-progress"><strong>${done}/${total}</strong><span>回答済み</span></div>
        </div>
        ${questionList()}
        ${done===total?`<div class="quiz-result"><span>${l.label} 結果</span><strong>${score(state.level)} / ${total} 問正解</strong><button data-quiz-reset="${state.level}">この難易度をもう一度</button></div>`:''}
      </section>
    </section>`;
  }

  if(typeof templates!=='undefined') templates.quiz=quizTemplate;

  function rerender(){
    if(typeof render==='function') render('quiz');
  }

  document.addEventListener('click',e=>{
    const lv=e.target.closest('[data-quiz-level]');
    if(lv){
      state.level=lv.dataset.quizLevel;
      state.answers[state.level]=state.answers[state.level]||{};
      rerender();
      return;
    }
    const choice=e.target.closest('[data-quiz-choice]');
    if(choice){
      const q=Number(choice.dataset.quizQ),picked=Number(choice.dataset.quizChoice);
      state.answers[state.level]=state.answers[state.level]||{};
      if(!Number.isInteger(state.answers[state.level][q])){
        state.answers[state.level][q]=picked;
        rerender();
      }
      return;
    }
    const reset=e.target.closest('[data-quiz-reset]');
    if(reset){
      state.answers[reset.dataset.quizReset]={};
      rerender();
    }
  });
})();
