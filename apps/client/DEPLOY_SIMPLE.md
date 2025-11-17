# 🚀 Quick Vercel Deployment

## What You Need (5 minutes setup)

### 1. MongoDB Atlas (FREE - Required)
**Why?** Vercel doesn't provide databases. MongoDB Atlas is FREE and works perfectly.

**Setup (5 minutes):**
1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up (free, no credit card)
3. Create free cluster (M0 tier)
4. Create database user (save password!)
5. Whitelist IP: Add `0.0.0.0/0` (allow all)
6. Get connection string from "Connect" → "Connect your application"
7. Replace `<password>` with your password
8. Add database name: `/mindshift-arabia` before the `?`

**Example:**
```
mongodb+srv://admin:yourpassword@cluster0.xxxxx.mongodb.net/mindshift-arabia?retryWrites=true&w=majority
```

### 2. Generate Secret Key

```bash
openssl rand -base64 32
```

Save this - you'll add it to Vercel.

## Deploy to Vercel

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for Vercel"
git push
```

### Step 2: Deploy on Vercel

1. Go to: https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. **Add Environment Variables** (before deploying):

   | Variable | Value |
   |----------|-------|
   | `MONGODB_URI` | Your MongoDB connection string |
   | `PAYLOAD_SECRET` | Your generated secret |
   | `PAYLOAD_PUBLIC_SERVER_URL` | `https://your-app.vercel.app` (update after first deploy) |
   | `NEXT_PUBLIC_APP_URL` | `https://your-app.vercel.app` (update after first deploy) |

5. Click "Deploy"

### Step 3: After First Deploy

1. Vercel will give you a URL like `https://your-app.vercel.app`
2. Go to: Project → Settings → Environment Variables
3. Update `PAYLOAD_PUBLIC_SERVER_URL` and `NEXT_PUBLIC_APP_URL` with your actual URL
4. Redeploy (or it auto-redeploys)

### Step 4: Access Admin

Visit: `https://your-app.vercel.app/admin`
Create your first admin user and start adding content!

## That's It! 🎉

- ✅ Vercel: FREE
- ✅ MongoDB Atlas: FREE
- ✅ Total Cost: $0/month
- ✅ Fully serverless, no backend hosting needed

## Need Help?

See `VERCEL_DEPLOY.md` for detailed instructions.
