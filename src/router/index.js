import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Home from '../views/Home.vue'
//import Menu from '../views/Menu.vue'
// lazy loading of components
const Menu = () => import('../views/Menu.vue')
const Basket = () => import('../views/Basket.vue')
const About = () => import('../views/About.vue')
import Contact from "../components/about/Contact.vue"
import HowToOrder from "../components/about/HowToOrder.vue";
import Delivery from "../components/about/Delivery.vue";
import History from "../components/about/History.vue";
//import Admin from "./components/Admin";
// lazy loading of components
const Admin = () => import('../views/Admin.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      default: Home,
      'how-to-order': HowToOrder,
      'delivery': Delivery,
      'history': History
    },
    name: 'home'
  },
  {
    path: '/menu',
    component: Menu,
    name: 'menu'
  },
  {
    path: '/basket',
    component: Basket,
    name: 'basket'
  },
  {
    path: '/about',
    component: About,
    redirect: '/about/history',
    name: 'about',
    children: [
      {
        path: '/about/contact',
        component: Contact,
        name: 'contact'
      },
      {
        path: '/about/how-to-order',
        component: HowToOrder,
        name: 'how-to-order'
      },
      {
        path: '/about/delivery',
        component: Delivery,
        name: 'delivery'
      },
      {
        path: '/about/history',
        component: History,
        name: 'history'
      },
    ]
  },
  {
    path: '/admin',
    component: Admin,
    name: 'admin',
    beforeEnter: (from, to, next) => {
      next()
    }
  },
  {
    path: '*',
    redirect: '/'
  }, // instead of 404 page we will redirect to Home

]

export const router = new VueRouter({
  routes: routes,
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        selector: to.hash
        //will scroll to first button with class .bnt on the page
        //selector: '.btn'
      }
    } else {
      // scroll to top of the next page
      return {x: 0, y: 0}
    }
  }
})

// before each route hook
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)
//   go to next route - just simulate how it works currently
//   next()
// })

//   const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
//
export default router
