import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import VueRouter from 'vue-router'


import 'buefy/dist/buefy.css'
import "vue-material-design-icons/styles.css"

import ServiceFunnel from './components/ServiceFunnel'
import ServiceFunnel2 from './components/ServiceFunnel2'


Vue.use(Buefy)
Vue.use(VueRouter)

const routes = [
  { path: '/service_funnel/', component: ServiceFunnel },
  { path: '/service_funnel2/:company', component: ServiceFunnel2 },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
