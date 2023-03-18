<script>

import { h, defineComponent } from 'vue'

export default defineComponent({
  props: {
    percentage: {
      type: [Number],
      desc: '进度条百分比',
      default: () => 20
    },
    strokeHeight: {
      type: [Number],
      desc: '进度条高度',
      default: () => 10
    },
    color: {
      type: [String],
      default: () => 'linear-gradient(-90deg, #00fcae, #006388)'
    },
    trackColor: {
      type: [String],
      desc: '进度条轨道颜色',
      default: () => '#9d99992b'
    },
    active: {
      type: [Boolean],
      desc: '是否启用激活效果',
      default: () => true
    },
    showRadius: {
      type: [Boolean],
      desc: '是否显示圆角',
      default: () => true
    },
    progressStyle: {
      type: [Object],
      desc: '进度条 设置边框 阴影等',
      default: () => ({
        boxShadow: '0 0 3px rgba(225, 225, 225, 0.45)',
        border: '1px solid rgba(225, 225, 225, 0.35)'
      })
    }
  },
  setup (props, ctx) {
    return () => h('div', { class: 'progress_wrapper' }, [
      h('div', { class: 'progress_title' }, [
        h('div', { class: 'title' }, '智慧城市'),
        h('div', { class: 'value' }, 3858)
      ]),
      h('div', { class: 'progress_bar' }, [
        h('div', { class: 'progress_bar_out' }, [
          h('div', { class: 'progress_bar_inner progress_active', style: { width: `${props.percentage}%` } })
        ])
      ]),
      h('div', { class: 'value' }, 3858)
    ])
  }
})
</script>

<style scoped lang="scss">
.progress_wrapper {
  width: 100%;
  font-size: 14px;
  color: #fff;
  overflow: hidden;
  padding: 4px 0;
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  .progress_title {
    display: flex;
    padding: 0 4px;
    align-items: baseline;
    justify-content: space-between;
  }
  .progress_bar {
    flex: 1;
    height: 12px;
    padding: 2px;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 0 3px #999;
    border: 1px solid rgba(225, 225, 225, 0.45);
    .progress_bar_out {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
      .progress_bar_inner {
        width: 30%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        border-radius: 5px;
        transition: all 0.6s ease;
        background: linear-gradient(-90deg, #00fcae, #006388);
      }
    }

    &.decorator {
      &::after {
        left: 30%;
        top: 50%;
        content: "";
        width: 4px;
        height: 160%;
        position: absolute;
        transform: translateY(-50%);
        background: linear-gradient(0deg, #00fcae, #006388);
      }
    }
  }
}
</style>
