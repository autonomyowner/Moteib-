# Quick Fix for Module Error

## What I Fixed

1. ✅ Updated `next.config.ts` to handle monorepo packages
2. ✅ Added `transpilePackages` for Payload packages
3. ✅ Removed `--turbopack` flag (Turbopack has issues with hoisted packages)
4. ✅ Cleared `.next` cache

## Restart Server

```bash
# Stop server (Ctrl+C)
npm run dev
```

The module error should be fixed now!

## If Still Getting Errors

Try installing packages locally (not hoisted):

```bash
cd apps/client
npm install @payloadcms/db-mongodb @payloadcms/richtext-slate payload --legacy-peer-deps --no-save
```

Then restart the server.
