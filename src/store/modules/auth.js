import { auth, db } from '@/firebase/config'
import router from '@/router'

const state = {
  user: null,
  loading: false,
  error: null
}

const getters = {
  isAuthenticated: state => !!state.user,
  user: state => state.user,
  loading: state => state.loading,
  error: state => state.error
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
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
  async signUp({ commit }, { email, password, displayName }) {
    try {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      
      const userCredential = await auth.createUserWithEmailAndPassword(email, password)
      const user = userCredential.user
      
      await user.updateProfile({ displayName })
      
      // Create user document in Firestore
      await db.collection('users').doc(user.uid).set({
        uid: user.uid,
        email: user.email,
        displayName: displayName,
        photoURL: user.photoURL,
        createdAt: new Date(),
        lastLoginAt: new Date()
      })
      
      commit('SET_USER', user)
      router.push('/')
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async signIn({ commit }, { email, password }) {
    try {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      
      const userCredential = await auth.signInWithEmailAndPassword(email, password)
      const user = userCredential.user
      
      // Update last login time
      await db.collection('users').doc(user.uid).update({
        lastLoginAt: new Date()
      })
      
      commit('SET_USER', user)
      router.push('/')
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async signInWithGoogle({ commit }) {
    try {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      
      const provider = new auth.GoogleAuthProvider()
      const userCredential = await auth.signInWithPopup(provider)
      const user = userCredential.user
      
      // Check if user document exists, create if not
      const userDoc = await db.collection('users').doc(user.uid).get()
      if (!userDoc.exists) {
        await db.collection('users').doc(user.uid).set({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: new Date(),
          lastLoginAt: new Date()
        })
      } else {
        await db.collection('users').doc(user.uid).update({
          lastLoginAt: new Date()
        })
      }
      
      commit('SET_USER', user)
      router.push('/')
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async logout({ commit }) {
    try {
      await auth.signOut()
      commit('SET_USER', null)
      router.push('/login')
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },

  async initAuth({ commit }) {
    return new Promise((resolve) => {
      auth.onAuthStateChanged(user => {
        commit('SET_USER', user)
        resolve(user)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
