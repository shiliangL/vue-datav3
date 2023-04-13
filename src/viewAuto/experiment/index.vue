<template>
  <div class="experiment">
    <div class="datav_card_list">
      <div class="datav_card_list_01"></div>
      <div class="datav_card_list_02"></div>
      <div class="datav_card_list_03"></div>
      <div class="datav_card_list_04" style="--color_line: #3c91fa"></div>
      <div class="datav_card_list_04" style="--color_line: #f9aa49"></div>
      <div class="datav_card_list_04" style="--color_line: #63ae3b"></div>
      <div class="datav_card_list_04" style="--color_line: #dd555d"></div>

      <div class="datav_card_list_044">
        <div class="after"></div>
        datav_card_list_044
      </div>

      <div class="datav_card_list_05"></div>
    </div>

    <div class="RecycleScroller" v-if="0">
      <recycleScroller
        class="scroller"
        :items="list"
        :item-size="32"
        key-field="id"
        v-slot="{ item }"
        ref="recycleScrollerRef"
      >
        <div class="user">{{ item.name }} {{ item.id }}</div>
      </recycleScroller>
    </div>

    <div class="grid">
      <gridPanel :column="2" :gap="10">
        <!-- 'gridColumn': '1/3',  'gridRow': '1 / 2'} -->
        <div :style="{ background: list[1] }">111</div>
        <div :style="{ background: list[2] }">222</div>
        <div :style="{ background: list[0], gridColumn: '1/3' }">000</div>
        <div :style="{ background: list[3] }">333</div>
        <div :style="{ background: list[4] }">333</div>
      </gridPanel>
    </div>
  </div>
</template>

<script>
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import { RecycleScroller } from 'vue-virtual-scroller'
import { randomDarkRgbColor } from '@/chartOpt/index'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    RecycleScroller
  },
  setup () {
    const list = new Array(10).fill(0).map((item) => randomDarkRgbColor())
    console.log(list, '=list=')
    return {
      list
    }
  }
})
</script>

<style scoped lang="scss">
.experiment {
  padding: 20px;
}

.grid {
  height: 500px;
}

.datav_card_list {
  > div {
    margin: 10px 0;
  }
}

.datav_card_list_01 {
  width: 328px;
  height: 88px;
  border: 1px solid;
  background: rgba(24, 76, 120, 0.5);
  border-image: linear-gradient(
      0deg,
      rgba(0, 213, 255, 0.45),
      rgba(48, 88, 255, 0.45)
    )
    1 1;
  box-shadow: 0px 6px 12px 0px rgba(60, 145, 250, 0.25);
}
.datav_card_list_02 {
  width: 328px;
  height: 88px;
  background: rgba(12, 65, 61, 0.5);
  border: 1px solid;
  border-image: linear-gradient(
      0deg,
      rgba(38, 229, 218, 0.45),
      rgba(47, 186, 93, 0.45)
    )
    1 1;
  box-shadow: 0px -4px 10px 0px rgba(28, 154, 125, 0.35);
}
.datav_card_list_03 {
  width: 157px;
  height: 96px;
  background: linear-gradient(
    0deg,
    rgba(80, 113, 255, 0.2),
    rgba(34, 196, 189, 0.2)
  );
  box-shadow: 0px -4px 10px 0px rgba(81, 159, 255, 0.3);
  border-radius: 4px;
}

.datav_card_list_04 {
  --color_line: #3c91fa;
  width: 480px;
  height: 40px;
  overflow: hidden;
  position: relative;
  background: rgba(55, 83, 112, 0.35);
  &::after {
    content: "";
    right: 0;
    bottom: 0;
    height: 10px;
    width: 10px;
    position: absolute;
    background: #56799d;
    clip-path: polygon(51% 100%, 100% 50%, 100% 100%);
  }
  &::before {
    content: "";
    left: 0;
    width: 2px;
    height: 100%;
    position: absolute;
    background: var(--color_line);
  }
}

.datav_card_list_044 {
  --color_line: #3c91fa;
  width: 480px;
  height: 40px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  background: rgba(55, 83, 112, 0.35);
  background-image: linear-gradient(
    135deg,
    rgb(77, 204, 253) 0%,
    rgb(69, 117, 237) 75%
  );
  .after {
    left: 0;
    top: 0;
    height: 70px;
    width: 200px;
    position: absolute;
    transform: rotate(310deg);
    transform-origin: 12px 50px;
    backdrop-filter: blur(1px);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 12px;
    color: rgba(255, 255, 255, 0.75);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 26px, rgba(0, 0, 0, 0.04) 0px 0px 6px;
  }
  &::after {
    content: "";
    right: 0;
    bottom: 0;
    height: 10px;
    width: 10px;
    position: absolute;
    background: #56799d;
    clip-path: polygon(51% 100%, 100% 50%, 100% 100%);
  }
  &::before {
    z-index: 2;
    content: "";
    left: 0;
    width: 2px;
    height: 100%;
    position: absolute;
    background: var(--color_line);
  }
}

.datav_card_list_05 {
  --borderWidth: 1px;

  width: 328px;
  height: 88px;
  background: #000;
  position: relative;
  border-radius: var(--borderWidth);

  &:after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    z-index: -1;
    border-radius: calc(2 * var(--borderWidth));
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }

  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}
</style>
