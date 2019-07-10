// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import App from './App.vue'
import VueParticles from 'vue-particles'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap'
import VueIsInView from 'vue-is-in-view'
import VueScrollactive from 'vue-scrollactive'

Vue.use(VueScrollactive)
Vue.use(VueIsInView)
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
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
