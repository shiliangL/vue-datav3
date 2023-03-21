
<script>

// import Count2 from '@/datav/Count2/index.vue'
import CoreChart from '@/datav/CoreChart/index.vue'
import { useEventListener, useDebounceFn } from '@vueuse/core'
import { h, ref, defineComponent, onMounted, onBeforeUnmount, watch } from 'vue'

export default defineComponent({
  name: 'PieChart',
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
      class: 'pieChart'
    }, [
      h(CoreChart, {
        ref: chartRef
      }, {
        default: () => h('div', {}, '90')
      })
    ])
  }
})
</script>

<style scoped lang="scss">
.pieChart {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
