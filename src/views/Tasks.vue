<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <div class="d-flex justify-space-between align-center mb-4">
          <h1 class="text-h4">Tasks</h1>
          <v-btn color="primary" @click="showCreateDialog = true">
            <v-icon left>mdi-plus</v-icon>
            Create Task
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- Filters -->
    <v-row class="mb-4">
      <v-col cols="12" md="3">
        <v-select
          v-model="localFilters.status"
          :items="statusOptions"
          label="Status"
          @change="updateFilters"
        ></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-select
          v-model="localFilters.priority"
          :items="priorityOptions"
          label="Priority"
          @change="updateFilters"
        ></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-select
          v-model="localFilters.assignee"
          :items="assigneeOptions"
          label="Assignee"
          @change="updateFilters"
        ></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          v-model="searchQuery"
          label="Search tasks"
          prepend-inner-icon="mdi-magnify"
          clearable
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Kanban Board -->
    <v-row>
      <v-col v-for="status in statuses" :key="status" cols="12" md="3">
        <v-card class="kanban-column" height="600">
          <v-card-title class="text-center">
            <v-icon left>{{ getStatusIcon(status) }}</v-icon>
            {{ formatStatus(status) }}
            <v-chip
              class="ml-2"
              small
              :color="getStatusColor(status)"
              text-color="white"
            >
              {{ getTasksByStatus(status).length }}
            </v-chip>
          </v-card-title>

          <v-card-text class="pa-2">
            <draggable
              :list="statusLists[status]"
              group="tasks"
              @change="onTaskChange($event, status)"
              class="kanban-list"
            >
              <TaskCard
                v-for="task in statusLists[status]"
                :key="task.id"
                :task="task"
                @edit="editTask"
                @delete="onDeleteTask"
                @view="viewTask"
              />
            </draggable>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Create/Edit Task Dialog -->
    <TaskDialog
      v-model="showCreateDialog"
      :task="editingTask"
      @save="handleTaskSave"
      @close="closeDialog"
    />

    <!-- Task Details Dialog -->
    <TaskDetailsDialog
      v-model="showDetailsDialog"
      :task="selectedTask"
      @edit="editTask"
      @delete="onDeleteTask"
    />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import draggable from 'vuedraggable'
import TaskCard from '@/components/TaskCard.vue'
import TaskDialog from '@/components/TaskDialog.vue'
import TaskDetailsDialog from '@/components/TaskDetailsDialog.vue'

export default {
  name: 'Tasks',
  components: {
    draggable,
    TaskCard,
    TaskDialog,
    TaskDetailsDialog
  },

  data() {
    return {
      showCreateDialog: false,
      showDetailsDialog: false,
      editingTask: null,
      selectedTask: null,
      searchQuery: '',
      statuses: ['todo', 'in-progress', 'review', 'done'],
      statusOptions: [
        { text: 'All Statuses', value: 'all' },
        { text: 'To Do', value: 'todo' },
        { text: 'In Progress', value: 'in-progress' },
        { text: 'Review', value: 'review' },
        { text: 'Done', value: 'done' }
      ],
      priorityOptions: [
        { text: 'All Priorities', value: 'all' },
        { text: 'Low', value: 'low' },
        { text: 'Medium', value: 'medium' },
        { text: 'High', value: 'high' }
      ],
      assigneeOptions: [{ text: 'All Assignees', value: 'all' }],
      localFilters: { status: 'all', priority: 'all', assignee: 'all' },
      statusLists: {
        todo: [],
        'in-progress': [],
        review: [],
        done: []
      }
    }
  },

  computed: {
    ...mapGetters('tasks', ['filteredTasks', 'filters']),
    ...mapGetters('teams', ['userTeams']),

    tasks() {
      let list = this.filteredTasks

      // Team filter from route query
      const teamId = this.$route.query.team
      if (teamId) list = list.filter(t => t.teamId === teamId)

      if (!this.searchQuery) return list

      return list.filter(
        task =>
          (task.title || '').toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          (task.description || '')
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
      )
    }
  },

  watch: {
    // Rebuild per-status lists when tasks or filters change
    tasks: {
      immediate: true,
      handler() {
        this.rebuildStatusLists()
      }
    },
    '$route.query.team'() {
      this.rebuildStatusLists()
    }
  },

  async mounted() {
    await this.initializeData()
    // Initialize local filters from store
    this.localFilters = { ...this.filters }
  },

  methods: {
    ...mapActions('tasks', [
      'fetchTasks',
      'subscribeToTasks',
      'createTask',
      'updateTask',
      'deleteTask',
      'moveTask',
      'setFilters'
    ]),

    rebuildStatusLists() {
      const lists = {
        todo: [],
        'in-progress': [],
        review: [],
        done: []
      }
      // sort within status by order asc, fallback to createdAt desc
      const copy = [...this.tasks]
      copy.sort((a, b) => {
        const ao = typeof a.order === 'number' ? a.order : Number.MAX_SAFE_INTEGER
        const bo = typeof b.order === 'number' ? b.order : Number.MAX_SAFE_INTEGER
        if (ao !== bo) return ao - bo
        return new Date(b.createdAt) - new Date(a.createdAt)
      })
      copy.forEach(t => lists[t.status]?.push(t))
      this.statusLists = lists
    },

    async initializeData() {
      try {
        await this.fetchTasks()
        this.subscribeToTasks()
        await this.fetchUsers()
      } catch (error) {
        this.$toast.error('Failed to load tasks')
      }
    },

    async fetchUsers() {
      const allMemberIds = new Set()
      this.userTeams.forEach(team => team.members.forEach(id => allMemberIds.add(id)))
      this.tasks.forEach(task => task.assigneeId && allMemberIds.add(task.assigneeId))
      if (allMemberIds.size > 0) {
        await this.$store.dispatch('users/fetchUsers', Array.from(allMemberIds))
      }
    },

    getStatusIcon(status) {
      const icons = {
        todo: 'mdi-format-list-checks',
        'in-progress': 'mdi-progress-clock',
        review: 'mdi-eye',
        done: 'mdi-check-circle'
      }
      return icons[status] || 'mdi-help'
    },

    getStatusColor(status) {
      const colors = { todo: 'grey', 'in-progress': 'orange', review: 'blue', done: 'green' }
      return colors[status] || 'grey'
    },

    formatStatus(status) {
      return status
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    },

    async onTaskChange(event, newStatus) {
      // Handle cross-column moves (added) and same-column reorders (moved)
      try {
        if (event.added) {
          const task = event.added.element
          const newIndex = event.added.newIndex
          const newOrder = this.computeOrderValue(this.statusLists[newStatus], newIndex)
          await this.moveTask({ taskId: task.id, newStatus, newOrder })
          this.$toast.success('Task moved successfully')
        } else if (event.moved) {
          const { element, newIndex } = event.moved
          const list = this.statusLists[newStatus]
          const newOrder = this.computeOrderValue(list, newIndex)
          await this.updateTask({ taskId: element.id, updates: { order: newOrder } })
        }
      } catch (e) {
        this.$toast.error('Failed to update task order')
      }
    },

    computeOrderValue(list, index) {
      // Compute fractional order between neighbors to minimize batch writes
      const prev = list[index - 1]
      const next = list[index + 1]
      const prevOrder = typeof prev?.order === 'number' ? prev.order : index - 1
      const nextOrder = typeof next?.order === 'number' ? next.order : index + 1
      if (prev && next) return (prevOrder + nextOrder) / 2
      if (!prev && next) return nextOrder - 1
      if (prev && !next) return prevOrder + 1
      return Date.now() // single element fallback with stable unique value
    },

    editTask(task) {
      this.editingTask = task
      this.showCreateDialog = true
    },

    viewTask(task) {
      this.selectedTask = task
      this.showDetailsDialog = true
    },

    async onDeleteTask(task) {
      if (confirm('Are you sure you want to delete this task?')) {
        try {
          await this.deleteTask(task.id)
          this.$toast.success('Task deleted successfully')
        } catch (error) {
          this.$toast.error('Failed to delete task')
        }
      }
    },

    async handleTaskSave(taskData) {
      try {
        if (this.editingTask) {
          await this.updateTask({ taskId: this.editingTask.id, updates: taskData })
          this.$toast.success('Task updated successfully')
        } else {
          await this.createTask(taskData)
          this.$toast.success('Task created successfully')
        }
        this.closeDialog()
      } catch (error) {
        this.$toast.error('Failed to save task')
      }
    },

    closeDialog() {
      this.showCreateDialog = false
      this.editingTask = null
    },

    updateFilters() {
      this.setFilters(this.localFilters)
    }
  }
}
</script>

<style scoped>
.kanban-column { height: 600px; }
.kanban-list { min-height: 500px; padding: 8px; }
</style>
