
<script>

import { h, defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Decorator06',
  setup () {
    return () => h('div', { class: 'loader' })
  }
})
</script>

<style scoped>

</style>

<style scoped lang="scss">
.loader {
  position: relative;
  margin: auto;
  box-sizing: border-box;
  background-clip: padding-box;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transform-origin: 50% 60%;
  border: 4px solid rgba(255, 255, 255, 0.1);
  transform: perspective(200px) rotateX(72deg);
  -webkit-mask: linear-gradient(rgba(24, 24, 24, 0.2), rgba(24, 24, 24,0.9) 90%);
}

.loader:before, .loader:after {
  content: "";
  position: absolute;
  margin: -4px;
  box-sizing: inherit;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  opacity: 0.05;
  border: inherit;
  border-color: transparent;
  animation: spinner-spin 1.2s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, spinner-fade 1.2s linear infinite;
}

.loader:before {
  border-top-color: #66e6ff;
}

.loader:after {
  border-top-color: #f0db75;
  animation-delay: 3.5s;
}

@keyframes spinner-spin {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinner-fade {
  20% {
    opacity: 0.1;
  }

  40% {
    opacity: 1;
  }

  60% {
    opacity: 0.1;
  }
}

</style>
