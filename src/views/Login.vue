<template>
  <div class="login-page">
    <h1>Task Management App - Login</h1>
    <p>This is a test to see if Vue.js is working.</p>

    <!-- Test basic HTML elements -->
    <div class="test-section">
      <h2>Basic HTML Test</h2>
      <p>If you can see this text, HTML is working.</p>
      <button onclick="alert('JavaScript is working!')">Test JavaScript</button>
    </div>

    <!-- Test Vue.js reactivity -->
    <div class="test-section">
      <h2>Vue.js Test</h2>
      <p>Counter: {{ counter }}</p>
      <button @click="incrementCounter">Increment Counter</button>
    </div>

    <!-- Test Vuetify components -->
    <div class="test-section">
      <h2>Vuetify Test</h2>
      <v-btn color="primary" @click="testVuetify">Test Vuetify Button</v-btn>
      <v-text-field label="Test Input" v-model="testInput"></v-text-field>
      <p>Input value: {{ testInput }}</p>

      <!-- Test inline CSS -->
      <h3>Inline CSS Test</h3>
      <button class="test-inline-css" @click="testInlineCSS">
        Test Inline CSS Button
      </button>
    </div>

    <!-- Test Material Design Icons -->
    <div class="test-section">
      <h2>Icons Test</h2>
      <v-icon>mdi-account</v-icon>
      <v-icon>mdi-email</v-icon>
      <v-icon>mdi-lock</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      counter: 0,
      testInput: ''
    }
  },
  methods: {
    incrementCounter() {
      this.counter++
    },
    testVuetify() {
      alert('Vuetify is working!')
    },
    testInlineCSS() {
      alert('Inline CSS is working!')
    }
  }
}
</script>

<style scoped>
.login-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.test-section {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

h1 {
  color: #1976d2;
  text-align: center;
}

h2 {
  color: #424242;
  margin-bottom: 10px;
}

button {
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
}

button:hover {
  background-color: #1565c0;
}
</style>
