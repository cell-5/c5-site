import Vue from 'vue'
import Router from 'vue-router'

import PortfolioSection from "../components/portfolio/PortfolioSection.vue"

let routes = [
  {path: '/portfolio', component: PortfolioSection}
]
Vue.use(Router)


const Landing = () => import('../components/Landing.vue')
routes.push({path: '/', component: Landing})

const ThankYouSection = () => import('../components/ThankYouSection.vue')
routes.push({path: '/thank-you', component: ThankYouSection})

export default new Router({
  mode: 'history',
  routes
})
