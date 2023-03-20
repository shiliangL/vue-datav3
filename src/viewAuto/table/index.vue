<template>
  <div>
    表格

    <div class="RecycleScroller">
      <recycleScroller
        class="scroller"
        :items="list"
        :item-size="32"
        key-field="id"
        v-slot="{ item }"
        ref="recycleScrollerRef"
      >
        <div class="user">
          {{ item.name }} {{ item.id }}
        </div>
      </recycleScroller>
    </div>

    <div class="WaterChart">
      <WaterChart></WaterChart>
    </div>

    <div class="swiperCard">
      <SwiperCard></SwiperCard>
    </div>
  </div>
</template>

<script>

import { nanoid } from 'nanoid'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import { RecycleScroller } from 'vue-virtual-scroller'
import { ref, defineComponent, onMounted } from 'vue'

export default defineComponent({
  components: {
    RecycleScroller
  },
  setup () {
    const recycleScrollerRef = ref(null)
    const list = new Array(100000).fill(0).map((item, index) => ({ name: 'index' + index, id: nanoid() }))

    onMounted(() => {
      console.log('onMounted', recycleScrollerRef)
    })
    return {
      list,
      recycleScrollerRef
    }
  }
})
</script>

<style scoped lang="scss">
.RecycleScroller {
  height: 200px;
  overflow: auto;
  border: 1px solid #eee;

  .scroller {
    height: 100%;
  }

  .user {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}

.swiperCard{
  height: 450px;
  overflow: hidden;
}

.WaterChart{
  height: 220px;
  width: 360px;
}
</style>
