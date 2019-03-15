import * as components from './components'

const ComponentLibary = {
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  }
}

export default ComponentLibary

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibary)
}