// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueRouter from 'vue-router'
import Axios from 'axios'
import querystring from 'querystring'
import auth from './services/auth'
import '../node_modules/sweetalert/dist/sweetalert.min'
import '../node_modules/sweetalert/dist/sweetalert.css'
// import '../node_modules/roboto-fontface/css/roboto/sass/roboto-fontface-regular.scss'
// import '../node_modules/material-design-icons/iconfont/material-icons.css'
import routes from './services/routes'
import sweetAlert from 'sweetalert'
import gravatar from 'gravatar'

window.gravatar = gravatar
window.sweetAlert = sweetAlert
window.axios = Axios
window.querystring = querystring
Vue.prototype.$http = Axios

Vue.use(VueMaterial)
Vue.use(VueRouter)

window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
}

if (auth.loggedIn()) {
  window.axios.defaults.headers.common = {
    'Authorization': auth.getAuthHeader()
  }
}

const router = new VueRouter({
    // history mode html5 per borrar #
  mode: 'history',
  routes
})

// Theme

Vue.material.registerTheme('manel', {
  primary: {
    color: 'red',
    hue: 700
  },
  accent: 'black',
  warn: 'red',
  background: {
    color: 'blue',
    hue: 300
  }
})

Vue.material.setCurrentTheme('manel')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
