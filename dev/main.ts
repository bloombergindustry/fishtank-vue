import Vue from 'vue'
import App from './App.vue'
import router from './router'

if (!(window as any).Promise) {
  require('promise-polyfill/src/polyfill')
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
