# FastingCoach - server_snippets

Prerequisiti:
- Node.js 16+ installato

Installazione:
```bash
cd server_snippets
npm init -y
npm install express body-parser
```

Avvio:
```bash
node server.js
```

Endpoints d'esempio:
- POST /api/onboarding
- POST /api/checkin
- POST /api/schedule_reminder

Nota di sicurezza: tutte le regole critiche dovrebbero essere implementate server-side (non solo nel LLM).
