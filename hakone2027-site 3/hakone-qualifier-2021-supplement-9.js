// Historical supplement: 2021 (第98回) 箱根駅伝予選会
// Official KGRR individual results: non-finishers / disqualifications after ranked finishers.
// Rank is intentionally null because the official result does not assign finishing ranks to these athletes.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  if (!window.hakoneQualifierDB.years['2021']) window.hakoneQualifierDB.years['2021'] = { year: 2021, eventYear: 2021, hakoneEdition: 98, teams: [], individuals: [] };
  const existing = window.hakoneQualifierDB.years['2021'];
  if (!Array.isArray(existing.individuals)) existing.individuals = [];

  const rows = [
    {rank:null,time:'',name:'小林 駿介',team:'関東学院大学',status:'DNF'},
    {rank:null,time:'',name:'青木 颯',team:'湘南工科大学',status:'DNF'},
    {rank:null,time:'',name:'福井 隆真',team:'一橋大学',status:'DNF'},
    {rank:null,time:'',name:'伊熊 岳大',team:'東京理科大学',status:'DQ',note:'OT'},
    {rank:null,time:'',name:'久松 啓真',team:'上智大学',status:'DQ',note:'OT'},
    {rank:null,time:'',name:'松尾 直季',team:'上智大学',status:'DQ',note:'OT'},
    {rank:null,time:'',name:'スティフィン カマウ',team:'平成国際大学',status:'DNF'},
    {rank:null,time:'',name:'松本 一希',team:'東京理科大学',status:'DNF'},
    {rank:null,time:'',name:'堀内 省吾',team:'一橋大学',status:'DNF'}
  ];

  const norm = (v) => String(v ?? '').replace(/\s+/g, '').replace(/[髙高]/g, '高').replace(/[﨑崎]/g, '崎').replace(/[・･]/g, '');
  const hasValue = (v) => v !== undefined && v !== null && String(v).trim() !== '';

  for (const row of rows) {
    const found = existing.individuals.find(x =>
      norm(x.name) === norm(row.name) && norm(x.team) === norm(row.team) && norm(x.status) === norm(row.status)
    );
    if (!found) {
      existing.individuals.push(row);
    } else {
      for (const field of ['time','name','team','grade','status','note']) {
        if (!hasValue(found[field]) && hasValue(row[field])) found[field] = row[field];
      }
    }
  }

  existing.individuals.sort((a,b) => {
    const ar = Number(a.rank), br = Number(b.rank);
    const av = Number.isFinite(ar) && ar > 0 ? ar : 9999;
    const bv = Number.isFinite(br) && br > 0 ? br : 9999;
    return av - bv;
  });

  if (!Array.isArray(existing.supplementalSources)) existing.supplementalSources = [];
  const src = 'https://www.kgrr.org/files/competition/57/40/kojin.pdf';
  if (!existing.supplementalSources.includes(src)) existing.supplementalSources.push(src);
})();