<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <div class="d-flex justify-space-between align-center mb-4">
          <h1 class="text-h4">Teams</h1>
          <v-btn color="primary" @click="showCreateDialog = true">
            <v-icon left>mdi-plus</v-icon>
            Create Team
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="team in userTeams" :key="team.id" cols="12" md="6" lg="4">
        <v-card class="team-card" height="200">
          <v-card-title>
            <div class="d-flex align-center">
              <v-icon left>mdi-account-group</v-icon>
              {{ team.name }}
            </div>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon small v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="editTeam(team)">
                  <v-list-item-icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Edit</v-list-item-title>
                </v-list-item>
                <v-list-item @click="manageMembers(team)">
                  <v-list-item-icon>
                    <v-icon>mdi-account-multiple</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Manage Members</v-list-item-title>
                </v-list-item>
                <v-list-item @click="deleteTeam(team)">
                  <v-list-item-icon>
                    <v-icon>mdi-delete</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Delete</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>

          <v-card-text>
            <p class="text-body-2 mb-3">
              {{ team.description || 'No description provided' }}
            </p>

            <div class="d-flex align-center mb-2">
              <v-icon small class="mr-2">mdi-account-multiple</v-icon>
              <span class="text-caption">
                {{ team.members.length }} members
              </span>
            </div>

            <div class="d-flex align-center">
              <v-icon small class="mr-2">mdi-calendar</v-icon>
              <span class="text-caption">
                Created {{ formatDate(team.createdAt) }}
              </span>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn text color="primary" @click="viewTeamTasks(team)">
              View Tasks
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="editTeam(team)">Manage</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Create/Edit Team Dialog -->
    <TeamDialog
      v-model="showCreateDialog"
      :team="editingTeam"
      @save="handleTeamSave"
      @close="closeDialog"
    />

    <!-- Manage Members Dialog -->
    <ManageMembersDialog
      v-model="showMembersDialog"
      :team="selectedTeam"
      @save="handleMembersSave"
      @close="closeMembersDialog"
    />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TeamDialog from '@/components/TeamDialog.vue'
import ManageMembersDialog from '@/components/ManageMembersDialog.vue'

export default {
  name: 'Teams',
  components: {
    TeamDialog,
    ManageMembersDialog
  },

  data() {
    return {
      showCreateDialog: false,
      showMembersDialog: false,
      editingTeam: null,
      selectedTeam: null
    }
  },

  computed: {
    ...mapGetters('teams', ['userTeams']),
    ...mapGetters('auth', ['user'])
  },

  async mounted() {
    await this.initializeData()
  },

  methods: {
    ...mapActions('teams', ['fetchTeams', 'subscribeToTeams']),

    async initializeData() {
      try {
        await this.fetchTeams()
        this.subscribeToTeams()
      } catch (error) {
        this.$toast.error('Failed to load teams')
      }
    },

    editTeam(team) {
      this.editingTeam = team
      this.showCreateDialog = true
    },

    manageMembers(team) {
      this.selectedTeam = team
      this.showMembersDialog = true
    },

    async deleteTeam(team) {
      if (confirm(`Are you sure you want to delete the team "${team.name}"?`)) {
        try {
          await this.$store.dispatch('teams/deleteTeam', team.id)
          this.$toast.success('Team deleted successfully')
        } catch (error) {
          this.$toast.error('Failed to delete team')
        }
      }
    },

    viewTeamTasks(team) {
      // Navigate to tasks view with team filter
      this.$router.push({
        path: '/tasks',
        query: { team: team.id }
      })
    },

    async handleTeamSave(teamData) {
      try {
        if (this.editingTeam) {
          await this.$store.dispatch('teams/updateTeam', {
            teamId: this.editingTeam.id,
            updates: teamData
          })
          this.$toast.success('Team updated successfully')
        } else {
          await this.$store.dispatch('teams/createTeam', teamData)
          this.$toast.success('Team created successfully')
        }
        this.closeDialog()
      } catch (error) {
        this.$toast.error('Failed to save team')
      }
    },

    async handleMembersSave() {
      try {
        // Refresh teams to get updated member lists
        await this.fetchTeams()
        this.$toast.success('Members updated successfully')
        this.closeMembersDialog()
      } catch (error) {
        this.$toast.error('Failed to update members')
      }
    },

    closeDialog() {
      this.showCreateDialog = false
      this.editingTeam = null
    },

    closeMembersDialog() {
      this.showMembersDialog = false
      this.selectedTeam = null
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.team-card {
  transition: all 0.2s ease;
}

.team-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
}
</style>
