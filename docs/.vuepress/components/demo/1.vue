<template>
  <div class="demo">
    <component-template></component-template>
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

<style>
  .demo {
    width: 60%;
  }
</style>