# Deployment Guide

This guide covers deploying the Task Management App to various platforms.

## Table of Contents

- [Firebase Hosting](#firebase-hosting)
- [Vercel](#vercel)
- [Netlify](#netlify)
- [GitHub Pages](#github-pages)
- [Environment Variables](#environment-variables)
- [Pre-deployment Checklist](#pre-deployment-checklist)

## Firebase Hosting

### Prerequisites

1. Firebase CLI installed: `npm install -g firebase-tools`
2. Firebase project created
3. Firebase project configured

### Setup

1. **Login to Firebase**
   ```bash
   firebase login
   ```

2. **Initialize Firebase in your project**
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project
   - Set public directory to `dist`
   - Configure as single-page app: `Yes`
   - Set up automatic builds: `No` (we'll do this manually)

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

### Automated Deployment with GitHub Actions

The project includes GitHub Actions workflows for automated deployment:

1. **Set up GitHub Secrets**:
   - `FIREBASE_SERVICE_ACCOUNT`: Firebase service account JSON
   - `FIREBASE_PROJECT_ID`: Your Firebase project ID

2. **Push to main branch**: The workflow will automatically deploy

### Firebase Configuration

Update `src/firebase/config.js` with your production Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-production-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
}
```

## Vercel

### Prerequisites

1. Vercel account
2. Vercel CLI: `npm install -g vercel`

### Setup

1. **Build configuration**
   Create `vercel.json`:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "package.json",
         "use": "@vercel/static-build",
         "config": {
           "distDir": "dist"
         }
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/index.html"
       }
     ]
   }
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Environment Variables

Set in Vercel dashboard:
- `VUE_APP_FIREBASE_API_KEY`
- `VUE_APP_FIREBASE_AUTH_DOMAIN`
- `VUE_APP_FIREBASE_PROJECT_ID`
- `VUE_APP_FIREBASE_STORAGE_BUCKET`
- `VUE_APP_FIREBASE_MESSAGING_SENDER_ID`
- `VUE_APP_FIREBASE_APP_ID`

## Netlify

### Prerequisites

1. Netlify account
2. Netlify CLI: `npm install -g netlify-cli`

### Setup

1. **Build configuration**
   Create `netlify.toml`:
   ```toml
   [build]
     publish = "dist"
     command = "npm run build"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Environment Variables

Set in Netlify dashboard:
- `VUE_APP_FIREBASE_API_KEY`
- `VUE_APP_FIREBASE_AUTH_DOMAIN`
- `VUE_APP_FIREBASE_PROJECT_ID`
- `VUE_APP_FIREBASE_STORAGE_BUCKET`
- `VUE_APP_FIREBASE_MESSAGING_SENDER_ID`
- `VUE_APP_FIREBASE_APP_ID`

## GitHub Pages

### Prerequisites

1. GitHub repository
2. GitHub Actions enabled

### Setup

1. **Create GitHub Actions workflow**
   Create `.github/workflows/deploy-pages.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18.x'
             cache: 'npm'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select "GitHub Actions" as source

## Environment Variables

### Development

Create `.env.local`:
```
VUE_APP_FIREBASE_API_KEY=your-dev-api-key
VUE_APP_FIREBASE_AUTH_DOMAIN=your-dev-project.firebaseapp.com
VUE_APP_FIREBASE_PROJECT_ID=your-dev-project-id
VUE_APP_FIREBASE_STORAGE_BUCKET=your-dev-project.appspot.com
VUE_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
VUE_APP_FIREBASE_APP_ID=your-dev-app-id
```

### Production

Update `src/firebase/config.js` or use environment variables:

```javascript
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY || "your-api-key",
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN || "your-project.firebaseapp.com",
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID || "your-project-id",
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET || "your-project.appspot.com",
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.VUE_APP_FIREBASE_APP_ID || "your-app-id"
}
```

## Pre-deployment Checklist

### Code Quality
- [ ] All tests pass
- [ ] ESLint passes without errors
- [ ] Code is properly commented
- [ ] No console.log statements in production code

### Firebase Setup
- [ ] Firebase project created
- [ ] Authentication enabled (Email/Password + Google)
- [ ] Firestore database created
- [ ] Security rules configured
- [ ] Firebase config updated

### Build
- [ ] `npm run build` completes successfully
- [ ] Build artifacts generated in `dist/` folder
- [ ] No build errors or warnings

### Testing
- [ ] Application loads correctly
- [ ] Authentication works
- [ ] Tasks can be created, edited, deleted
- [ ] Team management works
- [ ] Real-time updates work
- [ ] Responsive design works on mobile

### Security
- [ ] Firebase security rules are properly configured
- [ ] No sensitive data in client-side code
- [ ] Environment variables are properly set

### Performance
- [ ] Bundle size is optimized
- [ ] Images are compressed
- [ ] Lazy loading implemented where appropriate

## Troubleshooting

### Common Issues

1. **Build fails**
   - Check Node.js version compatibility
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **Firebase connection issues**
   - Verify Firebase config
   - Check Firebase project settings
   - Ensure proper authentication setup

3. **Deployment fails**
   - Check build output
   - Verify deployment configuration
   - Check environment variables

4. **Real-time updates not working**
   - Verify Firestore security rules
   - Check Firebase project permissions
   - Ensure proper authentication

### Getting Help

- Check the [README.md](README.md) for setup instructions
- Review [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines
- Create an issue for bugs or feature requests
- Check Firebase documentation for backend issues

## Monitoring

### Firebase Analytics
Enable Firebase Analytics to monitor:
- User engagement
- Feature usage
- Performance metrics
- Error tracking

### Error Monitoring
Consider integrating:
- Sentry for error tracking
- Firebase Crashlytics
- Google Analytics

## Maintenance

### Regular Tasks
- Update dependencies
- Monitor security vulnerabilities
- Review and update Firebase security rules
- Monitor application performance
- Update documentation

### Security Updates
- Keep dependencies updated
- Review Firebase security rules regularly
- Monitor for security advisories
- Implement security best practices

## Live Demo

🚀 **Try the live demo**: [https://task-management-app-32eee.web.app](https://task-management-app-32eee.web.app)

### Demo Features
- **Real-time collaboration** - Open in multiple tabs to see live updates
- **Drag & drop** - Move tasks between status columns (data preserved)
- **Team management** - Create teams and invite members
- **User authentication** - Login with Google, email, or demo login
- **Dark mode** - Toggle between light and dark themes
- **Proper date display** - All dates show correctly formatted
- **User names** - Assignees show proper names instead of IDs
