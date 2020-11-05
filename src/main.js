/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import New from '../src/components/new.vue'


const routes = [
  { path: '/foo', component: New },
]

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
