<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="handleRegister">
              <v-text-field
                v-model="form.displayName"
                label="Full Name"
                name="displayName"
                prepend-icon="mdi-account"
                type="text"
                :rules="nameRules"
                required
              ></v-text-field>
              
              <v-text-field
                v-model="form.email"
                label="Email"
                name="email"
                prepend-icon="mdi-email"
                type="email"
                :rules="emailRules"
                required
              ></v-text-field>
              
              <v-text-field
                v-model="form.password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                :rules="passwordRules"
                required
              ></v-text-field>
              
              <v-text-field
                v-model="form.confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
                prepend-icon="mdi-lock-check"
                type="password"
                :rules="confirmPasswordRules"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              :loading="loading"
              :disabled="!isFormValid"
              @click="handleRegister"
            >
              Register
            </v-btn>
          </v-card-actions>
          
          <v-divider></v-divider>
          
          <v-card-actions>
            <v-btn
              color="primary"
              outlined
              :loading="loading"
              @click="handleGoogleLogin"
            >
              <v-icon left>mdi-google</v-icon>
              Register with Google
            </v-btn>
          </v-card-actions>
          
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="primary" to="/login">
              Already have an account? Login
            </v-btn>
          </v-card-actions>
        </v-card>
        
        <v-alert
          v-if="error"
          type="error"
          class="mt-4"
          dismissible
          @input="clearError"
        >
          {{ error }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      form: {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length >= 2 || 'Name must be at least 2 characters'
      ],
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be at least 6 characters'
      ],
      confirmPasswordRules: [
        v => !!v || 'Please confirm your password',
        v => v === this.form.password || 'Passwords do not match'
      ]
    }
  },
  computed: {
    ...mapGetters('auth', ['loading', 'error']),
    isFormValid() {
      return this.form.displayName && 
             this.form.email && 
             this.form.password && 
             this.form.confirmPassword &&
             /.+@.+\..+/.test(this.form.email) && 
             this.form.password.length >= 6 &&
             this.form.password === this.form.confirmPassword
    }
  },
  methods: {
    ...mapActions('auth', ['signUp', 'signInWithGoogle', 'clearError']),
    
    async handleRegister() {
      try {
        await this.signUp({
          displayName: this.form.displayName,
          email: this.form.email,
          password: this.form.password
        })
        this.$toast.success('Registration successful!')
      } catch (error) {
        this.$toast.error('Registration failed: ' + error.message)
      }
    },
    
    async handleGoogleLogin() {
      try {
        await this.signInWithGoogle()
        this.$toast.success('Registration successful!')
      } catch (error) {
        this.$toast.error('Google registration failed: ' + error.message)
      }
    },
    
    clearError() {
      this.clearError()
    }
  }
}
</script>
