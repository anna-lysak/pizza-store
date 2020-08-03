import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth/index.js'
import menu from './menu/index.js'
import orders from './orders/index.js'
import { vuexfireMutations } from 'vuexfire'
Vue.use(Vuex)

// export const state = () => ({})
// export const getters = {}
// export const actions = {}
// export const mutations = {}

export const store = new Vuex.Store({
  modules: {
    auth,
    menu,
    orders,
  },
  mutations: {
    ...vuexfireMutations,
  },
  // state: state,
  // actions: actions,
  // getters: getters,
  // mutations: mutations,
})

//   state: {
//     menuItems: {
//       1: {
//         'name': 'Margherita',
//         'description': 'A delicious tomato based pizza topped with mozarella',
//         'options': [{
//           'size': 9,
//           'price': 6.95,
//         },
//           {
//             'size': 12,
//             'price': 8.95,
//           }]
//       },
//       2: {
//         'name': 'Ham and Pineapple',
//         'description': 'A delicious tomato based pizza topped with pineapple',
//         'options': [{
//           'size': 9,
//           'price': 6.95,
//         },
//           {
//             'size': 12,
//             'price': 11.95,
//           }]
//       },
//       3: {
//         'name': 'Pepperoni',
//         'description': 'A delicious tomato based pizza topped with salami',
//         'options': [{
//           'size': 9,
//           'price': 7.95,
//         },
//           {
//             'size': 12,
//             'price': 12.95,
//           }]
//       },
//     },
//     orders: [],
//     currentUser: null
//   },
//   getters: {
//     getMenuItems: state => state.menuItems,
//     numberOfOrders: state => state.orders.length,
//     currentUser: state => state.currentUser
//   },
//   mutations: {
//     addOrder: (state, orders) => state.orders.push(orders),
//     userStatus (state, user) {
//       if(user) {
//         state.currentUser = user.email
//       } else {
//         state.currentUser = null
//       }
//     }
//   },
//   actions: {
//     setUser(context, user) {
//       context.commit('userStatus', user)
//     }
//   }
//
// })
