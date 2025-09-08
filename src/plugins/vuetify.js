import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: '#FAFAFA',
        surface: '#FFFFFF'
      },
      dark: {
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
  },
  icons: {
    iconfont: 'mdi',
    values: {
      account: 'mdi-account',
      email: 'mdi-email',
      lock: 'mdi-lock',
      person: 'mdi-account',
      home: 'mdi-home',
      menu: 'mdi-menu',
      close: 'mdi-close',
      edit: 'mdi-pencil',
      delete: 'mdi-delete',
      add: 'mdi-plus',
      search: 'mdi-magnify',
      filter: 'mdi-filter',
      sort: 'mdi-sort',
      check: 'mdi-check',
      cancel: 'mdi-cancel',
      save: 'mdi-content-save',
      refresh: 'mdi-refresh',
      settings: 'mdi-cog',
      logout: 'mdi-logout',
      login: 'mdi-login',
      register: 'mdi-account-plus',
      team: 'mdi-account-group',
      task: 'mdi-checkbox-marked-circle',
      dashboard: 'mdi-view-dashboard',
      profile: 'mdi-account-circle',
      dark: 'mdi-weather-night',
      light: 'mdi-weather-sunny'
    }
  },
  breakpoint: {
    mobileBreakpoint: 'sm'
  }
})
