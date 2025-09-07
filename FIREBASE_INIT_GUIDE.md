# Firebase Initialization Guide

## Step-by-Step Firebase Setup

### 1. Run Firebase Init

```bash
firebase init
```

### 2. Select Services

When prompted, select these services:
- ✅ **Hosting: Configure files for Firebase Hosting**
- ✅ **Firestore: Configure security rules and indexes files**
- ❌ Functions (optional)
- ❌ Storage (optional)
- ❌ Emulators (optional)

### 3. Project Selection

- Select your Firebase project from the list
- If you don't see it, make sure you're logged in: `firebase login`

### 4. Hosting Configuration

**What do you want to use as your public directory?**
```
dist
```

**Configure as a single-page app (rewrite all urls to /index.html)?**
```
Yes
```

**Set up automatic builds and deploys with GitHub?**
```
No
```

**File dist/index.html already exists. Overwrite?**
```
No
```

### 5. Firestore Configuration

**What file should be used for Firestore Rules?**
```
firestore.rules
```

**What file should be used for Firestore indexes?**
```
firestore.indexes.json
```

### 6. Complete Setup

After initialization, you should see:
- `firebase.json` created/updated
- `.firebaserc` created
- Firestore rules and indexes files ready

## Next Steps

1. **Update Firebase Config**
   - Replace values in `src/firebase/config.js`

2. **Deploy Firestore Rules**
   ```bash
   firebase deploy --only firestore:rules
   ```

3. **Deploy to Hosting**
   ```bash
   npm run build
   firebase deploy
   ```

## Troubleshooting

### If Firebase CLI is not installed:
```bash
npm install -g firebase-tools
```

### If not logged in:
```bash
firebase login
```

### If project not found:
- Check you're in the right directory
- Verify project exists in Firebase Console
- Try: `firebase use --add`
