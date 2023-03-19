<template>
  <div class="container">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Decorator01',
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.container {
  top: 50%;
  left: 50%;
  height: 110px;
  width: 110px;
  position: absolute;
  border-radius: 50%;
  animation: rotate_3922 1.2s linear infinite;
  background-color: #9b59b6;
  background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
  & span {
    position: absolute;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    background-color: #9b59b6;
    background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
  }

  & span:nth-of-type(1) {
    filter: blur(5px);
  }

  & span:nth-of-type(2) {
    filter: blur(10px);
  }

  & span:nth-of-type(3) {
    filter: blur(25px);
  }

  & span:nth-of-type(4) {
    filter: blur(50px);
  }

  &::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-radius: 50%;
    background-color: #989898;
    border: solid 5px #989898;
  }
}

@keyframes rotate_3922 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
