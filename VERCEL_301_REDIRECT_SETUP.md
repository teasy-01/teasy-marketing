# Force 301 Redirects in Vercel

## Issue
Vercel automatically handles HTTP→HTTPS redirects using **308/307** status codes at the edge level, which happens before your `vercel.json` redirects are evaluated.

## Solution: Configure in Vercel Dashboard

To force **301 redirects** for all domain variants, you need to configure this in Vercel's dashboard:

### Step 1: Domain Settings
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Domains**
3. Find your domain `teasymarketing.com`

### Step 2: Configure Redirect Behavior
1. Click on the domain settings
2. Look for **"Redirect"** or **"Redirect Settings"** option
3. Set redirect type to **"301 Permanent Redirect"** (if available)

### Step 3: Alternative - Use Vercel CLI
If dashboard doesn't have the option, you can try using Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Link your project
vercel link

# Configure redirects via CLI
vercel domains add teasymarketing.com
vercel domains add www.teasymarketing.com --redirect teasymarketing.com
```

### Step 4: Contact Vercel Support (If Needed)
If 301 redirects are critical and you can't configure them:
1. Contact Vercel support
2. Request to change HTTP→HTTPS redirect behavior from 308 to 301
3. They can configure this at the account/project level

## Current Configuration

Your `vercel.json` already has:
- ✅ `www.teasymarketing.com` → `https://teasymarketing.com` (301 redirect)

## What Vercel Does Automatically

Vercel automatically handles:
- `http://teasymarketing.com` → `https://teasymarketing.com` (uses 308/307)
- `http://www.teasymarketing.com` → `https://www.teasymarketing.com` (uses 308/307)
- Then your redirect rule applies: `https://www.teasymarketing.com` → `https://teasymarketing.com` (301)

## Why 308 vs 301?

- **308**: Permanent Redirect (preserves HTTP method - POST stays POST)
- **307**: Temporary Redirect (preserves HTTP method)
- **301**: Moved Permanently (standard permanent redirect, GET becomes GET)

For SEO purposes, both **301** and **308** are treated as permanent redirects by search engines. However, if you specifically need 301, you'll need to configure it in Vercel's dashboard or contact support.

## Testing

After configuration, test with:
```bash
curl -I http://teasymarketing.com
curl -I http://www.teasymarketing.com
curl -I https://www.teasymarketing.com
```

All should return `301 Moved Permanently` with `Location: https://teasymarketing.com/`


