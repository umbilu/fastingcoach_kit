function evaluateOnboarding(data) {
  return { livello: "base", suggerimenti: ["Inizia con 12h di digiuno"] };
}

function evaluateCheckin(data) {
  return { short_message: "Ottimo progresso!", dettagli: { giorni_digiuno: 3 } };
}

module.exports = { evaluateOnboarding, evaluateCheckin };