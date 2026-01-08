# Deployment Guide: Nigerian Banks API

## Recommended Hosting Options (Free Tier Available)

| Platform | Free Tier | Ease of Use | Best For |
|----------|-----------|-------------|----------|
| **Railway** | $5 free credit/month | ⭐⭐⭐⭐⭐ | Fastest setup |
| **Render** | 750 hours/month | ⭐⭐⭐⭐ | Simple projects |
| **Fly.io** | 3 VMs free | ⭐⭐⭐ | More control |

---

## Option 1: Deploy to Railway (Recommended)

### Step 1: Push to GitHub
```bash
# In your project folder
git init
git add .
git commit -m "Initial commit"
# Create a repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/nigerian-banks-api.git
git push -u origin main
```

### Step 2: Deploy on Railway
1. Go to [railway.app](https://railway.app) and sign in with GitHub
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Select your `nigerian-banks-api` repository
4. Railway will auto-detect Node.js

### Step 3: Set Environment Variables
In Railway dashboard → **Variables** tab, add:
```
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
ADMIN_API_KEY=your_secure_admin_key
PORT=3000
```

### Step 4: Get Your Public URL
Railway will give you a URL like:
`https://nigerian-banks-api-production.up.railway.app`

---

## Option 2: Deploy to Render

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy on Render
1. Go to [render.com](https://render.com) and sign in
2. Click **"New"** → **"Web Service"**
3. Connect your GitHub repo
4. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### Step 3: Set Environment Variables
Add the same variables in the **Environment** section.

---

## After Deployment

Your API will be available at:
```
https://your-app-name.up.railway.app/api/v1/banks
```

### Test it:
```bash
curl https://your-app-name.up.railway.app/health
curl https://your-app-name.up.railway.app/api/v1/banks
```

---

## Files Added for Deployment

- `.gitignore` - Excludes node_modules and .env
- `Procfile` - For Heroku/Railway (optional)
