<template>
  <div class="component_dev">
    <div> 组件调试 </div>
    <div class="app_grid_card_list">
      <div
        class="grid_card_list_item"
        v-for="(item) in cardList"
        :key="item.__scopeId"
      >
        <div class="template_img_wrap">
          <component :is="item" />
          <div class="template_badge">
            <span> {{  item.name }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { defineComponent } from 'vue'

import Count2 from '@/datav/Count2/index.vue'
import ScanningCard from './Scanning.vue'

import DatavCard01 from './DatavCard01.vue'
import DatavCard02 from './DatavCard02.vue'
import DatavCard03 from './DatavCard03.vue'
import DatavCard04 from './DatavCard04.vue'

import Decorator01 from './Decorator01.vue'
import Decorator02 from './Decorator02.vue'
import Decorator03 from './Decorator03.vue'
import Decorator04 from './Decorator04.vue'
import Decorator05 from './Decorator05.vue'
import Decorator06 from './Decorator06.vue'
import Decorator07 from './Decorator07.vue'
import Decorator08 from './Decorator08.vue'
import Decorator09 from './Decorator09.vue'
import Decorator10 from './Decorator10.vue'
import Decorator11 from './Decorator11.vue'
import Decorator12 from './Decorator12.vue'
import Decorator13 from './Decorator13.vue'

export default defineComponent({
  setup () {
    console.log('Decorator07', Decorator07)
    const cardList = [
      Count2,
      ScanningCard,

      DatavCard01,
      DatavCard02,
      DatavCard03,
      DatavCard04,

      Decorator01,
      Decorator02,
      Decorator03,
      Decorator04,
      Decorator05,
      Decorator06,
      Decorator07,
      Decorator08,
      Decorator09,
      Decorator10,
      Decorator11,
      Decorator12,
      Decorator13

    ]
    return {
      cardList
    }
  }
})
</script>

<style lang="scss">
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
      display: flex;
      align-items: center;
      justify-content: center;

      .chart {
        font-size: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: var(--transition35);
      }

      .template_badge {
        color: #fff;
        top: 6px;
        right: 6px;
        font-size: 12px;
        padding: 4px 6px;
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
      border: 1px solid rgba(58, 76, 254, 0.88);
    }
  }
}
</style>
