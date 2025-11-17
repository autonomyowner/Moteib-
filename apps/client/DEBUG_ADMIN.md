# Debug Admin Panel Issues

## What Error Are You Seeing?

Please share:
1. The exact error message
2. What page you're on (`/admin` or `/api/users/login`)
3. Browser console errors (F12 → Console tab)

## Quick Fixes to Try

### 1. Check Environment Variables

Make sure `.env.local` exists and has:
```bash
MONGODB_URI=mongodb+srv://autonomyowner:RTILLIdie22@cluster0.tmwtx.mongodb.net/mindshift-arabia?retryWrites=true&w=majority
PAYLOAD_SECRET=rkEtb6G6xXO6UYr8JEod+gQHdSON9R64jwHtBlOqZ8c=
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 2. Restart Dev Server

After changing `.env.local`:
```bash
# Stop server (Ctrl+C)
npm run dev
```

### 3. Check MongoDB Connection

Test if MongoDB is accessible:
```bash
# In browser console or terminal
curl http://localhost:3000/api/users
```

### 4. Try Different Admin URLs

Payload v2 admin might be at:
- `http://localhost:3000/admin`
- `http://localhost:3000/api/users/login`
- `http://localhost:3000/api/admin`

### 5. Check Terminal for Errors

Look at your terminal where `npm run dev` is running for:
- MongoDB connection errors
- Module not found errors
- Configuration errors

## Common Errors & Solutions

### "Cannot find module '@payload-config'"
**Fix:** Make sure `next.config.ts` has the webpack alias configured

### "PAYLOAD_SECRET is required"
**Fix:** Check `.env.local` has `PAYLOAD_SECRET` set and restart server

### "MongoServerError: Authentication failed"
**Fix:** 
- Check MongoDB password in connection string
- Verify database user exists in MongoDB Atlas

### "IP not whitelisted"
**Fix:** 
- Go to MongoDB Atlas → Network Access
- Add `0.0.0.0/0` to whitelist

### Blank page at `/admin`
**Fix:** 
- Check browser console (F12)
- Try accessing `/api/users/login` directly
- Check terminal for server errors

## Get Help

Share these details:
1. Error message (exact text)
2. Browser console errors
3. Terminal output from `npm run dev`
4. What URL you're trying to access
