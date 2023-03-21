
<script>

// eslint-disable-next-line no-unused-vars
import { hexToRgba } from '@/chartOpt/index'
import CoreChart from '@/datav/CoreChart/index.vue'
import { h, defineComponent } from 'vue'
export default defineComponent({
  name: 'BarChart',
  setup () {
    function generateOpt () {
      return {
        backgroundColor: 'transparent',
        animationEasing: 'elasticOut',
        animationDelayUpdate: (k) => 5 * k,
        grid: {
          top: '10%',
          left: '4%',
          right: '4%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          // boundaryGap: false,
          data: ['罗湖区', '福田区', '南山区', '盐田区', '龙岗区', '宝安区', '光明区', '坪山区', '大鹏区', '龙华区'],
          axisLine: {
            show: false,
            lineStyle: {
              width: 1,
              color: '#063374',
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#00c7ff'
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#00c7ff',
              width: 1,
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#063374'
            }
          }
        }],
        series: [{
          type: 'bar',
          data: new Array(10).fill(0).map((value, index, array) => Math.ceil(Math.random() * 1000)),
          // barWidth: 50, // 柱子宽度
          // barGap: 1, // 柱子之间间距
          itemStyle: {
            opacity: 1,
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: 'linear',
              colorStops: [{
                offset: 0,
                color: '#00ffff'
              },
              {
                offset: 1,
                color: '#006ced'
              }
              ]
            }
          }
        }]

      }
    }
    return () => h('div', {
      class: 'barChart'
    }, [
      h(CoreChart, {
        option: generateOpt()
      })
    ])
  }
})
</script>

<style scoped>
.barChart {
  width: 100%;
  height: 100%;
}
</style>
