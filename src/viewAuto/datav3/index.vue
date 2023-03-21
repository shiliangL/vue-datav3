<template>
  <div>

    <div class="DatavChart">
      <PieChart></PieChart>
    </div>

    <div class="DatavChart">
      <WaterChart></WaterChart>
    </div>

    <div class="DatavChart">
      <CapsuleBar></CapsuleBar>
    </div>

    <div class="SwiperCard">
      <SwiperCard></SwiperCard>
    </div>
  </div>
</template>

<script>

// import { nanoid } from 'nanoid'
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {
    }
  }
})
</script>

<style scoped lang="scss">
.SwiperCard{
  height: 340px;
  overflow: hidden;
}

.DatavChart{
  height: 180px;
  width: 360px;
}
</style>
