<template>
  <div class="App">
    <h1> defineComponent </h1>
    <div style="height:520px">
      <coreChart></coreChart>
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
