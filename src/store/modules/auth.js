import { auth, db } from '@/firebase/config'
import router from '@/router'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  onAuthStateChanged
} from 'firebase/auth'
import {
  doc,
  setDoc,
  getDoc,
  updateDoc
} from 'firebase/firestore'

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

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user

      await updateProfile(user, { displayName })

      // Create user document in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        displayName,
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

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user

      // Update last login time
      await updateDoc(doc(db, 'users', user.uid), {
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

      const provider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)
      const user = userCredential.user

      // Check if user document exists, create if not
      const userDocRef = doc(db, 'users', user.uid)
      const userDoc = await getDoc(userDocRef)
      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: new Date(),
          lastLoginAt: new Date()
        })
      } else {
        await updateDoc(userDocRef, {
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
      await signOut(auth)
      commit('SET_USER', null)
      router.push('/login')
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },

  async initAuth({ commit }) {
    return new Promise(resolve => {
      onAuthStateChanged(auth, user => {
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
