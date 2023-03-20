<template>
  <div>
    表格应用

    <div class="WaterChart">
      <WaterChart></WaterChart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style scoped>
.WaterChart{
  height: 220px;
  width: 360px;
}
</style>
