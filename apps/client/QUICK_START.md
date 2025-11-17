# Quick Start Guide - Payload CMS Integration

## Step 1: Create Environment File

Create `apps/client/.env.local` with these variables:

```bash
# MongoDB Connection (get from MongoDB Atlas or use local)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mindshift-arabia

# Generate secret: openssl rand -base64 32
PAYLOAD_SECRET=your-generated-secret-here

# Server URLs
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Quick MongoDB Atlas Setup:**
1. Go to https://www.mongodb.com/cloud/atlas (free tier available)
2. Create account → Create cluster → Click "Connect"
3. Choose "Connect your application"
4. Copy connection string → Replace `<password>` and `<database>`

## Step 2: Install Dependencies

```bash
cd apps/client
npm install
```

## Step 3: Start Development Server

```bash
npm run dev
```

## Step 4: Access Admin Panel

1. Open browser: `http://localhost:3000/admin`
2. Create your first admin user:
   - Email: `admin@example.com`
   - Password: (choose a strong password)
   - Role: `Admin`

## Step 5: Create Content

### Create Homepage:
- Go to **Homepage** collection
- Click "Create New"
- Fill in hero section, about coach, achievements, etc.
- Save

### Create Programs:
- Go to **Programs** collection
- Create 3 programs:
  - 6-Month Program (duration: 6-month)
  - 9-Month Program (duration: 9-month, mark as popular)
  - 12-Month Program (duration: 12-month)

### Create Coach Profile:
- Go to **Coach** collection
- Click "Create New"
- Fill in name, bio, philosophy, expertise, credentials
- Save

## Step 6: Test Frontend

Visit these pages to see your CMS content:
- Homepage: `http://localhost:3000`
- Programs: `http://localhost:3000/programs`
- Coach: `http://localhost:3000/coach`

## Troubleshooting

**Can't connect to MongoDB?**
- Check your connection string
- For Atlas: Whitelist your IP in Network Access
- For local: Ensure MongoDB is running

**Admin panel not loading?**
- Check `PAYLOAD_SECRET` is set in `.env.local`
- Restart dev server after adding env vars

**Content not showing?**
- Make sure you created content in admin panel
- Check browser console for errors
- Verify API: `http://localhost:3000/api/homepage`

## Next Steps

✅ Test locally
✅ Add more content
✅ Upload images via Media collection
✅ Test Arabic localization (EN/AR tabs in admin)
✅ Deploy to production
