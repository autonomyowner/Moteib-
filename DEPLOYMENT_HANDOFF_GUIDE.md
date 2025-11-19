# Project Handoff & Deployment Guide

## 🎯 Overview
This guide will help you transfer the Moteib project to the client's own GitHub account and Vercel deployment.

---

## 📋 Prerequisites (What You Need to Create for Client)

### 1. Client's Gmail Account
- ✅ Create new Gmail account for the client
- **Save credentials securely** (you'll need them for setup)

### 2. Client's GitHub Account
- ✅ Create GitHub account using client's Gmail
- **Username suggestion**: Something like `moteib-arabia` or client's business name
- Enable 2FA for security

### 3. Client's Vercel Account
- ✅ Create Vercel account using client's Gmail
- Connect it to the new GitHub account

---

## 🚀 Step-by-Step Handoff Process

### STEP 1: Push Current Code to Client's GitHub Repository

#### 1.1 Create New Repository on Client's GitHub
1. Log into client's GitHub account
2. Click "New Repository"
3. Repository name: `Moteib-Website` (or similar)
4. Set to **Private** (recommended)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

#### 1.2 Update Local Git Remote
```bash
# Check current remote
git remote -v

# Remove old remote
git remote remove origin

# Add client's repository as new remote (replace USERNAME and REPO)
git remote add origin https://github.com/CLIENT_USERNAME/REPO_NAME.git

# Push all branches and history
git push -u origin main

# Verify
git remote -v
```

---

### STEP 2: Set Up Keystatic GitHub App

**IMPORTANT**: The Keystatic GitHub App must be recreated for the client's account!

#### 2.1 Delete Old GitHub App (from your account)
1. Go to https://github.com/settings/apps
2. Find the Keystatic app you created earlier
3. Delete it (the old OAuth credentials won't work with new repo)

#### 2.2 Create New Keystatic GitHub App (on client's account)

You'll do this **AFTER** deploying to Vercel. Here's the process:

1. **First deploy to Vercel** (Step 3 below)
2. **Then visit**: `https://CLIENT_VERCEL_URL.vercel.app/keystatic`
3. Click "Connect to GitHub" or "Create GitHub App"
4. Follow Keystatic's guided setup:
   - It will redirect to GitHub
   - Create the GitHub App
   - Authorize it
   - Select the repository
5. **Copy the generated environment variables** from the `.env` file

---

### STEP 3: Deploy to Client's Vercel Account

#### 3.1 Import Project to Vercel
1. Log into client's Vercel account
2. Click "Add New Project"
3. Import from GitHub
4. Select the client's new repository
5. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/client`
   - **Build Command**: `npm run build`
   - **Output Directory**: (leave default)
   - **Install Command**: `npm install`

#### 3.2 Environment Variables (CRITICAL!)

Add these environment variables in Vercel:

**Database (if using):**
```
DATABASE_URL=postgresql://user:password@host/database?sslmode=require
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

**Keystatic (You'll get these AFTER creating the GitHub App):**
```
KEYSTATIC_GITHUB_CLIENT_ID=<from GitHub App creation>
KEYSTATIC_GITHUB_CLIENT_SECRET=<from GitHub App creation>
KEYSTATIC_SECRET=<generate new one - see below>
NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG=<from GitHub App creation>
```

**How to generate KEYSTATIC_SECRET:**
```bash
# Run this locally and copy the output
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**IMPORTANT**: Make sure `KEYSTATIC_SECRET` is alphanumeric only (no special characters)!

#### 3.3 Deploy
1. Click "Deploy"
2. Wait for build to complete
3. Note the deployment URL (e.g., `moteib-client-xxxxx.vercel.app`)

---

### STEP 4: Configure Keystatic for Production

#### 4.1 Create GitHub App via Keystatic
1. Visit: `https://YOUR_VERCEL_URL.vercel.app/keystatic`
2. Click "Sign in with GitHub" or "Create GitHub App"
3. Follow the wizard to create the GitHub App
4. It will generate a `.env` file locally with these variables:
   ```
   KEYSTATIC_GITHUB_CLIENT_ID=...
   KEYSTATIC_GITHUB_CLIENT_SECRET=...
   KEYSTATIC_SECRET=...
   NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG=...
   ```

#### 4.2 Add Variables to Vercel
1. Go to Vercel project → Settings → Environment Variables
2. Add all 4 Keystatic variables from the `.env` file
3. Click "Save"
4. **Redeploy** the project (Deployments → Redeploy)

#### 4.3 Verify GitHub App Settings
1. Go to https://github.com/settings/apps (on client's account)
2. Find the newly created Keystatic app
3. Verify **Callback URL** is:
   ```
   https://YOUR_VERCEL_URL.vercel.app/api/keystatic/github/oauth/callback
   ```

---

### STEP 5: Configure Custom Domain (Optional but Recommended)

#### 5.1 Add Domain in Vercel
1. Go to Vercel project → Settings → Domains
2. Add custom domain: `moteib-client.vercel.app` or client's custom domain
3. Follow DNS configuration instructions

#### 5.2 Update Keystatic Callback URL
If using custom domain, update GitHub App:
1. Go to GitHub Apps settings
2. Update **Authorization callback URL** to use the custom domain:
   ```
   https://YOUR_CUSTOM_DOMAIN.com/api/keystatic/github/oauth/callback
   ```

---

## 📁 Files & Content to Transfer

### All Project Files
Everything is already in the repository, including:
- ✅ All source code (`apps/client/src/`)
- ✅ Configuration files
- ✅ All 4 blog articles (`content/articles/`)
- ✅ Documentation

### Content Structure
```
content/articles/
├── 5-essential-leadership-qualities/
├── azeddine/
├── building-high-performance-teams/
└── transforming-workplace-culture/
```

Each article has:
- `index.yaml` - Metadata
- `contentEn.mdoc` - English content
- `contentAr.mdoc` - Arabic content

---

## 🔐 Security Checklist

### Things to Keep Private (NEVER commit to Git)
- ✅ `.env` file is already in `.gitignore`
- ✅ Database credentials
- ✅ API keys
- ✅ OAuth secrets

### GitHub Repository Settings
1. Set repository to **Private** (recommended)
2. Add client as admin
3. Enable branch protection on `main` (optional but recommended)

---

## 📚 Client Training Materials

### For Content Editors

**How to Add/Edit Blog Articles:**

1. **Access Keystatic Dashboard:**
   ```
   https://YOUR_DOMAIN.vercel.app/keystatic
   ```

2. **Sign in with GitHub:**
   - Click "Sign in with GitHub"
   - Use client's GitHub account

3. **Create New Article:**
   - Click "Articles" → "Create Article"
   - Fill in all fields (both English & Arabic)
   - Check "Published" checkbox
   - Click "Create"

4. **Edit Existing Article:**
   - Click "Articles" → Select article
   - Make changes
   - Click "Update"

5. **Wait for Deployment:**
   - Changes take 2-3 minutes to appear
   - Vercel automatically rebuilds the site

**Important Notes for Client:**
- Always check "Published" to make articles visible
- Fill both English and Arabic content
- Wait 2-3 minutes after publishing for changes to appear

### Documentation Files to Share
- ✅ `apps/client/HOW_TO_USE_KEYSTATIC.md` - Complete CMS guide
- ✅ `apps/client/KEYSTATIC_SETUP.md` - Setup reference
- ✅ `apps/client/KEYSTATIC_TROUBLESHOOTING.md` - Common issues

---

## 🧪 Testing Checklist (Before Handoff)

### Test on Client's Deployment

- [ ] Homepage loads correctly (English & Arabic)
- [ ] All navigation works
- [ ] Blog listing pages show all 4 articles
- [ ] Individual blog articles load correctly
- [ ] Keystatic dashboard is accessible
- [ ] Can sign in to Keystatic with client's GitHub
- [ ] Can view all articles in Keystatic
- [ ] Can edit an article in Keystatic
- [ ] Changes appear on site after 2-3 minutes
- [ ] About Coach page works
- [ ] Programs page works
- [ ] Contact page works
- [ ] Mobile responsive design works
- [ ] Both language switchers work

---

## 🆘 Troubleshooting Common Issues

### "Authorization failed" in Keystatic
**Solution:**
- Check all 4 Keystatic environment variables are set in Vercel
- Verify GitHub App callback URL matches exactly
- Ensure `KEYSTATIC_SECRET` has no special characters
- Redeploy after adding variables

### Articles not showing in Keystatic dashboard
**Solution:**
- Check that articles are in `content/articles/` at repository root
- Verify files are pushed to GitHub
- Check article has `published: true` in `index.yaml`

### Build failures on Vercel
**Solution:**
- Check Vercel build logs for specific errors
- Ensure `Root Directory` is set to `apps/client`
- Verify all required environment variables are set
- Check that articles have all required files (index.yaml, contentEn.mdoc, contentAr.mdoc)

### "Page not found" for blog articles
**Solution:**
- Wait 2-3 minutes for Vercel to finish deploying
- Clear browser cache (Ctrl+F5)
- Check article is published in Keystatic
- Verify article files exist in repository

---

## 📞 Support Information

### If Client Has Issues

**What to Check:**
1. Vercel deployment status
2. Environment variables are set correctly
3. GitHub App callback URL matches domain
4. Articles are published in Keystatic

**Quick Fixes:**
- Redeploy in Vercel
- Wait 2-3 minutes after making changes
- Try incognito/private browsing mode
- Clear browser cache

---

## ✅ Final Handoff Checklist

### Before Handing Over to Client

- [ ] Project pushed to client's GitHub repository
- [ ] Deployed to client's Vercel account
- [ ] All environment variables configured
- [ ] Keystatic GitHub App created and working
- [ ] Custom domain configured (if applicable)
- [ ] All 4 articles visible and working
- [ ] Tested all pages (EN & AR)
- [ ] Tested Keystatic CMS functionality
- [ ] Created test article to verify workflow
- [ ] Shared login credentials with client
- [ ] Provided documentation links
- [ ] Demonstrated how to use Keystatic
- [ ] Client can successfully edit an article

### Credentials to Provide Client

**Gmail Account:**
- Email: _______________
- Password: _______________

**GitHub Account:**
- Username: _______________
- Password: _______________

**Vercel Account:**
- Login: _______________ (uses GitHub)

**Important URLs:**
- Website: https://_______________
- Keystatic CMS: https://_______________/keystatic
- Vercel Dashboard: https://vercel.com/
- GitHub Repository: https://github.com/_______________

---

## 🎉 Success!

Once all checklist items are complete, the client has:
- ✅ Full ownership of the code
- ✅ Control over hosting and deployment
- ✅ Easy-to-use CMS for content management
- ✅ Bilingual blog system (EN/AR)
- ✅ Automatic deployment workflow

The client can now:
- Add/edit blog articles through Keystatic
- Manage their own hosting on Vercel
- Maintain their codebase on GitHub
- Scale and customize as needed

---

## 📝 Notes

- Keep a backup of the original repository
- Document any custom configurations
- Consider offering a maintenance package
- Schedule a follow-up training session

