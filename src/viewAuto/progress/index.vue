<template>
  <div class="progress">
    <button @click="insert">insert at random index</button>
    <button @click="reset">reset</button>
    <button @click="shuffle">shuffle</button>

    <TransitionGroup
      tag="ul"
      name="fade"
      class="container"
    >
      <div
        v-for="item in items"
        class="item"
        :key="item.id"
      >
        {{ item.value }}
        <button @click="remove(item)">x</button>
      </div>
    </TransitionGroup>
  </div>

</template>

<script>

import { nanoid } from 'nanoid'
import { ref, defineComponent, TransitionGroup, onUpdated } from 'vue'

export default defineComponent({
  components: {
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
    }

    function reset () {
      items.value = makeList()
    }

    function shuffle () {
      items.value = items.value.slice(0).sort(({ value: a }, { value: b }) => (b - a))
      console.log('items.value', items.value)
    }

    function remove (item) {
      const i = items.value.indexOf(item.id)
      if (i > -1) {
        items.value.splice(i, 1)
      }
    }

    onUpdated(() => {
      shuffle()
    })

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

<style scoped>
.container {
  position: relative;
  padding: 0;
}

.item {
  width: 100%;
  height: 30px;
  color: #fff;
  border: 1px solid #666;
  box-sizing: border-box;
  background-color: #409eff;
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
