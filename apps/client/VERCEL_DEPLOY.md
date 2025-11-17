# Vercel Deployment Guide - Payload CMS

This guide will help you deploy your Payload CMS site to Vercel with minimal setup.

## Important: MongoDB Atlas (Free Tier)

**You need MongoDB Atlas** - but it's **100% FREE** and takes 5 minutes to set up. It's the database that stores your CMS content. Vercel doesn't provide databases, so this is necessary.

### Why MongoDB Atlas?
- ✅ **Completely FREE** (512MB storage, perfect for CMS)
- ✅ Works perfectly with Vercel serverless functions
- ✅ No credit card required
- ✅ Takes 5 minutes to set up
- ✅ Managed by MongoDB (no server maintenance)

## Step 1: Set Up MongoDB Atlas (5 minutes)

1. **Go to MongoDB Atlas**: https://www.mongodb.com/cloud/atlas/register
2. **Sign up** (free account, no credit card)
3. **Create a Free Cluster**:
   - Choose "Free" (M0) tier
   - Select a region close to you
   - Click "Create Cluster" (takes 3-5 minutes)
4. **Create Database User**:
   - Go to "Database Access" → "Add New Database User"
   - Username: `admin` (or any name)
   - Password: Generate a strong password (save it!)
   - Database User Privileges: "Atlas admin"
   - Click "Add User"
5. **Whitelist IP Address**:
   - Go to "Network Access" → "Add IP Address"
   - Click "Allow Access from Anywhere" (for Vercel)
   - Or add `0.0.0.0/0` to allow all IPs
   - Click "Confirm"
6. **Get Connection String**:
   - Go to "Database" → Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - It looks like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`
   - Replace `<password>` with your database user password
   - Add database name: `?retryWrites=true&w=majority` → `?retryWrites=true&w=majority` (or add `/mindshift-arabia` before the `?`)

**Example connection string:**
```
mongodb+srv://admin:yourpassword@cluster0.xxxxx.mongodb.net/mindshift-arabia?retryWrites=true&w=majority
```

## Step 2: Prepare for Vercel

### Generate Payload Secret

Run this command to generate a secure secret:

```bash
# macOS/Linux
openssl rand -base64 32

# Or use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Save this secret - you'll need it for Vercel.

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard

1. **Push your code to GitHub** (if not already)
2. **Go to Vercel**: https://vercel.com
3. **Import your repository**
4. **Configure Environment Variables**:

   Add these in Vercel dashboard → Your Project → Settings → Environment Variables:

   ```
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/mindshift-arabia?retryWrites=true&w=majority
   PAYLOAD_SECRET=your-generated-secret-key-here
   PAYLOAD_PUBLIC_SERVER_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   ```

5. **Deploy** - Vercel will automatically build and deploy

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd apps/client
vercel

# Follow prompts, then add environment variables:
vercel env add MONGODB_URI
vercel env add PAYLOAD_SECRET
vercel env add PAYLOAD_PUBLIC_SERVER_URL
vercel env add NEXT_PUBLIC_APP_URL

# Deploy to production
vercel --prod
```

## Step 4: Access Admin Panel

1. After deployment, visit: `https://your-domain.vercel.app/admin`
2. Create your first admin user
3. Start adding content!

## Step 5: Update Environment Variables After First Deploy

After your first deployment, Vercel will give you a URL like `https://your-app.vercel.app`. 

**Update these environment variables in Vercel dashboard:**

1. Go to: Project → Settings → Environment Variables
2. Update `PAYLOAD_PUBLIC_SERVER_URL` to your actual Vercel URL
3. Update `NEXT_PUBLIC_APP_URL` to your actual Vercel URL
4. Redeploy (or it will auto-redeploy)

## Vercel Configuration

The project includes `vercel.json` with:
- ✅ Serverless function timeouts (30s for API routes)
- ✅ Proper Next.js framework detection
- ✅ Optimized build settings

## Environment Variables Summary

Add these in Vercel Dashboard → Settings → Environment Variables:

| Variable | Value | Example |
|----------|-------|---------|
| `MONGODB_URI` | Your MongoDB Atlas connection string | `mongodb+srv://...` |
| `PAYLOAD_SECRET` | Generated secret key | `abc123...` |
| `PAYLOAD_PUBLIC_SERVER_URL` | Your Vercel URL | `https://your-app.vercel.app` |
| `NEXT_PUBLIC_APP_URL` | Your Vercel URL | `https://your-app.vercel.app` |

## Troubleshooting

### Build Fails

**Error: "Cannot find module '@payload-config'"**
- Make sure `next.config.ts` has the webpack alias
- Check that `payload.config.ts` exists

**Error: "MongoDB connection failed"**
- Verify `MONGODB_URI` is set correctly in Vercel
- Check MongoDB Atlas IP whitelist includes `0.0.0.0/0`
- Verify database user password is correct

### Admin Panel Not Loading

**Blank page at `/admin`**
- Check `PAYLOAD_SECRET` is set in Vercel
- Check browser console for errors
- Verify MongoDB connection is working

### API Routes Timeout

- Vercel serverless functions have a 30s timeout (configured in `vercel.json`)
- For longer operations, consider using Vercel Pro plan (60s timeout)

## Cost Breakdown

- **Vercel**: FREE (Hobby plan) - unlimited deployments
- **MongoDB Atlas**: FREE (M0 tier) - 512MB storage
- **Total Cost**: $0/month

## Next Steps After Deployment

1. ✅ Set up custom domain (optional, free in Vercel)
2. ✅ Create admin user at `/admin`
3. ✅ Add content (Homepage, Programs, Coach)
4. ✅ Test all pages
5. ✅ Set up automatic deployments from GitHub

## Support

- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com
- Payload CMS Docs: https://payloadcms.com/docs
