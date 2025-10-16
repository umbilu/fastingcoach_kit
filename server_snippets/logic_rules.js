// logic_rules.js - semplice set di regole di sicurezza e valutazione
function evaluateOnboarding(payload) {
  // Decide piano iniziale semplice basato su dati
  const { peso_kg, altezza_cm, eta, sesso, livello_attivita, condizioni_mediche } = payload;
  // Basic TDEE calc (Mifflin-St Jeor)
  const height_cm = altezza_cm;
  const weight = peso_kg;
  const age = eta;
  let bmr;
  if (sesso === 'M') {
    bmr = 10*weight + 6.25*height_cm - 5*age + 5;
  } else {
    bmr = 10*weight + 6.25*height_cm - 5*age - 161;
  }
  const activity_factors = { sedentario:1.2, moderato:1.55, attivo:1.725 };
  const factor = activity_factors[livello_attivita] || 1.55;
  const tdee = Math.round(bmr * factor);
  const target = Math.max(1200, tdee - 500);
  const note = (condizioni_mediche && condizioni_mediche.length>0) ? 'Condizioni mediche segnalate - consultare medico' : 'Nessuna condizione medica segnalata';
  return { protocollo: '16:8', calorie_target_giorno: target, tdee, note };
}

function evaluateCheckin(payload) {
  // Very simple analysis
  const { peso_kg, user_id, calorie_totali, energia_score, sintomi } = payload;
  // Example: mock delta
  const delta = -0.8; // placeholder
  let alert = false;
  const sintomas = (sintomi || '').toLowerCase();
  const keywords = ['sven', 'vertig', 'ipoglic', 'dolor', 'petto', 'palpit'];
  for (const kw of keywords) {
    if (sintomas.includes(kw)) alert = true;
  }
  const short_message = alert ? 'Segnalati sintomi: valutare contatto medico.' : 'Buon lavoro! Continua così.';
  const dettagli = { delta_settimana: delta, raccomandazione: energia_score<=3 ? 'Controlla sonno e energia, evita ulteriori riduzioni caloriche' : 'Mantieni piano attuale', alert_medico: alert };
  return { short_message, dettagli };
}

module.exports = { evaluateCheckin, evaluateOnboarding };
