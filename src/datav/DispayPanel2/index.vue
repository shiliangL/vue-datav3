<template>
  <div class="display_panel2">
    <div class="display_panel_item">
      <div class="display_panel_item_row">
        <p>254.99</p>
        <div></div>
      </div>
    </div>
    <div class="display_panel_item">
      <div class="display_panel_item_row">
        <p>254.99</p>
        <div></div>
      </div>
    </div>
    <div class="display_panel_item">
      <div class="display_panel_item_row">
        <p>254.99</p>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DisplayPanel2',
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.display_panel2 {
  width: 80%;
  padding-top: 18px;
  padding-bottom: 20px;
  border-radius: 10px;
  background: #313131;
  box-shadow: 0 6px 30px rgba(207, 212, 222, 0.3);
  // border-bottom: 4px solid #000446;

  .display_panel_item {
    width: 100%;
    height: 42px;
    position: relative;
    margin-bottom: 10px;
  }

  .display_panel_item_row {
    position: absolute;
    width: 100%;
    height: 100%;
    right: -12px;
    z-index: 10;
    border-radius: 5px 0 0 5px;
    background: linear-gradient(
      -90deg,
      rgba(0, 210, 255, 0.99),
      rgba(58, 76, 254, 0.99)
    );
  }

  .display_panel_item_row div {
    position: absolute;
    bottom: -21px;
    right: 0px;
    width: 0;
    height: 0;
    z-index: 6;
    border-top: 13px solid #24616e;
    border-bottom: 10px solid transparent;
    border-right: 13px solid transparent;
  }

  .display_panel_item_row p {
    margin: 0;
    display: flex;
    font-size: 1.9rem;
    font-weight: 500;
    align-items: baseline;
  }

  .display_panel_item_row p:before {
    content: "$";
    margin-right: 5px;
    font-size: 15px;
    font-weight: 300;
  }

  .display_panel_item_row p:after {
    content: "/ handle";
    margin-left: 5px;
    font-size: 15px;
    font-weight: 300;
  }

}
</style>
