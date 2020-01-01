import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueLazy from 'vue-lazyload'
import loading from './assets/images/loading.gif'
import './lib/mui/css/mui.css'
import './assets/iconfont/style.css'
import './lib/mui/css/icons-extra.css'
import './mock/server'
import { Swipe, SwipeItem, Button } from 'mint-ui'
import axios from 'axios'

Vue.prototype.axios = axios

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(vueLazy, { loading })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
