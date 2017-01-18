// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueRouter from 'vue-router'
import Tokens from 'components/Tokens'
import Todos from 'components/Todos'
import Axios from 'axios'
import querystring from 'querystring'

window.axios = Axios
window.querystring = querystring
Vue.prototype.$http = Axios

import SweetAlert from 'sweetalert'
window.sweetAlert = SweetAlert

const routes = [
    { path: '/todos', component: Todos },
    { path: '/tokens', component: Tokens }
]

const router = new VueRouter({
  routes
})

Vue.use(VueMaterial)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
