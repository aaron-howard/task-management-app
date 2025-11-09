import { db } from '@/firebase/config'
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore'

const state = {
  teams: [],
  currentTeam: null,
  loading: false,
  error: null
}

const getters = {
  teams: state => state.teams,
  currentTeam: state => state.currentTeam,
  loading: state => state.loading,
  error: state => state.error,
  userTeams: (state, getters, rootState, rootGetters) => {
    const userId = rootGetters['auth/user']?.uid
    if (!userId) return []

    return state.teams.filter(
      team => team.members.includes(userId) || team.createdBy === userId
    )
  }
}

const mutations = {
  SET_TEAMS(state, teams) {
    state.teams = teams
  },
  ADD_TEAM(state, team) {
    state.teams.push(team)
  },
  UPDATE_TEAM(state, updatedTeam) {
    const index = state.teams.findIndex(team => team.id === updatedTeam.id)
    if (index !== -1) {
      state.teams.splice(index, 1, updatedTeam)
    }
  },
  DELETE_TEAM(state, teamId) {
    state.teams = state.teams.filter(team => team.id !== teamId)
  },
  SET_CURRENT_TEAM(state, team) {
    state.currentTeam = team
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
  async fetchTeams({ commit, rootGetters }) {
    try {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')

      const userId = rootGetters['auth/user']?.uid
      if (!userId) return

      const q = query(
        collection(db, 'teams'),
        where('members', 'array-contains', userId)
      )
      const snapshot = await getDocs(q)

      const teams = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      commit('SET_TEAMS', teams)
    } catch (error) {
      commit('SET_ERROR', error.message)
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async createTeam({ commit, rootGetters }, teamData) {
    try {
      commit('CLEAR_ERROR')

      const userId = rootGetters['auth/user']?.uid
      if (!userId) throw new Error('User not authenticated')

      const team = {
        ...teamData,
        createdBy: userId,
        members: [userId],
        createdAt: new Date(),
        updatedAt: new Date()
      }

      const docRef = await addDoc(collection(db, 'teams'), team)
      const newTeam = { id: docRef.id, ...team }

      // Don't manually add to state - let the subscription handle it
      return newTeam
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },

  async updateTeam({ commit }, { teamId, updates }) {
    try {
      commit('CLEAR_ERROR')

      await updateDoc(doc(db, 'teams', teamId), {
        ...updates,
        updatedAt: new Date()
      })

      // Don't manually update state - let the subscription handle it
      return { id: teamId, ...updates }
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },

  async deleteTeam({ commit }, teamId) {
    try {
      commit('CLEAR_ERROR')

      await deleteDoc(doc(db, 'teams', teamId))
      // Don't manually remove from state - let the subscription handle it
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },

  async addMemberToTeam({ commit, dispatch }, { teamId, memberEmail }) {
    try {
      commit('CLEAR_ERROR')

      // Find user by email
      const usersQuery = query(
        collection(db, 'users'),
        where('email', '==', memberEmail)
      )
      const usersSnapshot = await getDocs(usersQuery)

      if (usersSnapshot.empty) {
        throw new Error('User not found')
      }

      const userDoc = usersSnapshot.docs[0]
      const userId = userDoc.id

      // Get current team data
      const teamDocRef = doc(db, 'teams', teamId)
      const teamDoc = await getDoc(teamDocRef)
      const teamData = teamDoc.data()

      if (teamData.members.includes(userId)) {
        throw new Error('User is already a member of this team')
      }

      // Add user to team
      await updateDoc(teamDocRef, {
        members: [...teamData.members, userId],
        updatedAt: new Date()
      })

      // Refresh teams
      await dispatch('fetchTeams')
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },

  async removeMemberFromTeam({ commit, dispatch }, { teamId, userId }) {
    try {
      commit('CLEAR_ERROR')

      // Get current team data
      const teamDocRef = doc(db, 'teams', teamId)
      const teamDoc = await getDoc(teamDocRef)
      const teamData = teamDoc.data()

      // Remove user from team
      const updatedMembers = teamData.members.filter(id => id !== userId)

      await updateDoc(teamDocRef, {
        members: updatedMembers,
        updatedAt: new Date()
      })

      // Refresh teams
      await dispatch('fetchTeams')
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },

  setCurrentTeam({ commit }, team) {
    commit('SET_CURRENT_TEAM', team)
  },

  async subscribeToTeams({ commit, rootGetters }) {
    const userId = rootGetters['auth/user']?.uid
    if (!userId) return

    const q = query(
      collection(db, 'teams'),
      where('members', 'array-contains', userId)
    )

    return onSnapshot(
      q,
      snapshot => {
        const teams = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        commit('SET_TEAMS', teams)
      },
      error => {
        commit('SET_ERROR', error.message)
      }
    )
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
