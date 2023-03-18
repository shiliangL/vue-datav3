
<script>

import Cloud from './cloud'
import { useEventListener } from '@vueuse/core'
import { randomDarkRgbColor } from '@/chartOpt/index'
import { h, ref, defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'TagCloud',
  props: {
    data: {
      type: Array,
      default: () => [
        '智慧城市', '数字孪生',
        '智慧城市', '数字孪生',
        '智慧城市', '数字孪生',
        '智慧城市', '数字孪生',
        '智慧城市', '数字孪生',
        '智慧城市', '数字孪生',
        '智慧城市', '数字孪生',
        '智慧城市', '数字孪生',
        '智慧城市', '数字孪生'
      ]
    }
  },
  setup (props, { emit }) {
    const refElement = ref(null)

    function init (container) {
      const list = props.data.map(item => ({
        text: item,
        color: randomDarkRgbColor()
      }))
      Cloud(container, list || [], {})
    }

    function clickTagItem ({ target }) {
      const { className, dataset } = target
      if (className === 'tagcloud--item') emit('click', { ...dataset })
    }

    onMounted(() => {
      console.log('ref', ref)
      init(refElement.value)
      useEventListener(refElement.value, 'click', (e) => clickTagItem(e))
    })
    return () => h('dev', { ref: refElement, class: 'tag_cloud' })
  }
})
</script>

<style scoped>
.tag_cloud {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
