# 📝 Blog System - Keystatic CMS

## Overview

This blog system uses **Keystatic**, a modern headless CMS that stores content as files in your Git repository. No database needed for blog content!

## 🚀 Quick Start

### Access Keystatic Admin

**URL**: http://localhost:3000/keystatic

**Note**: Keystatic is currently open access. Anyone with the URL can manage content.

### View the Blog

- **English**: http://localhost:3000/blog
- **Arabic**: http://localhost:3000/ar/blog

## 📚 Current Content

The blog comes with **3 professional leadership articles**:

1. **5 Essential Leadership Qualities Every Leader Should Develop**
   - Published: January 15, 2025
   - Topics: Emotional intelligence, vision, authenticity, adaptability, empowerment

2. **Transforming Workplace Culture Through Mindful Leadership**
   - Published: January 10, 2025
   - Topics: Psychological safety, burnout prevention, mindful practices

3. **Building High-Performance Teams That Deliver Results**
   - Published: January 5, 2025
   - Topics: Trust, conflict, commitment, accountability, results

## ✨ Features

### Content Management
- ✅ Rich text editor with formatting
- ✅ Image uploads
- ✅ Bilingual support (English + Arabic)
- ✅ Draft/publish workflow
- ✅ Publication dates
- ✅ No coding required

### Blog Design
- ✅ Brand-consistent colors (green #1A5345 + amber)
- ✅ White background with gradient hero
- ✅ Beautiful article cards with accent bars
- ✅ Smooth animations
- ✅ Fully responsive
- ✅ RTL support for Arabic

### Technical
- ✅ File-based storage (version controlled)
- ✅ Static generation for performance
- ✅ TypeScript throughout
- ✅ Tailwind CSS + Typography plugin
- ✅ Next.js 15 App Router

## 📂 File Structure

```
apps/client/
├── content/
│   └── articles/              # Blog articles (YAML + Markdown)
│       ├── 5-essential-leadership-qualities/
│       ├── transforming-workplace-culture/
│       └── building-high-performance-teams/
├── src/
│   ├── app/
│   │   ├── blog/             # English blog pages
│   │   ├── ar/blog/          # Arabic blog pages
│   │   ├── keystatic/        # Keystatic admin UI
│   │   └── api/keystatic/    # Keystatic API routes
│   └── lib/
│       └── keystatic.ts      # Reader utilities
├── keystatic.config.tsx      # CMS configuration
└── public/images/articles/   # Uploaded images
```

## 🎨 Using Keystatic

### Creating a New Article

1. Go to http://localhost:3000/keystatic
2. Click "Articles" → "Create Article"
3. Fill in all fields:
   - **Title (English)** - Will generate the URL slug
   - **Title (Arabic)** - Arabic version of title
   - **Excerpt (English)** - Short summary (2-3 sentences)
   - **Excerpt (Arabic)** - Arabic summary
   - **Content (English)** - Full article with rich text
   - **Content (Arabic)** - Full Arabic article
   - **Published** - Check to make visible on blog
   - **Published Date** - Date to display
4. Click "Save"

### Editing Articles

1. Open http://localhost:3000/keystatic
2. Click "Articles"
3. Select article to edit
4. Make changes
5. Click "Save"

### Rich Text Features

The content editor supports:
- Headings (H1, H2, H3, etc.)
- **Bold** and *Italic* text
- Bullet and numbered lists
- Links
- Images (upload directly)
- Horizontal dividers
- Block quotes

### Managing Images

1. Click the image button in the editor
2. Upload image (JPG, PNG, etc.)
3. Image saved to `public/images/articles/`
4. Automatically embedded in content

## 🌐 Blog Pages

### Listing Pages

**English**: `/blog`
- Shows all published articles
- Card-based layout
- Newest first
- Gradient hero section

**Arabic**: `/ar/blog`
- Same layout with RTL support
- Arabic content
- Right-to-left reading direction

### Article Pages

**English**: `/blog/[slug]`
**Arabic**: `/ar/blog/[slug]`

- Full article content
- Rich typography
- Responsive design
- Back to blog link

## 🔧 Customization

### Colors

The blog uses your brand colors:
- Primary: `#1A5345` (dark green)
- Accent: Amber/gold tones
- Background: White
- Text: Slate colors

To change, update Tailwind classes in:
- `src/app/blog/page.tsx`
- `src/app/blog/[slug]/page.tsx`
- `src/app/ar/blog/page.tsx`
- `src/app/ar/blog/[slug]/page.tsx`

### Adding Fields

To add custom fields to articles:

1. Edit `keystatic.config.tsx`
2. Add field to schema
3. Update blog pages to display new field
4. Restart dev server

## 📦 Dependencies

```json
{
  "@keystatic/core": "Latest",
  "@keystatic/next": "Latest",
  "@tailwindcss/typography": "Latest",
  "next": "15.4.6",
  "react": "19.x",
  "tailwindcss": "4.x"
}
```

## 🚀 Deployment

### Vercel/Netlify (Recommended)

1. Push to Git repository
2. Connect to Vercel/Netlify
3. Content in `content/` folder deploys automatically
4. Keystatic works out of the box

### Environment Variables

None required! Content is file-based.

### Build Command

```bash
npm run build
```

### Production Notes

- Consider adding authentication to `/keystatic` route
- Set up proper domain and HTTPS
- Add meta tags for SEO
- Configure caching strategy

## 🔐 Adding Authentication (Optional)

Currently, Keystatic is open access. To add authentication:

1. Use a service like Clerk or Auth0
2. Or implement custom middleware
3. Protect `/keystatic` and `/api/keystatic/*` routes
4. See Keystatic docs for authentication options

## 📖 Learn More

- **Keystatic Guide**: `KEYSTATIC_GUIDE.md`
- **Admin Quick Start**: `ADMIN_QUICK_START.md`
- **Deployment Guide**: `DEPLOYMENT_READY.md`

## 🎯 Tips

### Backup Content

Content is in `content/articles/` - committed to Git!
- Every change is version controlled
- Easy rollback if needed
- Safe from data loss

### Preview Changes

After editing:
1. Visit the blog page
2. See changes immediately
3. Check both EN and AR versions

### SEO

For better SEO:
- Write compelling excerpts
- Use descriptive titles
- Keep slugs short and keyword-rich
- Add meta descriptions (coming soon)

## ✅ Production Ready

This blog system is ready to deploy:
- ✅ 3 professional articles included
- ✅ Beautiful, responsive design
- ✅ Bilingual support
- ✅ Easy content management
- ✅ No database required
- ✅ Version controlled content

Enjoy your new blog! 🎉
