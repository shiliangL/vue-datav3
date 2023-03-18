<script>
import { h, defineComponent } from 'vue'

export default defineComponent({
  name: 'GridPanel',
  props: {
    column: {
      type: [Number],
      desc: '列数',
      default: () => 2
    },
    gap: {
      type: [Number],
      desc: '间隔',
      default: () => 0
    },
    gridStyle: {
      type: Object,
      desc: '组件属性对象',
      default: () => ({})
    }
  },
  setup (props, { slots }) {
    return () => h('div', {
      class: 'grid_panel',
      style: {
        '--dva_column_num': props.column,
        '--dva_grid_gap': `${props.gap}px`,
        ...props.gridStyle
      }
    }, [
      // 识别标记插槽组件
      slots.default ? slots.default() : null
    ])
  }
})
</script>

<style scoped lang="scss">
.grid_panel {
  width: 100%;
  height: 100%;
  display: grid;
  box-sizing: border-box;
  grid-gap: var(--dva_grid_gap);
  grid-template-columns: repeat(var(--dva_column_num), 1fr);
  // grid-template-rows: repeat(var(--dva_column_num), 1fr);
}
</style>
