import { hexToRgba, datavOpt } from './index'

const { grid, color } = datavOpt

export const chartOpt1 = {
  desc: '紫橙色渐变折线',
  grid,
  barBackground: 'RGBA(235, 238, 245, 0.06)',
  backgroundColor: 'transparent',
  animation: true,
  animationEasing: 'elasticOut',
  animationDelayUpdate: (k) => 5 * k,
  animationDelay: (idx) => idx * 10,
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
    left: 'right',
    orient: 'horizontal',
    top: 10,
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
      fontSize: 12
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
      fontSize: 12
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
  grid,
  color,
  barBackground: 'RGBA(235, 238, 245, 0.06)',
  backgroundColor: 'transparent',
  animation: true,
  animationEasing: 'elasticOut',
  animationDelayUpdate: (k) => 5 * k,
  animationDelay: (idx) => idx * 10,
  animationDuration: 3000,
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
    boundaryGap: true,
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

export const chartOpt3 = {
  desc: '紫橙色渐变折线+柱状',
  grid,
  barBackground: 'RGBA(235, 238, 245, 0.06)',
  backgroundColor: 'transparent',
  animation: true,
  animationEasing: 'elasticOut',
  animationDelayUpdate: (k) => 5 * k,
  animationDelay: (idx) => idx * 10,
  tooltip: {
    show: false,
    trigger: 'item',
    animation: true,
    alwaysShowContent: false,
    triggerOn: 'mousemove',
    confine: false,
    borderColor: '#333',
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'rgba(50,50,50,0.7)',
    axisPointer: {
      type: 'line',
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
      },
      shadowStyle: {
        color: 'rgba(150,150,150,0.3)',
        opacity: 1
      }
    },
    textStyle: {
      color: '#fff',
      fontWeight: 'normal',
      fontSize: 14
    },
    formatter: null
  },
  title: {
    text: '',
    show: false,
    link: '',
    target: 'blank',
    textStyle: {
      color: '#fff',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 30,
      textBorderColor: '',
      textBorderWidth: 1,
      textBorderType: 'solid',
      textBorderDashOffset: 1,
      textShadowColor: 'transparent',
      textShadowBlur: 1,
      textShadowOffsetX: 1,
      textShadowOffsetY: 1,
      overflow: 'none'
    },
    padding: 1,
    itemGap: 10,
    z: 10,
    left: 'auto',
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    backgroundColor: 'transparent',
    borderColor: '',
    borderWidth: '',
    borderRadius: 1,
    shadowBlur: 0,
    shadowColor: '',
    shadowOffsetX: '',
    shadowOffsetY: '',
    subtext: '',
    sublink: '',
    subtarget: 'blank',
    subtextStyle: {
      color: '#ffffff',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 12,
      lineHeight: 0,
      textBorderColor: '',
      textBorderWidth: 0,
      textBorderType: 'solid',
      textBorderDashOffset: 0,
      textShadowColor: 'transparent',
      textShadowBlur: 0,
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
      overflow: 'none'
    }
  },
  legend: {
    show: false,
    top: 10,
    left: 'center',
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
    type: 'category',
    axisLabel: {
      show: true,
      color: 'rgba(241, 248, 255, 0.7)',
      fontSize: 12,
      margin: 16
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: 'rgba(241, 248, 255, 0.1)',
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
    splitLine: {
      show: false,
      lineStyle: {
        color: '#cccccc',
        type: 'solid',
        width: 1
      }
    },
    smooth: true,
    data: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月'
    ]
  },
  yAxis: {
    show: true,
    type: 'value',
    axisLabel: {
      show: true,
      color: 'rgba(241, 248, 255, 0.7)',
      fontSize: 12,
      margin: 8
    },
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
    splitLine: {
      show: false,
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
    colorStops: [{
      offset: 0,
      color: 'rgba(117,121,149,1)'
    },
    {
      offset: 1,
      color: 'rgba(47,45,88,1)'
    }
    ],
    global: false
  },
  'rgba(143,143,179,1)',
  {
    type: 'linear',
    x: 0,
    y: 1,
    x2: 0,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: 'rgba(255,248,153,0.33)'
    },
    {
      offset: 1,
      color: 'rgba(255,229,152,1)'
    }
    ],
    global: false
  },
  'rgba(255,222,124,1)',
  'rgba(28,28,49,1)',
  {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
      offset: 0,
      color: 'rgba(106,110,200,1)'
    },
    {
      offset: 1,
      color: 'rgba(62,77,229,0.27)'
    }
    ],
    global: false
  }
  ],
  series: [{
    name: '系列一',
    data: [{
      name: '1月',
      value: 120
    },
    {
      name: '2月',
      value: 180
    },
    {
      name: '3月',
      value: 300
    },
    {
      name: '4月',
      value: 280
    },
    {
      name: '5月',
      value: 140
    },
    {
      name: '6月',
      value: 200
    },
    {
      name: '7月',
      value: 60
    }
    ],
    type: 'bar',
    stack: 'zs',
    showBackground: false,
    backgroundStyle: {
      opacity: 1
    },
    itemStyle: {
      shadowBlur: 0,
      shadowColor: '#5c1717',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      borderRadius: 0,
      borderColor: '#292929',
      borderWidth: 0,
      borderType: 'dotted'
    },
    barMaxWidth: 'auto',
    barWidth: 14,
    label: {
      show: false,
      position: 'top',
      color: '#ffffff',
      fontSize: 12
    },
    barGap: '50%'
  },
  {
    type: 'pictorialBar',
    barMaxWidth: 'auto',
    symbolPosition: 'end',
    symbol: 'diamond',
    symbolOffset: [
      0,
      '-50%'
    ],
    symbolSize: [
      14,
      4.666666666666667
    ],
    data: [
      120,
      180,
      300,
      280,
      140,
      200,
      60
    ]
  },
  {
    name: '系列二',
    data: [{
      name: '1月',
      value: 70
    },
    {
      name: '2月',
      value: 220
    },
    {
      name: '3月',
      value: 350
    },
    {
      name: '4月',
      value: 180
    },
    {
      name: '5月',
      value: 190
    },
    {
      name: '6月',
      value: 180
    },
    {
      name: '7月',
      value: 120
    }
    ],
    type: 'bar',
    stack: 'zs',
    showBackground: false,
    backgroundStyle: {
      opacity: 1
    },
    itemStyle: {
      shadowBlur: 0,
      shadowColor: '#5c1717',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      borderRadius: 0,
      borderColor: '#292929',
      borderWidth: 0,
      borderType: 'dotted'
    },
    barMaxWidth: 'auto',
    barWidth: 14,
    label: {
      show: false,
      position: 'top',
      color: '#ffffff',
      fontSize: 12
    },
    barGap: '50%'
  },
  {
    type: 'pictorialBar',
    barMaxWidth: 'auto',
    symbolPosition: 'end',
    symbol: 'diamond',
    symbolOffset: [
      0,
      '-50%'
    ],
    symbolSize: [
      14,
      4.666666666666667
    ],
    data: [
      190,
      400,
      650,
      460,
      330,
      380,
      180
    ]
  },
  {
    type: 'pictorialBar',
    barMaxWidth: 'auto',
    symbol: 'diamond',
    symbolOffset: [
      0,
      '50%'
    ],
    symbolSize: [
      14,
      4.666666666666667
    ],
    data: [
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ]
  },
  {
    name: '趋势',
    data: [
      220,
      430,
      680,
      490,
      360,
      410,
      210
    ],
    type: 'line',
    show: true,
    smooth: true,
    symbol: 'none',
    areaStyle: {
      opacity: 0.1
    },
    lineStyle: {
      width: 2,
      type: 'solid'
    }
  }
  ]
}

export const chartOpt4 = {
  desc: '立体柱状图',
  grid,
  barBackground: 'RGBA(235, 238, 245, 0.06)',
  backgroundColor: 'transparent',
  animation: true,
  animationEasing: 'elasticOut',
  animationDelayUpdate: (k) => 5 * k,
  animationDelay: (idx) => idx * 10,
  legend: {
    icon: 'rect',
    data: [
      '<25.2Mpa',
      '25.2~40Mpa',
      '>=40Mpa'
    ],
    show: true,
    top: 10,
    itemWidth: 16,
    itemHeight: 2,
    itemGap: 10,
    textStyle: {
      color: '#ffffff',
      fontSize: 12
    }
  },
  xAxis: {
    type: 'category',
    data: [
      '1#1支架',
      '2#2支架',
      '3#3支架',
      '4#4支架'
    ],
    axisLine: {
      lineStyle: {
        color: '#626361'
      }
    },
    splitNumber: 4,
    interval: 4,
    boundaryGap: [
      '8%',
      '8%'
    ],
    axisLabel: {
      color: 'rgba(255,255,255,.9)',
      fontSize: 12
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    min: 0,
    type: 'value',
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,.3)',
        type: [
          3,
          3
        ],
        dashOffset: 2,
        width: 1
      }
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      color: 'rgba(255,255,255,.9)',
      fontSize: 12
    }
  },
  series: [{
    type: 'bar',
    barWidth: 16,
    stack: '1',
    itemStyle: {
      color: {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
          offset: 0,
          color: '#68F4EF'
        },
        {
          offset: 0.5,
          color: '#37D6E5'
        },
        {
          offset: 0.5,
          color: '#19A5B5'
        },
        {
          offset: 1,
          color: '#35C2DA'
        }
        ]
      },
      borderRadius: 0
    },
    label: {
      show: true,
      position: [
        1, -20
      ],
      color: '#00f8ff',
      fontSize: 12
    },
    data: [
      25,
      12,
      13,
      12
    ]
  },
  {
    type: 'pictorialBar',
    symbol: 'diamond',
    symbolSize: [
      16,
      8
    ],
    symbolOffset: [-10, -4],
    symbolPosition: 'end',
    z: 12,
    color: '#37DAE5',
    data: [
      25,
      12,
      13,
      12
    ]
  },
  {
    type: 'pictorialBar',
    symbol: 'diamond',
    symbolSize: [
      16,
      8
    ],
    symbolOffset: [-10,
      4
    ],
    z: 12,
    color: {
      type: 'linear',
      x: 1,
      y: 0,
      x2: 0,
      y2: 0,
      colorStops: [{
        offset: 0,
        color: '#68F4EF'
      },
      {
        offset: 0.5,
        color: '#37D6E5'
      },
      {
        offset: 0.5,
        color: '#19A5B5'
      },
      {
        offset: 1,
        color: '#35C2DA'
      }
      ]
    },
    data: [
      25,
      12,
      13,
      12
    ]
  },
  {
    data: [
      60,
      60,
      60,
      60,
      60
    ],
    type: 'pictorialBar',
    symbol: 'diamond',
    symbolSize: [
      16,
      8
    ],
    symbolOffset: [-10, -4],
    color: '#252f31',
    symbolPosition: 'end'
  },
  {
    data: [
      35,
      48,
      47,
      48
    ],
    type: 'bar',
    barWidth: 16,
    stack: '1',
    itemStyle: {
      opacity: 0.7,
      color: {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
          offset: 0,
          color: 'rgba(255,255,255,.12)'
        },
        {
          offset: 0.5,
          color: 'rgba(255,255,255,.4)'
        },
        {
          offset: 0.5,
          color: 'rgba(255,255,255,.12)'
        },
        {
          offset: 1,
          color: 'rgba(255,255,255,.4)'
        }
        ]
      },
      borderRadius: 0
    }
  },
  {
    type: 'bar',
    stack: '2',
    barWidth: 16,
    itemStyle: {
      color: {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
          offset: 0,
          color: '#EED743'
        },
        {
          offset: 0.5,
          color: '#D6B628'
        },
        {
          offset: 0.5,
          color: '#B59819'
        },
        {
          offset: 1,
          color: '#DABB35'
        }
        ]
      }
    },
    label: {
      show: true,
      position: [
        1, -20
      ],
      color: '#E9CB35',
      fontSize: 12
    },
    data: [
      36,
      32,
      34,
      32
    ]
  },
  {
    type: 'pictorialBar',
    symbol: 'diamond',
    symbolSize: [
      16,
      8
    ],
    symbolOffset: [
      10, -4
    ],
    symbolPosition: 'end',
    z: 12,
    color: '#E5CD37',
    data: [
      36,
      32,
      34,
      32
    ]
  },
  {
    name: '',
    type: 'pictorialBar',
    symbol: 'diamond',
    symbolSize: [
      16,
      8
    ],
    symbolOffset: [
      10,
      4
    ],
    color: {
      type: 'linear',
      x: 1,
      y: 0,
      x2: 0,
      y2: 0,
      colorStops: [{
        offset: 0,
        color: '#EED743'
      },
      {
        offset: 0.5,
        color: '#D6B628'
      },
      {
        offset: 0.5,
        color: '#B59819'
      },
      {
        offset: 1,
        color: '#DABB35'
      }
      ]
    },
    z: 12,
    data: [
      36,
      32,
      34,
      32
    ]
  },
  {
    data: [
      60,
      60,
      60,
      60,
      60
    ],
    type: 'pictorialBar',
    symbol: 'diamond',
    symbolSize: [
      16,
      8
    ],
    symbolOffset: [
      10, -4
    ],
    color: '#252f31',
    symbolPosition: 'end'
  },
  {
    data: [
      24,
      28,
      26,
      28
    ],
    type: 'bar',
    barWidth: 16,
    stack: '2',
    itemStyle: {
      opacity: 0.5,
      color: {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
          offset: 0,
          color: 'rgba(255,255,255,.12)'
        },
        {
          offset: 0.5,
          color: 'rgba(255,255,255,.4)'
        },
        {
          offset: 0.5,
          color: 'rgba(255,255,255,.12)'
        },
        {
          offset: 1,
          color: 'rgba(255,255,255,.4)'
        }
        ]
      },
      borderRadius: 0
    }
  },
  {
    name: '<25.2Mpa',
    markLine: {
      silent: true,
      symbol: false,
      label: {
        fontSize: 12,
        position: 'insideEndTop',
        fontWeight: 200,
        color: '#FF5757'
      },
      data: [{
        yAxis: 55,
        lineStyle: {
          color: '#FF5757',
          type: [
            3,
            3
          ],
          dashOffset: 2,
          width: 1
        }
      }]
    },
    type: 'line',
    smooth: true,
    animationDuration: 2000
  },
  {
    name: '25.2~40Mpa',
    markLine: {
      silent: true,
      symbol: false,
      label: {
        fontSize: 12,
        position: 'insideEndTop',
        fontWeight: 200,
        color: '#FF5757'
      },
      data: [{
        yAxis: 55,
        lineStyle: {
          color: '#FF5757',
          type: [
            3,
            3
          ],
          dashOffset: 2,
          width: 1
        }
      }]
    },
    type: 'line',
    smooth: true,
    animationDuration: 2000
  },
  {
    name: '>=40Mpa',
    markLine: {
      silent: true,
      symbol: false,
      label: {
        fontSize: 12,
        position: 'insideEndTop',
        fontWeight: 200,
        color: '#FF5757'
      },
      data: [{
        yAxis: 55,
        lineStyle: {
          color: '#FF5757',
          type: [
            3,
            3
          ],
          dashOffset: 2,
          width: 1
        }
      }]
    },
    type: 'line',
    smooth: true,
    animationDuration: 2000
  }
  ]
}

export const chartOpt5 = {
  animationEasing: 'elasticOut',
  angleAxis: {
    min: 0,
    max: 100,
    show: false,
    polarIndex: 0,
    boundaryGap: [
      '50%',
      '50%'
    ],
    startAngle: 90
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
  polar: [{
    radius: [
      '76%',
      '82%'
    ],
    center: [
      '50%',
      '50%'
    ]
  }],
  xAxis: {
    show: false,
    type: 'value'
  },
  yAxis: [{
    show: false,
    type: 'category'
  }],
  series: [{
    name: '',
    type: 'bar',
    data: [
      100
    ],
    roundCap: true,
    showBackground: true,
    backgroundStyle: {
      color: 'RGBA(235, 238, 245, 0.16)'
    },
    coordinateSystem: 'polar',
    itemStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
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
  },
  {
    radius: '75%',
    type: 'liquidFill',
    center: [
      '50%',
      '50%'
    ],
    itemStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
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
    },
    label: {
      show: false
    },
    data: [
      0.45,
      {
        direction: 'left',
        value: 0.45
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
  ]
}

// export const chartOpt5 = {
//   desc: '3d立体饼图',
//   grid,
//   color,
//   barBackground: 'RGBA(235, 238, 245, 0.06)',
//   backgroundColor: 'transparent',
//   animation: true,
//   animationEasing: 'elasticOut',
//   animationDelayUpdate: (k) => 5 * k,
//   animationDelay: (idx) => idx * 10,
//   legend: {
//     type: 'scroll',
//     data: [
//       '早早早  160',
//       '中中中  244',
//       '晚晚晚  332'
//     ],
//     icon: 'roundRect',
//     padding: 5,
//     itemGap: 20,
//     bottom: 0,
//     itemWidth: 10,
//     itemHeight: 10,
//     selectedMode: true,
//     textStyle: {
//       color: '#FFFFFF',
//       fontSize: 14,
//       lineHeight: 14,
//       rich: {
//         a: {
//           verticalAlign: 'middle'
//         }
//       },
//       padding: [
//         0,
//         0, -3,
//         0
//       ]
//     }
//   },
//   tooltip: {},
//   xAxis3D: {
//     min: -1,
//     max: 1
//   },
//   yAxis3D: {
//     min: -1,
//     max: 1
//   },
//   zAxis3D: {
//     min: -1,
//     max: 'dataMax'
//   },
//   grid3D: {
//     show: false,
//     boxHeight: 16,
//     top: '-18%',
//     viewControl: {
//       alpha: 27,
//       beta: 70,
//       rotateSensitivity: 1,
//       zoomSensitivity: 0,
//       panSensitivity: 0,
//       distance: 150
//     },
//     postEffect: {
//       enable: false,
//       bloom: {
//         enable: true,
//         bloomIntensity: 0.1
//       },
//       SSAO: {
//         enable: true,
//         quality: 'medium',
//         radius: 2
//       }
//     }
//   },
//   series: [{
//     name: '早早早  160',
//     type: 'surface',
//     parametric: true,
//     wireframe: {
//       show: false
//     },
//     pieData: {
//       name: '早早早',
//       value: 160,
//       startRatio: 0,
//       endRatio: 0.21739130434782608
//     },
//     pieStatus: {
//       selected: false,
//       hovered: false,
//       k: 0.14285714285714285
//     },
//     parametricEquation: {
//       u: {
//         min: -3.141592653589793,
//         max: 9.42477796076938,
//         step: 0.09817477042468103
//       },
//       v: {
//         min: 0,
//         max: 6.283185307179586,
//         step: 0.15707963267948966
//       }
//     }
//   },
//   {
//     name: '中中中  244',
//     type: 'surface',
//     parametric: true,
//     wireframe: {
//       show: false
//     },
//     pieData: {
//       name: '中中中',
//       value: 244,
//       startRatio: 0.21739130434782608,
//       endRatio: 0.5489130434782609
//     },
//     pieStatus: {
//       selected: false,
//       hovered: false,
//       k: 0.14285714285714285
//     },
//     parametricEquation: {
//       u: {
//         min: -3.141592653589793,
//         max: 9.42477796076938,
//         step: 0.09817477042468103
//       },
//       v: {
//         min: 0,
//         max: 6.283185307179586,
//         step: 0.15707963267948966
//       }
//     }
//   },
//   {
//     name: '晚晚晚  332',
//     type: 'surface',
//     parametric: true,
//     wireframe: {
//       show: false
//     },
//     pieData: {
//       name: '晚晚晚',
//       value: 332,
//       startRatio: 0.5489130434782609,
//       endRatio: 1
//     },
//     pieStatus: {
//       selected: false,
//       hovered: false,
//       k: 0.14285714285714285
//     },
//     parametricEquation: {
//       u: {
//         min: -3.141592653589793,
//         max: 9.42477796076938,
//         step: 0.09817477042468103
//       },
//       v: {
//         min: 0,
//         max: 6.283185307179586,
//         step: 0.15707963267948966
//       }
//     }
//   }
//   ]
// }
