<template>
  <v-dialog :value="value" @input="$emit('input', $event)" max-width="800">
    <v-card v-if="task">
      <v-card-title>
        <div class="d-flex align-center">
          <v-icon left>{{ getPriorityIcon(task.priority) }}</v-icon>
          {{ task.title }}
          <v-spacer></v-spacer>
          <v-chip :color="getStatusColor(task.status)" text-color="white">
            {{ formatStatus(task.status) }}
          </v-chip>
        </div>
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col cols="12" md="8">
            <h3 class="text-h6 mb-2">Description</h3>
            <p class="text-body-1 mb-4">
              {{ task.description || 'No description provided' }}
            </p>

            <!-- Comments Section -->
            <h3 class="text-h6 mb-2">Comments</h3>
            <v-list>
              <v-list-item
                v-for="comment in task.comments || []"
                :key="comment.id"
              >
                <v-list-item-avatar>
                  <v-img
                    v-if="comment.author?.photoURL"
                    :src="comment.author.photoURL"
                  ></v-img>
                  <v-icon v-else>mdi-account</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ comment.author?.displayName || 'Unknown User' }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ comment.text }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="text-caption">
                    {{ formatDateTime(comment.createdAt) }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <!-- Add Comment -->
            <v-textarea
              v-model="newComment"
              label="Add a comment"
              rows="2"
              class="mt-4"
            ></v-textarea>
            <v-btn
              color="primary"
              :disabled="!newComment.trim()"
              @click="addComment"
            >
              Add Comment
            </v-btn>
          </v-col>

          <v-col cols="12" md="4">
            <v-card outlined>
              <v-card-title>Task Details</v-card-title>
              <v-card-text>
                <div class="mb-3">
                  <strong>Priority:</strong>
                  <v-chip
                    :color="getPriorityColor(task.priority)"
                    small
                    class="ml-2"
                    text-color="white"
                  >
                    {{ task.priority }}
                  </v-chip>
                </div>

                <div class="mb-3">
                  <strong>Assignee:</strong>
                  <div class="d-flex align-center mt-1">
                    <v-avatar size="24" class="mr-2">
                      <v-img
                        v-if="assigneeUser?.photoURL"
                        :src="assigneeUser.photoURL"
                      ></v-img>
                      <v-icon v-else small>mdi-account</v-icon>
                    </v-avatar>
                    {{ assigneeDisplayName }}
                  </div>
                </div>

                <div class="mb-3" v-if="task.dueDate">
                  <strong>Due Date:</strong>
                  <div class="mt-1">
                    <v-chip
                      :color="isOverdue ? 'error' : 'grey'"
                      small
                      text-color="white"
                    >
                      <v-icon left small>mdi-calendar</v-icon>
                      {{ formatDate(task.dueDate) }}
                    </v-chip>
                  </div>
                </div>

                <div class="mb-3" v-if="task.estimatedHours">
                  <strong>Estimated Hours:</strong>
                  <div class="mt-1">{{ task.estimatedHours }} hours</div>
                </div>

                <div class="mb-3">
                  <strong>Created:</strong>
                  <div class="mt-1">{{ formatDateTime(task.createdAt) }}</div>
                </div>

                <div class="mb-3">
                  <strong>Last Updated:</strong>
                  <div class="mt-1">{{ formatDateTime(task.updatedAt) }}</div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('input', false)">Close</v-btn>
        <v-btn color="primary" @click="$emit('edit', task)">
          <v-icon left>mdi-pencil</v-icon>
          Edit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { formatDate, formatDateTime, isOverdue } from '@/utils/dateUtils'

export default {
  name: 'TaskDetailsDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    task: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      newComment: ''
    }
  },

  computed: {
    ...mapGetters('users', ['getUserById', 'getUserDisplayName']),

    isOverdue() {
      return isOverdue(this.task?.dueDate)
    },

    assigneeUser() {
      if (!this.task?.assigneeId) return null
      return this.getUserById(this.task.assigneeId)
    },

    assigneeDisplayName() {
      if (!this.task?.assigneeId) return 'Unassigned'
      return this.getUserDisplayName(this.task.assigneeId)
    }
  },

  methods: {
    ...mapActions('tasks', ['updateTask']),

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
    },

    formatStatus(status) {
      return status
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    },

    formatDate(date) {
      return formatDate(date)
    },

    formatDateTime(date) {
      return formatDateTime(date)
    },

    async addComment() {
      if (!this.newComment.trim()) return

      try {
        const comment = {
          id: Date.now().toString(),
          text: this.newComment.trim(),
          author: {
            uid: this.$store.getters['auth/user'].uid,
            displayName: this.$store.getters['auth/user'].displayName,
            photoURL: this.$store.getters['auth/user'].photoURL
          },
          createdAt: new Date()
        }

        const updatedComments = [...(this.task.comments || []), comment]

        await this.updateTask({
          taskId: this.task.id,
          updates: { comments: updatedComments }
        })

        this.newComment = ''
        this.$toast.success('Comment added successfully')
      } catch (error) {
        this.$toast.error('Failed to add comment')
      }
    }
  }
}
</script>
