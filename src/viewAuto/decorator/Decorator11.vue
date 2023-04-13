<template>
  <section class="decorator11">
  </section>
</template>

<script>
import { defineComponent, onMounted, onBeforeMount, ref } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Decorator11',
  props: {
    showActive: {
      desc: '是否模拟演示',
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    const percentage = ref(0)
    let showActiveTimer = null

    onMounted(() => {
      if (props.showActive) {
        showActiveTimer = setInterval(() => {
          percentage.value <= 100 ? percentage.value += Math.ceil(Math.random() * 10) : percentage.value = 0
        }, 420)
      }
    })

    onBeforeMount(() => {
      clearInterval(showActiveTimer)
    })

    return {
      percentage
    }
  }
})
</script>

<style scoped lang="scss">
.decorator11 {
  width: 60px;
  height: 60px;
  background-size: 100%;
  animation: rotate 0.5s infinite steps(24, end);
  background-repeat: no-repeat;
  background-position: center top;
  // background-image: url('./imgs/ani_big_data.png');
  background-image: url('./imgs/ani_middleware.png');
}

@keyframes rotate {
  0% {
    background-position: 0px -1440px;
  }
  100% {
    background-position: 0px 0px;
  }
}
</style>
