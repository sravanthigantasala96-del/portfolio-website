# Troubleshooting Deployment Issues

## Error: "fatal: 'o' does not appear to be a git repository"

This error usually occurs when:
1. The GitHub repository doesn't exist yet
2. There's a typo in the remote URL
3. Authentication issues

## Solution Steps

### Step 1: Verify Remote URL
Check your remote URL:
```bash
git remote -v
```

Should show:
```
origin  https://github.com/sravanthigantasala96-del/portfolio-website.git (fetch)
origin  https://github.com/sravanthigantasala96-del/portfolio-website.git (push)
```

### Step 2: Create Repository on GitHub First
**IMPORTANT**: The repository must exist on GitHub before you can push!

1. Go to: https://github.com/new
2. Repository name: `portfolio-website`
3. Make it **Public**
4. **DO NOT** initialize with README, .gitignore, or license
5. Click **"Create repository"**

### Step 3: Fix Remote (if needed)
If the remote URL is wrong, remove and re-add it:
```bash
git remote remove origin
git remote add origin https://github.com/sravanthigantasala96-del/portfolio-website.git
```

### Step 4: Verify and Push
```bash
git remote -v
git push -u origin main
```

## Authentication Issues

If you get authentication errors:

1. **Use Personal Access Token** (if 2FA is enabled):
   - Go to: https://github.com/settings/tokens
   - Generate new token (classic)
   - Select scope: `repo`
   - Use token as password when pushing

2. **Or use GitHub CLI**:
   ```bash
   gh auth login
   ```

## Alternative: Create Repository via GitHub CLI

If you have GitHub CLI installed:
```bash
gh repo create portfolio-website --public --source=. --remote=origin --push
```

## Verify Repository Exists

Check if repository exists:
- Visit: https://github.com/sravanthigantasala96-del/portfolio-website
- If it shows 404, the repository doesn't exist yet - create it first!

