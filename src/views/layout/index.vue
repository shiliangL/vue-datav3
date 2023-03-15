<template>
  <div class="App_Layout">
    <nav>
      <router-link to="/"> dashboard </router-link>
      <router-link to="/component/chart"> chart </router-link>
      <router-link to="/component/datav"> datav </router-link>
    </nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.App_Layout {
  width: 100%;
  height: 100%;
}
</style>
