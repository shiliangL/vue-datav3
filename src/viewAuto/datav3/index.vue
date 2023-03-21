<template>
  <div>

    <div class="WaterChart">
      <WaterChart></WaterChart>
    </div>

    <div class="WaterChart">
      <CapsuleBar></CapsuleBar>
    </div>

    <div class="swiperCard">
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
