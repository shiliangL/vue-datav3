<template>
  <div class="datav_list">
    可视化 ?????

    <div class="grid_list">
      <div class="grid_list_item">
        <coreChart
          :option="option"
          class="chart"
        ></coreChart>
      </div>
      <div class="grid_list_item">
        <coreChart
          :option="chartOpt2"
          class="chart"
        ></coreChart>
      </div>
    </div>
  </div>
</template>

<script>

import { chartOpt1, chartOpt2 } from '@/chartOpt/line'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const option = ref({})

    setTimeout(() => {
      option.value = chartOpt1
      console.log(chartOpt1)
    }, 2500)
    return {
      option,
      chartOpt2
    }
  }
})
</script>

<style scoped lang="scss">

.grid_list {
  --transition35: all 0.35s ease-in-out;
  display: grid;
  padding: 20px;
  overflow: auto;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-auto-rows: minmax(250px, auto);
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));

.grid_list_item {
  border: 1px solid #7d7d7d;
}
}
</style>
