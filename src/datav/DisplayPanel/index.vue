
<script>

import Count2 from '@/datav/Count2/index.vue'
import GridPanel from '@/datav/GridPanel/index.vue'
import { h, defineComponent } from 'vue'

export default defineComponent({
  name: 'DisplayPanel',
  props: {
    list: {
      type: Array,
      default: () => [
        // { title: '设备总数', style: { gridColumn: '1/3' }, value: 23, unit: '个', color: 'linear-gradient(-90deg, #5071FF, #592CF3)' },
        { title: '物联设备', value: 38, unit: '个', color: 'linear-gradient(-90deg, #5071FF, #592CF3)' },
        { title: '物联设备', value: 23, unit: '个', color: 'linear-gradient(-90deg, #5071FF, #592CF3)' },
        { title: '物联设备', value: 62, unit: '个', color: 'linear-gradient(-90deg, #5071FF, #21CDFF)' },
        { title: '物联设备', value: 63, unit: '个', color: 'linear-gradient(-90deg, #FCE173, #21CDFF)' }
      ]
    }
  },
  setup (props, ctx) {
    return () => h(GridPanel, { class: 'display_panel' }, () => [
      props.list.map(item => {
        return h('div', { class: 'display_panel_item', style: item.style }, [
          h('div', {}, [
            item.title
          ]),
          h('div', {}, [
            h(Count2, { unit: item.unit, style: { } })
          ])
        ])
      })
    ])
  }
})
</script>

<style scoped lang="scss">
.display_panel {
  .display_panel_item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
  }
}
</style>
