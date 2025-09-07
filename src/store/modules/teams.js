import { db } from '@/firebase/config'

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

    return state.teams.filter(team =>
      team.members.includes(userId) || team.createdBy === userId
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

      const snapshot = await db.collection('teams')
        .where('members', 'array-contains', userId)
        .get()

      const teams = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      commit('SET_TEAMS', teams)
    } catch (error) {
      commit('SET_ERROR', error.message)
      console.error('Error fetching teams:', error)
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

      const docRef = await db.collection('teams').add(team)
      const newTeam = { id: docRef.id, ...team }

      commit('ADD_TEAM', newTeam)
      return newTeam
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },

  async updateTeam({ commit }, { teamId, updates }) {
    try {
      commit('CLEAR_ERROR')

      await db.collection('teams').doc(teamId).update({
        ...updates,
        updatedAt: new Date()
      })

      const updatedTeam = { id: teamId, ...updates }
      commit('UPDATE_TEAM', updatedTeam)
      return updatedTeam
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },

  async deleteTeam({ commit }, teamId) {
    try {
      commit('CLEAR_ERROR')

      await db.collection('teams').doc(teamId).delete()
      commit('DELETE_TEAM', teamId)
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },

  async addMemberToTeam({ commit, dispatch }, { teamId, memberEmail }) {
    try {
      commit('CLEAR_ERROR')

      // Find user by email
      const usersSnapshot = await db.collection('users')
        .where('email', '==', memberEmail)
        .get()

      if (usersSnapshot.empty) {
        throw new Error('User not found')
      }

      const userDoc = usersSnapshot.docs[0]
      const userId = userDoc.id

      // Get current team data
      const teamDoc = await db.collection('teams').doc(teamId).get()
      const teamData = teamDoc.data()

      if (teamData.members.includes(userId)) {
        throw new Error('User is already a member of this team')
      }

      // Add user to team
      await db.collection('teams').doc(teamId).update({
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
      const teamDoc = await db.collection('teams').doc(teamId).get()
      const teamData = teamDoc.data()

      // Remove user from team
      const updatedMembers = teamData.members.filter(id => id !== userId)

      await db.collection('teams').doc(teamId).update({
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

    return db.collection('teams')
      .where('members', 'array-contains', userId)
      .onSnapshot(snapshot => {
        const teams = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        commit('SET_TEAMS', teams)
      }, error => {
        commit('SET_ERROR', error.message)
        console.error('Error in teams subscription:', error)
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
