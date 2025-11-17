# 🧪 Local Testing Guide

Follow these steps to test Payload CMS locally on your machine.

## Step 1: Create/Update `.env.local` File

Create or update `apps/client/.env.local` with these values:

```bash
# MongoDB Atlas Connection String
MONGODB_URI=mongodb+srv://autonomyowner:RTILLIdie22@cluster0.tmwtx.mongodb.net/mindshift-arabia?retryWrites=true&w=majority

# Payload Secret Key (generate a new one for local)
# Run: openssl rand -base64 32
PAYLOAD_SECRET=your-local-secret-key-here

# Local Server URLs
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Generate Payload Secret

Run this command in your terminal:

```bash
# macOS/Linux
openssl rand -base64 32

# Or use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Copy the output and paste it as `PAYLOAD_SECRET` in `.env.local`.

## Step 2: Install Dependencies

Make sure all dependencies are installed:

```bash
cd apps/client
npm install
```

## Step 3: Verify MongoDB Atlas Access

Before starting, make sure your MongoDB Atlas cluster allows connections:

1. Go to: https://cloud.mongodb.com
2. Navigate to: **Network Access**
3. Make sure `0.0.0.0/0` is whitelisted (allows all IPs)
   - If not, click "Add IP Address" → "Allow Access from Anywhere"

## Step 4: Start Development Server

```bash
cd apps/client
npm run dev
```

The server will start at `http://localhost:3000`

## Step 5: Access Admin Panel

1. Open your browser
2. Go to: `http://localhost:3000/admin`
3. You should see the Payload CMS login page
4. **Create your first admin user:**
   - Email: `admin@example.com` (or any email)
   - Password: Choose a strong password
   - Role: Select "Admin"
   - First Name / Last Name: (optional)

5. Click "Create" to create your admin account

## Step 6: Create Content

### Create Homepage Content

1. In admin panel, go to **Homepage**
2. Click **"Create New"**
3. Fill in:
   - **Title**: "Homepage"
   - **Hero Section**:
     - Title: "Build Balanced Leadership"
     - Subtitle: "with Moteib bin Nasser AlAjmi"
     - Description: "Helping managers build balanced lives..."
     - Primary CTA: Text: "Book Your Call", URL: "https://calendly.com/coach_moteib"
     - Secondary CTA: Text: "View Programs", URL: "/programs"
   - Fill in other sections (About Coach, What You'll Achieve, etc.)
4. Click **"Save"**

### Create Programs

1. Go to **Programs** collection
2. Create **3 programs**:

   **6-Month Program:**
   - Name: "6-Month Program"
   - Duration: "6-month"
   - Subtitle: "Foundation Building"
   - Description: "Perfect for new managers..."
   - Add features and structure
   - Is Popular: Leave unchecked

   **9-Month Program:**
   - Name: "9-Month Program"
   - Duration: "9-month"
   - Subtitle: "Advanced Development"
   - Description: "Ideal for managers ready to take their leadership..."
   - Add features and structure
   - Is Popular: **Check this** (for "MOST POPULAR" badge)

   **12-Month Program:**
   - Name: "12-Month Program"
   - Duration: "12-month"
   - Subtitle: "Complete Transformation"
   - Description: "For leaders committed to comprehensive transformation..."
   - Add features and structure
   - Is Popular: Leave unchecked

### Create Coach Profile

1. Go to **Coach** collection
2. Click **"Create New"**
3. Fill in:
   - Name: "Moteib bin Nasser AlAjmi"
   - Title: "Certified Leadership Coach | Saudi Arabia"
   - Bio: Add coach biography
   - Philosophy: Add coaching philosophy
   - Expertise: Add areas of expertise
   - Credentials: Add credentials list
   - Certifications: Upload certification images (optional)
4. Click **"Save"**

## Step 7: Test Frontend Pages

Visit these URLs to see your CMS content:

- **Homepage**: `http://localhost:3000`
- **Programs**: `http://localhost:3000/programs`
- **Coach**: `http://localhost:3000/coach`
- **Admin**: `http://localhost:3000/admin`

## Troubleshooting

### MongoDB Connection Error

**Error: "MongoServerError: Authentication failed"**
- Check your password in `MONGODB_URI` (remove `<` and `>` if they're literal)
- Verify database user exists in MongoDB Atlas
- Check password is correct

**Error: "MongooseError: connect ECONNREFUSED"**
- Check MongoDB Atlas IP whitelist includes `0.0.0.0/0`
- Verify connection string is correct
- Check internet connection

### Admin Panel Not Loading

**Blank page at `/admin`**
- Check `PAYLOAD_SECRET` is set in `.env.local`
- Restart dev server after adding env vars
- Check browser console for errors
- Verify MongoDB connection is working

### Content Not Showing

**Pages load but no content**
- Make sure you created content in admin panel
- Check content is saved (not in draft)
- Check browser console for API errors
- Test API directly: `http://localhost:3000/api/homepage`

### TypeScript Errors

If you see TypeScript errors about missing types:

```bash
# Generate Payload types
npx payload generate:types
```

### Port Already in Use

If port 3000 is already in use:

```bash
# Use a different port
PORT=3001 npm run dev
```

Then update `.env.local`:
```
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

## Quick Test Checklist

- [ ] `.env.local` file created with MongoDB URI and PAYLOAD_SECRET
- [ ] Dependencies installed (`npm install`)
- [ ] MongoDB Atlas IP whitelist includes `0.0.0.0/0`
- [ ] Dev server starts without errors (`npm run dev`)
- [ ] Can access `/admin` and create admin user
- [ ] Can create Homepage content
- [ ] Can create Programs (all 3)
- [ ] Can create Coach profile
- [ ] Homepage (`/`) displays CMS content
- [ ] Programs page (`/programs`) displays CMS content
- [ ] Coach page (`/coach`) displays CMS content

## Next Steps

Once local testing works:
1. ✅ Test all pages
2. ✅ Add more content
3. ✅ Test Arabic localization (EN/AR tabs in admin)
4. ✅ Deploy to Vercel (see `VERCEL_ENV_SETUP.md`)

## Useful Commands

```bash
# Start dev server
npm run dev

# Build for production (test build)
npm run build

# Start production server locally
npm start

# Generate Payload types
npx payload generate:types

# Lint code
npm run lint
```

## Need Help?

- Check browser console for errors
- Check terminal for server errors
- Verify MongoDB Atlas connection
- Check `.env.local` file is correct
- Restart dev server after changing env vars
