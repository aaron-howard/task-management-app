import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)

// Use plugins
app.use(router)
app.use(store)
app.use(vuetify)
app.use(Toast, {
  position: 'top-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false
})

// Initialize auth before mounting
store.dispatch('auth/initAuth').then(() => {
  app.mount('#app')
}).catch((error) => {
  console.error('Failed to initialize auth:', error)
  // Mount anyway - user can still access login page
  app.mount('#app')
})
