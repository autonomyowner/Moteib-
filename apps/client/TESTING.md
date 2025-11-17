# Local Testing Guide for Payload CMS Integration

This guide will help you test the Payload CMS integration locally.

## Prerequisites

1. **Node.js** (v18 or higher)
2. **MongoDB** - You can use either:
   - **MongoDB Atlas** (cloud, recommended for quick start)
   - **Local MongoDB** installation

## Step 1: Install Dependencies

```bash
cd apps/client
npm install
```

## Step 2: Set Up Environment Variables

Create a `.env.local` file in the `apps/client` directory:

```bash
# MongoDB Connection
# Option 1: MongoDB Atlas (recommended)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority

# Option 2: Local MongoDB
# MONGODB_URI=mongodb://localhost:27017/mindshift-arabia

# Payload CMS Configuration
PAYLOAD_SECRET=your-super-secret-key-change-this-in-production
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Getting MongoDB Atlas Connection String:

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or sign in
3. Create a new cluster (free tier is fine)
4. Click "Connect" → "Connect your application"
5. Copy the connection string and replace `<password>` with your database password
6. Replace `<database>` with your database name (e.g., `mindshift-arabia`)

### For Local MongoDB:

If you have MongoDB installed locally:

```bash
# Start MongoDB (macOS with Homebrew)
brew services start mongodb-community

# Or on Linux
sudo systemctl start mongod

# Or on Windows
# Start MongoDB service from Services panel
```

## Step 3: Generate Payload Secret

Generate a random secret key for JWT tokens:

```bash
# On macOS/Linux
openssl rand -base64 32

# Or use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Add the generated secret to your `.env.local` file as `PAYLOAD_SECRET`.

## Step 4: Start the Development Server

```bash
cd apps/client
npm run dev
```

The server will start at `http://localhost:3000`

## Step 5: Access the Admin Panel

1. Open your browser and navigate to: `http://localhost:3000/admin`
2. You'll be prompted to create the first admin user
3. Fill in:
   - **Email**: Your admin email (e.g., `admin@example.com`)
   - **Password**: A strong password
   - **Role**: Select "Admin"
   - **First Name** and **Last Name** (optional)

4. Click "Create" to create your admin account

## Step 6: Create Initial Content

### Create Homepage Content

1. In the admin panel, navigate to **Homepage**
2. Click **"Create New"**
3. Fill in the homepage content:
   - **Title**: "Homepage"
   - **Hero Section**:
     - Title: "Build Balanced Leadership"
     - Subtitle: "with Moteib bin Nasser AlAjmi"
     - Description: "Helping managers build balanced lives through proven leadership coaching programs..."
     - Primary CTA: Text: "Book Your Call", URL: "https://calendly.com/coach_moteib"
     - Secondary CTA: Text: "View Programs", URL: "/programs"
   - **About Coach**: Add coach information
   - **What You'll Achieve**: Add achievements list
   - **Coaching Approach**: Add approach description
   - **Who It's For**: Add target audience description
   - **Final CTA**: Add final call-to-action

4. Click **"Save"**

### Create Programs

1. Navigate to **Programs** in the admin panel
2. Create three programs:

   **6-Month Program:**
   - Name: "6-Month Program"
   - Duration: "6-month"
   - Subtitle: "Foundation Building"
   - Description: "Perfect for new managers..."
   - Features: Add features list
   - Structure: Add program structure details
   - Is Popular: Leave unchecked

   **9-Month Program:**
   - Name: "9-Month Program"
   - Duration: "9-month"
   - Subtitle: "Advanced Development"
   - Description: "Ideal for managers ready to take their leadership to the next level..."
   - Features: Add features list
   - Structure: Add program structure details
   - Is Popular: **Check this box** (for "MOST POPULAR" badge)

   **12-Month Program:**
   - Name: "12-Month Program"
   - Duration: "12-month"
   - Subtitle: "Complete Transformation"
   - Description: "For leaders committed to comprehensive transformation..."
   - Features: Add features list
   - Structure: Add program structure details
   - Is Popular: Leave unchecked

### Create Coach Profile

1. Navigate to **Coach** in the admin panel
2. Click **"Create New"**
3. Fill in:
   - **Name**: "Moteib bin Nasser AlAjmi"
   - **Title**: "Certified Leadership Coach | Saudi Arabia"
   - **Bio**: Add coach biography (rich text)
   - **Philosophy**: Add coaching philosophy
   - **Expertise**: Add areas of expertise
   - **Credentials**: Add credentials list
   - **Certifications**: Upload certification images

4. Click **"Save"**

## Step 7: Test the Frontend Pages

### Homepage
- Visit: `http://localhost:3000`
- Verify that content from CMS is displayed
- Check that hero section, about coach, achievements, etc. are showing

### Programs Page
- Visit: `http://localhost:3000/programs`
- Verify that all three programs are displayed
- Check that the 9-month program shows "MOST POPULAR" badge

### Coach Page
- Visit: `http://localhost:3000/coach`
- Verify that coach information is displayed
- Check that certifications are showing

## Step 8: Test Localization (Optional)

1. In the admin panel, when editing content, you'll see locale tabs (EN/AR)
2. Switch to Arabic (AR) locale
3. Add Arabic translations for your content
4. Test the Arabic pages at `/ar`, `/ar/programs`, `/ar/coach`

## Troubleshooting

### MongoDB Connection Issues

**Error: "MongoServerError: Authentication failed"**
- Check your MongoDB connection string
- Verify username and password are correct
- Ensure your IP is whitelisted in MongoDB Atlas (Network Access)

**Error: "MongooseError: connect ECONNREFUSED"**
- If using local MongoDB, ensure MongoDB is running
- Check MongoDB is listening on the correct port (default: 27017)

### Payload Admin Panel Not Loading

**Error: "Cannot find module '@payload-config'"**
- Ensure `next.config.ts` has the webpack alias configured
- Try restarting the dev server

**Admin panel shows blank page**
- Check browser console for errors
- Verify `PAYLOAD_SECRET` is set in `.env.local`
- Ensure MongoDB connection is working

### Content Not Showing on Pages

**Pages show but no content**
- Verify you've created content in the admin panel
- Check that content is published (not in draft)
- Check browser console for API errors
- Verify the API route is working: `http://localhost:3000/api/homepage`

### TypeScript Errors

If you see TypeScript errors:
```bash
# Generate Payload types
npm run payload generate:types
```

## Quick Test Checklist

- [ ] Dependencies installed
- [ ] `.env.local` file created with MongoDB URI and PAYLOAD_SECRET
- [ ] Dev server starts without errors
- [ ] Can access `/admin` and create admin user
- [ ] Can create Homepage content
- [ ] Can create Programs (all 3)
- [ ] Can create Coach profile
- [ ] Homepage (`/`) displays CMS content
- [ ] Programs page (`/programs`) displays CMS content
- [ ] Coach page (`/coach`) displays CMS content

## Next Steps

Once local testing is successful:

1. **Add more content** through the admin panel
2. **Upload images** through the Media collection
3. **Test Arabic localization** if needed
4. **Set up production environment variables** for deployment
5. **Configure Vercel** or your hosting platform with environment variables

## Useful Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Generate Payload types
npx payload generate:types

# Lint code
npm run lint
```

## API Endpoints

Once running, you can test these API endpoints:

- `GET http://localhost:3000/api/homepage` - Get homepage content
- `GET http://localhost:3000/api/programs` - Get all programs
- `GET http://localhost:3000/api/coach` - Get coach profile
- `GET http://localhost:3000/api/users` - Get users (requires auth)
- `GET http://localhost:3000/api/media` - Get media files
