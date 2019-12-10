<template>
  <transition name="toast-fade" @after-leave="handleAfterLeave">
    <div v-if="visible" class="my-toast" :style="positionStyle">
      <span class="my-toast-content">{{ text }}</span>
    </div>
  </transition>
</template>

<script>
const defaultPosition = 'bottom'
const posStyles = {
  'bottom': '12vh',
  'top': '12vh',
  'middle': '50vh'
}

export default {
  name: 'VaToast',
  data() {
    return {
      visible: false,
      timer: null,
      text: null,
      delay: 2000,
      position: defaultPosition
    }
  },
  computed: {
    positionStyle() {
      const res = {}
      let key = this.position
      let value = posStyles[this.position]
      if (typeof this.position === 'string') {
        if (!value) {
          key = 'top'
          value = this.position
        }
      } else {
        key = defaultPosition
        value = posStyles[defaultPosition]
      }
      res[key] = value
      return res
    }
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },

    // 显示
    show() {
      this.visible = true
      this.clearTimer()
      this.startTimer()
    },

    close() {
      if (!this.visible) return
      this.visible = false
    },

    startTimer() {
      if (this.delay > 0) {
        this.timer = setTimeout(() => {
          this.close()
        }, this.delay)
      }
    },

    clearTimer() {
      clearTimeout(this.timer)
    }
  }
}
</script>

<style scoped lang="scss">
$bg: rgba(88, 88, 88, 0.8);
$fontColor: #dfdfdf;

.my-toast {
    z-index: 998;
    position: fixed;
    left: 0;
    right: 0;
    max-width: 60vw;
    margin: 0 auto;
    user-select: none;
    -webkit-text-size-adjust: 100%;
    text-align: center;

    .my-toast-content {
        display: inline-block;
        padding: 2.4vw;
        text-align: center;
        font-size: 3vw;
        color: $fontColor;
        line-height: 1.5;
        background-color: $bg;
        border-radius: 6px;
    }
}

/* 进入和出去的动画 */
.toast-fade-enter-active {
    animation: opacity 0.3s;
}

.toast-fade-enter-active .my-toast {
    animation: scale 0.3s;
}

.toast-fade-leave-active {
    animation: outOpacity 0.2s;
}

/* 进来的动画 */
@keyframes opacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

/* 出去的动画 */
@keyframes outOpacity {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes scale {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
</style>
