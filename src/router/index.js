import Vue from 'vue'
import Router from 'vue-router'


let routes = []
Vue.use(Router)


const Landing = () => import('../components/Landing.vue')
routes.push({ path:'/',component:Landing })

const ThankYouSection = () => import('../components/ThankYouSection.vue')
routes.push({ path:'/thank-you',component:ThankYouSection })

const PortfolioSection = () => import('../components/PortfolioSection.vue')
routes.push({ path:'/portfolio',component:PortfolioSection })

export default new Router({
	mode: 'history',
	routes
})