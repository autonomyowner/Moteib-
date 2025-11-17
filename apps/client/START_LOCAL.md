# 🚀 Quick Local Start Guide

## 3 Simple Steps to Test Locally

### Step 1: Generate Secret Key

Run this command in your terminal:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Copy the output** - you'll need it in the next step.

### Step 2: Update `.env.local`

Open `apps/client/.env.local` and replace `CHANGE-THIS-GENERATE-A-NEW-SECRET-KEY` with the secret you just generated.

Your `.env.local` should look like this:

```bash
MONGODB_URI=mongodb+srv://autonomyowner:RTILLIdie22@cluster0.tmwtx.mongodb.net/mindshift-arabia?retryWrites=true&w=majority

PAYLOAD_SECRET=paste-your-generated-secret-here

PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Step 3: Start the Server

```bash
cd apps/client
npm install  # If you haven't already
npm run dev
```

### Step 4: Open Admin Panel

1. Open browser: `http://localhost:3000/admin`
2. Create your first admin user
3. Start adding content!

## That's It! 🎉

See `LOCAL_TEST.md` for detailed testing instructions.
