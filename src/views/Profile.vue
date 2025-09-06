<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-4">Profile</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Profile Information</v-card-title>
          <v-card-text>
            <div class="text-center mb-4">
              <v-avatar size="120" class="mb-3">
                <v-img v-if="user.photoURL" :src="user.photoURL"></v-img>
                <v-icon size="60" v-else>mdi-account</v-icon>
              </v-avatar>
              <h2 class="text-h5">{{ user.displayName || 'No Name' }}</h2>
              <p class="text-body-2 text--secondary">{{ user.email }}</p>
            </div>
            
            <v-divider class="mb-4"></v-divider>
            
            <div class="mb-3">
              <strong>User ID:</strong>
              <div class="text-caption">{{ user.uid }}</div>
            </div>
            
            <div class="mb-3">
              <strong>Email Verified:</strong>
              <v-chip
                :color="user.emailVerified ? 'success' : 'error'"
                small
                text-color="white"
              >
                {{ user.emailVerified ? 'Yes' : 'No' }}
              </v-chip>
            </div>
            
            <div class="mb-3">
              <strong>Last Login:</strong>
              <div class="text-caption">{{ formatDate(user.metadata?.lastSignInTime) }}</div>
            </div>
            
            <div class="mb-3">
              <strong>Account Created:</strong>
              <div class="text-caption">{{ formatDate(user.metadata?.creationTime) }}</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>Account Settings</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                v-model="form.displayName"
                label="Display Name"
                :rules="nameRules"
                required
              ></v-text-field>
              
              <v-text-field
                v-model="form.email"
                label="Email"
                type="email"
                :rules="emailRules"
                required
                disabled
              ></v-text-field>
              
              <v-text-field
                v-model="form.currentPassword"
                label="Current Password"
                type="password"
                prepend-icon="mdi-lock"
              ></v-text-field>
              
              <v-text-field
                v-model="form.newPassword"
                label="New Password"
                type="password"
                prepend-icon="mdi-lock-plus"
                :rules="passwordRules"
              ></v-text-field>
              
              <v-text-field
                v-model="form.confirmPassword"
                label="Confirm New Password"
                type="password"
                prepend-icon="mdi-lock-check"
                :rules="confirmPasswordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              :disabled="!valid"
              :loading="loading"
              @click="updateProfile"
            >
              Update Profile
            </v-btn>
          </v-card-actions>
        </v-card>
        
        <v-card class="mt-4">
          <v-card-title>Danger Zone</v-card-title>
          <v-card-text>
            <p class="text-body-2 mb-4">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <v-btn
              color="error"
              outlined
              @click="showDeleteDialog = true"
            >
              Delete Account
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Delete Account Dialog -->
    <v-dialog v-model="showDeleteDialog" max-width="400">
      <v-card>
        <v-card-title>Delete Account</v-card-title>
        <v-card-text>
          <p>Are you sure you want to delete your account? This action cannot be undone.</p>
          <v-text-field
            v-model="deleteConfirmation"
            label="Type 'DELETE' to confirm"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="showDeleteDialog = false">Cancel</v-btn>
          <v-btn
            color="error"
            :disabled="deleteConfirmation !== 'DELETE'"
            @click="deleteAccount"
          >
            Delete Account
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { auth } from '@/firebase/config'

export default {
  name: 'Profile',
  data() {
    return {
      valid: false,
      loading: false,
      showDeleteDialog: false,
      deleteConfirmation: '',
      form: {
        displayName: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      nameRules: [
        v => !!v || 'Display name is required',
        v => v.length >= 2 || 'Display name must be at least 2 characters'
      ],
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
      ],
      passwordRules: [
        v => !v || v.length >= 6 || 'Password must be at least 6 characters'
      ],
      confirmPasswordRules: [
        v => !v || v === this.form.newPassword || 'Passwords do not match'
      ]
    }
  },
  
  computed: {
    ...mapGetters('auth', ['user'])
  },
  
  watch: {
    user: {
      handler(newUser) {
        if (newUser) {
          this.form.displayName = newUser.displayName || ''
          this.form.email = newUser.email || ''
        }
      },
      immediate: true
    }
  },
  
  methods: {
    ...mapActions('auth', ['logout']),
    
    async updateProfile() {
      if (!this.$refs.form.validate()) return
      
      this.loading = true
      try {
        const user = auth.currentUser
        
        // Update display name
        if (this.form.displayName !== user.displayName) {
          await user.updateProfile({
            displayName: this.form.displayName
          })
        }
        
        // Update password if provided
        if (this.form.newPassword) {
          if (!this.form.currentPassword) {
            throw new Error('Current password is required to change password')
          }
          
          // Re-authenticate user
          const credential = auth.EmailAuthProvider.credential(
            user.email,
            this.form.currentPassword
          )
          await user.reauthenticateWithCredential(credential)
          
          // Update password
          await user.updatePassword(this.form.newPassword)
        }
        
        this.$toast.success('Profile updated successfully')
        this.resetForm()
      } catch (error) {
        this.$toast.error('Failed to update profile: ' + error.message)
        console.error('Error updating profile:', error)
      } finally {
        this.loading = false
      }
    },
    
    async deleteAccount() {
      if (this.deleteConfirmation !== 'DELETE') return
      
      try {
        const user = auth.currentUser
        await user.delete()
        
        this.$toast.success('Account deleted successfully')
        await this.logout()
      } catch (error) {
        this.$toast.error('Failed to delete account: ' + error.message)
        console.error('Error deleting account:', error)
      }
    },
    
    resetForm() {
      this.form.currentPassword = ''
      this.form.newPassword = ''
      this.form.confirmPassword = ''
    },
    
    formatDate(dateString) {
      if (!dateString) return 'Unknown'
      return new Date(dateString).toLocaleString()
    }
  }
}
</script>
