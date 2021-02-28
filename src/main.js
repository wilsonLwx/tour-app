import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//js 取消延迟300毫秒触发事件
import FastClick from 'fastclick'
FastClick.attach(document.body)

//css
import './assets/css/reset.css'
import './assets/css/iconfont.css'

// swiper 组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
