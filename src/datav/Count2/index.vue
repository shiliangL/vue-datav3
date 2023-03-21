<script>

import { CountUp } from 'countup.js'
import { h, ref, onMounted, watch, defineComponent, onBeforeMount } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Count2',
  props: {
    showActive: {
      desc: '是否模拟演示',
      type: Boolean,
      default: true
    },
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      default: 2040
    },
    unit: {
      type: [Number, String, Function],
      default: ''
    },
    duration: {
      type: Number,
      default: 1500
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    decimals: {
      type: Number,
      default: 0,
      validator (value) {
        return value >= 0
      }
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    separator: {
      type: String,
      default: ','
    },
    decimal: {
      type: String,
      default: '.'
    },
    color: {
      type: String
    },
    useEasing: {
      type: Boolean,
      default: true
    },
    transition: {
      type: String,
      default: 'linear'
    }
  },
  setup (props, { emit, expose, slots }) {
    const targetRef = ref(null)
    let showActiveTimer = null
    let count2 = null
    // const config = {
    //   startVal?: number; // number to start at (0)
    //   decimalPlaces?: number; // number of decimal places (0)
    //   duration?: number; // animation duration in seconds (2)
    //   useGrouping?: boolean; // example: 1,000 vs 1000 (true)
    //   useIndianSeparators?: boolean; // example: 1,00,000 vs 100,000 (false)
    //   useEasing?: boolean; // ease animation (true)
    //   smartEasingThreshold?: number; // smooth easing for large numbers above this if useEasing (999)
    //   smartEasingAmount?: number; // amount to be eased for numbers above threshold (333)
    //   separator?: string; // grouping separator (',')
    //   decimal?: string; // decimal ('.')
    //   // easingFn: easing function for animation (easeOutExpo)
    //   easingFn?: (t: number, b: number, c: number, d: number) => number;
    //   formattingFn?: (n: number) => string; // this function formats result
    //   prefix?: string; // text prepended to result
    //   suffix?: string; // text appended to result
    //   numerals?: string[]; // numeral glyph substitution
    //   enableScrollSpy?: boolean; // start animation when target is in view
    //   scrollSpyDelay?: number; // delay (ms) after target comes into view
    //   scrollSpyOnce?: boolean; // run only once
    //   onCompleteCallback?: () => any; // gets called when animation completes
    // }
    function initCount2 () {
      if (!CountUp) return new Error('CountUp 初始化失败,请引入相关依赖')
      const options = {
        startVal: 0
      }
      count2 = new CountUp(targetRef.value, props.endVal, options)
      !count2.error ? count2.start() : console.error(count2.error)
    }

    // 指定范围随机数
    function getRandom (n = 10, m = 50) {
      return Math.floor(Math.random() * (m - n + 1) + n)
    }

    function update (newVal) {
      count2 && count2.update(newVal)
    }

    onMounted(() => {
      initCount2()

      if (props.showActive) {
        showActiveTimer = setInterval(() => {
          update(getRandom(1024, 2048))
        }, 4500)
      }
    })

    onBeforeMount(() => {
      props.showActive && clearInterval(showActiveTimer)
    })

    watch(() => props.endVal, (newVal, oldVale) => {
      count2 && count2.update(newVal)
    })

    expose({
      update
    })

    return () => h('span', { class: 'number_value' }, [
      h('span', { class: 'prefix' }),
      h('span', { class: 'count2', ref: targetRef }),
      h('span', { class: 'unit' }, props.unit)
    ])
  }

})
</script>

<style scoped lang="scss">
.number_value{
  display: flex;
  align-items: baseline;
}
.count2 {
  font-family: fantasy;
  font-size: 32px;
  background: linear-gradient(
    -90deg,
    rgba(0, 210, 255, 0.99),
    rgba(58, 76, 254, 0.99)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
