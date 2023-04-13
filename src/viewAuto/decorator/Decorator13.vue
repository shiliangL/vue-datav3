<template>
  <div class="container">
    <!-- Decorator13 -->
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Decorator13',
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.container {
  width: 280px;
  position: relative;
  text-align: center;
  height: calc(4620px / 35);
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(./imgs/light_particle.png);
  animation: rotate 1s infinite steps(35, end);

  &::after {
    content: "";
    position: absolute;
    width: 312px;
    height: 183px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(./imgs/light2.png);
  }
}
@keyframes rotate {
  0% {
    background-position-y: 0px;
  }
  100% {
    background-position-y: -4620px;
  }
}
</style>
