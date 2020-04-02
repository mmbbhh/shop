import Vue from 'vue'
import App from './App.vue'
import router from './router'

//FontAwesome插件
import 'font-awesome/css/font-awesome.css'

//AwesomeSwiper轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

//导入vuex仓库
import store from "./store";

//导入手写的toast插件
import toast from 'components/reuse/toast'
Vue.use(toast)

//解决移动端300ms延迟
import Fastclick from 'fastclick'
Fastclick.attach(document.body)

//vue图片懒加载插件
import lazyload from "vue-lazyload";
Vue.use(lazyload, {
  loading: require('./assets/images/loading.png'),
  error: require('./assets/images/error.png')
})

Vue.use(VueAwesomeSwiper)

//事件总线
Vue.prototype.Bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
