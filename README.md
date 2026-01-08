
# 🇳🇬 Nigerian Banks API

A public REST API that provides a clean, reliable list of **Nigerian banks, microfinance banks, fintechs, and their logos** for developers building fintech apps, payment platforms, dashboards, and integrations.

Built with **Node.js**, **Express**, **Supabase**, and deployed on **Railway**.

---

## 🛰️ Live API

**Base URL**
```
https://nigerian-banks-api-production.up.railway.app
```

---

## ✨ Features

- List Nigerian commercial banks, microfinance banks & fintechs  
- Bank codes, slugs, logos, and websites  
- Public read access (no authentication required)  
- Secure admin-only write access  
- Cloud-hosted logos  
- Production-ready deployment  

---

## 🔓 Public Endpoints

### Get all banks
```
GET /api/v1/banks
```

Example:
```bash
curl https://nigerian-banks-api-production.up.railway.app/api/v1/banks
```

---

### Filter by bank type
```
GET /api/v1/banks?type=commercial
GET /api/v1/banks?type=microfinance
GET /api/v1/banks?type=fintech
```

---

### Get bank by slug
```
GET /api/v1/banks/slug/{slug}
```

---

## 🔐 Admin Endpoints

All write operations require an **Admin API Key**.

Header:
```
Authorization: Bearer YOUR_ADMIN_API_KEY
```

### Create a bank
```
POST /api/v1/banks
```

```json
{
  "name": "Demo Bank",
  "slug": "demo-bank",
  "code": "999",
  "type": "commercial",
  "logo_url": "https://example.com/logo.png",
  "website": "https://example.com"
}
```

---

## 📦 Sample Response

```json
{
  "success": true,
  "count": 20,
  "data": [
    {
      "name": "United Bank for Africa (UBA)",
      "code": "033",
      "type": "commercial",
      "logo_url": "https://www.ubagroup.com/media-kit/logo/uba-logo.png"
    }
  ]
}
```

---

## ⚠️ Error Codes

| Code | Meaning |
|-----|--------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Server Error |

---

## 🛠️ Local Development

```bash
git clone https://github.com/Kennedykp/nigerian-banks-api.git
cd nigerian-banks-api
npm install
```

Create `.env`:
```env
PORT=4000
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_API_KEY=
```

```bash
npm run seed
npm start
```

---

## 🧱 Tech Stack

- Node.js
- Express.js
- Supabase
- Railway
- Cloudinary

---

## 📄 License

MIT License
