import Vue from 'vue'
import Router from 'vue-router'

import PortfolioSection from "../components/PortfolioSection.vue"
import Landing from '../components/Landing.vue'
import ThankYouSection from '../components/ThankYouSection.vue'
let routes = [
  {path: '/portfolio', component: PortfolioSection},
  {path: '/', component: Landing},
  {path: '/thank-you', component: ThankYouSection}
]
Vue.use(Router)

export default new Router({
  // TODO if to the portfolio scroll to the top...
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // },
  mode: 'history',
  routes
})
