
<script>

import { h, ref, defineComponent, onMounted, onBeforeUnmount, watch } from 'vue'
import { useEventListener, useDebounceFn } from '@vueuse/core'

export default defineComponent({
  name: 'CoreChart',
  props: {
    option: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props, { expose, slots }) {
    const chartRef = ref(null)
    const { echarts } = window
    if (!echarts) return
    let chart = null

    function initChart (dom, option) {
      const _chart = echarts.init(dom, null, {})
      _chart.setOption(option)
      return _chart
    }

    function setOption (option = {}) {
      chart && chart.setOption(option || {}, true)
    }

    function resize () {
      console.log('resize')
      chart && chart.resize()
    }

    function dispose () {
      console.log('dispose')
      chart && chart.dispose()
    }

    const debouncedFn = useDebounceFn(() => {
      resize()
    }, 400)

    useEventListener(window, 'resize', debouncedFn)

    onMounted(() => {
      chart = initChart(chartRef.value, props.option)
      setOption(props.option || {})
    })

    watch(() => props.option, (cur, pre) => {
      setOption(cur || {})
    })

    // 销毁之前
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
      dispose()
    })
    expose({
      resize,
      dispose,
      setOption
    })
    return () => h('div', {
      class: 'datav_core_chart'
    }, [
      h('div', {
        ref: chartRef,
        class: 'core_chart abs'
      }),
      h('div', {
        class: 'decorator_chart abs'
      }),
      slots.default
        ? h('div', {
          class: 'center_slot abs'
        }, slots.default())
        : null
    ])
  }
})
</script>

<style scoped lang="scss">
.abs {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}

.datav_core_chart {
  width: 100%;
  height: 100%;
  position: relative;
  .core_chart {
    width: 100%;
    height: 100%;
  }
  .decorator_chart {
    width: 100%;
    height: 100%;
  }
  .center_slot {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
