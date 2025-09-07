# GitHub Demo Setup Guide

This guide will help you set up the Task Management App as a live GitHub demo that visitors can use immediately.

## 🎯 Demo Requirements

### What You Need
1. **GitHub Repository** - Already set up ✅
2. **Firebase Project** - For backend services
3. **Live Demo URL** - For sharing
4. **Demo Data** - Sample teams and tasks

## 🚀 Quick Demo Setup

### 1. Create Firebase Project for Demo

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create new project: `task-management-demo`
3. Enable these services:

#### Authentication
- Go to Authentication > Sign-in method
- Enable **Email/Password**
- Enable **Google** (for easy demo access)

#### Firestore Database
- Go to Firestore Database
- Create database in **test mode** (for demo)
- Choose location closest to your users

#### Hosting
- Go to Hosting
- Click "Get started"

### 2. Update Firebase Configuration

Update `src/firebase/config.js` with your demo Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-demo-api-key",
  authDomain: "task-management-demo.firebaseapp.com",
  projectId: "task-management-demo",
  storageBucket: "task-management-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-demo-app-id"
}
```

### 3. Deploy to Firebase Hosting

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

Your demo will be available at: `https://task-management-demo.firebaseapp.com`

## 🎨 Demo Features to Highlight

### 1. **Real-time Collaboration**
- Open the app in multiple browser tabs
- Create/edit tasks in one tab
- Watch them update instantly in other tabs

### 2. **Drag & Drop**
- Move tasks between status columns
- Smooth animations and visual feedback

### 3. **Team Management**
- Create teams and invite members
- Assign tasks to team members

### 4. **User Authentication**
- Email/password registration
- Google OAuth login
- Profile management

## 📱 Demo Scenarios

### Scenario 1: Project Manager Demo
1. **Create Account** - Register with email or Google
2. **Create Team** - Set up "Marketing Team"
3. **Add Tasks** - Create marketing campaign tasks
4. **Assign Members** - Assign tasks to team members
5. **Track Progress** - Move tasks through status columns

### Scenario 2: Team Collaboration Demo
1. **Multiple Users** - Open in different browsers/incognito
2. **Create Team** - One user creates team, invites others
3. **Collaborate** - Multiple users add/edit tasks simultaneously
4. **Real-time Updates** - Show instant synchronization

### Scenario 3: Mobile Demo
1. **Responsive Design** - Open on mobile device
2. **Touch Interactions** - Demonstrate mobile-friendly interface
3. **Cross-platform** - Show same data across devices

## 🔧 Demo Configuration

### 1. Create Demo Data Script

Create `scripts/create-demo-data.js`:

```javascript
// Script to populate demo data
const { db } = require('../src/firebase/config')

async function createDemoData() {
  // Create demo teams
  const marketingTeam = await db.collection('teams').add({
    name: 'Marketing Team',
    description: 'Handles all marketing activities',
    createdBy: 'demo-user',
    members: ['demo-user'],
    createdAt: new Date(),
    updatedAt: new Date()
  })

  // Create demo tasks
  const tasks = [
    {
      title: 'Design new logo',
      description: 'Create a modern logo for the brand',
      status: 'todo',
      priority: 'high',
      teamId: marketingTeam.id,
      createdBy: 'demo-user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Social media campaign',
      description: 'Launch social media campaign for new product',
      status: 'in-progress',
      priority: 'medium',
      teamId: marketingTeam.id,
      createdBy: 'demo-user',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]

  tasks.forEach(task => {
    db.collection('tasks').add(task)
  })
}

createDemoData()
```

### 2. Demo User Accounts

Create these demo accounts for easy testing:

**Email**: `demo@example.com`
**Password**: `demo123`

**Email**: `manager@example.com`
**Password**: `manager123`

## 🌐 GitHub Pages Alternative

If you prefer GitHub Pages over Firebase Hosting:

### 1. Update GitHub Actions

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

### 2. Enable GitHub Pages

1. Go to repository Settings
2. Navigate to Pages section
3. Select "GitHub Actions" as source

Your demo will be available at: `https://yourusername.github.io/task-management-app`

## 📊 Demo Analytics

### 1. Firebase Analytics

Enable Firebase Analytics to track demo usage:

```javascript
// In main.js
import { analytics } from '@/firebase/config'

// Track demo events
analytics.logEvent('demo_started')
analytics.logEvent('task_created')
analytics.logEvent('team_created')
```

### 2. Demo Metrics

Track these key metrics:
- Number of demo users
- Tasks created
- Teams created
- Time spent in app
- Feature usage

## 🎯 Demo Presentation Tips

### 1. **Start with the Problem**
- "Managing tasks across teams is challenging"
- "Real-time collaboration is essential"
- "Need a simple, intuitive solution"

### 2. **Show Key Features**
- **Authentication**: "Secure login with Google or email"
- **Real-time**: "Changes appear instantly across all users"
- **Drag & Drop**: "Intuitive task management"
- **Teams**: "Collaborate with your team members"

### 3. **Live Demo Flow**
1. **Register/Login** - Show authentication
2. **Create Team** - Demonstrate team setup
3. **Add Tasks** - Show task creation
4. **Assign Tasks** - Demonstrate collaboration
5. **Move Tasks** - Show drag & drop
6. **Real-time Updates** - Open multiple tabs

## 🔒 Demo Security

### 1. **Firestore Rules for Demo**

Update `firestore.rules` for demo:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write for demo (less restrictive)
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 2. **Demo Data Cleanup**

Create cleanup script to reset demo data:

```javascript
// scripts/cleanup-demo.js
async function cleanupDemo() {
  const batch = db.batch()
  
  // Delete all tasks
  const tasks = await db.collection('tasks').get()
  tasks.docs.forEach(doc => batch.delete(doc.ref))
  
  // Delete all teams
  const teams = await db.collection('teams').get()
  teams.docs.forEach(doc => batch.delete(doc.ref))
  
  await batch.commit()
}
```

## 📱 Demo URLs

### Production Demo
- **Firebase**: `https://task-management-demo.firebaseapp.com`
- **GitHub Pages**: `https://yourusername.github.io/task-management-app`
- **Vercel**: `https://task-management-app.vercel.app`
- **Netlify**: `https://task-management-app.netlify.app`

### Development Demo
- **Local**: `http://localhost:8080`
- **Firebase Emulators**: `http://localhost:5000`

## 🎉 Demo Success Tips

### 1. **Prepare Demo Data**
- Create sample teams and tasks
- Set up demo user accounts
- Prepare realistic scenarios

### 2. **Test Everything**
- Test on different devices
- Test with multiple users
- Test all features work

### 3. **Create Demo Video**
- Record a 2-3 minute demo
- Show key features
- Upload to YouTube/Vimeo

### 4. **Documentation**
- Update README with demo link
- Add demo instructions
- Include screenshots

## 🚀 Quick Start Demo

For the fastest demo setup:

1. **Fork the repository**
2. **Create Firebase project**
3. **Update Firebase config**
4. **Deploy to Firebase Hosting**
5. **Share the demo URL**

Your demo will be live in under 10 minutes!

---

**Ready to showcase your Task Management App! 🎯**
