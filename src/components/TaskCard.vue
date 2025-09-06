<template>
  <v-card
    class="task-card mb-2"
    :class="`priority-${task.priority}`"
    @click="$emit('view', task)"
  >
    <v-card-text class="pa-3">
      <div class="d-flex justify-space-between align-start mb-2">
        <h4 class="text-subtitle-1 font-weight-medium">{{ task.title }}</h4>
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              small
              v-bind="attrs"
              v-on="on"
              @click.stop
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="$emit('view', task)">
              <v-list-item-icon>
                <v-icon>mdi-eye</v-icon>
              </v-list-item-icon>
              <v-list-item-title>View</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$emit('edit', task)">
              <v-list-item-icon>
                <v-icon>mdi-pencil</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Edit</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$emit('delete', task)">
              <v-list-item-icon>
                <v-icon>mdi-delete</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Delete</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      
      <p class="text-body-2 text--secondary mb-2">{{ task.description }}</p>
      
      <div class="d-flex justify-space-between align-center">
        <v-chip
          :color="getPriorityColor(task.priority)"
          small
          text-color="white"
        >
          <v-icon left small>{{ getPriorityIcon(task.priority) }}</v-icon>
          {{ task.priority }}
        </v-chip>
        
        <div class="d-flex align-center">
          <v-avatar size="24" class="mr-1">
            <v-img v-if="task.assignee?.photoURL" :src="task.assignee.photoURL"></v-img>
            <v-icon v-else small>mdi-account</v-icon>
          </v-avatar>
          <span class="text-caption">{{ task.assignee?.displayName || 'Unassigned' }}</span>
        </div>
      </div>
      
      <div v-if="task.dueDate" class="mt-2">
        <v-chip
          :color="isOverdue ? 'error' : 'grey'"
          small
          text-color="white"
        >
          <v-icon left small>mdi-calendar</v-icon>
          {{ formatDate(task.dueDate) }}
        </v-chip>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TaskCard',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  
  computed: {
    isOverdue() {
      if (!this.task.dueDate) return false
      return new Date(this.task.dueDate) < new Date()
    }
  },
  
  methods: {
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
    
    formatDate(date) {
      return new Date(date).toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.task-card {
  cursor: pointer;
  transition: all 0.2s ease;
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.12);
}

.priority-high {
  border-left: 4px solid #f44336;
}

.priority-medium {
  border-left: 4px solid #ff9800;
}

.priority-low {
  border-left: 4px solid #4caf50;
}
</style>
