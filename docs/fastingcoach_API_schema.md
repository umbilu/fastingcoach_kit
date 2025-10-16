# fastingcoach_API_schema

Endpoints:
- POST /api/onboarding
  Request: onboarding JSON (see api_samples/onboarding_request.json)
  Response: { status, message, piano_iniziale }

- POST /api/checkin
  Request: checkin JSON (see api_samples/checkin_request.json)
  Response: { status, short_message, dettagli }

- POST /api/schedule_reminder
  Request: { user_id, type, send_at, message }
  Response: { status, scheduled }

Security:
- Implementare autenticazione (API keys / JWT)
- Log degli alert medici con timestamp
