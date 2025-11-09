<template>
  <v-dialog :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)" max-width="600">
    <v-card v-if="team">
      <v-card-title>
        <v-icon left>mdi-account-multiple</v-icon>
        Manage Members - {{ team.name }}
      </v-card-title>

      <v-card-text>
        <!-- Add Member Section -->
        <v-form @submit.prevent="addMember">
          <v-text-field
            v-model="newMemberEmail"
            label="Add member by email"
            prepend-icon="mdi-email"
            type="email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-btn
            color="primary"
            :disabled="!newMemberEmail || !isValidEmail"
            :loading="addingMember"
            @click="addMember"
          >
            Add Member
          </v-btn>
        </v-form>

        <v-divider class="my-4"></v-divider>

        <!-- Current Members -->
        <h3 class="text-h6 mb-3">Current Members</h3>
        <v-list>
          <v-list-item v-for="memberId in team.members" :key="memberId">
            <v-list-item-avatar>
              <v-icon>mdi-account</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ getMemberName(memberId) }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ getMemberEmail(memberId) }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                icon
                color="error"
                :disabled="memberId === currentUserId"
                @click="removeMember(memberId)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-alert
          v-if="error"
          type="error"
          class="mt-4"
          dismissible
          @input="clearError"
        >
          {{ error }}
        </v-alert>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('update:modelValue', false)">Close</v-btn>
        <v-btn color="primary" @click="$emit('save')">Save Changes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ManageMembersDialog',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    team: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      newMemberEmail: '',
      addingMember: false,
      error: null,
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
      ]
    }
  },

  computed: {
    ...mapGetters('auth', ['user']),

    currentUserId() {
      return this.user?.uid
    },

    isValidEmail() {
      return /.+@.+\..+/.test(this.newMemberEmail)
    }
  },

  methods: {
    ...mapActions('teams', ['addMemberToTeam', 'removeMemberFromTeam']),

    async addMember() {
      if (!this.isValidEmail) return

      this.addingMember = true
      this.error = null

      try {
        await this.addMemberToTeam({
          teamId: this.team.id,
          memberEmail: this.newMemberEmail
        })

        this.newMemberEmail = ''
        this.$toast.success('Member added successfully')
      } catch (error) {
        this.error = error.message
        this.$toast.error('Failed to add member: ' + error.message)
      } finally {
        this.addingMember = false
      }
    },

    async removeMember(memberId) {
      if (confirm('Are you sure you want to remove this member?')) {
        try {
          await this.removeMemberFromTeam({
            teamId: this.team.id,
            userId: memberId
          })

          this.$toast.success('Member removed successfully')
        } catch (error) {
          this.$toast.error('Failed to remove member: ' + error.message)
        }
      }
    },

    getMemberName(memberId) {
      // In a real app, you'd fetch member details from the users collection
      return `User ${memberId.substring(0, 8)}`
    },

    getMemberEmail(memberId) {
      // In a real app, you'd fetch member details from the users collection
      return `user${memberId.substring(0, 8)}@example.com`
    },

    clearError() {
      this.error = null
    }
  }
}
</script>
