# EmailJS Setup Guide

You are currently seeing "Simulation Mode" because the email service is not configured with your real API keys.

To send **REAL** emails, follow these steps:

## 1. Get Your Keys
1.  **Register**: Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account.
2.  **Add Service**:
    *   Click "Add New Service".
    *   Select "Gmail" (or your preferred provider).
    *   Click "Connect Account" and login.
    *   Click "Create Service".
    *   Copy the **Service ID** (e.g., `service_xxxx`).
3.  **Add Template**:
    *   Click "Email Templates" -> "Create New Template".
    *   Design your email. Use variables like `{{from_name}}`, `{{message}}`, `{{from_email}}`.
    *   Save it.
    *   Copy the **Template ID** (e.g., `template_xxxx`).
4.  **Get Public Key**:
    *   Go to "Account" (top right user icon) -> "General".
    *   Copy the **Public Key** (it looks like a random string).

## 2. Add to Project
1.  Open the file `frontend/.env` in your project.
2.  Replace the placeholder text with your actual keys:

```properties
VITE_API_URL=http://localhost:3001/api
VITE_EMAILJS_SERVICE_ID=service_youractualid
VITE_EMAILJS_TEMPLATE_ID=template_youractualid
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 3. Restart Server
For environment variables to take effect, you **MUST** restart the frontend server.
1.  Go to your terminal running `npm run dev`.
2.  Press `Ctrl + C` to stop it.
3.  Run `npm run dev` again.

Now, when you send a message, it will actually be sent to your email!
