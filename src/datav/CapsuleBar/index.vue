
<script>

// import Count2 from '@/datav/Count2/index.vue'
import { h, defineComponent, reactive, computed, watchEffect } from 'vue'

export default defineComponent({
  name: 'CapsuleBar',
  props: {
    config: {
      type: Object,
      desc: '配置项-常规配置-不参与数据响应式',
      default: () => ({
        title: '智能设备总数',
        unit: '个',
        list: [
          { title: '在线个数', value: 62, unit: '个', color: 'linear-gradient(-90deg, #5071FF, #21CDFF)' },
          { title: '待机个数', value: 23, unit: '个', color: 'linear-gradient(-90deg, #5071FF, #592CF3)' },
          { title: '离线个数', value: 6, unit: '个', color: 'linear-gradient(-90deg, #FCE173, #21CDFF)' }
        ]
      })
    }
  },
  setup (props, ctx) {
    const defaultConfig = reactive({
      title: '智能设备总数',
      unit: '个',
      list: [
        { title: '在线个数', value: 62, unit: '个', color: 'linear-gradient(-90deg, #5071FF, #21CDFF)' },
        { title: '待机个数', value: 23, unit: '个', color: 'linear-gradient(-90deg, #5071FF, #592CF3)' },
        { title: '离线个数', value: 6, unit: '个', color: 'linear-gradient(-90deg, #FCE173, #21CDFF)' }
      ]
    })

    const summary = computed(() => {
      return defaultConfig.list.reduce((sum, cur) => ((cur.value || 0) + sum), 0) || 0
    })

    watchEffect(() => props.config, (newConfig) => {
      Object.assign(defaultConfig, newConfig || {})
    })

    function getRowPercentage (item) {
      return item.value ? ((item.value / summary.value) * 100 + '%') : '0%'
    }

    return () => h('div', { class: 'capsule_bar' }, [
      h('div', { class: 'capsule_bar_title' }, [
        h('div', { class: 'title' }, defaultConfig.title),
        h('div', { class: 'value' }, [
          summary.value
        ])
      ]),
      h('div', { class: 'capsule_bar_content' }, [
        h('div', { class: 'capsule_bar_content_top', style: { 'grid-template-columns': `repeat(${defaultConfig.list.length}, 1fr)` } }, [
          defaultConfig.list.map(item => {
            return h('div', { class: 'capsule_bar_content_top_item' }, [
              h('div', { class: 'capsule_bar_content_top_item_title' }, [
                item.title
              ]),
              h('div', { class: 'capsule_bar_content_top_item_value' }, [
                item.value,
                item.unit
              ])
            ])
          })
        ]),
        h('div', { class: 'capsule_bar_content_progress progress_active' }, [
          defaultConfig.list.map(item => {
            return h('div', { class: 'capsule_bar_content_progress_item', style: { background: item.color || '#3483df', width: getRowPercentage(item) } })
          })
        ])
      ])
    ])
  }
})
</script>

<style scoped lang="scss">
.capsule_bar {
  .capsule_bar_title {
    display: flex;
    align-items: baseline;
  }

  .capsule_bar_content {
    .capsule_bar_content_top {
      display: grid;
      margin: 4px 0;
    }
  }

  .capsule_bar_content_progress {
    height: 10px;
    width: 100%;
    padding: 2px;
    display: flex;
    overflow: hidden;
    align-items: center;
    box-shadow: 0 0 3px #999;
    border-radius: 5px;
    // border: 1px solid rgba(225, 225, 225, 0.45);
    .capsule_bar_content_progress_item {
      height: 100%;
      border-radius: 5px;
      background: #3483df;
      transition: all 0.6s ease;
    }
  }
}
</style>
