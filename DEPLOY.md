# Deployment Instructions for GitHub Pages

## Prerequisites
- Git installed
- GitHub account (username: sravanthigantasala96-del)
- Node.js and npm installed

## Steps to Deploy

1. **Initialize Git Repository (if not already done)**
   ```bash
   cd portfolio-website
   git init
   ```

2. **Add All Files to Git**
   ```bash
   git add .
   git commit -m "Initial commit - Portfolio website"
   ```

3. **Add GitHub Remote**
   ```bash
   git remote add origin https://github.com/sravanthigantasala96-del/portfolio-website.git
   ```
   
   Or if using SSH:
   ```bash
   git remote add origin git@github.com:sravanthigantasala96-del/portfolio-website.git
   ```

4. **Create Repository on GitHub**
   - Go to https://github.com/new
   - Repository name: `portfolio-website`
   - Make it public (required for free GitHub Pages)
   - Click "Create repository"

5. **Push to GitHub**
   ```bash
   git branch -M main
   git push -u origin main
   ```

6. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

   This will:
   - Build the React app
   - Deploy it to the `gh-pages` branch
   - Make it available at: https://sravanthigantasala96-del.github.io/portfolio-website

## After Deployment

Your portfolio will be available at:
**https://sravanthigantasala96-del.github.io/portfolio-website**

## Updating the Site

To update the site after making changes:
```bash
git add .
git commit -m "Your commit message"
git push
npm run deploy
```

## Note
- The first deployment may take a few minutes to become available
- GitHub Pages uses the `gh-pages` branch, which is automatically created by the `gh-pages` package
- Make sure to keep your code in the `main` branch and use `npm run deploy` to update the site

