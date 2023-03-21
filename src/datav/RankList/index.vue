
<script>

import { nanoid } from 'nanoid'
import ProgressBar from '@/datav/ProgressBar/index.vue'
import { h, ref, defineComponent, TransitionGroup } from 'vue'

export default defineComponent({
  name: 'RankList',
  setup (props, ctx) {
    function makeList (n = 1000) {
      return new Array(10).fill(0).map(item => ({
        id: nanoid(),
        value: Math.round(Math.random() * n)
      }))
    }
    const dataList = ref(makeList())

    // const list = this.isSort ? (this.dataList.slice(0).sort(({ value: a }, { value: b }) => (b - a))) : this.dataList
    // eslint-disable-next-line no-unused-vars
    function makeSort () {
      // dataList.value = dataList.value.slice(0).sort(({ value: a }, { value: b }) => (b - a))
      dataList.value = dataList.value.sort(({ value: a }, { value: b }) => (b - a))
      // console.log('dataList.value', dataList.value)
    }

    setInterval(() => {
      dataList.value.forEach(item => {
        item.value = Math.round(Math.random() * 100)
      })
      makeSort()
    }, 8600)

    return () => h(TransitionGroup, {
      tag: 'div',
      name: 'fade',
      class: 'rank_list_wrapper'
    }, [
      dataList.value.map(item => {
        return h(ProgressBar, { key: item.id, percentage: item.value })
      })
    ])
  }
})
</script>

<style scoped lang="scss">
.rank_list_wrapper {
  width: 360px !important;
}

/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>
