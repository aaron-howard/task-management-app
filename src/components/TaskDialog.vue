<template>
  <v-dialog
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    max-width="600"
    persistent
  >
    <v-card>
      <v-card-title>
        {{ isEditing ? 'Edit Task' : 'Create Task' }}
      </v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="form.title"
            label="Title"
            :rules="titleRules"
            required
          ></v-text-field>

          <v-textarea
            v-model="form.description"
            label="Description"
            rows="3"
          ></v-textarea>

          <v-row>
            <v-col cols="6">
              <v-select
                v-model="form.priority"
                :items="priorityOptions"
                label="Priority"
                required
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-select
                v-model="form.status"
                :items="statusOptions"
                label="Status"
                required
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <v-select
                v-model="form.assigneeId"
                :items="assigneeOptions"
                label="Assignee"
                clearable
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-select
                v-model="form.teamId"
                :items="teamOptions"
                label="Team"
                required
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <v-menu
                v-model="dueDateMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formattedDueDate"
                    label="Due Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="form.dueDate"
                  @input="dueDateMenu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model.number="form.estimatedHours"
                label="Estimated Hours"
                type="number"
                min="0"
                step="0.5"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="closeDialog">Cancel</v-btn>
        <v-btn
          color="primary"
          :disabled="!valid"
          :loading="loading"
          @click="saveTask"
        >
          {{ isEditing ? 'Update' : 'Create' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { toDate } from '@/utils/dateUtils'

export default {
  name: 'TaskDialog',
  props: {
    modelValue: {
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
      valid: false,
      loading: false,
      dueDateMenu: false,
      form: {
        title: '',
        description: '',
        priority: 'medium',
        status: 'todo',
        assigneeId: null,
        teamId: null,
        dueDate: null,
        estimatedHours: null
      },
      titleRules: [
        v => !!v || 'Title is required',
        v => v.length >= 3 || 'Title must be at least 3 characters'
      ],
      priorityOptions: [
        { text: 'Low', value: 'low' },
        { text: 'Medium', value: 'medium' },
        { text: 'High', value: 'high' }
      ],
      statusOptions: [
        { text: 'To Do', value: 'todo' },
        { text: 'In Progress', value: 'in-progress' },
        { text: 'Review', value: 'review' },
        { text: 'Done', value: 'done' }
      ]
    }
  },

  computed: {
    ...mapGetters('teams', ['userTeams']),
    ...mapGetters('users', ['getUserDisplayName']),

    isEditing() {
      return !!this.task
    },

    assigneeOptions() {
      const options = [{ text: 'Unassigned', value: null }]

      // Get all team members
      const allMembers = new Set()
      this.userTeams.forEach(team => {
        team.members.forEach(memberId => {
          allMembers.add(memberId)
        })
      })

      // Add team members as options with proper names
      allMembers.forEach(memberId => {
        const displayName = this.getUserDisplayName(memberId)
        options.push({
          text: displayName,
          value: memberId
        })
      })

      return options
    },

    teamOptions() {
      return this.userTeams.map(team => ({
        text: team.name,
        value: team.id
      }))
    },

    formattedDueDate() {
      if (!this.form.dueDate) return ''
      const dateObj = toDate(this.form.dueDate)
      return dateObj ? dateObj.toLocaleDateString() : ''
    }
  },

  watch: {
    task: {
      handler(newTask) {
        if (newTask) {
          // Convert dueDate to proper format for v-date-picker
          let formattedDueDate = null
          if (newTask.dueDate) {
            const dateObj = toDate(newTask.dueDate)
            if (dateObj) {
              // Format as YYYY-MM-DD for v-date-picker
              formattedDueDate = dateObj.toISOString().split('T')[0]
            }
          }

          this.form = {
            title: newTask.title || '',
            description: newTask.description || '',
            priority: newTask.priority || 'medium',
            status: newTask.status || 'todo',
            assigneeId: newTask.assigneeId || null,
            teamId: newTask.teamId || null,
            dueDate: formattedDueDate,
            estimatedHours: newTask.estimatedHours || null
          }
        } else {
          this.resetForm()
        }
      },
      immediate: true
    }
  },

  async mounted() {
    await this.fetchUsers()
  },

  methods: {
    ...mapActions('users', ['fetchUsers']),

    async fetchUsers() {
      // Get all unique member IDs from teams
      const allMemberIds = new Set()
      this.userTeams.forEach(team => {
        team.members.forEach(memberId => {
          allMemberIds.add(memberId)
        })
      })

      if (allMemberIds.size > 0) {
        await this.$store.dispatch('users/fetchUsers', Array.from(allMemberIds))
      }
    },

    resetForm() {
      this.form = {
        title: '',
        description: '',
        priority: 'medium',
        status: 'todo',
        assigneeId: null,
        teamId: this.userTeams[0]?.id || null,
        dueDate: null,
        estimatedHours: null
      }
    },

    async saveTask() {
      if (!this.$refs.form.validate()) return

      this.loading = true
      try {
        const taskData = { ...this.form }

        // Convert dueDate to proper format
        if (taskData.dueDate) {
          taskData.dueDate = new Date(taskData.dueDate)
        }

        this.$emit('save', taskData)
      } catch (error) {
        // Error handling is done by parent component
      } finally {
        this.loading = false
      }
    },

    closeDialog() {
      this.$emit('update:modelValue', false)
      this.resetForm()
    }
  }
}
</script>
