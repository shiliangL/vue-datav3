<template>
  <section class="decorator09">
    <div class="out_box"></div>
    <div style="--d: 0.2s" class="inner_box_circle" />
    <div style="--d: 1.2s" class="inner_box_circle" />
    <div style="--d: 2.2s" class="inner_box_circle" />
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Decorator09',
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.decorator09 {
  --color: #ffe000;
  --lineColor: rgba(102, 163, 224, 0.2);

  width: 200px;
  height: 200px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    height: 10px;
    width: 10px;
    border-radius: 100%;
    top: 50%;
    left: 50%;
    margin-top: -5px;
    margin-left: -5px;
    border-top: 1px solid orange;
    animation: turn 1s infinite linear;
    filter: drop-shadow(0 0 2px var(--color)) drop-shadow(0 0 5px var(--color))
      drop-shadow(0 0 10px var(--color)) drop-shadow(0 0 20px var(--color));
  }
}

.out_box,
.out_box::after,
.out_box::before {
  border-radius: 50%;
  border: 2px solid var(--lineColor);
  border-left: 2px solid var(--color);
  border-right: 2px solid var(--color);
}

.out_box::after,
.out_box::before {
  content: "";
  left: 50%;
  top: 50%;
  position: absolute;
}

.out_box {
  width: 200px;
  height: 200px;
  position: relative;
  transform-origin: 50% 50%;
  animation: turn 1s linear infinite;
}

.out_box::before {
  width: 180px;
  height: 180px;
  margin-top: -90px;
  margin-left: -90px;
  /* 伪元素将继承父元素的动画，设置动画reverse，反向变换，可实现木有动画的效果,或重写动画效果 */
  animation: turn2 1.25s linear infinite;
}

.out_box::after {
  width: 160px;
  height: 160px;
  margin-top: -80px;
  margin-left: -80px;
  animation: turn 1.5s linear infinite;
}

.inner_box_circle {
  left: 50%;
  top: 50%;
  opacity: 0.9;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  transform-origin: 50% 50%;
  border: 2px solid var(--color);
  transform: translate(-50%, -50%);
  animation: rotate 3s linear infinite;
}

.inner_box_circle {
  animation-delay: var(--d);
}

@keyframes turn {
  100% {
    transform: rotateZ(-1turn);
  }
}

@keyframes turn2 {
  100% {
    transform: rotateZ(1turn);
  }
}

@keyframes rotate {
  100% {
    border: none;
    border-top: 2px solid var(--color);
    border-bottom: 2px solid var(--color);
    transform: translate(-50%, -50%) rotate3d(0.5, 0.5, 0.5, -720deg);
  }
}
</style>
