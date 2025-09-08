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
          v-model="filters.status"
          :items="statusOptions"
          label="Status"
          @change="updateFilters"
        ></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-select
          v-model="filters.priority"
          :items="priorityOptions"
          label="Priority"
          @change="updateFilters"
        ></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-select
          v-model="filters.assignee"
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
              :list="getTasksByStatus(status)"
              group="tasks"
              @change="onTaskMove($event, status)"
              class="kanban-list"
            >
              <TaskCard
                v-for="task in getTasksByStatus(status)"
                :key="task.id"
                :task="task"
                @edit="editTask"
                @delete="deleteTask"
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
      @delete="deleteTask"
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
      assigneeOptions: [{ text: 'All Assignees', value: 'all' }]
    }
  },

  computed: {
    ...mapGetters('tasks', ['filteredTasks', 'filters']),
    ...mapGetters('teams', ['userTeams']),

    tasks() {
      if (!this.searchQuery) return this.filteredTasks

      return this.filteredTasks.filter(
        task =>
          task.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          task.description
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
      )
    }
  },

  async mounted() {
    await this.initializeData()
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
      // Get all unique member IDs from teams and tasks
      const allMemberIds = new Set()

      // Add team members
      this.userTeams.forEach(team => {
        team.members.forEach(memberId => {
          allMemberIds.add(memberId)
        })
      })

      // Add task assignees
      this.tasks.forEach(task => {
        if (task.assigneeId) {
          allMemberIds.add(task.assigneeId)
        }
      })

      if (allMemberIds.size > 0) {
        await this.$store.dispatch('users/fetchUsers', Array.from(allMemberIds))
      }
    },

    getTasksByStatus(status) {
      return this.tasks.filter(task => task.status === status)
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
      const colors = {
        todo: 'grey',
        'in-progress': 'orange',
        review: 'blue',
        done: 'green'
      }
      return colors[status] || 'grey'
    },

    formatStatus(status) {
      return status
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    },

    async onTaskMove(event, newStatus) {
      if (event.added) {
        const task = event.added.element
        try {
          await this.moveTask({
            taskId: task.id,
            newStatus: newStatus,
            newOrder: event.added.newIndex
          })
          this.$toast.success('Task moved successfully')
        } catch (error) {
          this.$toast.error('Failed to move task')
        }
      }
    },

    editTask(task) {
      this.editingTask = task
      this.showCreateDialog = true
    },

    viewTask(task) {
      this.selectedTask = task
      this.showDetailsDialog = true
    },

    async deleteTask(task) {
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
          await this.updateTask({
            taskId: this.editingTask.id,
            updates: taskData
          })
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
      this.setFilters(this.filters)
    }
  }
}
</script>

<style scoped>
.kanban-column {
  height: 600px;
}

.kanban-list {
  min-height: 500px;
  padding: 8px;
}
</style>
