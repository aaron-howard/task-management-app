import { db } from '@/firebase/config'
import {
  collection,
  query,
  where,
  getDocs
} from 'firebase/firestore'

const state = {
  users: [],
  loading: false,
  error: null
}

const getters = {
  users: state => state.users,
  loading: state => state.loading,
  error: state => state.error,
  getUserById: state => userId => {
    return state.users.find(user => user.uid === userId)
  },
  getUserDisplayName: state => userId => {
    const user = state.users.find(user => user.uid === userId)
    return user ? user.displayName || user.email : `User ${userId}`
  }
}

const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  ADD_USER(state, user) {
    const index = state.users.findIndex(u => u.uid === user.uid)
    if (index === -1) {
      state.users.push(user)
    } else {
      state.users.splice(index, 1, user)
    }
  },
  SET_LOADING(state, loading) {
    state.loading = loading
  },
  SET_ERROR(state, error) {
    state.error = error
  },
  CLEAR_ERROR(state) {
    state.error = null
  }
}

const actions = {
  async fetchUsers({ commit }, userIds) {
    try {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')

      if (!userIds || userIds.length === 0) {
        commit('SET_USERS', [])
        return
      }

      const users = []
      const batchSize = 10 // Firestore 'in' query limit

      for (let i = 0; i < userIds.length; i += batchSize) {
        const batch = userIds.slice(i, i + batchSize)
        const q = query(
          collection(db, 'users'),
          where('uid', 'in', batch)
        )
        const snapshot = await getDocs(q)

        snapshot.docs.forEach(doc => {
          users.push({ id: doc.id, ...doc.data() })
        })
      }

      commit('SET_USERS', users)
    } catch (error) {
      commit('SET_ERROR', error.message)
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async fetchAllUsers({ commit }) {
    try {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')

      const snapshot = await getDocs(collection(db, 'users'))
      const users = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      commit('SET_USERS', users)
    } catch (error) {
      commit('SET_ERROR', error.message)
    } finally {
      commit('SET_LOADING', false)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
