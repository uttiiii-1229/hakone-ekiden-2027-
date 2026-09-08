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
      intro:'区間賞・区間タイム・区間記録まで問う、駅伝ファン向けの難問です。',
      questions:[
        {q:'2026年の箱根駅伝（第102回）5区で区間賞を獲得した選手は誰ですか？',choices:['黒田 朝日','斎藤 将也','工藤 慎作','高石 樹'],answer:0,ex:'第102回箱根駅伝5区は青山学院大学の黒田朝日が1時間7分16秒で区間賞を獲得しました。'},
        {q:'2026年の箱根駅伝（第102回）5区、黒田朝日の区間タイムはどれですか？',choices:['1時間6分48秒','1時間7分16秒','1時間8分02秒','1時間9分28秒'],answer:1,ex:'黒田朝日の5区タイムは1時間7分16秒でした。'},
        {q:'2026年の箱根駅伝（第102回）6区で区間賞を獲得した選手は誰ですか？',choices:['伊藤 蒼唯','石川 浩輝','小池 莉希','並川 颯太'],answer:2,ex:'第102回箱根駅伝6区は創価大学の小池莉希が56分48秒で区間賞でした。'},
        {q:'2026年の箱根駅伝（第102回）3区で区間賞を獲得した本間颯のタイムはどれですか？',choices:['59分58秒','1時間0分08秒','1時間0分37秒','1時間0分51秒'],answer:1,ex:'中央大学の本間颯は3区を1時間0分08秒で走り、区間賞を獲得しました。'},
        {q:'2026年の箱根駅伝（第102回）4区で区間賞を獲得した選手は誰ですか？',choices:['岡田 開成','平松 享祐','辻原 輝','鈴木 琉胤'],answer:3,ex:'早稲田大学の鈴木琉胤が1時間0分01秒で4区区間賞を獲得しました。'},
        {q:'2025年の全日本大学駅伝（第57回）5区で区間新記録を出した選手は誰ですか？',choices:['伊藤 蒼唯','飯國 新太','三宅 悠斗','佐藤 有一'],answer:0,ex:'駒澤大学の伊藤蒼唯が5区を35分01秒で走り、区間新記録を樹立しました。'},
        {q:'2025年の全日本大学駅伝（第57回）7区で区間賞を獲得した黒田朝日のタイムはどれですか？',choices:['49分31秒','49分38秒','50分17秒','50分26秒'],answer:0,ex:'青山学院大学の黒田朝日は7区を49分31秒で走り、区間賞でした。'},
        {q:'2025年の全日本大学駅伝（第57回）8区で区間賞を獲得した選手は誰ですか？',choices:['山川 拓馬','溜池 一太','工藤 慎作','上原 琉翔'],answer:2,ex:'早稲田大学の工藤慎作が8区を56分54秒で走り、区間賞を獲得しました。'},
        {q:'出雲駅伝の現行4区（6.2km）の区間最高記録17分20秒を持つ選手は誰ですか？',choices:['佐藤 圭汰','辻原 輝','安藤 悠哉','ギタウ・ダニエル'],answer:1,ex:'國學院大學の辻原輝が第37回大会で4区17分20秒の区間最高記録を記録しました。'},
        {q:'出雲駅伝の現行2区（5.8km）の区間最高記録はどれですか？',choices:['15分27秒','15分43秒','16分01秒','16分20秒'],answer:0,ex:'2区の区間最高記録は駒澤大学・佐藤圭汰が第34回大会で記録した15分27秒です。'}
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

  if((location.hash.replace('#','')||'home')==='quiz' && typeof render==='function') render('quiz');
})();
