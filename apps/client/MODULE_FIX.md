# Module Resolution Fix

## The Problem

In a monorepo with workspaces, packages are hoisted to the root `node_modules`. Next.js with Turbopack sometimes has trouble resolving these hoisted packages.

## The Fix

1. **Updated `next.config.ts`** to:
   - Add `transpilePackages` for Payload packages
   - Configure webpack to handle monorepo structure

2. **Cleared `.next` cache** to force rebuild

## Next Steps

1. **Restart your dev server:**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

2. **If you still get module errors**, try running without Turbopack:
   ```bash
   # Edit package.json script to remove --turbopack
   # Or run directly:
   npx next dev
   ```

3. **Alternative: Install packages locally** (if hoisting is the issue):
   ```bash
   cd apps/client
   npm install @payloadcms/db-mongodb @payloadcms/richtext-slate payload --legacy-peer-deps --no-save
   ```

## If Still Not Working

The packages are installed at the root level. If Next.js still can't find them, you may need to:

1. Check if `node_modules` exists in `apps/client/`
2. Try installing packages directly in `apps/client/node_modules`
3. Or configure the workspace to not hoist these packages
