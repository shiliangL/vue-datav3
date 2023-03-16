
<script>
import { h, defineComponent } from 'vue'
export default defineComponent({
  setup () {
    return () => h('div', {
      class: 'datav_core_chart'
    })
  }
})
</script>

<style scoped>
.datav_core_chartP {
  width: 100%;
  height: 100%;
}
</style>
