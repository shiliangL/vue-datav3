<template>
  <div class="datav_list">
    <div class="grid_list">
      <div class="grid_list_item">
        <TagCloud @clickRow="clickRow($event)"></TagCloud>
      </div>
      <div
        class="grid_list_item"
        :key="itemOptName"
        v-for="itemOptName in chartOptList"
      >
        <coreChart
          class="chart"
          :option="chartOpt[itemOptName]"
        ></coreChart>
      </div>
    </div>
  </div>
</template>

<script>

import * as chartOpt from '@/chartOpt/line'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  setup () {
    const chartOptList = computed(() => {
      return Object.keys(chartOpt)
    })

    function clickRow (item) {
      console.error(item)
    }
    console.log('chartOptList', chartOptList)
    return {
      clickRow,
      chartOpt,
      chartOptList
    }
  }
})
</script>

  <style scoped lang="scss">
.grid_list {
  --transition35: all 0.35s ease-in-out;
  display: grid;
  padding: 10px;
  overflow: auto;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  grid-auto-rows: minmax(210px, auto);
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));

  .grid_list_item {
    border: 1px solid #2d3058;
  }
}
</style>
