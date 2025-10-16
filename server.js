const express = require('express');
const bodyParser = require('body-parser');
const { evaluateOnboarding, evaluateCheckin } = require('./logic_rules');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/api/onboarding', (req, res) => {
  const result = evaluateOnboarding(req.body);
  res.json({ status: 'ok', message: 'Onboarding ricevuto', piano_iniziale: result });
});

app.post('/api/checkin', (req, res) => {
  const analysis = evaluateCheckin(req.body);
  res.json({ status: 'ok', short_message: analysis.short_message, dettagli: analysis.dettagli });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});