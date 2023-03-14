<template>
  <div class="App">
    <h1> defineComponent </h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.App{
  h1{
    font-size: 32px;
    color: yellowgreen;
  }
}
</style>
