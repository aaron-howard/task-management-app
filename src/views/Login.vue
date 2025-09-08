<template>
  <v-container fluid fill-height class="login-container">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12" rounded="lg">
          <!-- Header -->
          <v-card-title class="text-center pa-8">
            <div class="w-100">
              <v-avatar size="80" class="mb-4" color="primary">
                <v-icon size="40" color="white">mdi-account-group</v-icon>
              </v-avatar>
              <h1 class="text-h4 font-weight-bold mb-2">Welcome Back</h1>
              <p class="text-body-1 text--secondary">
                Sign in to your Task Management account
              </p>
            </div>
          </v-card-title>

          <!-- Form -->
          <v-card-text class="pa-8">
            <v-form ref="form" v-model="valid" @submit.prevent="handleLogin">
              <v-text-field
                v-model="form.email"
                label="Email Address"
                prepend-inner-icon="mdi-email-outline"
                type="email"
                :rules="emailRules"
                outlined
                rounded
                class="mb-4"
                required
              ></v-text-field>

              <v-text-field
                v-model="form.password"
                label="Password"
                prepend-inner-icon="mdi-lock-outline"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                :rules="passwordRules"
                outlined
                rounded
                class="mb-4"
                required
                @click:append="showPassword = !showPassword"
                @keyup.enter="handleLogin"
              ></v-text-field>

              <v-btn
                type="submit"
                color="primary"
                :loading="loading"
                :disabled="!valid || loading"
                block
                large
                rounded
                class="mb-4"
              >
                <v-icon left>mdi-login</v-icon>
                Sign In
              </v-btn>
            </v-form>

            <!-- Divider -->
            <div class="text-center my-6">
              <v-divider></v-divider>
              <span class="text-body-2 text--secondary px-4 bg-surface">
                or continue with
              </span>
            </div>

            <!-- Social Login -->
            <v-btn
              color="white"
              :loading="googleLoading"
              :disabled="loading"
              block
              large
              rounded
              elevation="1"
              @click="handleGoogleLogin"
            >
              <v-icon left color="red">mdi-google</v-icon>
              Continue with Google
            </v-btn>

            <v-btn
              color="success"
              :loading="demoLoading"
              :disabled="loading || googleLoading"
              block
              large
              rounded
              elevation="1"
              class="mt-3"
              @click="handleDemoLogin"
            >
              <v-icon left>mdi-account-circle</v-icon>
              Try Demo Account
            </v-btn>
          </v-card-text>

          <!-- Footer -->
          <v-card-actions class="pa-8 pt-0">
            <div class="text-center w-100">
              <p class="text-body-2 text--secondary mb-2">
                Don't have an account?
              </p>
              <v-btn color="primary" text large to="/register">
                Create Account
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      valid: false,
      showPassword: false,
      googleLoading: false,
      demoLoading: false,
      form: {
        email: '',
        password: ''
      },
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
  computed: {
    ...mapGetters('auth', ['loading', 'error'])
  },
  mounted() {
    if (this.$store.getters['auth/isAuthenticated']) {
      this.$router.push('/')
    }
  },
  methods: {
    ...mapActions('auth', ['signIn', 'signInWithGoogle', 'clearError']),

    async handleLogin() {
      if (!this.$refs.form.validate()) return

      try {
        await this.signIn(this.form)
        this.$toast.success('Welcome back!')
        this.$router.push('/')
      } catch (error) {
        this.$toast.error('Login failed: ' + error.message)
      }
    },

    async handleGoogleLogin() {
      this.googleLoading = true
      try {
        await this.signInWithGoogle()
        this.$toast.success('Welcome!')
        this.$router.push('/')
      } catch (error) {
        this.$toast.error('Google login failed: ' + error.message)
      } finally {
        this.googleLoading = false
      }
    },

    async handleDemoLogin() {
      this.demoLoading = true
      try {
        const demoUser = {
          uid: 'demo-user-' + Date.now(),
          email: 'demo@taskmanagement.app',
          displayName: 'Demo User',
          photoURL: 'https://i.pravatar.cc/150?img=3',
          isDemo: true
        }

        this.$store.commit('auth/SET_USER', demoUser)
        this.$store.commit('auth/SET_LOADING', false)
        localStorage.setItem('demoSession', JSON.stringify(demoUser))

        this.$toast.success('Demo login successful!')
        this.$router.push('/')
      } catch (error) {
        this.$toast.error('Demo login failed: ' + error.message)
      } finally {
        this.demoLoading = false
      }
    },

    clearError() {
      this.$store.dispatch('auth/clearError')
    }
  }
}
</script>

<style scoped>
.login-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .login-container {
    padding: 16px;
  }
}
</style>
