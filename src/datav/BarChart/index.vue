
<script>

// eslint-disable-next-line no-unused-vars
import { hexToRgba } from '@/chartOpt/index'
import CoreChart from '@/datav/CoreChart/index.vue'
import { h, defineComponent } from 'vue'
export default defineComponent({
  name: 'BarChart',
  setup () {
    function generateOpt () {

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
