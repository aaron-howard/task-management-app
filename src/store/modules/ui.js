const state = {
  sidebar: true,
  theme: 'light',
  notifications: [],
  loading: false
}

const getters = {
  sidebar: state => state.sidebar,
  theme: state => state.theme,
  notifications: state => state.notifications,
  loading: state => state.loading
}

const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.sidebar = !state.sidebar
  },
  SET_SIDEBAR(state, value) {
    state.sidebar = value
  },
  SET_THEME(state, theme) {
    state.theme = theme
  },
  ADD_NOTIFICATION(state, notification) {
    state.notifications.push({
      id: Date.now(),
      ...notification
    })
  },
  REMOVE_NOTIFICATION(state, notificationId) {
    state.notifications = state.notifications.filter(n => n.id !== notificationId)
  },
  SET_LOADING(state, loading) {
    state.loading = loading
  }
}

const actions = {
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  setSidebar({ commit }, value) {
    commit('SET_SIDEBAR', value)
  },
  setTheme({ commit }, theme) {
    commit('SET_THEME', theme)
  },
  addNotification({ commit }, notification) {
    commit('ADD_NOTIFICATION', notification)
  },
  removeNotification({ commit }, notificationId) {
    commit('REMOVE_NOTIFICATION', notificationId)
  },
  setLoading({ commit }, loading) {
    commit('SET_LOADING', loading)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
