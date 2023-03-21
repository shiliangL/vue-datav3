<template>
  <div class="datav3_chart">
    <div class="datav3_chart_grid">
      <div class="grid_item">
        <PieChart></PieChart>
      </div>
      <div class="grid_item">
        <PieChartMix></PieChartMix>
      </div>
      <div class="grid_item">
        <WaterChart></WaterChart>
      </div>
      <div class="grid_item">
        <LineChart></LineChart>
      </div>
      <div class="grid_item">
        <BarChart></BarChart>
      </div>
      <div class="grid_item">
        <RankList></RankList>
      </div>
      <div class="grid_item">
        <CapsuleBar></CapsuleBar>
      </div>
      <div class="grid_item">
        <DisplayPanel></DisplayPanel>
      </div>
      <!-- <div class="SwiperCard">
        <SwiperCard></SwiperCard>
      </div> -->
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
.datav3_chart_grid {
  --transition35: all 0.35s ease-in-out;
  display: grid;
  padding: 10px;
  overflow: auto;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  grid-auto-rows: minmax(220px, auto);
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  .grid_item {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #2d3058;
  }
  .w100p{
    width: 100%;
  }
}
</style>
