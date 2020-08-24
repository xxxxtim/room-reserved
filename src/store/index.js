import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'



Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,

  // 同步
  mutations,
  // 非同步
  actions,

})
export default store