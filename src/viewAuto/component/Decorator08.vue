<template>
  <div class="loading">
    <div class="load"></div>
    <div class="load"></div>
    <div class="load"></div>
    <div class="load"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Decorator07',
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">

.loading {
  height: 50px;
  display: flex;
  transform: rotate(180deg);
}

.load {
  width: 2px;
  height: 33px;
  margin: 0.1em;
  border-radius: 5px;
  animation: 1s move6 infinite;
  background: linear-gradient(126deg, rgba(0, 210, 255, 0.99), rgba(58, 76, 254, 0.99));
}

.load:nth-child(1) {
  animation-delay: 0.2s;
}

.load:nth-child(2) {
  animation-delay: 0.4s;
}

.load:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes move6 {
  0% {
    height: 0.2em;
  }

  25% {
    height: 0.7em;
  }

  50% {
    height: 1.5em;
  }

  100% {
    height: 0.2em;
  }
}
</style>
