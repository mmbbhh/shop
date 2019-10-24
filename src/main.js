import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AmazeVue from 'amaze-vue'
import 'amaze-vue/dist/amaze-vue.css'

Vue.config.productionTip = false
Vue.use(AmazeVue)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
