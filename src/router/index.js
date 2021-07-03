import Vue from 'vue'
import VueRouter from 'vue-router'
// import { compile, component } from 'vue/types/umd'
import Home from '../views/Home.vue'
import EventSegment from '../views/EventSegment.vue'
import AboutUs from '../views/AboutUs.vue'
import FAQs from'../views/FAQs.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home 
    },
    {
      path: '/event-segment',
      name: 'Event Segment',
      component: EventSegment
    }, 
    {
      path: '/about-us',
      name: 'About Us',
      component: AboutUs
    },
    {
      path: '/faqs',
      name: 'FAQs',
      component: FAQs
    },
  ]
})

export default router
