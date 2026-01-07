# Quick Deployment Guide

## ✅ Already Done
- ✅ Git repository initialized
- ✅ Git user configured: Sai Sravanthi G <sravanthigantasala.96@gmail.com>
- ✅ Initial commit created
- ✅ package.json configured with deployment scripts
- ✅ Homepage URL set: https://sravanthigantasala96-del.github.io/portfolio-website

## 🚀 Deploy in 5 Steps

### Step 1: Install gh-pages
```bash
cd "C:\Users\GAKCH\OneDrive - Vestas Wind Systems A S\Desktop\Website\portfolio-website"
npm install --save-dev gh-pages
```

### Step 2: Create GitHub Repository
1. Open: https://github.com/new
2. Repository name: `portfolio-website`
3. Visibility: **Public** ⚠️ (Required for free GitHub Pages)
4. **DO NOT** check "Add a README file"
5. Click **"Create repository"**

### Step 3: Connect and Push to GitHub
```bash
git remote add origin https://github.com/sravanthigantasala96-del/portfolio-website.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages
```bash
npm run deploy
```

### Step 5: Enable GitHub Pages
1. Go to: https://github.com/sravanthigantasala96-del/portfolio-website/settings/pages
2. Source: Select **"gh-pages"** branch
3. Folder: `/ (root)`
4. Click **"Save"**

## 🌐 Your Live Website
After deployment (may take 1-2 minutes):
**https://sravanthigantasala96-del.github.io/portfolio-website**

## 📝 Update Your Site
```bash
git add .
git commit -m "Your update message"
git push
npm run deploy
```

---
**Need help?** Check SETUP_DEPLOYMENT.md for detailed instructions and troubleshooting.

