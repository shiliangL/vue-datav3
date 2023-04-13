
<script>
import { hexToRgba } from '@/chartOpt/index'
import Count2 from '@/datav/Count2/index.vue'
import CoreChart from '@/datav/CoreChart/index.vue'
import { h, defineComponent } from 'vue'

export default defineComponent({
  name: 'PieChart',
  props: {
    option: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props, { expose, slots }) {
    let autoPlayTimer = null

    function generateOpt () {
      const colors = ['#006ced', '#04e893', '#ffe000', '#73c0de', '#F84949']
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
        color: colors.map((item) => ({
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          global: false,
          colorStops: [
            {
              offset: 0,
              color: hexToRgba(item, 0.66)
            },
            {
              offset: 1,
              color: hexToRgba(item, 1)
            }
          ]
        })),
        series: [
          // 边框的设置
          {
            type: 'pie',
            radius: ['87%', '88%'],
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
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: hexToRgba('#ffe000', 0.22)
                  },
                  {
                    offset: 1,
                    color: hexToRgba('#006ced', 0.88)
                  }
                ]
              }
            },
            data: [{ value: 1 }]
          },
          {
            type: 'pie',
            radius: ['59%', '60%'],
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
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: hexToRgba('#ffe000', 0.22)
                  },
                  {
                    offset: 1,
                    color: hexToRgba('#006ced', 0.88)
                  }
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
              borderRadius: 3,
              borderWidth: 1.1,
              borderCap: 'round',
              borderColor: 'rgba(0,0,0,0.78)'
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

    function chartReady (chart) {
      let currentIndex = -1
      clearInterval(autoPlayTimer)
      autoPlayTimer = setInterval(() => {
        const dataLen = 5
        chart.dispatchAction({
          type: 'downplay',
          seriesIndex: 2,
          dataIndex: currentIndex
        })
        currentIndex = (currentIndex + 1) % dataLen
        chart &&
          chart.dispatchAction({
            seriesIndex: 2,
            type: 'highlight',
            dataIndex: currentIndex
          })
      }, 5200)
    }

    return () => h('div', { class: 'pie_chart' }, [

      h('div', { class: 'chart_legend' }, [
        h('div', { class: 'legend_item' }, '智慧城市'),
        h('div', { class: 'legend_item' }, '智慧城市'),
        h('div', { class: 'legend_item' }, '智慧城市'),
        h('div', { class: 'legend_item' }, '智慧城市')
      ]),

      ('div', { class: 'chart_canvas' }, [
        h(
          CoreChart,
          {
            option: generateOpt(),
            onReady: (e) => chartReady(e)
          },
          {
            default: () => [h(Count2), h('div', {}, '汇总情况')]
          }
        )
      ])
    ])
  }
})
</script>

<style scoped lang="scss">
.pie_chart {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .chart_legend {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .chart_canvas {
    width: 100%;
    height: 100%;
    position: relative;
    .chart_desc {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
