import Vue from 'vue'
import App from './App.vue'
import router from './router'

//FontAwesome插件
import 'font-awesome/css/font-awesome.css'

//AwesomeSwiper轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//事件总线
Vue.prototype.Bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
