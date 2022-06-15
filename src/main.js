import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'

import axios from 'axios';

Vue.prototype.$axios = axios;

Vue.config.productionTip = false
Vue.use(element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')