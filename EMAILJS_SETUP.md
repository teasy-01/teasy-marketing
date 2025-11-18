# EmailJS Setup Guide

The contact form now uses EmailJS to send emails automatically. Follow these steps to set it up:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Create Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.) or use **EmailJS** (recommended for testing)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:** `Contact Form: {{subject}}`

**Content:**
```
New contact form submission from {{from_name}}

Contact Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Company: {{company}}
- Phone: {{phone}}
- Service Interested In: {{service}}

Message:
{{message}}

---
This email was sent from the TEASY Marketing contact form.
```

4. Set **To Email** to: `team@teasymarketing.com`
5. Set **From Name** to: `{{from_name}}`
6. Set **Reply To** to: `{{from_email}}`
7. **Copy the Template ID** (you'll need this)

## Step 4: Get Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. **Copy your Public Key** (also called API Key)

## Step 5: Add Environment Variables

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add these variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs from EmailJS

## Step 6: Add Environment Variables to Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the same three variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Make sure to add them for **Production**, **Preview**, and **Development** environments
5. Redeploy your site after adding the variables

## Testing

1. Submit a test form on your site
2. Check `team@teasymarketing.com` inbox (and spam folder)
3. You should receive the email automatically

## Troubleshooting

- **Emails not sending**: Check that all environment variables are set correctly in Vercel
- **Emails going to spam**: Make sure your email service is properly configured with SPF/DKIM records
- **Rate limiting**: Free tier has 200 emails/month limit. Upgrade if needed.

## Security Note

The Public Key is safe to expose in client-side code (it's public). However, make sure your EmailJS account has proper security settings enabled.

