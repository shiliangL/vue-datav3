
<script>

import { useChart } from '@/hook/useChart'
import { h, ref, defineComponent, onMounted } from 'vue'
export default defineComponent({
  props: {

  },
  setup (props, ctx) {
    const chartRef = ref(null)
    onMounted(() => {
      const { setOption } = useChart(chartRef.value)

      const option = {
        // grid: { top: 35, left: 15, right: 15, bottom: 15, containLabel: true },
        tooltip: {
          show: true,
          trigger: 'axis',
          animation: true,
          alwaysShowContent: false,
          triggerOn: 'mousemove',
          confine: false,
          borderColor: '#333',
          borderWidth: 2,
          padding: 10,
          backgroundColor: 'rgba(50,50,50,0.7)',
          textStyle: { color: '#fff', fontWeight: 'normal', fontSize: 14 },
          axisPointer: {
            type: 'line',
            shadowStyle: { color: 'rgba(150,150,150,0.3)', opacity: 1 },
            lineStyle: { color: '#555', width: 1, type: 'dashed', cap: 'butt', opacity: 1 },
            crossStyle: { color: '#555', width: 1, type: 'dashed', cap: 'butt', opacity: 1 }
          }
        },
        legend: {
          show: true,
          top: 10,
          left: 'right',
          orient: 'horizontal',
          itemWidth: 16,
          itemHeight: 2,
          itemGap: 10,
          icon: 'roundRect',
          textStyle: { color: '#ffffff', fontSize: 12 }
        },
        xAxis: {
          show: true,
          smooth: false,
          type: 'category',
          data: ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
          axisTick: { show: false, lineStyle: { color: '#01FCE3', type: 'solid', width: 1 } },
          splitLine: { show: false, lineStyle: { color: '#cccccc', type: 'solid', width: 1 } },
          axisLabel: { show: true, color: 'rgba(241, 248, 255, 0.7)', fontSize: 12, margin: 8 },
          axisLine: { show: false, lineStyle: { color: 'rgba(241, 248, 255, 0.1)', type: 'solid', width: 1 } }
        },
        yAxis: {
          show: true,
          type: 'value',
          axisLine: { show: false, lineStyle: { color: '#01FCE3', type: 'solid', width: 1 } },
          axisTick: { show: false, lineStyle: { color: '#01FCE3', type: 'solid', width: 1 } },
          axisLabel: { show: true, color: 'rgba(241, 248, 255, 0.7)', fontSize: 12, margin: 8 },
          splitLine: { show: true, lineStyle: { color: 'rgba(241, 248, 255, 0.1)', type: 'dashed', width: 1 } }
        },
        color: [{
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          global: false,
          colorStops: [{ offset: 0, color: 'rgba(113,108,212,1)' }, { offset: 0.82, color: 'rgba(60,160,254,0.1)' }]
        }, {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          global: false,
          colorStops: [{ offset: 0, color: 'rgba(255,213,79,1)' }, { offset: 0.82, color: 'rgba(255,213,79,0.16)' }]
        }],
        series: []
      }
      const seriesStyle = {
        label: {
          show: false,
          position: 'top',
          color: '#FFFFFF',
          fontSize: 12,
          offset: [0, 0]
        },
        showSymbol: false,
        symbol: 'circle',
        step: false,
        smooth: true,
        symbolSize: 4,
        symbolOffset: [0, 0],
        lineStyle: { opacity: 1, type: 'line', width: 4, shadowBlur: 0, shadowOffsetX: 0, shadowOffsetY: 0 },
        areaStyle: { opacity: 0.5, shadowBlur: 0, shadowColor: '#85a5ff', shadowOffsetX: 0, shadowOffsetY: 0 }
      }
      // 指定图表的数据
      const data = [
        { time: '8:00', value: 120, name: '系列一' },
        { time: '10:00', value: 340, name: '系列一' },
        { time: '12:00', value: 220, name: '系列一' },
        { time: '14:00', value: 410, name: '系列一' },
        { time: '16:00', value: 170, name: '系列一' },
        { time: '18:00', value: 110, name: '系列一' },
        { time: '8:00', value: 105, name: '系列二' },
        { time: '10:00', value: 140, name: '系列二' },
        { time: '12:00', value: 295, name: '系列二' },
        { time: '14:00', value: 180, name: '系列二' },
        { time: '16:00', value: 240, name: '系列二' },
        { time: '18:00', value: 115, name: '系列二' }
      ]

      const sKey = 'name'
      const xKey = 'time'
      const yKey = 'value'
      let seriesArr = data.map(item => item[sKey])
      seriesArr = [...new Set(seriesArr)]
      option.series = []
      seriesArr.forEach((item, index) => {
        const datas = data.filter(oitem => oitem[sKey] === item).map(_item => {
          return { name: _item[xKey], value: _item[yKey] }
        })
        option.series.push({
          name: item,
          data: datas,
          type: 'line',
          ...seriesStyle
        })
      })

      setOption(option)
    })

    return () => h('div', {
      ref: chartRef,
      class: 'datav_core_chart'
    })
  }
})
</script>

<style scoped>
.datav_core_chart {
  width: 100%;
  height: 100%;
}
</style>
