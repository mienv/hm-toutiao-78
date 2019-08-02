import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import router from './router/index.js'
import router from '@/router'
import VueRouter from 'vue-router'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
