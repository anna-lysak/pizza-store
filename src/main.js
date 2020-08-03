import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Accounting from 'accounting-js'

Vue.config.productionTip = false

Vue.filter('currency', function(val) {
  return Accounting.formatMoney(val)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App)
// })
