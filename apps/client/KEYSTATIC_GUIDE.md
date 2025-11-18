# Keystatic CMS Guide

## What is Keystatic?

Keystatic is a modern, headless CMS that provides a clean, modern UI for managing content directly in your Next.js application. It stores content as files in your repository (in the `content/` folder), making it version-controlled and easy to backup.

## Accessing the Admin Panel

Navigate to: **http://localhost:3000/keystatic**

This will open the Keystatic admin interface where you can:
- Create new articles
- Edit existing articles
- Manage published/draft status
- Preview content before publishing

## Creating a New Article

1. Go to http://localhost:3000/keystatic
2. Click on "Articles" in the sidebar
3. Click "Create Article"
4. Fill in the required fields:
   - **Title (English)**: The English title of your article
   - **Title (Arabic)**: The Arabic title of your article
   - **Excerpt (English)**: A short summary in English (shows on listing page)
   - **Excerpt (Arabic)**: A short summary in Arabic (shows on listing page)
   - **Content (English)**: Full article content in English (rich text editor)
   - **Content (Arabic)**: Full article content in Arabic (rich text editor)
   - **Published**: Check this box to make the article visible on the site
   - **Published Date**: The date to display for the article

5. Click "Save" to create the article

## Rich Text Editor Features

The content editor supports:
- **Headings**: H1, H2, H3, etc.
- **Bold and Italic**: Format text with **bold** and *italic*
- **Lists**: Bulleted and numbered lists
- **Links**: Add hyperlinks
- **Images**: Upload and embed images (stored in `public/images/articles/`)
- **Dividers**: Add horizontal rules to separate sections

## Publishing Workflow

1. Create an article with the "Published" checkbox **unchecked** to save it as a draft
2. Preview the article by clicking the slug/title after saving
3. When ready to publish, edit the article and check the "Published" checkbox
4. Published articles will appear on:
   - English blog: http://localhost:3000/blog
   - Arabic blog: http://localhost:3000/ar/blog

## File Structure

Articles are stored in: `content/articles/[slug]/`

Each article folder contains:
- `index.yaml` - Article metadata (title, excerpt, dates, etc.)
- `content.mdoc` - The actual article content in Markdown format
- Any uploaded images are in `public/images/articles/`

## How It Matches Your Site Design

Keystatic is headless, meaning:
- The **admin panel** has its own clean UI (black/white design)
- The **frontend** (what visitors see) uses YOUR existing design
- Articles automatically inherit your:
  - Fonts
  - Colors
  - Header and footer
  - Gradient backgrounds
  - Styling from Tailwind

The article pages are rendered using your existing React components with Tailwind Typography for beautiful, consistent formatting.

## Benefits of Keystatic

✅ **No Database Required**: Articles stored as files in your repo
✅ **Version Control**: All changes tracked in Git
✅ **Type-Safe**: Full TypeScript support
✅ **Modern UI**: Clean, intuitive admin interface
✅ **Flexible**: Supports rich text, images, and custom fields
✅ **Fast**: Local file-based system, no API calls needed
✅ **Matches Your Design**: Frontend automatically uses your existing styles

## Migration from Old System

Your existing articles in the database are still there. To migrate them to Keystatic:

1. Access your old admin panel at http://localhost:3000/admin
2. Copy the content from existing articles
3. Create new articles in Keystatic at http://localhost:3000/keystatic
4. Paste the content and save

Once migrated, you can safely remove the old database-based blog system.

## Next Steps

1. Access Keystatic admin: http://localhost:3000/keystatic
2. Create your first article
3. Check the "Published" box when ready
4. View it at http://localhost:3000/blog

Enjoy your new modern CMS! 🎉
