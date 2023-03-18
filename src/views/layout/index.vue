<template>
  <div class="App_Layout">
    <HeaderBar></HeaderBar>
    <div class="App_Layout_Main">
      <router-view
        v-slot="{ Component }"
        class="App_Router_View"
      >
        <Transition
          enter-active-class="animate__animated animate__slideInLeft"
          leave-active-class="animate__animated animate__slideOutRight"
        >
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>
  </div>
</template>

<script>

import HeaderBar from './header.vue'
import { defineComponent, Transition } from 'vue'
export default defineComponent({
  components: {
    HeaderBar,
    Transition
  },
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.App_Layout {
  width: 100%;
  height: 100%;
  .App_Layout_Main {
    width: 100%;
    position: relative;
    .App_Router_View {
      top: 0;
      left: 0;
      width: 100%;
      position: absolute;
    }
  }
}
</style>
