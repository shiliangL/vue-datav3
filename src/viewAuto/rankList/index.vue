<template>
  <TransitionGroup
    tag="div"
    name="fade"
    class="rank_list_wrapper"
  >
    <ProgressItem
      v-for="item in items"
      :key="item.id"
      :percentage="item.value"
    ></ProgressItem>
  </TransitionGroup>
</template>

<script>

import { nanoid } from 'nanoid'
import ProgressItem from '../progress/index.vue'
import { ref, defineComponent, TransitionGroup, nextTick } from 'vue'

export default defineComponent({
  components: {
    ProgressItem,
    TransitionGroup
  },
  setup () {
    const items = ref(makeList())

    // const list = this.isSort ? (this.dataList.slice(0).sort(({ value: a }, { value: b }) => (b - a))) : this.dataList

    function makeList (n = 1000) {
      return new Array(10).fill(0).map(item => ({
        id: nanoid(),
        value: Math.round(Math.random() * n)
      }))
    }

    function insert () {
      items.value.unshift({
        id: nanoid(),
        value: Math.round(Math.random() * 1000)
      })

      nextTick(() => {
        shuffle()
      })
    }

    function reset () {
      items.value = makeList()
    }

    function shuffle () {
      // items.value = items.value.slice(0).sort(({ value: a }, { value: b }) => (b - a))
      items.value = items.value.sort(({ value: a }, { value: b }) => (b - a))
      console.log('items.value', items.value)
    }

    function remove (item) {
      const i = items.value.indexOf(item.id)
      if (i > -1) {
        items.value.splice(i, 1)
      }
    }

    setInterval(() => {
      items.value.forEach(item => {
        item.value = Math.round(Math.random() * 100)
      })
      shuffle()
    }, 4500)

    return {
      items,
      insert,
      reset,
      shuffle,
      remove
    }
  }
})
</script>

<style scoped lang="scss">

.rank_list_wrapper{
  width: 360px!important;
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
