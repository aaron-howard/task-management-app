<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="handleLogin">
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
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              :loading="loading"
              :disabled="!isFormValid"
              @click="handleLogin"
            >
              Login
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
              Login with Google
            </v-btn>
          </v-card-actions>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="primary" to="/register">
              Don't have an account? Register
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
  name: 'Login',
  data() {
    return {
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
    ...mapGetters('auth', ['loading', 'error']),
    isFormValid() {
      return this.form.email && this.form.password &&
             /.+@.+\..+/.test(this.form.email) &&
             this.form.password.length >= 6
    }
  },
  methods: {
    ...mapActions('auth', ['signIn', 'signInWithGoogle', 'clearError']),

    async handleLogin() {
      try {
        await this.signIn(this.form)
        this.$toast.success('Login successful!')
      } catch (error) {
        this.$toast.error('Login failed: ' + error.message)
      }
    },

    async handleGoogleLogin() {
      try {
        await this.signInWithGoogle()
        this.$toast.success('Login successful!')
      } catch (error) {
        this.$toast.error('Google login failed: ' + error.message)
      }
    },

    clearError() {
      this.clearError()
    }
  }
}
</script>
