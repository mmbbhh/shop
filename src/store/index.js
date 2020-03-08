import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

//数据持久化插件
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartlist: [],
    user: '',
    profile_img_url: 'http://123.57.217.239:3000/newshop/static/head.jpg'
  },
  mutations,
  actions,
  getters,
  plugins: [createPersistedState({
    storage:window.sessionStorage
  })]
})

export default store