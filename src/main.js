import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 导入字体图标
import './assets/iconfont/iconfont.css'
// 导入全局样式
import '@/assets/css/global.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
