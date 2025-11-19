# Quick Handoff Checklist

## 🎯 Pre-Setup (Client Accounts)

```
[ ] Create client's Gmail account
    Email: _____________________
    Password: _____________________

[ ] Create client's GitHub account
    Username: _____________________
    Password: _____________________

[ ] Create client's Vercel account
    (Sign up with GitHub - no separate password needed)
```

---

## 🚀 Deployment Steps (In Order!)

### 1️⃣ GitHub Repository Setup
```bash
# In your local project directory
[ ] git remote remove origin
[ ] git remote add origin https://github.com/CLIENT_USERNAME/REPO_NAME.git
[ ] git push -u origin main
```

### 2️⃣ Vercel Deployment
```
[ ] Log into client's Vercel → "Add New Project"
[ ] Import client's GitHub repository
[ ] Set Root Directory: apps/client
[ ] Add environment variables:
    [ ] DATABASE_URL (if using database)
    [ ] JWT_SECRET (generate new one)

[ ] Deploy (don't add Keystatic vars yet!)
[ ] Note the deployment URL: _____________________
```

### 3️⃣ Keystatic Setup
```
[ ] Visit: https://YOUR_VERCEL_URL.vercel.app/keystatic
[ ] Click "Create GitHub App" and follow wizard
[ ] Copy the 4 environment variables generated
[ ] Add to Vercel:
    [ ] KEYSTATIC_GITHUB_CLIENT_ID
    [ ] KEYSTATIC_GITHUB_CLIENT_SECRET
    [ ] KEYSTATIC_SECRET (alphanumeric only!)
    [ ] NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG

[ ] Redeploy in Vercel
```

### 4️⃣ Verification
```
[ ] Visit website - all pages load
[ ] Visit /blog - all 4 articles show
[ ] Visit /ar/blog - Arabic articles show
[ ] Visit /keystatic - dashboard loads
[ ] Sign in with client's GitHub
[ ] See all 4 articles in dashboard
[ ] Edit one article and save
[ ] Wait 2-3 min - changes appear on site
```

---

## 📋 Environment Variables Quick Reference

### Generate KEYSTATIC_SECRET (alphanumeric):
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Generate JWT_SECRET:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('base64'))"
```

---

## ✅ Final Handoff

```
[ ] All tests passing
[ ] Client can log into Keystatic
[ ] Client can edit articles
[ ] Provide client with credentials document
[ ] Share documentation:
    - DEPLOYMENT_HANDOFF_GUIDE.md (full guide)
    - HOW_TO_USE_KEYSTATIC.md (CMS instructions)
[ ] Schedule follow-up training session
```

---

## 🆘 Quick Troubleshooting

**"Authorization failed" in Keystatic:**
→ Check GitHub App callback URL matches Vercel domain exactly

**Articles not showing:**
→ Wait 2-3 minutes for deployment
→ Check "Published" is true
→ Hard refresh (Ctrl+F5)

**Build fails:**
→ Check Vercel build logs
→ Verify Root Directory = `apps/client`
→ Check all articles have index.yaml + contentEn.mdoc + contentAr.mdoc

---

## 📞 Important URLs

```
Website: _____________________
Keystatic CMS: _____________________/keystatic
Vercel Dashboard: https://vercel.com/
GitHub Repo: _____________________
```

---

**Time Estimate:** 30-45 minutes for complete handoff

**See DEPLOYMENT_HANDOFF_GUIDE.md for detailed instructions**
