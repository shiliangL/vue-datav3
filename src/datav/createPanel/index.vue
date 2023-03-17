<template>
  <div class="createPanel">
    这里是随便打开的面板
    <div class="close" @click="close">
        关闭
    </div>
  </div>
</template>

<script>

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CreatePanel',
  setup (props, ctx) {
    function close () {
      console.log('props, ctx', props, ctx)
    }
    return {
      close
    }
  }
})
</script>

<style scoped>
.createPanel {
  top: 10%;
  left: 100;
  z-index: 10;
  position: fixed;
  background: yellowgreen;
}
</style>
