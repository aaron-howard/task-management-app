# GitHub Repository Setup Guide

This guide will help you set up the Task Management App repository on GitHub and prepare it for deployment.

## Table of Contents

- [Initial Repository Setup](#initial-repository-setup)
- [Git Configuration](#git-configuration)
- [GitHub Repository Creation](#github-repository-creation)
- [Local Git Setup](#local-git-setup)
- [GitHub Actions Setup](#github-actions-setup)
- [Firebase Deployment Setup](#firebase-deployment-setup)
- [Repository Settings](#repository-settings)
- [Documentation](#documentation)

## Initial Repository Setup

### 1. Initialize Git Repository

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: initial commit - Task Management App with Vue.js, Firebase, and Vuetify"
```

### 2. Configure Git User (if not already set)

```bash
# Set your name and email
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Or set globally
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## GitHub Repository Creation

### 1. Create Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Fill in repository details:
   - **Repository name**: `task-management-app`
   - **Description**: `Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features`
   - **Visibility**: Choose Public or Private
   - **Initialize**: Don't initialize with README, .gitignore, or license (we already have these)

### 2. Connect Local Repository to GitHub

```bash
# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/task-management-app.git

# Push to GitHub
git push -u origin main
```

## Local Git Setup

### 1. Create Development Branch

```bash
# Create and switch to develop branch
git checkout -b develop

# Push develop branch
git push -u origin develop
```

### 2. Set Up Branch Protection

1. Go to repository Settings
2. Navigate to "Branches"
3. Add rule for `main` branch:
   - Require pull request reviews before merging
   - Require status checks to pass before merging
   - Require branches to be up to date before merging
   - Restrict pushes that create files larger than 100MB

## GitHub Actions Setup

### 1. Set Up Secrets

Go to repository Settings > Secrets and variables > Actions, and add:

#### Required Secrets:
- `FIREBASE_SERVICE_ACCOUNT`: Firebase service account JSON (for deployment)
- `FIREBASE_PROJECT_ID`: Your Firebase project ID

#### Optional Secrets:
- `NPM_TOKEN`: If using private npm packages
- `CODECOV_TOKEN`: For code coverage reporting

### 2. Verify Workflows

The repository includes these GitHub Actions workflows:

- **CI** (`.github/workflows/ci.yml`): Runs on push/PR to main/develop
- **Deploy** (`.github/workflows/deploy.yml`): Deploys to Firebase on push to main

### 3. Test GitHub Actions

```bash
# Push a change to trigger CI
git add .
git commit -m "test: trigger GitHub Actions"
git push origin develop
```

## Firebase Deployment Setup

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project"
3. Follow the setup wizard:
   - Project name: `task-management-app`
   - Enable Google Analytics (optional)
   - Choose Analytics account (optional)

### 2. Enable Firebase Services

1. **Authentication**:
   - Go to Authentication > Sign-in method
   - Enable Email/Password
   - Enable Google

2. **Firestore Database**:
   - Go to Firestore Database
   - Create database in production mode
   - Choose location (closest to your users)

3. **Hosting**:
   - Go to Hosting
   - Click "Get started"

### 3. Configure Firebase Locally

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init

# Select:
# - Hosting: Configure files for Firebase Hosting
# - Firestore: Configure security rules and indexes files
# - Functions: Configure a Cloud Functions directory (optional)
```

### 4. Update Firebase Configuration

Update `src/firebase/config.js` with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-actual-app-id"
}
```

### 5. Deploy Firestore Rules

```bash
# Deploy security rules
firebase deploy --only firestore:rules

# Deploy indexes
firebase deploy --only firestore:indexes
```

## Repository Settings

### 1. General Settings

- **Repository name**: `task-management-app`
- **Description**: `Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features`
- **Website**: `https://your-project.firebaseapp.com` (after deployment)
- **Topics**: Add relevant tags: `vue`, `firebase`, `task-management`, `collaboration`, `real-time`, `vuetify`, `vuex`

### 2. Features

- **Issues**: Enable
- **Projects**: Enable (optional)
- **Wiki**: Disable (use README instead)
- **Discussions**: Enable (optional)

### 3. Pull Requests

- **Allow merge commits**: Disable
- **Allow squash merging**: Enable
- **Allow rebase merging**: Enable
- **Always suggest updating branches**: Enable

## Documentation

### 1. Update README.md

Make sure to update the repository URL in `README.md`:

```markdown
git clone https://github.com/YOUR_USERNAME/task-management-app.git
```

### 2. Add Badges

Add badges to your README.md:

```markdown
[![Build Status](https://github.com/YOUR_USERNAME/task-management-app/workflows/CI/badge.svg)](https://github.com/YOUR_USERNAME/task-management-app/actions)
[![Deploy Status](https://github.com/YOUR_USERNAME/task-management-app/workflows/Deploy%20to%20Firebase%20Hosting/badge.svg)](https://github.com/YOUR_USERNAME/task-management-app/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue.js](https://img.shields.io/badge/Vue.js-2.6.14-4FC08D.svg)](https://vuejs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28.svg)](https://firebase.google.com/)
```

### 3. Create Additional Documentation

- `CONTRIBUTING.md` - Already created
- `DEPLOYMENT.md` - Already created
- `CHANGELOG.md` - Create for version tracking
- `SECURITY.md` - Create for security policy

## Deployment

### 1. Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

### 2. Automatic Deployment

The GitHub Actions workflow will automatically deploy when you push to the `main` branch.

### 3. Preview Deployments

For pull requests, you can set up preview deployments:

```bash
# Deploy to preview channel
firebase hosting:channel:deploy pr-123
```

## Monitoring and Maintenance

### 1. Set Up Monitoring

- **Firebase Analytics**: Enable in Firebase Console
- **Firebase Performance**: Enable for performance monitoring
- **Firebase Crashlytics**: Enable for crash reporting

### 2. Regular Maintenance

- Update dependencies regularly
- Monitor security vulnerabilities
- Review and update documentation
- Monitor application performance

## Security Considerations

### 1. Repository Security

- Enable branch protection rules
- Require pull request reviews
- Enable security alerts
- Use Dependabot for dependency updates

### 2. Firebase Security

- Review Firestore security rules regularly
- Use Firebase App Check for additional security
- Monitor authentication logs
- Set up proper user permissions

## Troubleshooting

### Common Issues

1. **GitHub Actions failing**:
   - Check secrets are properly set
   - Verify Firebase project ID
   - Check service account permissions

2. **Firebase deployment failing**:
   - Verify Firebase CLI is logged in
   - Check Firebase project configuration
   - Ensure proper permissions

3. **Build failing**:
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript/ESLint errors

### Getting Help

- Check GitHub Issues for similar problems
- Review Firebase documentation
- Check Vue.js and Vuetify documentation
- Create an issue if you can't find a solution

## Next Steps

1. **Set up your Firebase project** following the steps above
2. **Update the repository URL** in all documentation
3. **Configure GitHub Actions secrets**
4. **Test the deployment pipeline**
5. **Set up monitoring and analytics**
6. **Start developing new features!**

## Support

For questions or issues:
- Create a GitHub issue
- Check the documentation
- Review the contributing guidelines
- Contact the maintainers

---

**Happy coding! 🚀**
