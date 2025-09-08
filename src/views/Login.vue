<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height class="login-container">
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card class="login-card pa-5">
              <v-card-title class="text-h4 text-center mb-4">
                <i class="mdi mdi-account-circle mr-2"></i>
                Task Management App
              </v-card-title>

              <v-card-subtitle class="text-center mb-6">
                Sign in to your account
              </v-card-subtitle>

              <v-form @submit.prevent="handleLogin" ref="loginForm">
                <v-text-field
                  v-model="email"
                  label="Email"
                  type="email"
                  outlined
                  required
                  :rules="emailRules"
                  class="mb-3"
                >
                  <template v-slot:prepend-inner>
                    <i class="mdi mdi-email"></i>
                  </template>
                </v-text-field>

                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  outlined
                  required
                  :rules="passwordRules"
                  class="mb-3"
                >
                  <template v-slot:prepend-inner>
                    <i class="mdi mdi-lock"></i>
                  </template>
                </v-text-field>

                <v-checkbox
                  v-model="rememberMe"
                  label="Remember me"
                  class="mb-3"
                ></v-checkbox>

                <v-btn
                  type="submit"
                  color="primary"
                  block
                  large
                  :loading="loading"
                  class="mb-3"
                >
                  <i class="mdi mdi-login mr-2"></i>
                  Login
                </v-btn>

                <v-btn
                  @click="loginWithGoogle"
                  color="red"
                  outlined
                  block
                  large
                  class="mb-3"
                >
                  <i class="mdi mdi-google mr-2"></i>
                  Login with Google
                </v-btn>

                <v-btn
                  @click="demoLogin"
                  color="green"
                  outlined
                  block
                  large
                  class="mb-3"
                >
                  <i class="mdi mdi-account-check mr-2"></i>
                  Demo Login
                </v-btn>
              </v-form>

              <v-divider class="my-4"></v-divider>

              <div class="text-center">
                <p class="mb-2">Don't have an account?</p>
                <v-btn
                  @click="$router.push('/register')"
                  color="primary"
                  text
                  large
                >
                  <i class="mdi mdi-account-plus mr-2"></i>
                  Register
                </v-btn>
              </div>

              <v-divider class="my-4"></v-divider>

              <div class="text-center">
                <v-btn @click="forgotPassword" color="grey" text small>
                  <i class="mdi mdi-help-circle mr-2"></i>
                  Forgot Password?
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      loading: false,
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be at least 6 characters'
      ]
    }
  },
  methods: {
    async handleLogin() {
      if (this.$refs.loginForm.validate()) {
        this.loading = true
        try {
          // Use the auth store action for real login
          await this.$store.dispatch('auth/signIn', {
            email: this.email,
            password: this.password
          })

          // Store login state
          if (this.rememberMe) {
            localStorage.setItem('rememberMe', 'true')
            localStorage.setItem('userEmail', this.email)
          }

          this.$toast.success('Login successful!')
        } catch (error) {
          this.$toast.error('Login failed. Please try again.')
        } finally {
          this.loading = false
        }
      }
    },

    async loginWithGoogle() {
      this.loading = true
      try {
        // Use the auth store action for Google login
        await this.$store.dispatch('auth/signInWithGoogle')
        this.$toast.success('Google login successful!')
      } catch (error) {
        this.$toast.error('Google login failed. Please try again.')
      } finally {
        this.loading = false
      }
    },

    async demoLogin() {
      this.loading = true
      try {
        // Create a demo user object
        const demoUser = {
          uid: 'demo-user-123',
          email: 'demo@taskmanagement.com',
          displayName: 'Demo User',
          photoURL: null,
          isDemo: true
        }

        // Set the user in the auth store
        this.$store.commit('auth/SET_USER', demoUser)

        // Simulate login delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        this.$toast.success('Demo login successful!')
        this.$router.push('/')
      } catch (error) {
        this.$toast.error('Demo login failed. Please try again.')
      } finally {
        this.loading = false
      }
    },

    forgotPassword() {
      this.$toast.info('Forgot password functionality coming soon!')
    }
  },

  mounted() {
    // Check if user wants to be remembered
    if (localStorage.getItem('rememberMe') === 'true') {
      this.rememberMe = true
      this.email = localStorage.getItem('userEmail') || ''
    }
  }
}
</script>

<style scoped>
.login-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.login-card {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Dark mode styles */
.theme--dark .login-container {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
}

.theme--dark .login-card {
  background-color: rgba(30, 30, 30, 0.95);
  color: #ffffff;
}

.theme--dark .login-card .v-card__title,
.theme--dark .login-card .v-card__subtitle,
.theme--dark .login-card .v-card__text {
  color: #ffffff !important;
}

.theme--dark .login-card .v-text-field label,
.theme--dark .login-card .v-text-field input,
.theme--dark .login-card .v-text-field .v-input__control,
.theme--dark .login-card .v-checkbox label,
.theme--dark .login-card .v-checkbox .v-label {
  color: #ffffff !important;
}

.theme--dark
  .login-card
  .v-text-field--outlined
  .v-input__control
  .v-input__slot {
  border-color: rgba(255, 255, 255, 0.3) !important;
}

.theme--dark
  .login-card
  .v-text-field--outlined
  .v-input__control
  .v-input__slot:hover {
  border-color: rgba(255, 255, 255, 0.5) !important;
}

.theme--dark
  .login-card
  .v-text-field--outlined.v-input--is-focused
  .v-input__control
  .v-input__slot {
  border-color: #2196f3 !important;
}

/* Ensure icons display properly */
.mdi {
  font-family: 'Material Design Icons' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: 'liga';
}

/* Icon spacing */
.mr-2 {
  margin-right: 8px;
}
</style>
