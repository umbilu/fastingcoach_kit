// server.js - minimal Express server for FastingCoach webhook examples
const express = require('express');
const bodyParser = require('body-parser');
const { evaluateCheckin, evaluateOnboarding } = require('./logic_rules');
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.post('/api/onboarding', (req, res) => {
  const payload = req.body;
  const result = evaluateOnboarding(payload);
  res.json({ status: 'ok', message: 'Onboarding ricevuto', piano_iniziale: result });
});

app.post('/api/checkin', (req, res) => {
  const payload = req.body;
  const analysis = evaluateCheckin(payload);
  res.json({ status: 'ok', short_message: analysis.short_message, dettagli: analysis.dettagli });
});

app.post('/api/schedule_reminder', (req, res) => {
  const { user_id, type, send_at, message } = req.body;
  // In un'app reale, qui scheduleresti il reminder (cron / job queue)
  res.json({ status: 'ok', scheduled: true, user_id, type, send_at, message });
});

app.listen(PORT, () => {
  console.log(`FastingCoach webhook server running on port ${PORT}`);
});
