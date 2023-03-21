
<script>

// eslint-disable-next-line no-unused-vars
import { hexToRgba } from '@/chartOpt/index'
import CoreChart from '@/datav/CoreChart/index.vue'
import { h, defineComponent } from 'vue'
export default defineComponent({
  name: 'LineChart',
  setup () {
    function generateOpt () {
      return {
        backgroundColor: 'transparent',
        animationEasing: 'elasticOut',
        title: {
          show: false,
          text: 'A类统计情况',
          left: 'center',
          textStyle: {
            color: '#FFF',
            align: 'center'
          }
        },
        legend: {
          show: true,
          top: 10,
          right: 2,
          icon: 'stack',
          textStyle: {
            color: '#fff'
          },
          itemWidth: 10,
          itemHeight: 10,
          data: [
            '当天'
          ]
        },
        grid: {
          top: '18%',
          left: '4%',
          right: '4%',
          bottom: '4%',
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: [
          {
            type: 'category',
            // boundaryGap: false,
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月'
            ],
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
          }
        ],
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
        series: [
          {
            name: '当天',
            type: 'line',
            stack: 'y',
            data: [
              20,
              32,
              20,
              24,
              19,
              30,
              21,
              16,
              14,
              8,
              12,
              10
            ],
            smooth: true,
            symbol: 'circle',
            itemStyle: {
              color: '#0092f6'
            },
            lineStyle: {
              color: '#0092f6',
              width: 1
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(7,44,90,0.2)'
                  },
                  {
                    offset: 1,
                    color: '#0092f6'
                  }
                ],
                globalCoord: false
              }
            },
            backgroundStyle: {
              color: 'RGBA(235, 238, 245, 0.06)'
            },
            color: '#0092f6'
          }
        ],
        showLegend: true,
        xAxisData: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月'
        ]
      }
    }
    return () => h('div', {
      class: 'lineChart'
    }, [
      h(CoreChart, {
        option: generateOpt()
      })
    ])
  }
})
</script>

<style scoped>
.lineChart {
  width: 100%;
  height: 100%;
}
</style>
