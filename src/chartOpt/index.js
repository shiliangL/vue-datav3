export const icon =
    'path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z'

export const datavOpt = {
  barBackground: 'RGBA(235, 238, 245, 0.06)',
  backgroundColor: 'transparent',
  animation: true,
  animationEasing: 'elasticOut',
  animationDelayUpdate: (k) => 5 * k,
  animationDelay: (idx) => idx * 10,
  radius: ['62%', '82%'],
  center: ['50%', '50%'],
  color: [
    '#00ffff',
    '#006ced',
    '#00cfff',
    '#04e893',
    '#ffe000',
    '#73c0de',
    '#F84949',
    '#FC6AA4',
    '#C182E5',
    '#9044F5',
    '#592CF3'
  ],
  grid: {
    top: '16%',
    left: '4%',
    right: '4%',
    bottom: '4%',
    containLabel: true
  },
  legend: {
    show: false,
    top: '2%',
    right: '4%',
    icon: 'stack',
    textStyle: {
      color: '#fff'
    },
    itemWidth: 8,
    itemHeight: 8
  },
  title: {
    show: false,
    x: 'center',
    top: '2%',
    text: '趋势统计分析',
    textStyle: {
      fontSize: 14,
      color: '#FFF',
      align: 'center',
      fontWeight: 'normal'
    }
  },
  tooltip: {
    line: {
      show: true,
      trigger: 'axis',
      textStyle: {
        color: '#fff'
      },
      backgroundColor: 'RGBA(235, 238, 245, 0.26)',
      axisPointer: {
        type: 'cross',
        label: {
          show: true,
          backgroundColor: '#6a7985'
        }
      }
    },
    bar: {
      show: true,
      trigger: 'axis',
      textStyle: {
        color: '#fff'
      },
      backgroundColor: 'RGBA(235, 238, 245, 0.26)',
      axisPointer: {
        type: 'shadow',
        label: {
          show: true,
          backgroundColor: '#6a7985'
        }
      }
    }
  },
  xAxis: [{
    // X轴名称
    name: '',
    type: 'category',
    // 是否有间隔
    boundaryGap: true,
    axisLabel: {
      color: '#ddd'
    },
    // X轴线
    axisLine: {
      show: true,
      lineStyle: {
        color: '#186afe'
      }
    },
    // x轴刻度线
    axisTick: {
      show: false
    },
    // X轴水平线
    splitLine: {
      show: false,
      lineStyle: {
        opacity: 0.66,
        type: 'dashed',
        color: '#195384'
      }
    },
    // 默认无让图表取默认配置
    // data: []
    data: new Array(12).fill(0).map((value, index) => `${index + 1}月`)
  }],
  yAxis: [{
    // Y轴名称
    name: '',
    type: 'value',
    axisLabel: {
      color: '#ddd',
      formatter: '{value}'
    },
    // y轴线
    axisLine: {
      show: false,
      lineStyle: {
        color: '#186afe'
      }
    },
    // y轴刻度线
    axisTick: {
      show: false
    },
    // y轴水平线
    splitLine: {
      show: false,
      lineStyle: {
        opacity: 0.88,
        type: 'dashed',
        color: '#195384'
      }
    }
  },
  {
    // Y轴名称
    name: '',
    type: 'value',
    axisLabel: {
      color: '#ddd',
      formatter: '{value}'
    },
    // y轴线
    axisLine: {
      show: false,
      lineStyle: {
        color: '#186afe'
      }
    },
    // y轴刻度线
    axisTick: {
      show: false
    },
    // y轴水平线
    splitLine: {
      show: false,
      lineStyle: {
        opacity: 0.88,
        type: 'dashed',
        color: '#195384'
      }
    }
  }
  ]
}

// 循环取颜色列表
export function getColorFromThemeColor (data = [], colors = []) {
  let indexKey = -1
  data.forEach((item) => {
    indexKey = (indexKey + 1) % colors.length
    item.color = item.color || colors[indexKey]
  })
  return data
}

// 是否是十六进制颜色
export function isHexColor (color) {
  return /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color)
}

// 颜色16进制换算rgba,添加透明度
export function hexToRgba (hex, opacity) {
  return `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt(
    '0x' + hex.slice(3, 5)
  )},${parseInt('0x' + hex.slice(5, 7))}, ${opacity})`
}

export function gradientColor ({
  color1 = '#00fcae',
  color2 = '#006388',
  type = 'linear',
  x = 0,
  y = 0,
  x2 = 0,
  y2 = 1
} = {}) {
  return {
    type,
    x,
    y,
    x2,
    y2,
    colorStops: [
      { offset: 0, color: color1 },
      { offset: 1, color: color2 }
    ]
  }
}

export const defaultDvaConfig = {
  // 渐变颜色
  gradientColor: ({
    color1 = '#00fcae',
    color2 = '#006388',
    type = 'linear',
    x = 0,
    y = 0,
    x2 = 0,
    y2 = 1
  } = {}) => ({
    type,
    x,
    y,
    x2,
    y2,
    colorStops: [
      { offset: 0, color: color1 },
      { offset: 1, color: color2 }
    ]
  }),
  // 图表最外层配置
  initOption: () => ({
    backgroundColor: 'transparent',
    animationEasing: 'elasticOut',
    animationDelayUpdate: (k) => 5 * k,
    animationDelay: (idx) => idx * 10,
    tooltip: {
      show: false
    },
    legend: {
      show: false
    },
    series: []
  }),
  radius: (radius = ['64%', '86%']) => radius
}

export function gradientChartColor ({
  color1 = '#00fcae',
  color2 = '#006388',
  type = 'linear',
  x = 0,
  y = 0,
  x2 = 0,
  y2 = 1
}) {
  return {
    type,
    x,
    y,
    x2,
    y2,
    colorStops: [
      { offset: 0, color: color1 },
      { offset: 1, color: color2 }
    ]
  }
}

// 线性渐变
// https://echarts.apache.org/zh/option.html#color
export function getLinearGradientColor ({
  x = 0,
  y = 0,
  x2 = 0,
  y2 = 1,
  colorStops = [],
  global = false
}) {
  const initColorStops = [
    { offset: 0, color: '#00fcae' },
    { offset: 1, color: '#006388' }
  ]
  return {
    type: 'linear',
    x,
    y,
    x2,
    y2,
    global,
    colorStops: colorStops.length ? colorStops : initColorStops
  }
}

export function getGradientRadialColor ({
  x = 0.5,
  y = 0.5,
  r = 0.5,
  colorStops = [],
  global = false
}) {
  const initColorStops = [
    { offset: 0, color: '#00fcae' },
    { offset: 1, color: '#006388' }
  ]
  return {
    x,
    y,
    r,
    global,
    type: 'radial',
    colorStops: colorStops.length ? colorStops : initColorStops
  }
}

// 根据长度生成数据填充
export function chartGap (leng = 100) {
  const dataArr = []
  for (let i = 0; i < leng; i++) {
    if (i % 2 === 0) {
      dataArr.push({
        value: 25,
        itemStyle: {
          color: '#5bc5ff29',
          borderWidth: 0,
          borderColor: 'rgba(0,0,0,0)'
        }
      })
    } else {
      dataArr.push({
        value: 20,
        itemStyle: {
          color: 'rgba(0,0,0,0)',
          borderWidth: 0,
          borderColor: 'rgba(0,0,0,0)'
        }
      })
    }
  }
  return dataArr
}

// 填充
export function _pie3 () {
  const dataArray = []
  for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      dataArray.push({
        value: 25,
        itemStyle: {
          borderWidth: 0,
          color: 'red',
          borderColor: 'rgba(0,0,0,0)'
        }
      })
    } else {
      dataArray.push({
        value: 20,
        itemStyle: {
          borderWidth: 0,
          color: 'rgba(0,0,0,0)',
          borderColor: 'rgba(0,0,0,0)'
        }
      })
    }
  }
  return dataArray
}

// 外部双圆环装饰器配置
export function initDoubleCircleOption () {
  const seriesData = [{
    type: 'pie',
    name: '外1细圆环',
    radius: ['70%', '71%'],
    center: ['50%', '50%'],
    label: {
      show: false
    },
    data: _pie3()
  },
  {
    type: 'pie',
    name: '外2细圆环',
    radius: ['60%', '65%'],
    center: ['50%', '50%'],
    itemStyle: {
      color: 'red'
    },
    label: {
      show: false
    },
    data: [100]
  },
  {
    type: 'pie',
    name: '内细圆环',
    radius: ['44%', '45%'],
    center: ['50%', '50%'],
    lable: {
      show: false
    },
    labelLine: {
      show: false
    },
    data: _pie3()
  }
  ]
  return {
    backgroundColor: 'transparent',
    animationEasing: 'elasticOut',
    animationDelayUpdate: (k) => 5 * k,
    tooltip: {
      show: false
    },
    toolbox: {
      show: false
    },
    series: seriesData
  }
}

// 随机长度图表数据
export function getRandomData (l = 6, n = 10, m = 50) {
  return new Array(l).fill(0).map(() => {
    return { value: getRandom(n, m), name: '智慧城市', color: '', lv: '' }
  })
}

// 装饰器部分
export const dvaDecoratorOptions = {
  doubleCircle: initDoubleCircleOption()
}

// 指定范围随机数
export function getRandom (n = 10, m = 50) {
  return Math.floor(Math.random() * (m - n + 1) + n)
}

// 随机生成 明亮RGB颜色
export function randomLightRgbColor () {
  const arr = []
  for (let i = 0; i < 3; i++) {
    // 暖色
    arr.push(Math.floor(Math.random() * 128 + 64))
    // 亮色
    arr.push(Math.floor(Math.random() * 128 + 128))
  }
  const [r, g, b] = arr
  // rgb颜色
  // const color=`rgb(${r},${g},${b})`;
  // 16进制颜色
  const color = `#${
    r.toString(16).length > 1 ? r.toString(16) : '0' + r.toString(16)
  }${g.toString(16).length > 1 ? g.toString(16) : '0' + g.toString(16)}${
    b.toString(16).length > 1 ? b.toString(16) : '0' + b.toString(16)
  }`
  return color
}

// 随机生成 暗黑RGB颜色
export function randomDarkRgbColor () {
  const arr = []
  for (let i = 0; i < 3; i++) {
    // 暗色
    arr.push(Math.floor(Math.random() * 128))
    // 暗黑色
    arr.push(Math.floor(Math.random() * 64))
  }
  const [r, g, b] = arr
  // rgb颜色
  // var color=`rgb(${r},${g},${b})`;
  // 16进制颜色
  const color = `#${
    r.toString(16).length > 1 ? r.toString(16) : '0' + r.toString(16)
  }${g.toString(16).length > 1 ? g.toString(16) : '0' + g.toString(16)}${
    b.toString(16).length > 1 ? b.toString(16) : '0' + b.toString(16)
  }`
  return color
}

// 生成装饰器配置集合
export const generateDvaDecoratorsOption = {
  decoratorPie1 (config = {}) {
    const {
      color = null, // 颜色
      radius = ['83%', '84%'],
      center = ['50%', '50%']
    } = config || {}

    const initConfig = {
      radius,
      center,
      type: 'pie',
      animation: false,
      hoverAnimation: false,
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: [1],
      itemStyle: {
        borderWidth: 1,
        shadowBlur: 8,
        shadowColor: '',
        color: color || 'rgba(88,142,197,0.5)'
      },
      animationEasing: 'elasticOut',
      animationDelayUpdate: (k) => 5 * k,
      animationDelay: (idx) => idx * 10
    }
    return { ...initConfig, color, radius }
  },

  decoratorPie2 (config = {}) {
    const {
      color = null, // 颜色
      startAngle = 0,
      radius = ['83%', '84%'],
      center = ['50%', '50%']
    } = config || {}

    const initConfig = {
      radius,
      center,
      startAngle,
      type: 'pie',
      animation: false,
      hoverAnimation: false,
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: _seriesDataPieStripe(),
      animationEasing: 'elasticOut',
      animationDelayUpdate: (k) => 5 * k,
      animationDelay: (idx) => idx * 10
    }
    return { ...initConfig, color, radius }
  },

  decoratorGauge1 (config = {}) {
    const {
      color = null, // 颜色
      radius = '100%', // 半径
      splitNumber = 30, // 刻度数量
      center = ['50%', '50%'] // 位置
    } = config || {}

    const initConfig = {
      name: '',
      radius,
      center,
      splitNumber,
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      axisLine: {
        show: false
      },
      // 刻度样式
      axisTick: {
        show: false
      },
      // 分隔线样式
      splitLine: {
        show: true,
        length: 6,
        lineStyle: {
          color: color || 'rgba(88,142,197,0.5)'
        }
      },
      axisLabel: {
        show: false
      },
      // 仪表盘指针
      pointer: {
        show: false
      },
      detail: {
        show: false
      }
    }
    return initConfig
  }
}

// 生成装饰器函数
function _seriesDataPieStripe ({ stripe = 12, color = null } = {}) {
  const dataArr = []
  for (let i = 0; i < stripe; i++) {
    if (i % 2 === 0) {
      dataArr.push({
        value: 25,
        name: (i + 1).toString(),
        itemStyle: {
          color: color || 'rgba(88,142,197,0.5)',
          borderWidth: 0,
          shadowBlur: 8,
          borderColor: 'rgba(0,0,0,0)'
        }
      })
    } else {
      dataArr.push({
        name: (i + 1).toString(),
        value: 20,
        itemStyle: {
          borderWidth: 0,
          color: 'rgba(0,0,0,0)',
          borderColor: 'rgba(0,0,0,0)'
        }
      })
    }
  }
  return dataArr
}
