<template>
  <div class="list grow-melt middle-stagger">
    <div class="list-item"></div>
    <div class="list-item"></div>
    <div class="list-item"></div>
    <div class="list-item"></div>
    <div class="list-item"></div>
    <div class="list-item"></div>
    <div class="list-item"></div>
    <div class="list-item"></div>
    <div class="list-item"></div>
    <div class="list-item"></div>
    <div class="list-item"></div>
    <div class="list-item"></div>
    <div class="list-item"></div>
    <div class="list-item"></div>
    <div class="list-item"></div>
    <div class="list-item"></div>
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
// 绝对值
@function abs($v) {
  @return max(#{$v}, calc(-1 * #{$v}));
}

// 中位数
@function middle($v) {
  @return calc(0.5 * (#{$v} - 1));
}

// 数轴上两点距离
@function dist-1d($v1, $v2) {
  $v-delta: calc(#{$v1} - #{$v2});
  @return #{abs($v-delta)};
}

.list {
  --n: 16;
  display: flex;
  flex-wrap: wrap;
  --blue-color-1: #6ee1f5;
  justify-content: space-evenly;

  &-item {
    --p: 2vw;
    --gap: 1vw;
    --bg: var(--blue-color-1);

    @for $i from 1 through 16 {
      &:nth-child(#{$i}) {
        --i: #{$i - 1};
      }
    }
    padding: var(--p);
    margin: var(--gap);
    box-shadow: inset 0 0 0 var(--p) var(--bg);
  }

  &.grow-melt {
    .list-item {
      --t: 2s;
      animation-name: grow, melt;
      animation-duration: var(--t);
      animation-iteration-count: infinite;
    }
  }

  &.middle-stagger {
    .list-item {
      --m: #{middle(var(--n))}; // 中位数，这里是7.5
      --i-m-dist: #{dist-1d(var(--i), var(--m))}; // 计算每个id到中位数之间的距离
      --ratio: calc(var(--i-m-dist) / var(--m)); // 根据距离算出比例
      --delay: calc(var(--ratio) * var(--t)); // 根据比例算出delay
      --n-delay: calc((var(--ratio) - 2) * var(--t)); // 负delay表示动画提前开始
      animation-delay: var(--n-delay);
    }
  }
}

@keyframes grow {
  0% {
    transform: scale(0);
  }

  50%,
  100% {
    transform: scale(1);
  }
}

@keyframes melt {
  0%,
  50% {
    box-shadow: inset 0 0 0 var(--p) var(--bg);
  }

  100% {
    box-shadow: inset 0 0 0 0 var(--bg);
  }
}
</style>
