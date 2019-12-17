import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import InfoPage from '../views/InfoPage.vue'
import PicPage from '../views/PicPage.vue'
import Terms from '../components/Terms.vue'
import EntryPass from '../views/EntryPass.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/info',
    name: 'info',
    component: InfoPage
  },
  {
    path: '/pic',
    name: 'pic',
    component: PicPage
  },
  {
    path: '/terms',
    name: 'terms',
    component: Terms
  },
  {
    path: '/event',
    name: 'event',
    component: EntryPass
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
