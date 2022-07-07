import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-default/index.css'

import 'font-awesome/css/font-awesome.css'
import route from 'vue-router'
import axios from 'axios';

Vue.prototype.$axios = axios;
// Vue.prototype.$route = route;

Vue.config.productionTip = false
Vue.use(element)
Vue.use(router)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
