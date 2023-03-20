<script>

import Count2 from '@/datav/Count2/index.vue'
import CoreChart from '@/datav/CoreChart/index.vue'
import { h, defineComponent, reactive, watch } from 'vue'

export default defineComponent({
  name: 'WaterChart',
  components: {
    Count2,
    CoreChart
  },
  props: {
    chartData: {
      type: Number,
      desc: '进度值',
      default: () => 45
    },
    chartOption: {
      type: Object,
      default: () => ({})
    },
    color: {
      type: Array,
      desc: '取色盘配置',
      tip: '仅仅支持16进制颜色配置渐变',
      validator: (value) => (value.length && value.length <= 2),
      default: () => ['#00ffff', '#006ced']
    },
    radius: {
      type: Array,
      desc: '半径配置',
      default: () => ['76%', '82%']
    },
    descText: {
      type: [String],
      desc: '图表desc描述',
      default: () => '完成情况'
    },
    unit: {
      type: [String],
      desc: '描述单位',
      default: () => '%'
    },
    fixDiff: {
      type: Number,
      desc: '圆环和水球之间间隙差值',
      default: () => 1,
      validator: (value) => value <= 10
    },
    startAngle: {
      type: Number,
      desc: '圆环填充开始角度',
      default: () => 90,
      validator: (value) => value <= 360
    },
    showWater: {
      type: Boolean,
      desc: '是否显示水波',
      default: () => true
    },
    backgroundColor: {
      type: String,
      desc: '图表背景颜色',
      default: () => 'transparent'
    },
    barBackground: {
      type: String,
      desc: 'bar背景轨道演颜色',
      default: () => 'RGBA(235, 238, 245, 0.16)'
    }
  },
  setup (props, ctx) {
    // TODO: 步骤1 初始化的时候-读取数据+配置
    const chartOptionConfig = reactive({
      opt: generateOption(props.chartData, props.chartOption || {})
    })

    console.log(chartOptionConfig, '=chartOptionConfig=')
    // TODO: 步骤2 生成配置参数-使用数据+配置
    function generateOption (data = 0, config = {}) {
      const waterPercentage = data ? data / 100 : 0
      const [color1, color2] = props.color.length ? props.color : ['#00ffff', '#006ced']

      const initOption = {
        backgroundColor: props.Background,
        animationEasing: 'elasticOut',
        animationDelayUpdate: (k) => 5 * k,
        animationDelay: (idx) => idx * 10,
        angleAxis: {
          min: 0,
          max: 100,
          show: false,
          polarIndex: 0,
          boundaryGap: ['50%', '50%'],
          startAngle: props.startAngle
        },
        radiusAxis: {
          type: 'category',
          show: false,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        polar: [
          {
            radius: props.radius,
            center: ['50%', '50%']
          }
        ],
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: [
          {
            show: false,
            type: 'category'
          }
        ],
        series: []
      }

      // 颜色判断 多颜色渲染渐变颜色
      const itemStyleGradientColor =
        props.color.length === 1
          ? color1
          : {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: color1 },
                { offset: 1, color: color2 }
              ]
            }

      const r1 = props.radius[0].replaceAll('%', ' ') * 1
      const r2 = `${r1 - props.fixDiff}%`

      initOption.series.push({
        name: '',
        type: 'bar',
        data: props.barReactivity ? [data] : [100],
        roundCap: true,
        showBackground: true,
        backgroundStyle: {
          color: 'RGBA(235, 238, 245, 0.16)'
        },
        coordinateSystem: 'polar',
        itemStyle: {
          color: itemStyleGradientColor
        }
      })

      const waterConfig = {
        radius: r2,
        type: 'liquidFill',
        center: ['50%', '50%'],
        itemStyle: {
          color: itemStyleGradientColor
        },
        label: {
          show: false
        },
        data: [
          waterPercentage,
          {
            direction: 'left',
            value: waterPercentage
          }
        ],
        backgroundStyle: {
          borderWidth: 1,
          color: 'transparent'
        },
        outline: {
          show: true,
          itemStyle: {
            borderWidth: 0
          },
          borderDistance: 0
        }
      }

      if (props.showWater) initOption.series.push(waterConfig)
      // WARNING: 这里处理一下数据配置的合并
      return initOption
    }

    console.log('generateOption', generateOption())

    // TODO: 步骤3 数据或者配置项改变的时候-重新生成图表配置
    watch(() => [props.chartData, props.chartOption], (newVal) => {
      chartOptionConfig.opt = generateOption(newVal[0], newVal[1] || {})
    }, { deep: true })

    return () => h('div', { class: 'WaterChart' }, [
      h(CoreChart, {
        option: generateOption()
      }, {
        default: () => h('div', { class: 'chart_desc' }, [
          h(Count2, {}, '90%'),
          h('div', {}, '完成情况')
        ])
      })
    ])
  }
})
</script>

<style scoped lang="scss">
.WaterChart {
  width: 100%;
  height: 100%;
  .chart_desc {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
