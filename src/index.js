import vaToast from '../packages/toast/index.js'

const components = [
  vaToast
]

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return
  /* eslint-disable */
  components.forEach(component => {
      Vue.component(component.name, component)
  });

  Vue.prototype.$vaToast = vaToast

}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
  version: '0.1.0',
  install,
  ...components
}