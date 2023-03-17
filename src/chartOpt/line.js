import { hexToRgba } from './index'

export const chartOpt1 = {
  desc: '紫橙色渐变折线',
  barBackground: 'RGBA(235, 238, 245, 0.06)',
  backgroundColor: 'transparent',
  animation: true,
  animationEasing: 'elasticOut',
  animationDelayUpdate: (k) => 5 * k,
  animationDelay: (idx) => idx * 10,
  grid: {
    top: '12%',
    left: '6%',
    right: '6%',
    bottom: '12%',
    containLabel: true
  },
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
    textStyle: {
      color: '#fff',
      fontWeight: 'normal',
      fontSize: 14
    },
    axisPointer: {
      type: 'line',
      shadowStyle: {
        color: 'rgba(150,150,150,0.3)',
        opacity: 1
      },
      lineStyle: {
        color: '#555',
        width: 1,
        type: 'dashed',
        cap: 'butt',
        opacity: 1
      },
      crossStyle: {
        color: '#555',
        width: 1,
        type: 'dashed',
        cap: 'butt',
        opacity: 1
      }
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
    textStyle: {
      color: '#ffffff',
      fontSize: 12
    }
  },
  xAxis: {
    show: true,
    smooth: false,
    type: 'category',
    data: [
      '8:00',
      '10:00',
      '12:00',
      '14:00',
      '16:00',
      '18:00'
    ],
    axisTick: {
      show: false,
      lineStyle: {
        color: '#01FCE3',
        type: 'solid',
        width: 1
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: '#cccccc',
        type: 'solid',
        width: 1
      }
    },
    axisLabel: {
      show: true,
      color: 'rgba(241, 248, 255, 0.7)',
      fontSize: 12,
      margin: 8
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: 'rgba(241, 248, 255, 0.1)',
        type: 'solid',
        width: 1
      }
    }
  },
  yAxis: {
    show: true,
    type: 'value',
    axisLine: {
      show: false,
      lineStyle: {
        color: '#01FCE3',
        type: 'solid',
        width: 1
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#01FCE3',
        type: 'solid',
        width: 1
      }
    },
    axisLabel: {
      show: true,
      color: 'rgba(241, 248, 255, 0.7)',
      fontSize: 12,
      margin: 8
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(241, 248, 255, 0.1)',
        type: 'dashed',
        width: 1
      }
    }
  },
  color: [{
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    global: false,
    colorStops: [{
      offset: 0,
      color: 'rgba(113,108,212,1)'
    },
    {
      offset: 0.82,
      color: 'rgba(60,160,254,0.1)'
    }
    ]
  },
  {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    global: false,
    colorStops: [{
      offset: 0,
      color: 'rgba(255,213,79,1)'
    },
    {
      offset: 0.82,
      color: 'rgba(255,213,79,0.16)'
    }
    ]
  }
  ],
  series: [{
    name: '系列一',
    data: [{
      name: '8:00',
      value: 120
    },
    {
      name: '10:00',
      value: 340
    },
    {
      name: '12:00',
      value: 220
    },
    {
      name: '14:00',
      value: 410
    },
    {
      name: '16:00',
      value: 170
    },
    {
      name: '18:00',
      value: 110
    }
    ],
    type: 'line',
    label: {
      show: false,
      position: 'top',
      color: '#FFFFFF',
      fontSize: 12,
      offset: [
        0,
        0
      ]
    },
    showSymbol: false,
    symbol: 'circle',
    step: false,
    smooth: true,
    symbolSize: 4,
    symbolOffset: [
      0,
      0
    ],
    lineStyle: {
      opacity: 1,
      type: 'line',
      width: 4,
      shadowBlur: 0,
      shadowOffsetX: 0,
      shadowOffsetY: 0
    },
    areaStyle: {
      opacity: 0.5,
      shadowBlur: 0,
      shadowColor: '#85a5ff',
      shadowOffsetX: 0,
      shadowOffsetY: 0
    }
  },
  {
    name: '系列二',
    data: [{
      name: '8:00',
      value: 105
    },
    {
      name: '10:00',
      value: 140
    },
    {
      name: '12:00',
      value: 295
    },
    {
      name: '14:00',
      value: 180
    },
    {
      name: '16:00',
      value: 240
    },
    {
      name: '18:00',
      value: 115
    }
    ],
    type: 'line',
    label: {
      show: false,
      position: 'top',
      color: '#FFFFFF',
      fontSize: 12,
      offset: [
        0,
        0
      ]
    },
    showSymbol: false,
    symbol: 'circle',
    step: false,
    smooth: true,
    symbolSize: 4,
    symbolOffset: [
      0,
      0
    ],
    lineStyle: {
      opacity: 1,
      type: 'line',
      width: 4,
      shadowBlur: 0,
      shadowOffsetX: 0,
      shadowOffsetY: 0
    },
    areaStyle: {
      opacity: 0.5,
      shadowBlur: 0,
      shadowColor: '#85a5ff',
      shadowOffsetX: 0,
      shadowOffsetY: 0
    }
  }
  ]
}

export const chartOpt2 = {
  desc: '紫橙色渐变折线',
  barBackground: 'RGBA(235, 238, 245, 0.06)',
  backgroundColor: 'transparent',
  animation: true,
  animationEasing: 'elasticOut',
  animationDelayUpdate: (k) => 5 * k,
  animationDelay: (idx) => idx * 10,
  animationDuration: 3000,
  grid: {
    top: '12%',
    left: '6%',
    right: '6%',
    bottom: '12%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(0,0,0,.5)',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: 'rgba(0,0,0,.5)'
      }
    },
    textStyle: {
      color: '#fff',
      fontSize: 14
    }
  },
  xAxis: [{
    nameGap: 3,
    nameTextStyle: {
      color: 'rgba(255,255,255,.8)',
      fontSize: 12
    },
    type: 'category',
    data: [
      '0:00',
      '2:00',
      '4:00',
      '6:00',
      '8:00',
      '12:00',
      '16:00',
      '20:00',
      '24:00'
    ],
    boundaryGap: false,
    axisLine: {
      rotate: 30,
      interval: 0,
      lineStyle: {
        color: '#636E7C'
      }
    },
    axisLabel: {
      showMaxLabel: true,
      fontSize: 12,
      color: 'rgba(255,255,255,.8)'
    },
    axisTick: {
      show: false
    }
  }],
  yAxis: [{
    name: '',
    type: 'value',
    nameGap: 20,
    min: 0,
    splitNumber: 5,
    nameTextStyle: {
      color: 'rgba(255,255,255,.89)',
      fontSize: 12
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,.25)',
        type: 'dashed'
      }
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#636E7C'
      }
    },
    axisLabel: {
      color: 'rgba(255,255,255,.8)',
      fontSize: 12
    }
  }],
  series: [{
    name: '苏苏的折线图',
    type: 'line',
    lineStyle: {
      width: 1.5,
      type: 'solid',
      shadowOffsetX: 0,
      shadowOffsetY: 3,
      shadowBlur: 4,
      shadowColor: hexToRgba('#00fcae', 0.95),
      color: '#00fcae'
    },
    showSymbol: true,
    symbol: 'circle',
    symbolSize: 8,
    itemStyle: {
      color: '#2f334d',
      borderWidth: 1,
      borderColor: '#00fcae'
    },
    areaStyle: {
      color: {
        colorStops: [{
          offset: 1,
          color: hexToRgba('#00fcae', 4.2)
        },
        {
          offset: 0.74,
          color: hexToRgba('#00fcae', 2.6)
        },
        {
          offset: 0,
          color: hexToRgba('#00fcae', 0.02)
        }
        ],
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        type: 'linear',
        global: false
      }
    },
    emphasis: {
      focus: 'series'
    },
    data: [
      111,
      600,
      255,
      344,
      333,
      555,
      111,
      999,
      0
    ]
  },
  {
    polyline: true,
    showSymbol: true,
    name: '流动光线',
    type: 'lines',
    coordinateSystem: 'cartesian2d',
    effect: {
      trailLength: 0.4,
      roundTrip: true,
      show: true,
      period: 6,
      symbolSize: 4,
      loop: true
    },
    lineStyle: {
      color: '#fff',
      width: 0,
      opacity: 0,
      curveness: 1,
      type: 'dashed'
    },
    data: [{
      coords: [
        [
          '0:00',
          111
        ],
        [
          '2:00',
          600
        ],
        [
          '4:00',
          255
        ],
        [
          '6:00',
          344
        ],
        [
          '8:00',
          333
        ],
        [
          '12:00',
          555
        ],
        [
          '16:00',
          111
        ],
        [
          '20:00',
          999
        ],
        [
          '24:00',
          0
        ]
      ]
    }]
  }
  ]
}
