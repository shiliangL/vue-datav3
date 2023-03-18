<template>
  <div class="progress_x">
    <button @click="insert">insert at random index</button>
    <button @click="reset">reset</button>
    <button @click="shuffle">shuffle</button>

    <div class="progress">
      <TransitionGroup
        tag="div"
        name="fade"
        class="progress_wrapper_list"
      >
        <div class="progress_wrapper">
          <div class="progress_title">
            <div> 智慧城市 </div>
            <div> 90 </div>
          </div>
          <div class="progress_bar decorator2">
            <div class="progress_bar_out">
              <div class="progress_bar_inner"></div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>

</template>

<script>

import { nanoid } from 'nanoid'
import { h, ref, defineComponent, TransitionGroup, nextTick } from 'vue'

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
        item.value = Math.round(Math.random() * 500)
      })
      shuffle()
    }, 2500)

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
.progress {
  width: 60%;
}

.progress_wrapper {
  width: 100%;
  color: #fff;
  overflow: hidden;
  padding: 10px 0;
  position: relative;
  display: inline-block;
  box-sizing: border-box;

  .progress_title {
    display: flex;
    padding: 0 4px;
    align-items: baseline;
    justify-content: space-between;
  }
  .progress_bar {
    height: 12px;
    padding: 2px;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 0 3px #999;
    border: 1px solid rgba(225, 225, 225, 0.45);
    .progress_bar_out {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
      .progress_bar_inner {
        width: 30%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        border-radius: 5px;
        transition: all 0.6s ease;
        background: linear-gradient(-90deg, #00fcae, #006388);
      }
    }

    &.decorator {
      &::after {
        left: 30%;
        top: 50%;
        content: "";
        width: 4px;
        height: 160%;
        position: absolute;
        transform: translateY(-50%);
        background: linear-gradient(0deg, #00fcae, #006388);
      }
    }
  }
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
