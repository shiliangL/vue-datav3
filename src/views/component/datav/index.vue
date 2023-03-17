<template>
  <div class="datav_list">
    可视化 ?????
    <div class="chart_3d">
      <coreChart :option="option" class="chart"></coreChart>
    </div>
    <div class="chart_3d">
      <coreChart :option="chartOpt2" class="chart"></coreChart>
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
.datav_list{
  display: grid;
}
.chart_3d{
  width: 360px;
  height: 320px;
  border: 1px solid #7d7d7d;
}
</style>
