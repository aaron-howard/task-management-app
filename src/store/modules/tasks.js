import { db } from '@/firebase/config'

const state = {
  tasks: [],
  loading: false,
  error: null,
  filters: {
    status: 'all',
    assignee: 'all',
    priority: 'all'
  }
}

const getters = {
  tasks: state => state.tasks,
  loading: state => state.loading,
  error: state => state.error,
  filters: state => state.filters,
  filteredTasks: state => {
    let filtered = state.tasks
    
    if (state.filters.status !== 'all') {
      filtered = filtered.filter(task => task.status === state.filters.status)
    }
    
    if (state.filters.assignee !== 'all') {
      filtered = filtered.filter(task => task.assigneeId === state.filters.assignee)
    }
    
    if (state.filters.priority !== 'all') {
      filtered = filtered.filter(task => task.priority === state.filters.priority)
    }
    
    return filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  },
  tasksByStatus: state => {
    const statuses = ['todo', 'in-progress', 'review', 'done']
    return statuses.reduce((acc, status) => {
      acc[status] = state.tasks.filter(task => task.status === status)
      return acc
    }, {})
  }
}

const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks
  },
  ADD_TASK(state, task) {
    state.tasks.push(task)
  },
  UPDATE_TASK(state, updatedTask) {
    const index = state.tasks.findIndex(task => task.id === updatedTask.id)
    if (index !== -1) {
      state.tasks.splice(index, 1, updatedTask)
    }
  },
  DELETE_TASK(state, taskId) {
    state.tasks = state.tasks.filter(task => task.id !== taskId)
  },
  SET_LOADING(state, loading) {
    state.loading = loading
  },
  SET_ERROR(state, error) {
    state.error = error
  },
  SET_FILTERS(state, filters) {
    state.filters = { ...state.filters, ...filters }
  },
  CLEAR_ERROR(state) {
    state.error = null
  }
}

const actions = {
  async fetchTasks({ commit, rootGetters }) {
    try {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      
      const userId = rootGetters['auth/user']?.uid
      if (!userId) return
      
      const snapshot = await db.collection('tasks')
        .where('teamId', 'in', await getTeamIds(userId))
        .orderBy('createdAt', 'desc')
        .get()
      
      const tasks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      
      commit('SET_TASKS', tasks)
    } catch (error) {
      commit('SET_ERROR', error.message)
      console.error('Error fetching tasks:', error)
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async createTask({ commit, rootGetters }, taskData) {
    try {
      commit('CLEAR_ERROR')
      
      const userId = rootGetters['auth/user']?.uid
      if (!userId) throw new Error('User not authenticated')
      
      const task = {
        ...taskData,
        createdBy: userId,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'todo',
        priority: taskData.priority || 'medium'
      }
      
      const docRef = await db.collection('tasks').add(task)
      const newTask = { id: docRef.id, ...task }
      
      commit('ADD_TASK', newTask)
      return newTask
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },

  async updateTask({ commit }, { taskId, updates }) {
    try {
      commit('CLEAR_ERROR')
      
      await db.collection('tasks').doc(taskId).update({
        ...updates,
        updatedAt: new Date()
      })
      
      const updatedTask = { id: taskId, ...updates }
      commit('UPDATE_TASK', updatedTask)
      return updatedTask
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },

  async deleteTask({ commit }, taskId) {
    try {
      commit('CLEAR_ERROR')
      
      await db.collection('tasks').doc(taskId).delete()
      commit('DELETE_TASK', taskId)
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },

  async moveTask({ commit }, { taskId, newStatus, newOrder }) {
    try {
      commit('CLEAR_ERROR')
      
      const updates = {
        status: newStatus,
        order: newOrder,
        updatedAt: new Date()
      }
      
      await db.collection('tasks').doc(taskId).update(updates)
      
      const updatedTask = { id: taskId, ...updates }
      commit('UPDATE_TASK', updatedTask)
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },

  setFilters({ commit }, filters) {
    commit('SET_FILTERS', filters)
  },

  async subscribeToTasks({ commit, rootGetters }) {
    const userId = rootGetters['auth/user']?.uid
    if (!userId) return

    const teamIds = await getTeamIds(userId)
    
    return db.collection('tasks')
      .where('teamId', 'in', teamIds)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const tasks = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        commit('SET_TASKS', tasks)
      }, error => {
        commit('SET_ERROR', error.message)
        console.error('Error in tasks subscription:', error)
      })
  }
}

// Helper function to get team IDs for a user
async function getTeamIds(userId) {
  const userTeamsSnapshot = await db.collection('teams')
    .where('members', 'array-contains', userId)
    .get()
  
  return userTeamsSnapshot.docs.map(doc => doc.id)
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
