import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import ThankYouSection from '@/components/ThankYouSection'
import PortFolioSection from '@/components/PortFolioSection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/thankyou',
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
