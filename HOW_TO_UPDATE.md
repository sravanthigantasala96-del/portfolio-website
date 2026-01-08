# How to Update Your Portfolio Website

## Quick Update Workflow

After making changes to your portfolio, follow these steps:

### Step 1: Make Your Changes
Edit any files in your project (components, styles, content, etc.)

### Step 2: Commit Your Changes
```bash
git add .
git commit -m "Describe your changes here"
```

**Examples of good commit messages:**
- `"Update About section with new information"`
- `"Add new project to portfolio"`
- `"Fix styling on mobile devices"`
- `"Update skills section"`

### Step 3: Push to GitHub
```bash
git push
```

### Step 4: Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
- Build your React app with the latest changes
- Update the `gh-pages` branch
- Make your changes live on GitHub Pages

## Complete Example

```bash
# 1. Make your changes in the code editor

# 2. Stage all changes
git add .

# 3. Commit with a descriptive message
git commit -m "Update project descriptions"

# 4. Push to GitHub (main branch)
git push

# 5. Deploy to GitHub Pages
npm run deploy
```

## After Deployment

- Your changes will be live at: **https://sravanthigantasala96-del.github.io/portfolio-website**
- May take 1-2 minutes to update
- No need to enable GitHub Pages again - it's already configured!

## Quick Tips

- ✅ Always commit with descriptive messages
- ✅ Test your changes locally with `npm start` before deploying
- ✅ The `npm run deploy` command handles the build and deployment automatically
- ✅ Your main branch is your source code, gh-pages branch is the deployed site

---

**Need to test locally first?**
```bash
npm start
```
This runs your site at http://localhost:3000 so you can preview changes before deploying.

