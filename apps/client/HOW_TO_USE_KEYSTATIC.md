# How to Use Keystatic CMS - Complete Guide

## ✅ Everything is Now Working!

Your Keystatic CMS is fully configured and ready to use. Here's how it works:

## 📝 Adding New Articles (Production)

### Step 1: Access Keystatic Dashboard
Visit: `https://moteib-client.vercel.app/keystatic`

### Step 2: Sign in with GitHub
- Click "Sign in with GitHub"
- You'll be redirected to GitHub
- Authorize the app (if not already done)
- You'll be redirected back to Keystatic

### Step 3: Create New Article
1. Click "Articles" in the sidebar
2. Click "Create Article" button
3. Fill in all fields:
   - **Title (English)**: Main identifier (URL slug will be generated from this)
   - **Title (English)**: Display title in English
   - **Title (Arabic)**: Display title in Arabic
   - **Excerpt (English)**: Short description in English
   - **Excerpt (Arabic)**: Short description in Arabic
   - **Content (English)**: Full article content in English (Markdoc format)
   - **Content (Arabic)**: Full article content in Arabic (Markdoc format)
   - **Published**: Check this box to make the article visible
   - **Published Date**: Set the publication date

4. Click "Create" button

### Step 4: Wait for Deployment
- Keystatic commits your changes to GitHub
- GitHub triggers Vercel to rebuild
- **Wait 2-3 minutes** for Vercel to deploy
- Your article will appear on:
  - `https://moteib-client.vercel.app/blog` (English)
  - `https://moteib-client.vercel.app/ar/blog` (Arabic)

## ✏️ Editing Existing Articles

1. Visit `https://moteib-client.vercel.app/keystatic`
2. Sign in with GitHub
3. Click "Articles" → Select the article you want to edit
4. Make your changes
5. Click "Update"
6. Wait 2-3 minutes for Vercel to rebuild

## 🔍 Current Articles

You now have **4 articles** in your CMS:

1. **5 Essential Leadership Qualities** (`5-essential-leadership-qualities`)
2. **Building High-Performance Teams** (`building-high-performance-teams`)
3. **Transforming Workplace Culture** (`transforming-workplace-culture`)
4. **Test** (`test`) - Your test article

All of these should now be visible in:
- Keystatic dashboard (production): `https://moteib-client.vercel.app/keystatic`
- Blog pages: `https://moteib-client.vercel.app/blog`

## 📁 Content Storage

All articles are stored in: `apps/client/content/articles/`

Each article has its own folder with:
- `index.yaml` - Metadata (titles, excerpts, published status, date)
- `contentEn.mdoc` - English content
- `contentAr.mdoc` - Arabic content

## 🔄 The Complete Workflow

```
You edit in Keystatic
        ↓
Keystatic commits to GitHub (main branch)
        ↓
GitHub triggers Vercel webhook
        ↓
Vercel builds and deploys (2-3 minutes)
        ↓
Article appears on live blog
```

## 💻 Local Development

If you want to work locally:

1. **Run the dev server:**
   ```bash
   cd apps/client
   npm run dev
   ```

2. **Access local Keystatic:**
   ```
   http://localhost:3000/keystatic
   ```

3. **Local mode:**
   - Uses file system storage
   - Changes are immediate
   - No GitHub commits
   - Articles saved to `apps/client/content/articles/`

## ⚠️ Important Notes

1. **Always wait for Vercel deployment** - Changes take 2-3 minutes to appear
2. **Check "Published" checkbox** - Unpublished articles won't show on the blog
3. **Fill all required fields** - Both English and Arabic content is required
4. **Don't manually edit files** - Use Keystatic dashboard to avoid formatting issues
5. **Production uses GitHub App** - Not a manually created OAuth App

## 🐛 Troubleshooting

### Article not showing on blog?
- Check if "Published" is checked
- Wait 2-3 minutes for Vercel to deploy
- Check Vercel dashboard for deployment status
- Try hard refresh (Ctrl+F5) or incognito mode

### Can't sign in to Keystatic?
- Make sure you're using the correct GitHub account (autonomyowner)
- Check that environment variables are set in Vercel
- Verify GitHub App callback URL is correct

### Article showing in dashboard but not on site?
- Check Vercel deployment logs
- Ensure article has `published: true`
- Verify `publishedDate` is set

## 🎉 You're All Set!

Your CMS is fully functional. You can now:
- ✅ Create articles through Keystatic dashboard
- ✅ Edit existing articles
- ✅ See all 4 articles in the dashboard
- ✅ Articles automatically appear on your blog
- ✅ Bilingual content (English & Arabic)

Happy blogging! 🚀
