# safety_rules

Regole principali (server-side):
1. Bloccare raccomandazioni IF per: gravidanza, allattamento, disturbi alimentari, uso di insulina/sulfoniluree.
2. Parole-chiave sintomi gravi: svenimento, vertigini, ipoglicemia, dolore toracico, battito accelerato.
3. Se alert medico -> inviare messaggio di stop digiuno e suggerire contatto medico/numero emergenza.
4. Loggare ogni alert con user_id, timestamp, payload.
