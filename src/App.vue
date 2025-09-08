<template>
  <v-app>
    <v-app-bar app color="primary" dark elevation="2">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Task Management</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Theme Toggle Button -->
      <v-btn
        icon
        @click="toggleTheme"
        :title="
          theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'
        "
      >
        <v-icon>
          {{ theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
        </v-icon>
      </v-btn>

      <v-btn v-if="!isAuthenticated" text @click="$router.push('/login')">
        Login
      </v-btn>

      <v-menu v-else offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-avatar size="32">
              <v-img :src="user.photoURL" v-if="user.photoURL"></v-img>
              <v-icon v-else>mdi-account</v-icon>
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                {{ user.displayName || user.email }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="toggleTheme">
            <v-list-item-icon>
              <v-icon>
                {{
                  theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'
                }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ theme === 'light' ? 'Dark Mode' : 'Light Mode' }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Logout button in drawer -->
        <v-list-item v-if="isAuthenticated" @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} Task Management App</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated', 'user']),
    ...mapGetters('ui', ['theme']),
    menuItems() {
      if (!this.isAuthenticated) {
        return [{ title: 'Login', icon: 'mdi-login', to: '/login' }]
      }
      return [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
        { title: 'My Tasks', icon: 'mdi-format-list-checks', to: '/tasks' },
        { title: 'Teams', icon: 'mdi-account-group', to: '/teams' },
        { title: 'Profile', icon: 'mdi-account', to: '/profile' }
      ]
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    ...mapActions('ui', ['toggleTheme'])
  },
  mounted() {
    // Initialize theme from localStorage
    this.$vuetify.theme.dark = this.theme === 'dark'
  },
  watch: {
    theme(newTheme) {
      this.$vuetify.theme.dark = newTheme === 'dark'
    }
  }
}
</script>
