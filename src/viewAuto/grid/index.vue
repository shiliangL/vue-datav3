<template>
  <div>
    网格布局
    <div class="TagCloud">
      <TagCloud></TagCloud>
    </div>
    <div class="grid">
      <gridPanel
        :column="2"
        :gap="10"
      >
        <!-- 'gridColumn': '1/3',  'gridRow': '1 / 2'} -->
        <div :style="{background:list[1]}"> 111 </div>
        <div :style="{background:list[2]}"> 222 </div>
        <div :style="{background:list[0], 'gridColumn': '1/3'}"> 000 </div>
        <div :style="{background:list[3]}"> 333 </div>
        <div :style="{background:list[4]}"> 333 </div>
      </gridPanel>
    </div>
  </div>
</template>

<script>

import { randomDarkRgbColor } from '@/chartOpt/index'
// import gridPanel from '@/datav/gridPanel/index.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    // gridPanel
  },
  setup () {
    const list = new Array(10).fill(0).map(item => randomDarkRgbColor())
    console.log(list, '=list=')
    return {
      list
    }
  }
})
</script>

<style scoped>
.grid {
  height: 500px;
}

.TagCloud {
  width: 400px;
  height: 300px;
  margin: 10px;
  border: 1px solid #eeee;
}
</style>
