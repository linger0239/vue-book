/**
 * Created by Lily on 2017/10/26.
 */
import Vue from 'vue';
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {count: 0}//类似于data:{} 和组件中的数据功能一样
const mutations = {
  increment(state,val){//state是默认参数
    state.count+=val;
  },
  decrement(state,val){//state是默认参数
    state.count-=val;
  }
}
let store = new Vuex.Store({
  state,
  mutations,
  strict: true//开启严格模式，只能通过
});
new Vue({
  el: '#app',
  store,//this.$store 每个组件都会用一个$store属性  存储的是state
  ...App//render /  template+component
});




