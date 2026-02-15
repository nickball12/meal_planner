# GitHub Pages Deployment Guide

## Overview

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions. The deployment can be triggered in two ways:

1. **Automatically** - When you push to the `main` branch
2. **Manually** - Using the "workflow_dispatch" button in GitHub Actions

## Prerequisites

Before deploying, ensure GitHub Pages is enabled for your repository:

1. Go to your repository settings on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
   - This allows the workflow to deploy to GitHub Pages

## How to Deploy Manually (Button Push)

To deploy your application manually:

1. Navigate to your repository on GitHub
2. Click on the **Actions** tab
3. In the left sidebar, select **Deploy to GitHub Pages**
4. Click the **Run workflow** button (top right)
5. Select the branch you want to deploy from (usually `main`)
6. Click the green **Run workflow** button

The deployment will start immediately and you can watch the progress in the Actions tab.

## Deployment Process

The workflow performs the following steps:

1. **Checkout** - Checks out the repository code
2. **Setup Node** - Installs Node.js v18
3. **Install dependencies** - Runs `npm ci` to install packages
4. **Build** - Runs `npm run build` to create the production bundle
5. **Upload artifact** - Uploads the `dist` folder as an artifact
6. **Deploy** - Deploys the artifact to GitHub Pages

## Accessing Your Deployed Site

Once deployed, your site will be available at:

```
https://nickball12.github.io/meal_planner/
```

You can find the exact URL in the deployment details:
- Go to the **Actions** tab
- Click on the completed deployment run
- Look for the deployment URL in the "deploy" job

## Making Updates

To update your deployed site:

1. Make your changes locally
2. Test them with `npm run dev`
3. Build to verify: `npm run build`
4. Commit and push to `main` (auto-deploys) OR
5. Use the manual deployment button in Actions

## Troubleshooting

### Deployment Fails

If deployment fails, check:

1. **Build logs** - View the workflow run in Actions to see error messages
2. **Permissions** - Ensure the workflow has write permissions for Pages
3. **Pages settings** - Verify GitHub Pages is enabled and set to "GitHub Actions"

### Site Not Updating

If changes don't appear:

1. **Clear browser cache** - Hard refresh with Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. **Wait a moment** - GitHub Pages may take 1-2 minutes to update
3. **Check workflow** - Ensure the deployment actually completed successfully

### Build Errors

If the build step fails:

1. Test locally: `npm run build`
2. Check TypeScript errors: `npx tsc --noEmit`
3. Verify all dependencies are in package.json

## Workflow Configuration

The workflow is defined in `.github/workflows/deploy.yml` and includes:

- **Manual trigger** (`workflow_dispatch`) - Deploy on button press
- **Automatic trigger** (`push` to `main`) - Deploy on commits
- **Permissions** - Configured for Pages deployment
- **Concurrency** - Prevents multiple deployments running simultaneously

## Reusability

This workflow is fully reusable and can be adapted for other React/TypeScript projects:

1. Copy `.github/workflows/deploy.yml` to your project
2. Ensure you have similar build scripts in `package.json`
3. Update the build output path if different from `./dist`
4. Enable GitHub Pages in your repository settings

## Local Development

To test before deploying:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# The built files will be in the 'dist' directory
```

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [React Documentation](https://react.dev/)
