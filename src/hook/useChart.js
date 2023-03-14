import { onBeforeUnmount } from 'vue'
import { useEventListener, useDebounceFn } from '@vueuse/core'

export function useChart (dom, option = {}, opt = {}) {
  const { echarts } = window
  if (!echarts) return
  const chart = initChart(dom, option)

  function initChart (dom, option) {
    const _chart = echarts.init(dom, null, { })
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

  // 销毁之前
  onBeforeUnmount(() => {
    console.log('销毁之前')
    chart && chart.dispose()
  })

  const debouncedFn = useDebounceFn(() => {
    resize()
  }, 400)

  useEventListener(window, 'resize', debouncedFn)

  return {
    chart,
    resize,
    initChart,
    setOption
  }
}
