import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

import DscloudyUI from 'dscloudy-framework-ui/packages/index'
import './assets/css/global.scss'
import singleSpaVue from 'single-spa-vue'

Vue.use(ElementUI, { size: 'mini', zIndex: 3000 })
Vue.use(DscloudyUI)

Vue.config.productionTip = false

const vueOptions = {
  el: '#service_demo',
  router,
  store,
  render: h => h(App)
}

if (!window.singleSpaNavigate) {
  delete vueOptions.el
  new Vue(vueOptions).$mount('#app')
}

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: vueOptions
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount

export default vueLifecycles
