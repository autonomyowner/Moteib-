# Admin Panel Fix

## The Issue

Payload v2 admin UI needs to be accessed through the API routes, not directly through a page component.

## Solution

The admin panel should be accessible at:
- **API Route**: `http://localhost:3000/api/users/login` (for login)
- **Admin UI**: Payload v2 serves the admin through API endpoints

## How to Access Admin

1. **Start your dev server:**
   ```bash
   npm run dev
   ```

2. **Access admin login:**
   ```
   http://localhost:3000/api/users/login
   ```

   OR try:
   ```
   http://localhost:3000/admin
   ```

3. **If you see errors**, check:
   - MongoDB connection is working
   - `PAYLOAD_SECRET` is set in `.env.local`
   - MongoDB Atlas IP is whitelisted

## Alternative: Use Payload's Admin Route

Payload v2 might serve admin at a different route. Try these:

- `http://localhost:3000/api/admin`
- `http://localhost:3000/api/users`
- `http://localhost:3000/admin/login`

## Check API Routes

Test if Payload API is working:
```bash
curl http://localhost:3000/api/users
```

If this returns data, Payload is working and you just need to find the correct admin route.

## Common Errors

**"Cannot find module '@payload-config'"**
- Make sure `next.config.ts` has the webpack alias
- Restart dev server

**"MongoDB connection failed"**
- Check `.env.local` has correct `MONGODB_URI`
- Verify MongoDB Atlas IP whitelist

**"PAYLOAD_SECRET is required"**
- Check `.env.local` has `PAYLOAD_SECRET` set
- Restart dev server after adding it
