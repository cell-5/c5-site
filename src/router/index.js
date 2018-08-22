import Router from 'vue-router'

let routes = [
  {
    path: '/',
    name: 'Landing',
    component: require('../pages/Landing.vue').default,
    alias: '/index.html'
  },
  {
    path: '/thank-you',
    name: 'ThankYouSection',
    component: require('../pages/ThankYou.vue').default
  },
  {
    path: '/portfolio',
    name: 'PortfolioSection',
    component: require('../pages/Portfolio.vue').default
  }
]

const router = new Router({
  mode: 'history',
  routes: routes
})

export default router;