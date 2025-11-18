# Web3Forms Setup Guide (Quick & Easy)

The contact form uses Web3Forms to send emails automatically. Setup takes less than 2 minutes!

## Step 1: Get Your Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email: `team@teasymarketing.com`
3. Click "Get Your Access Key"
4. **Copy the access key** (it will look like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

## Step 2: Add to Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Click **Add New**
4. Add this variable:
   - **Name:** `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value:** (paste your access key from Step 1)
   - **Environment:** Select all (Production, Preview, Development)
5. Click **Save**

## Step 3: Redeploy

1. Go to **Deployments** tab in Vercel
2. Click the **3 dots** menu on the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete

## That's It! 🎉

Your contact form will now automatically send emails to `team@teasymarketing.com` when someone submits the form.

## Testing

1. Submit a test form on your site
2. Check `team@teasymarketing.com` inbox (and spam folder)
3. You should receive the email automatically

## Benefits

- ✅ **Free** - 250 submissions/month free
- ✅ **No spam** - Built-in spam protection
- ✅ **Instant setup** - Works in 2 minutes
- ✅ **No backend required** - Works with static sites
- ✅ **Reliable** - High deliverability rate

## Troubleshooting

- **Not receiving emails**: Check spam folder, verify access key is correct
- **Form shows error**: Make sure you added the environment variable and redeployed
- **Rate limiting**: Free tier has 250 submissions/month limit

