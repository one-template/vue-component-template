<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ComponentTemplate',

  props: {
    msg: String,
    default: () => {
      return 'vue-component-template'
    }
  },

  created () {
    
  },

  mounted () {
    
  },

  watch: {
    data(newValue, oldValue) {
      
    }
  },

  destroyed () {
    ;
  },

  data() {
    return {
      
    }
  },

  methods: {
    
  },
}
</script>

<style scoped>

</style>

<style>

</style>
