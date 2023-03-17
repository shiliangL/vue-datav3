<template>
  <div :class="className">
    这里是随便打开的面板
    <div class="close" @click="close">
        关闭
    </div>
  </div>
</template>

<script>

import { ref, defineComponent, onBeforeUnmount } from 'vue'
export default defineComponent({
  name: 'CreatePanel',
  setup (props, { emit }) {
    const className = ref('createPanel animate__animated animate__backInDown')
    function close () {
      console.log('cancel')
      emit('cancel')
    }

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
      className.value = 'createPanel animate__animated animate__backOutDown'
    })

    return {
      close,
      className
    }
  }
})
</script>

<style scoped lang="scss">
.createPanel {
  top: 10%;
  left: 100;
  z-index: 10;
  position: fixed;
  background: yellowgreen;
  .close{
    cursor: pointer;
  }
}
</style>
