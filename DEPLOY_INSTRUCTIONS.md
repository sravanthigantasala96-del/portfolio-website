# GitHub Pages Deployment Instructions

## Quick Setup Guide

Your portfolio website is ready to be deployed to GitHub Pages!

### Step 1: Install gh-pages (if not already installed)
```bash
npm install --save-dev gh-pages
```

### Step 2: Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `portfolio-website` (or any name you prefer)
3. Make it **Public** (required for free GitHub Pages)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

### Step 3: Initialize Git and Add Remote
```bash
cd "C:\Users\GAKCH\OneDrive - Vestas Wind Systems A S\Desktop\Website\portfolio-website"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Portfolio website"

# Add your GitHub remote (replace with your repository URL)
git remote add origin https://github.com/sravanthigantasala96-del/portfolio-website.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Deploy to GitHub Pages
```bash
npm run deploy
```

This command will:
- Build your React app
- Create a `gh-pages` branch
- Deploy to GitHub Pages

### Step 5: Enable GitHub Pages (if needed)
1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section
4. Under "Source", select **gh-pages branch**
5. Click **Save**

### Your Website URL
After deployment, your portfolio will be available at:
**https://sravanthigantasala96-del.github.io/portfolio-website**

(If you used a different repository name, replace `portfolio-website` with your repository name)

## Updating Your Site

To update your site after making changes:
```bash
git add .
git commit -m "Update description"
git push
npm run deploy
```

## Important Notes

- The first deployment may take a few minutes
- Make sure your repository is **Public** for free GitHub Pages
- The `homepage` field in `package.json` must match your GitHub Pages URL
- Always push to `main` branch, then run `npm run deploy` to update the site

## Troubleshooting

If you get errors:
1. Make sure `gh-pages` is installed: `npm install --save-dev gh-pages`
2. Check that your repository exists on GitHub
3. Verify the `homepage` URL in `package.json` matches your GitHub username and repo name
4. Ensure you've pushed to the `main` branch first: `git push -u origin main`

