# Vercel Environment Variables Setup

## Your MongoDB Connection String

Based on your MongoDB Atlas connection string, here's what you need to add to Vercel:

### Formatted Connection String

Your connection string should be formatted like this (add database name):

```
mongodb+srv://autonomyowner:RTILLIdie22@cluster0.tmwtx.mongodb.net/mindshift-arabia?retryWrites=true&w=majority
```

**Note:** I've added `/mindshift-arabia` as the database name and proper query parameters.

## Step-by-Step: Add to Vercel

### 1. Generate Payload Secret

Run this command to generate a secure secret:

```bash
openssl rand -base64 32
```

Or use Node.js:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Save the output - you'll need it for `PAYLOAD_SECRET`.

### 2. Add Environment Variables in Vercel

Go to your Vercel project → **Settings** → **Environment Variables**

Add these 4 variables:

#### Variable 1: `MONGODB_URI`
```
mongodb+srv://autonomyowner:RTILLIdie22@cluster0.tmwtx.mongodb.net/mindshift-arabia?retryWrites=true&w=majority
```

#### Variable 2: `PAYLOAD_SECRET`
```
paste-your-generated-secret-here
```
(Use the secret you generated in step 1)

#### Variable 3: `PAYLOAD_PUBLIC_SERVER_URL`
```
https://your-app-name.vercel.app
```
(Replace `your-app-name` with your actual Vercel app name - you'll know this after first deploy)

#### Variable 4: `NEXT_PUBLIC_APP_URL`
```
https://your-app-name.vercel.app
```
(Same as above - your Vercel URL)

### 3. Important Notes

⚠️ **Security Reminder:**
- Your MongoDB password is visible in the connection string
- Make sure your MongoDB Atlas IP whitelist includes `0.0.0.0/0` (all IPs) for Vercel
- Never commit these values to Git

### 4. After First Deploy

1. Vercel will give you a URL like `https://your-app.vercel.app`
2. Go back to Environment Variables
3. Update `PAYLOAD_PUBLIC_SERVER_URL` and `NEXT_PUBLIC_APP_URL` with your actual URL
4. Redeploy (or it will auto-redeploy)

### 5. Test Connection

After deployment, visit:
- `https://your-app.vercel.app/admin` - Should show Payload admin login
- If you see errors, check Vercel logs for MongoDB connection issues

## Quick Checklist

- [ ] MongoDB Atlas IP whitelist includes `0.0.0.0/0`
- [ ] Generated `PAYLOAD_SECRET` 
- [ ] Added all 4 environment variables to Vercel
- [ ] Deployed to Vercel
- [ ] Updated URLs after first deploy
- [ ] Can access `/admin` panel

## Troubleshooting

**"MongoServerError: Authentication failed"**
- Check password in connection string (remove `<` and `>` if they're literal)
- Verify database user exists in MongoDB Atlas

**"IP not whitelisted"**
- Go to MongoDB Atlas → Network Access
- Add IP: `0.0.0.0/0` (allows all IPs)

**Admin panel not loading**
- Check `PAYLOAD_SECRET` is set
- Verify MongoDB connection is working
- Check Vercel function logs
