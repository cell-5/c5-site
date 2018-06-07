import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import ThankYouSection from '@/components/ThankYouSection'
import PortFolioSection from '@/components/PortfolioSection'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/thank-you',
      name: 'ThankYouSection',
      component: ThankYouSection
    },
    {
      path: '/portfolio',
      name: 'PortfolioSection',
      component: PortFolioSection
    }
  ]
})
