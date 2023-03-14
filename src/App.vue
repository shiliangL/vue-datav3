<template>
  <div class="app_container">
    <!-- <h1> defineComponent </h1> -->
    <coreChart></coreChart>
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
