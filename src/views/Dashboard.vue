<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-4">Dashboard</h1>
        <p class="text-h6 mb-6">
          Welcome back, {{ user.displayName || user.email }}!
        </p>
      </v-col>
    </v-row>

    <v-row>
      <!-- Quick Stats -->
      <v-col cols="12" md="3" v-for="stat in stats" :key="stat.title">
        <v-card class="pa-4" :color="stat.color" dark>
          <v-card-text>
            <div class="d-flex align-center">
              <v-icon size="40" class="mr-3">{{ stat.icon }}</v-icon>
              <div>
                <div class="text-h4">{{ stat.value }}</div>
                <div class="text-subtitle-1">{{ stat.title }}</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <!-- Recent Tasks -->
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>
            <v-icon left>mdi-format-list-checks</v-icon>
            Recent Tasks
          </v-card-title>
          <v-card-text>
            <v-list v-if="recentTasks.length > 0">
              <v-list-item
                v-for="task in recentTasks"
                :key="task.id"
                @click="$router.push('/tasks')"
              >
                <v-list-item-icon>
                  <v-icon :color="getPriorityColor(task.priority)">
                    {{ getPriorityIcon(task.priority) }}
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ task.title }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ task.description }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-chip
                    :color="getStatusColor(task.status)"
                    small
                    text-color="white"
                  >
                    {{ task.status }}
                  </v-chip>
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <v-empty-state
              v-else
              icon="mdi-format-list-checks"
              title="No tasks yet"
              text="Create your first task to get started"
            >
              <v-btn color="primary" @click="$router.push('/tasks')">
                Create Task
              </v-btn>
            </v-empty-state>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Teams -->
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>
            <v-icon left>mdi-account-group</v-icon>
            My Teams
          </v-card-title>
          <v-card-text>
            <v-list v-if="userTeams.length > 0">
              <v-list-item
                v-for="team in userTeams"
                :key="team.id"
                @click="$router.push('/teams')"
              >
                <v-list-item-icon>
                  <v-icon>mdi-account-group</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ team.name }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ team.members.length }} members
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-empty-state
              v-else
              icon="mdi-account-group"
              title="No teams yet"
              text="Create or join a team to collaborate"
            >
              <v-btn color="primary" @click="$router.push('/teams')">
                Manage Teams
              </v-btn>
            </v-empty-state>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters('auth', ['user']),
    ...mapGetters('tasks', ['tasks']),
    ...mapGetters('teams', ['userTeams']),

    stats() {
      const tasksByStatus = this.tasks.reduce((acc, task) => {
        acc[task.status] = (acc[task.status] || 0) + 1
        return acc
      }, {})

      return [
        {
          title: 'Total Tasks',
          value: this.tasks.length,
          icon: 'mdi-format-list-checks',
          color: 'primary'
        },
        {
          title: 'In Progress',
          value: tasksByStatus['in-progress'] || 0,
          icon: 'mdi-progress-clock',
          color: 'orange'
        },
        {
          title: 'Completed',
          value: tasksByStatus.done || 0,
          icon: 'mdi-check-circle',
          color: 'success'
        },
        {
          title: 'Teams',
          value: this.userTeams.length,
          icon: 'mdi-account-group',
          color: 'info'
        }
      ]
    },

    recentTasks() {
      return this.tasks.filter(task => task.status !== 'done').slice(0, 5)
    }
  },

  async mounted() {
    await this.initializeData()
  },

  methods: {
    ...mapActions('tasks', ['fetchTasks', 'subscribeToTasks']),
    ...mapActions('teams', ['fetchTeams', 'subscribeToTeams']),

    async initializeData() {
      try {
        await Promise.all([this.fetchTasks(), this.fetchTeams()])

        // Set up real-time subscriptions
        this.subscribeToTasks()
        this.subscribeToTeams()
      } catch (error) {
        this.$toast.error('Failed to load dashboard data')
      }
    },

    getPriorityColor(priority) {
      const colors = {
        low: 'green',
        medium: 'orange',
        high: 'red'
      }
      return colors[priority] || 'grey'
    },

    getPriorityIcon(priority) {
      const icons = {
        low: 'mdi-arrow-down',
        medium: 'mdi-minus',
        high: 'mdi-arrow-up'
      }
      return icons[priority] || 'mdi-minus'
    },

    getStatusColor(status) {
      const colors = {
        todo: 'grey',
        'in-progress': 'orange',
        review: 'blue',
        done: 'green'
      }
      return colors[status] || 'grey'
    }
  }
}
</script>
