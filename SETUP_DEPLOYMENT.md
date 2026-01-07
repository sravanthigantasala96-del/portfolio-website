# GitHub Pages Deployment Setup

## ✅ Completed Steps
- ✅ Git repository initialized
- ✅ Initial commit created
- ✅ package.json configured with homepage and deploy scripts
- ✅ .gitignore file created

## 📋 Next Steps to Deploy

### Step 1: Install gh-pages Package
Open a terminal/command prompt in the project directory and run:
```bash
cd "C:\Users\GAKCH\OneDrive - Vestas Wind Systems A S\Desktop\Website\portfolio-website"
npm install --save-dev gh-pages
```

### Step 2: Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `portfolio-website` (or any name you prefer)
3. **Make it Public** (required for free GitHub Pages)
4. **DO NOT** check "Initialize this repository with README"
5. Click **"Create repository"**

### Step 3: Add GitHub Remote and Push
```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/sravanthigantasala96-del/portfolio-website.git

# If the repository already exists and you want to replace:
# git remote set-url origin https://github.com/sravanthigantasala96-del/portfolio-website.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
- Build your React app
- Create/update the `gh-pages` branch
- Deploy your site to GitHub Pages

### Step 5: Enable GitHub Pages (First Time Only)
1. Go to: https://github.com/sravanthigantasala96-del/portfolio-website/settings/pages
2. Under "Source", select **"gh-pages"** branch
3. Click **"Save"**

## 🌐 Your Website URL
After deployment, your portfolio will be available at:
**https://sravanthigantasala96-del.github.io/portfolio-website**

(Replace `portfolio-website` with your actual repository name if different)

## 🔄 Updating Your Site
To update your site after making changes:
```bash
git add .
git commit -m "Your update message"
git push
npm run deploy
```

## ⚠️ Important Notes
- Repository must be **Public** for free GitHub Pages hosting
- First deployment may take 1-2 minutes to become available
- The `homepage` in package.json is already set correctly
- Always push to `main` branch, then run `npm run deploy`

## 🛠️ Troubleshooting

**If npm is not recognized:**
- Install Node.js from https://nodejs.org/
- Restart your terminal after installation
- Verify with: `npm --version`

**If deployment fails:**
- Make sure `gh-pages` is installed: `npm install --save-dev gh-pages`
- Check that repository exists and is public
- Verify GitHub authentication (you may need to use a Personal Access Token)

**If site shows 404:**
- Wait a few minutes (first deployment takes time)
- Check GitHub Pages settings: Settings → Pages → Source should be `gh-pages`
- Verify the URL matches your repository name

