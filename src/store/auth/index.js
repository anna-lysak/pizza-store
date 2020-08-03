import { state } from './state.js'
import * as getters from './getters.js'
import * as actions from './actions.js'
import * as mutations from './mutations.js'

//console.log(getters)
export default {
//  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
