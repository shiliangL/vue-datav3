<template>
  <div class="app_grid_card_list">
    <div
      :key="index"
      class="grid_card_list_item"
      v-for="(item, index) in 20"
    >
      <div class="template_img_wrap">
        <coreChart class="chart"></coreChart>
        <div class="template_img_hover flex_center">
          <a
            class="preview_btn"
            target="_blank"
            href="#/preview"
          >查看配置</a>
        </div>
        <div class="template_badge">
          <span>企业版</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { defineComponent } from 'vue'
import coreChart from './datav/coreChart/index.vue'

export default defineComponent({
  components: {
    coreChart
  },
  setup () {
    return {

    }
  }
})
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">

.flex_center{
  display: flex;
  align-items: center;
  justify-content: center;
}

.app_grid_card_list {
  --transition35: all 0.35s ease-in-out;
  display: grid;
  padding: 20px;
  overflow: auto;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-auto-rows: minmax(250px, auto);
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));

  .grid_card_list_item {
    display: flex;
    overflow: hidden;
    position: relative;
    flex-direction: column;
    transition: var(--transition35);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(169, 214, 254, 0.457);

    .template_img_wrap {
      flex: 1;
      overflow: hidden;
      position: relative;
      .chart {
        font-size: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: var(--transition35);
      }

      .template_img_hover {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: var(--transition25);

        .preview_btn {
          color: #fff;
          border-radius: 2px;
          padding: 6px 54px;
          transform: scale(0);
          transition: var(--transition35);
          background: linear-gradient(
            -90deg,
            rgba(0, 210, 255, 0.8),
            rgba(58, 76, 254, 0.8)
          );
        }
      }

      .template_badge {
        color: #fff;
        top: 6px;
        right: 6px;
        width: 58px;
        height: 22px;
        font-size: 12px;
        display: flex;
        position: absolute;
        border-radius: 2px;
        align-items: center;
        justify-content: center;
        // background: linear-gradient(60deg, #f76943 0%, #f1bf70 100%);
        background: linear-gradient(
          -90deg,
          rgba(0, 210, 255, 0.8),
          rgba(58, 76, 254, 0.8)
        );
      }
    }

    &:hover {
      .template_img_hover {
        background-color: rgba(0, 0, 0, 0.55);
      }
      .template_img_wrap{
        .template_img_hover{
          .preview_btn {
            transform: scale(1);
          }
        }
      }
      border: 1px solid rgba(58, 76, 254, 0.88);
    }
  }
}
</style>
