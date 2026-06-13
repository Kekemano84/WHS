# WHS - Render deploy

## Render settings

Build Command:
```bash
pip install -r requirements.txt
```

Start Command:
```bash
gunicorn app:app
```

Environment variables:
```text
PYTHON_VERSION=3.11.9
```

Optional Stripe variables:
```text
STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRO_PRICE_ID=
APP_BASE_URL=https://your-render-url.onrender.com
```

## Local testing

```bash
python app.py
```

PC:
```text
http://127.0.0.1:5000
```

Phone on same Wi-Fi:
```text
http://YOUR-PC-IP:5000
```

Admin:
```text
admin@whs-app.com
admin123
```

## Included final features

- Dashboard
- Morning Brief Builder
- Mileage
- Expenses
- Yard Check
- Yard Check search/edit/delete
- Yard Check batch add
- Bulk voice trailer logging
- Take Photo / Upload Photo
- Handover with photo/camera
- Team with custom roles
- Plans Free/Pro
- Stripe Pro subscription setup
- Admin Billing
- Admin manual Pro
- Admin 30 day Pro trial
- Admin Gift Pro
- Pro-only Yard Configuration
- Free fixed Door 1-100 / Fence 1-120
- PWA app install support


## Email setup for welcome emails and Email Excel

WHS can send automatic welcome emails after registration and send Excel exports to the registered user's own email address.

Add these Environment Variables in Render:

```env
APP_URL=https://your-render-url.onrender.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USE_TLS=true
SMTP_USER=your-gmail-address@gmail.com
SMTP_PASSWORD=your_16_character_google_app_password
SMTP_FROM=your-gmail-address@gmail.com
```

For Gmail, use a Google App Password. Your normal Gmail password will not work.

The app also supports `MAIL_SERVER`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD`, and `MAIL_DEFAULT_SENDER` if you prefer those names.
