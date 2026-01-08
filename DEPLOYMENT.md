# Deployment Guide

This guide explains how to deploy the portfolio website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed locally
- Node.js and npm installed
- Repository set up on GitHub

## Initial Setup

1. **Create GitHub Repository**
   - Create a new repository on GitHub (e.g., `portfolio-website`)
   - Don't initialize with README, .gitignore, or license

2. **Initialize Git (if not already done)**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git push -u origin main
   ```

3. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

## Deployment Process

### Automatic Deployment (Recommended)

The project includes a deployment script that automates the process:

```bash
npm run deploy
```

This command:
1. Builds the project (`npm run build`)
2. Deploys to the `gh-pages` branch
3. Publishes to GitHub Pages

After running this command, your site will be available at:
`https://YOUR_USERNAME.github.io/portfolio-website`

### Manual Deployment

If you prefer to deploy manually:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Install gh-pages (if not already installed):**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy:**
   ```bash
   npx gh-pages -d build
   ```

## Updating the Site

After making changes:

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

## Important Notes

- The `homepage` field in `package.json` is set to `/portfolio-website` for GitHub Pages routing
- The `basename` prop in React Router is configured for the repository name
- A custom `404.html` file handles client-side routing on GitHub Pages
- Changes may take a few minutes to appear on GitHub Pages

## Troubleshooting

**404 Error on Routes:**
- Ensure `homepage` in `package.json` matches your repository path
- Verify `basename` prop in `App.js` matches your repository name
- Check that `public/404.html` exists and is properly configured

**Build Fails:**
- Run `npm install` to ensure all dependencies are installed
- Check for console errors in the build output
- Verify Node.js version compatibility

**Site Not Updating:**
- Wait a few minutes for GitHub Pages to rebuild
- Clear browser cache
- Check the GitHub Pages settings in repository Settings → Pages

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings with your custom domain

---

For more information, visit [GitHub Pages Documentation](https://docs.github.com/en/pages)
