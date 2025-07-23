# Email Setup Instructions

## Option 1: EmailJS (Easiest - Free)

1. **Install EmailJS:**
   \`\`\`bash
   npm install @emailjs/browser
   \`\`\`

2. **Setup EmailJS Account:**
   - Go to https://www.emailjs.com/
   - Create a free account
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Service ID, Template ID, and Public Key

3. **Update the form:**
   - Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` in the contact form

## Option 2: Resend (Professional - Paid)

1. **Install Resend:**
   \`\`\`bash
   npm install resend
   \`\`\`

2. **Setup Resend Account:**
   - Go to https://resend.com/
   - Create an account
   - Get your API key
   - Verify your domain (optional but recommended)

3. **Add Environment Variable:**
   \`\`\`env
   RESEND_API_KEY=your_resend_api_key_here
   \`\`\`

## Option 3: Netlify Forms (If deploying to Netlify)

1. **Add to your form:**
   \`\`\`html
   <form name="contact" method="POST" data-netlify="true">
     <input type="hidden" name="form-name" value="contact" />
     <!-- your form fields -->
   </form>
   \`\`\`

## Option 4: Formspree (Simple)

1. **Go to https://formspree.io/**
2. **Create a form**
3. **Update form action:**
   \`\`\`html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   \`\`\`

## Recommended: EmailJS for beginners, Resend for production
