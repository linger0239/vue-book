/**
 * Created by Lily on 2017/10/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import state from './state';
import mutations from './mutations'
import getters from './mutations'

export default new Vuex.Store({
  state,
  mutations,
  getters,
  strict:true
});










