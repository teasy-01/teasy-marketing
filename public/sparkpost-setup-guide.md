# SparkPost Contact Form Setup Guide

## Overview
The contact form on `/pages/ContactPage.tsx` is configured to use SparkPost for email delivery. Follow these steps to complete the setup.

## Prerequisites
1. A SparkPost account (sign up at https://www.sparkpost.com/)
2. A verified sending domain
3. A SparkPost API key

## Setup Steps

### 1. Create a SparkPost Account
- Go to https://www.sparkpost.com/ and sign up
- Complete email verification

### 2. Verify Your Sending Domain
- In SparkPost dashboard, go to **Account → Sending Domains**
- Add your domain (e.g., `teasymarketing.com`)
- Add the required DNS records (DKIM, SPF, etc.)
- Wait for verification (usually takes a few minutes to hours)

### 3. Generate an API Key
- Go to **Account → API Keys**
- Click **Create API Key**
- Name: `Contact Form API Key`
- Permissions needed:
  - ✅ Transmissions: Read/Write
- Copy the generated API key (you won't be able to see it again)

### 4. Update the Contact Form

In `/pages/ContactPage.tsx`, update line 40:

```typescript
'Authorization': 'YOUR_SPARKPOST_API_KEY_HERE' // Replace with your actual API key
```

Replace with:
```typescript
'Authorization': 'YOUR_ACTUAL_API_KEY_FROM_SPARKPOST'
```

**IMPORTANT SECURITY NOTE:** For production, DO NOT hardcode the API key directly in the frontend code. Instead:

#### Option A: Use Environment Variables (Recommended)
Create a backend API endpoint that handles the email sending:

```typescript
// Backend API route (e.g., /api/send-contact-form.ts)
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, phone, service, message } = req.body;

  try {
    const response = await fetch('https://api.sparkpost.com/api/v1/transmissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.SPARKPOST_API_KEY // Stored securely in environment variables
      },
      body: JSON.stringify({
        // ... your transmission data
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
```

Then update the contact form to call your backend API instead of SparkPost directly:

```typescript
const response = await fetch('/api/send-contact-form', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
});
```

#### Option B: Use Serverless Functions (Netlify/Vercel)
If deploying to Netlify or Vercel, create a serverless function to handle email sending securely.

### 5. Update Email Addresses

In `/pages/ContactPage.tsx`, update these values:

**Line 47-48 - Sender Email:**
```typescript
email: 'noreply@teasymarketing.com', // Must match your verified sending domain
name: 'TEASY Contact Form'
```

**Line 78 - Recipient Email:**
```typescript
email: 'team@teasymarketing.com' // Where you want to receive contact form submissions
```

### 6. Test the Form

1. Submit a test message through the contact form
2. Check your email inbox for the submission
3. Monitor the SparkPost dashboard for delivery status:
   - Go to **Reports → Summary**
   - Check for any bounces or errors

## Alternative: SparkPost Sandbox Mode

For testing purposes, you can use sandbox mode:

```typescript
options: {
  sandbox: true // Change to false for production
}
```

In sandbox mode, emails won't actually be delivered but you can test the API integration.

## Troubleshooting

### Error: "Transmission creation failed"
- Check that your API key has the correct permissions
- Verify your sending domain is fully verified
- Ensure the `from` email matches your verified domain

### Error: "Recipient address rejected"
- Verify the recipient email is valid
- Check for any typos in email addresses

### CORS Errors
- This means you're calling SparkPost directly from the browser
- **Solution:** Create a backend API endpoint (see Option A above)
- Never expose API keys in frontend code

## Rate Limits

SparkPost free tier includes:
- 500 emails per month
- Unlimited emails with paid plans

Monitor your usage in the SparkPost dashboard.

## Additional Features

You can enhance the form with:

1. **Auto-Reply to Users:**
```typescript
recipients: [
  {
    address: {
      email: 'team@teasymarketing.com'
    }
  },
  {
    address: {
      email: formData.email // Send confirmation to user
    }
  }
]
```

2. **Email Templates:**
Create templates in SparkPost dashboard and reference them:
```typescript
content: {
  template_id: 'your-template-id'
}
```

3. **Tracking:**
```typescript
options: {
  open_tracking: true,
  click_tracking: true
}
```

## Security Best Practices

1. ✅ Always use a backend API to hide API keys
2. ✅ Implement rate limiting to prevent spam
3. ✅ Add CAPTCHA (reCAPTCHA) to prevent bot submissions
4. ✅ Validate all input fields on both frontend and backend
5. ✅ Use environment variables for sensitive data
6. ✅ Enable CORS restrictions on your API endpoint

## Support

- SparkPost Documentation: https://developers.sparkpost.com/
- SparkPost Support: https://www.sparkpost.com/support/
