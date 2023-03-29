<template>
  <section class="decorator10">
    <div
      class="progress"
      :style="{ '--per': `${percentage}%` }"
    ></div>
    <span id="span"></span>
  </section>
</template>

<script>
import { defineComponent, onMounted, onBeforeMount, ref } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Decorator10',
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
.decorator10 {
  --bg: #222;
  .progress {
    width: 350px;
    height: 30px;
    transform: skewX(-45deg);
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
    background: linear-gradient(to right, transparent 10px, var(--bg) 0) 0 0/20px,
      linear-gradient(to right, orange, orange) 0 0 / var(--per) no-repeat #eee;
  }
  span {
    padding-left: 20px;
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
