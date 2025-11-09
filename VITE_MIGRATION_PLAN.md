# Vite Migration Plan
## Task Management App - Vue CLI to Vite Migration Guide

### Executive Summary

**Current Status:** Vue 3.5.0 with Vue CLI 5.0
**Target:** Vue 3.5.0 with Vite 5.x
**Estimated Time:** 4-8 hours
**Risk Level:** Low-Medium (well-documented migration path)
**Benefits:**
- ✅ Eliminates all 9 remaining security vulnerabilities
- ✅ 3-10x faster build times
- ✅ Instant HMR (Hot Module Replacement)
- ✅ Modern ESM-based tooling
- ✅ Better tree-shaking and optimization

---

## Phase 1: Pre-Migration Assessment ✅

### Current Configuration Analysis

**Vue CLI Configuration (`vue.config.js`):**
- `publicPath: '/'` → Maps to Vite `base: '/'`
- `transpileDependencies: ['vuetify']` → Not needed in Vite (handles automatically)
- `devServer: { port: 8080, host: 'localhost' }` → Maps to Vite `server` config

**Dependencies to Migrate:**
- ✅ Vue 3.5.0 (already compatible)
- ✅ Vue Router 4.3.0 (already compatible)
- ✅ Vuex 4.1.0 (already compatible)
- ✅ Vuetify 3.7.0 (already compatible)
- ✅ Firebase 10.14.1 (already compatible)

**No Breaking Changes Required** - All dependencies are already Vite-compatible!

---

## Phase 2: Installation & Setup

### Step 1: Install Vite Dependencies

```bash
npm install --save-dev vite @vitejs/plugin-vue vite-plugin-vuetify
```

**Note:** You already have `@vitejs/plugin-vue@^5.0.0` installed, so we'll use that.

### Step 2: Remove Vue CLI Dependencies

```bash
npm uninstall @vue/cli-service @vue/cli-plugin-eslint @vue/cli-plugin-router @vue/cli-plugin-vuex
```

**Keep:** ESLint, Prettier, and other dev tools (they work with Vite)

### Step 3: Update package.json Scripts

**Replace:**
```json
"serve": "vue-cli-service serve",
"build": "vue-cli-service build",
"lint": "vue-cli-service lint",
```

**With:**
```json
"dev": "vite",
"build": "vite build",
"preview": "vite preview",
"lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs --fix --ignore-path .gitignore"
```

---

## Phase 3: Configuration Files

### Create `vite.config.js`

Replace `vue.config.js` with `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8080,
    host: 'localhost'
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'vuex'],
          'vuetify-vendor': ['vuetify'],
          'firebase-vendor': ['firebase']
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
})
```

### Update `index.html`

Move `public/index.html` to root `index.html` and update:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Management App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

**Key Changes:**
- Add `<script type="module" src="/src/main.js"></script>`
- Remove any template variables (Vite handles differently)

---

## Phase 4: Code Updates

### Update Import Paths (if needed)

Vite uses ESM, so ensure all imports use proper extensions:

**Before:**
```javascript
import Component from './Component'
```

**After (if needed):**
```javascript
import Component from './Component.vue'
```

### Update Environment Variables

**Vue CLI:** `process.env.VUE_APP_*`
**Vite:** `import.meta.env.VITE_*`

**Action Required:**
1. Rename all `.env` variables from `VUE_APP_*` to `VITE_*`
2. Update code references:
   - `process.env.VUE_APP_API_KEY` → `import.meta.env.VITE_API_KEY`

### Update Public Asset References

**Vue CLI:** `/img/logo.png` (in public folder)
**Vite:** `/img/logo.png` (same, but use `?url` for dynamic imports)

**Static assets in templates:** No changes needed
**Dynamic imports:** Use `?url` suffix if needed

---

## Phase 5: Vuetify Configuration

### Update `src/plugins/vuetify.js`

Vite handles Vuetify differently. Update to:

```javascript
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          background: '#FAFAFA',
          surface: '#FFFFFF'
        }
      },
      dark: {
        colors: {
          primary: '#2196F3',
          secondary: '#424242',
          accent: '#FF4081',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          background: '#121212',
          surface: '#1E1E1E'
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  display: {
    mobileBreakpoint: 'sm'
  }
})
```

**Note:** Your current configuration should work, but verify.

---

## Phase 6: Testing Checklist

### Development Testing
- [ ] `npm run dev` starts without errors
- [ ] Application loads in browser
- [ ] Hot Module Replacement (HMR) works
- [ ] All routes navigate correctly
- [ ] Authentication flow works
- [ ] Firebase connection works
- [ ] Vuetify components render correctly
- [ ] Theme switching works
- [ ] All dialogs open/close correctly
- [ ] Task CRUD operations work
- [ ] Team management works
- [ ] Real-time updates work (Firestore)

### Build Testing
- [ ] `npm run build` completes successfully
- [ ] Build output size is reasonable
- [ ] `npm run preview` serves production build correctly
- [ ] All assets load correctly
- [ ] No console errors in production build
- [ ] Firebase functions work in production build

### Linting
- [ ] `npm run lint` passes
- [ ] `npm run lint:fix` fixes issues correctly

---

## Phase 7: Deployment Updates

### Firebase Hosting

No changes needed - `firebase.json` should work as-is:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### GitHub Pages

No changes needed - `gh-pages` deployment works the same.

---

## Phase 8: Rollback Plan

If issues arise, rollback steps:

1. **Restore Vue CLI:**
   ```bash
   git checkout main vue.config.js package.json
   npm install
   ```

2. **Restore scripts:**
   ```bash
   # Restore original package.json scripts
   ```

3. **Remove Vite files:**
   ```bash
   rm vite.config.js
   # Move index.html back to public/ if moved
   ```

---

## Expected Improvements

### Build Performance
- **Dev Server Start:** 2-5 seconds (vs 10-30 seconds with Vue CLI)
- **HMR Updates:** <100ms (vs 1-3 seconds with Vue CLI)
- **Production Build:** 30-60 seconds (vs 2-5 minutes with Vue CLI)

### Bundle Size
- Similar or slightly smaller (better tree-shaking)
- Better code splitting

### Security
- **Vulnerabilities:** 0 (eliminates all 9 Vue CLI vulnerabilities)

---

## Migration Timeline

### Option A: Quick Migration (4-6 hours)
1. **Hour 1:** Setup and configuration
2. **Hour 2:** Code updates and testing
3. **Hour 3-4:** Fix issues and verify
4. **Hour 5-6:** Final testing and deployment

### Option B: Careful Migration (6-8 hours)
1. **Day 1:** Setup, configuration, initial testing
2. **Day 2:** Thorough testing, fix issues
3. **Day 3:** Final verification and deployment

---

## Known Issues & Solutions

### Issue 1: `process is not defined`
**Solution:** Replace `process.env` with `import.meta.env`

### Issue 2: Vuetify styles not loading
**Solution:** Ensure `vite-plugin-vuetify` is configured correctly

### Issue 3: Path aliases not working
**Solution:** Verify `resolve.alias` in `vite.config.js`

### Issue 4: Environment variables not working
**Solution:** Rename `VUE_APP_*` to `VITE_*` in `.env` files

---

## Post-Migration Tasks

1. **Update Documentation:**
   - Update README.md with new dev commands
   - Update CONTRIBUTING.md if needed
   - Update DEPLOYMENT.md if needed

2. **Team Communication:**
   - Notify team of new `npm run dev` command (replaces `npm run serve`)
   - Share migration benefits
   - Update onboarding docs

3. **Monitor:**
   - Watch for any production issues
   - Monitor build times
   - Check error logs

---

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [Vite Vue Plugin](https://github.com/vitejs/vite-plugin-vue)
- [Vite Vuetify Plugin](https://github.com/vuetifyjs/vite-plugin-vuetify)
- [Vue 3 + Vite Migration Guide](https://vitejs.dev/guide/migration.html)

---

## Decision Matrix

| Factor | Vue CLI | Vite | Winner |
|--------|---------|------|--------|
| Security | 9 vulnerabilities | 0 vulnerabilities | ✅ Vite |
| Build Speed | Slow (2-5 min) | Fast (30-60 sec) | ✅ Vite |
| Dev Experience | Good | Excellent | ✅ Vite |
| HMR Speed | 1-3 seconds | <100ms | ✅ Vite |
| Migration Effort | N/A | 4-8 hours | ⚠️ Vue CLI |
| Community Support | Declining | Growing | ✅ Vite |
| Long-term Maintenance | Maintenance mode | Active development | ✅ Vite |

**Recommendation:** **Migrate to Vite** - The benefits outweigh the migration effort, especially for long-term maintenance and security.

---

## Next Steps

1. **Review this plan** with your team
2. **Create a feature branch:** `git checkout -b feat/vite-migration`
3. **Follow phases sequentially**
4. **Test thoroughly** before merging
5. **Deploy to staging** first
6. **Monitor** for 24-48 hours
7. **Deploy to production**

---

**Prepared by:** AI Assistant
**Date:** 2025-01-27
**Version:** 1.0

