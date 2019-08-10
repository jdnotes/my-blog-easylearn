// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'

//全局js
import awesomplete from './assets/js/awesomplete.js'
import theme from './assets/js/theme.js'

import JsEncrypt from 'jsencrypt'

import http from './script/http'
import ports from './script/ports'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false
Vue.prototype.http = http
Vue.prototype.ports = ports
Vue.prototype.$jsEncrypt = JsEncrypt

Vue.use(VueRouter)
Vue.use(mavonEditor)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
