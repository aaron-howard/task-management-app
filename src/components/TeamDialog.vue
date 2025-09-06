<template>
  <v-dialog
    :value="value"
    @input="$emit('input', $event)"
    max-width="500"
    persistent
  >
    <v-card>
      <v-card-title>
        {{ isEditing ? 'Edit Team' : 'Create Team' }}
      </v-card-title>
      
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="form.name"
            label="Team Name"
            :rules="nameRules"
            required
          ></v-text-field>
          
          <v-textarea
            v-model="form.description"
            label="Description"
            rows="3"
          ></v-textarea>
        </v-form>
      </v-card-text>
      
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          @click="closeDialog"
        >
          Cancel
        </v-btn>
        <v-btn
          color="primary"
          :disabled="!valid"
          :loading="loading"
          @click="saveTeam"
        >
          {{ isEditing ? 'Update' : 'Create' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'TeamDialog',
  props: {
    value: {
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
      valid: false,
      loading: false,
      form: {
        name: '',
        description: ''
      },
      nameRules: [
        v => !!v || 'Team name is required',
        v => v.length >= 3 || 'Team name must be at least 3 characters'
      ]
    }
  },
  
  computed: {
    isEditing() {
      return !!this.team
    }
  },
  
  watch: {
    team: {
      handler(newTeam) {
        if (newTeam) {
          this.form = {
            name: newTeam.name || '',
            description: newTeam.description || ''
          }
        } else {
          this.resetForm()
        }
      },
      immediate: true
    }
  },
  
  methods: {
    resetForm() {
      this.form = {
        name: '',
        description: ''
      }
    },
    
    async saveTeam() {
      if (!this.$refs.form.validate()) return
      
      this.loading = true
      try {
        this.$emit('save', this.form)
      } catch (error) {
        console.error('Error saving team:', error)
      } finally {
        this.loading = false
      }
    },
    
    closeDialog() {
      this.$emit('close')
      this.resetForm()
    }
  }
}
</script>
