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

export default store