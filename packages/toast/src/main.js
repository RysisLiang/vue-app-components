import Vue from 'vue'
import toast from './main.vue'

// 使用extend方法创建vue的子类
const ToastConstructor = Vue.extend(toast)

let bufferQueue = []
let vid = 1

/**
 * 默认配置
 *
 * @type {{}}
 */
const defaultOptions = {
  delay: 2000,
  position: 'bottom'
}

/**
 * 使用这个方法调用组件
 * @param text 消息
 * @param options 参数
 * @constructor
 */
const Toast = (text, options) => {
  const opts = Object.assign({}, defaultOptions, options)
  if (text) {
    const instance = new ToastConstructor({
      el: document.createElement('div')
    })
    for (const key in opts) {
      if (Object.prototype.hasOwnProperty.call(opts, key)) {
        instance[key] = opts[key]
      }
    }
    instance['text'] = text
    instance['id'] = `toast_${vid++}`
    bufferQueue.push(instance)
    document.body.appendChild(instance.$el)
    Vue.nextTick(() => {
      instance.show()
    })
    return instance
  }
}

Toast.close = (id) => {
  bufferQueue.find((item, index) => {
    const r = item.id === id
    r && bufferQueue.splice(index, 1)
    return r
  })
  bufferQueue = []
}

Toast.closeAll = () => {
  bufferQueue.forEach(item => {
    item.close()
  })
  bufferQueue = []
}

export default Toast
