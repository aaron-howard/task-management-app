<template>
  <v-container fluid fill-height class="register-container">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" sm="10" md="8" lg="6" xl="4">
        <!-- Main Register Card -->
        <v-card class="register-card elevation-12" rounded="lg">
          <!-- Header Section -->
          <div class="register-header">
            <div class="text-center pa-8">
              <v-avatar size="80" class="mb-4" color="primary">
                <v-icon size="40" color="white">mdi-account-plus</v-icon>
              </v-avatar>
              <h1 class="text-h4 font-weight-bold mb-2">Create Account</h1>
              <p class="text-body-1 text--secondary">
                Join Task Management and start collaborating
              </p>
            </div>
          </div>
          <!-- Register Form -->
          <v-card-text class="pa-8">
            <v-form ref="form" v-model="valid" @submit.prevent="handleRegister">
              <!-- Full Name Field -->
              <v-text-field
                v-model="form.displayName"
                label="Full Name"
                name="displayName"
                prepend-inner-icon="mdi-account-outline"
                type="text"
                :rules="nameRules"
                outlined
                rounded
                class="mb-4"
                required
                autocomplete="name"
              ></v-text-field>

              <!-- Email Field -->
              <v-text-field
                v-model="form.email"
                label="Email Address"
                name="email"
                prepend-inner-icon="mdi-email-outline"
                type="email"
                :rules="emailRules"
                outlined
                rounded
                class="mb-4"
                required
                autocomplete="email"
              ></v-text-field>

              <!-- Password Field -->
              <v-text-field
                v-model="form.password"
                label="Password"
                name="password"
                prepend-inner-icon="mdi-lock-outline"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                :rules="passwordRules"
                outlined
                rounded
                class="mb-4"
                required
                autocomplete="new-password"
                @click:append="showPassword = !showPassword"
              ></v-text-field>

              <!-- Confirm Password Field -->
              <v-text-field
                v-model="form.confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
                prepend-inner-icon="mdi-lock-check-outline"
                :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showConfirmPassword ? 'text' : 'password'"
                :rules="confirmPasswordRules"
                outlined
                rounded
                class="mb-6"
                required
                autocomplete="new-password"
                @click:append="showConfirmPassword = !showConfirmPassword"
                @keyup.enter="handleRegister"
              ></v-text-field>

              <!-- Terms and Conditions -->
              <v-checkbox
                v-model="form.acceptTerms"
                :rules="termsRules"
                color="primary"
                class="mb-4"
              >
                <template v-slot:label>
                  <span class="text-body-2">
                    I agree to the
                    <a href="#" class="text-primary">Terms of Service</a>
                    and
                    <a href="#" class="text-primary">Privacy Policy</a>
                  </span>
                </template>
              </v-checkbox>

              <!-- Register Button -->
              <v-btn
                type="submit"
                color="primary"
                :loading="loading"
                :disabled="!valid || loading"
                block
                large
                rounded
                class="mb-4"
                elevation="2"
              >
                <v-icon left>mdi-account-plus</v-icon>
                Create Account
              </v-btn>
            </v-form>

            <!-- Divider -->
            <div class="text-center my-6">
              <v-divider></v-divider>
              <span class="text-body-2 text--secondary px-4 bg-surface">
                or continue with
              </span>
            </div>

            <!-- Social Register Button -->
            <v-btn
              color="white"
              :loading="googleLoading"
              :disabled="loading"
              block
              large
              rounded
              elevation="1"
              @click="handleGoogleRegister"
            >
              <v-icon left color="red">mdi-google</v-icon>
              Continue with Google
            </v-btn>
          </v-card-text>

          <!-- Footer -->
          <v-card-actions class="pa-8 pt-0">
            <div class="text-center w-100">
              <p class="text-body-2 text--secondary mb-2">
                Already have an account?
              </p>
              <v-btn
                color="primary"
                text
                large
                to="/login"
                class="font-weight-medium"
              >
                Sign In
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>

        <!-- Error Alert -->
        <v-alert
          v-if="error"
          type="error"
          class="mt-4"
          dismissible
          @input="clearError"
          rounded="lg"
        >
          <v-icon left>mdi-alert-circle</v-icon>
          {{ error }}
        </v-alert>

        <!-- Success Alert -->
        <v-alert
          v-if="successMessage"
          type="success"
          class="mt-4"
          dismissible
          @input="successMessage = ''"
          rounded="lg"
        >
          <v-icon left>mdi-check-circle</v-icon>
          {{ successMessage }}
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
      valid: false,
      showPassword: false,
      showConfirmPassword: false,
      googleLoading: false,
      successMessage: '',
      form: {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
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
        v => v.length >= 6 || 'Password must be at least 6 characters',
        v =>
          /(?=.*[a-z])/.test(v) ||
          'Password must contain at least one lowercase letter',
        v =>
          /(?=.*[A-Z])/.test(v) ||
          'Password must contain at least one uppercase letter',
        v => /(?=.*\d)/.test(v) || 'Password must contain at least one number'
      ],
      confirmPasswordRules: [
        v => !!v || 'Please confirm your password',
        v => v === this.form.password || 'Passwords do not match'
      ],
      termsRules: [v => !!v || 'You must accept the terms and conditions']
    }
  },
  computed: {
    ...mapGetters('auth', ['loading', 'error'])
  },
  mounted() {
    // Check if user is already logged in
    if (this.$store.getters['auth/isAuthenticated']) {
      this.$router.push('/')
    }
  },
  methods: {
    ...mapActions('auth', ['signUp', 'signInWithGoogle', 'clearError']),

    async handleRegister() {
      if (!this.$refs.form.validate()) return

      try {
        await this.signUp({
          displayName: this.form.displayName,
          email: this.form.email,
          password: this.form.password
        })
        this.$toast.success('Account created successfully! Welcome!')
        this.$router.push('/')
      } catch (error) {
        this.handleRegisterError(error)
      }
    },

    async handleGoogleRegister() {
      this.googleLoading = true
      try {
        await this.signInWithGoogle()
        this.$toast.success('Account created successfully! Welcome!')
        this.$router.push('/')
      } catch (error) {
        this.$toast.error('Google registration failed: ' + error.message)
      } finally {
        this.googleLoading = false
      }
    },

    handleRegisterError(error) {
      const errorCode = error.code
      const errorMessage = error.message

      switch (errorCode) {
        case 'auth/email-already-in-use':
          this.$toast.error('An account with this email already exists')
          break
        case 'auth/invalid-email':
          this.$toast.error('Invalid email address')
          break
        case 'auth/weak-password':
          this.$toast.error(
            'Password is too weak. Please choose a stronger password.'
          )
          break
        case 'auth/network-request-failed':
          this.$toast.error('Network error. Please check your connection.')
          break
        default:
          this.$toast.error('Registration failed: ' + errorMessage)
      }
    },

    clearError() {
      this.$store.dispatch('auth/clearError')
    }
  }
}
</script>

<style scoped>
.register-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.register-card {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95) !important;
}

.theme--dark .register-card {
  background: rgba(30, 30, 30, 0.95) !important;
}

.register-header {
  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  color: white;
  border-radius: 8px 8px 0 0;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .register-container {
    padding: 16px;
  }

  .register-card {
    margin: 0;
  }
}

/* Animation for form elements */
.v-text-field {
  transition: all 0.3s ease;
}

.v-btn {
  transition: all 0.3s ease;
}

.v-btn:hover {
  transform: translateY(-1px);
}

/* Focus styles */
.v-text-field--outlined:not(.v-input--is-focused)
  .v-input__control
  .v-input__slot {
  border-color: rgba(0, 0, 0, 0.12);
}

.v-text-field--outlined.v-input--is-focused .v-input__control .v-input__slot {
  border-color: #1976d2;
  border-width: 2px;
}
</style>
