import Vue from 'vue'
import Router from 'vue-router'

const PortfolioSection = ()=> import ("../components/PortfolioSection.vue")
const Landing = () => import('../components/Landing.vue')
const ThankYouSection = () => import('../components/ThankYouSection.vue')
let routes = [
  {path: '/portfolio', component: PortfolioSection},
  {path: '/', component: Landing},
  {path: '/thank-you', component: ThankYouSection}
]
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
