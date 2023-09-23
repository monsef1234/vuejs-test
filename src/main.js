import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import InfiniteSlideBar from 'vue-infinite-slide-bar'
import { Plugin } from 'vue-fragment'
import 'aos/dist/aos.css'
import "./global.css"

Vue.component('infinite-slide-bar', InfiniteSlideBar)
Vue.config.productionTip = false
Vue.use(Plugin)

new Vue({
  created () {
    AOS.init({
      offset: 50,
      once:false,
      duration: 400,

    })
},
  router,
  render: h => h(App)
}).$mount('#app')
