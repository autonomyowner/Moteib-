# Deployment Checklist

Use this checklist to ensure everything is set up correctly.

## Pre-Deployment

- [ ] Code is committed to Git
- [ ] All files are in place:
  - [ ] `apps/client/src/app/api/translation/start/route.ts` exists
  - [ ] `apps/client/src/components/VoiceRoom.tsx` has TranslationControls
  - [ ] `agent-worker/interpreter.py` exists
  - [ ] `agent-worker/requirements.txt` exists
  - [ ] `agent-worker/Dockerfile` exists

## Local Environment Setup

- [ ] Created `apps/client/.env.local` file
- [ ] Added `LIVEKIT_URL=https://travcoies-9h1ntokz.livekit.cloud`
- [ ] Added `LIVEKIT_API_KEY=APIJ3p9EvfKirbr`
- [ ] Added `LIVEKIT_API_SECRET=VZMtypNewY4UVjb6DWEyqFz3GdDjfzhmVTneLfQcARVA`
- [ ] Added `NEXT_PUBLIC_LIVEKIT_URL=wss://travcoies-9h1ntokz.livekit.cloud`

## GitHub Setup

- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Verified repository is accessible

## Render.com Deployment

- [ ] Created Render.com account
- [ ] Connected GitHub account
- [ ] Created new Web Service
- [ ] Set Root Directory to `agent-worker`
- [ ] Set Environment to `Docker`
- [ ] Added environment variable: `LIVEKIT_URL=wss://travcoies-9h1ntokz.livekit.cloud`
- [ ] Added environment variable: `LIVEKIT_API_KEY=APIJ3p9EvfKirbr`
- [ ] Added environment variable: `LIVEKIT_API_SECRET=VZMtypNewY4UVjb6DWEyqFz3GdDjfzhmVTneLfQcARVA`
- [ ] Added environment variable: `GOOGLE_API_KEY=AIzaSyAj-SGLoneB87aHsSx3tUPwKWhdASJnenw`
- [ ] Added environment variable: `CARTESIA_API_KEY=sk_car_6mCMiBXvFnPMo9VskKP937`
- [ ] Deployment completed successfully
- [ ] Service is "Live" (not sleeping)

## Testing

- [ ] Started Next.js app locally (`npm run dev`)
- [ ] Opened a voice room in browser
- [ ] Can see "Real-time Translation" section
- [ ] Language dropdowns work
- [ ] Clicked "Start Agent" button
- [ ] Received success message (Agent dispatched)
- [ ] Agent joined room (check Render logs)
- [ ] Spoke in Language 1
- [ ] Heard translation in Language 2
- [ ] Spoke in Language 2
- [ ] Heard translation in Language 1

## Troubleshooting (if needed)

- [ ] Checked Render logs for errors
- [ ] Verified environment variables in Render
- [ ] Checked browser console for errors
- [ ] Checked Next.js terminal for errors
- [ ] Verified agent name matches: `interpreter-agent`

## Production Deployment (if deploying app)

- [ ] Added environment variables to hosting platform (Vercel/Netlify)
- [ ] Deployed Next.js app
- [ ] Tested translation in production

---

## Quick Reference

### Environment Variables for Agent Worker (Render)
```
LIVEKIT_URL=wss://travcoies-9h1ntokz.livekit.cloud
LIVEKIT_API_KEY=APIJ3p9EvfKirbr
LIVEKIT_API_SECRET=VZMtypNewY4UVjb6DWEyqFz3GdDjfzhmVTneLfQcARVA
GOOGLE_API_KEY=AIzaSyAj-SGLoneB87aHsSx3tUPwKWhdASJnenw
CARTESIA_API_KEY=sk_car_6mCMiBXvFnPMo9VskKP937
```

### Environment Variables for Next.js App
```
LIVEKIT_URL=https://travcoies-9h1ntokz.livekit.cloud
LIVEKIT_API_KEY=APIJ3p9EvfKirbr
LIVEKIT_API_SECRET=VZMtypNewY4UVjb6DWEyqFz3GdDjfzhmVTneLfQcARVA
NEXT_PUBLIC_LIVEKIT_URL=wss://travcoies-9h1ntokz.livekit.cloud
```

**Note:** 
- Agent worker uses `wss://` (WebSocket Secure)
- Next.js API route uses `https://` (HTTP Secure)
- Client uses `wss://` (WebSocket Secure)

