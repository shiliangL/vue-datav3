<template>
  <div>
    可视化
    <div class="chart_3d">
      <coreChart class="chart"></coreChart>
    </div>
  </div>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">

.chart_3d{
  width: 360px;
  height: 320px;
}
</style>
