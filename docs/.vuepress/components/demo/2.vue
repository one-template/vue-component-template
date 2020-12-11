<template>
  <div class="demo">
    <component-template msg="hello"></component-template>
  </div>
</template>

<script>
import ComponentTemplate from '../app'

export default {
  components: {
    ComponentTemplate,
  },
}
</script>

<style scoped>
  .demo {
    color: red;
  }
</style>