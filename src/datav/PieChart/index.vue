
<script>

import Count2 from '@/datav/Count2/index.vue'
import CoreChart from '@/datav/CoreChart/index.vue'

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
    function opt () {
      const colors = [
        '#006ced',
        '#04e893',
        '#ffe000',
        '#73c0de',
        '#F84949',
        'rgba(250,250,250,0.5)'
      ]
      const option = {
        animation: true,
        backgroundColor: 'transparent',
        animationEasing: 'elasticOut',
        animationDelayUpdate: (k) => 5 * k,
        animationDelay: (idx) => idx * 10,
        barBackground: 'RGBA(235, 238, 245, 0.06)',
        // radius: ['62%', '82%'],
        // center: ['50%', '50%'],
        grid: {
          top: '16%',
          left: '4%',
          right: '4%',
          bottom: '4%',
          containLabel: true
        },
        legend: {
          show: false,
          orient: 'vertical',
          top: 'middle',
          right: '5%',
          textStyle: {
            color: '#f2f2f2',
            fontSize: 25
          },
          icon: 'roundRect'
        },
        color: colors,
        series: [
          // 边框的设置
          {
            type: 'pie',
            radius: ['62%', '86%'],
            center: ['50%', '50%'],
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            tooltip: {
              show: false
            },
            itemStyle: {
              // color: 'RGBA(235, 238, 245, 0.06)'
              opacity: 0.78,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: '#00ffff' },
                  { offset: 1, color: '#006ced' }
                ]
              }
            },
            data: [{ value: 1 }]
          },
          // 主要展示层的
          {
            type: 'pie',
            radius: ['62%', '82%'],
            center: ['50%', '50%'],
            itemStyle: {
              normal: {
                color: (params) => {
                  return colors[params.dataIndex]
                }
              }
            },
            labelLine: {
              show: false
            },
            label: {
              show: false
            },
            data: [
              { value: 17, name: '体育技能' },
              { value: 23, name: '体育行为' },
              { value: 27, name: '体质健康' },
              { value: 33, name: '体育意识' },
              { value: 9, name: '体育知识' }
            ]
          }
        ]
      }

      return option
    }
    return () => h('div', {
      class: 'pieChart'
    }, [
      h(CoreChart, {
        option: opt()
      }, {
        default: () => h('div', {}, [
          h(Count2),
          h('div', {}, '汇总情况')
        ])
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
