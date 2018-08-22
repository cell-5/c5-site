import Vue from 'vue'
import VueRouter from 'vue-router'

window.Vue = Vue
Vue.use(VueRouter)

import VueProgressBar from 'vue-progressbar'
import BootstrapVue from 'bootstrap-vue'
import VueParticles from 'vue-particles'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap'

Vue.use(BootstrapVue)
Vue.use(VueParticles)

Vue.use(VueProgressBar, {
  color: '#228f42',
  failedColor: '#874b4b',
  thickness: '0.4rem',
  transition: {
    speed: '0.4s',
    termination: 300
  }
})

try {
    window.$ = window.jQuery = require('jquery')
} catch (e) {}