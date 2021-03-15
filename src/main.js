// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import './assets/css/common.css'
import com from './assets/js/common'
import less from 'less'
import {commonParams} from './api/base'

Vue.use(less)
Vue.config.productionTip = false
Vue.prototype.com = com
Vue.prototype.cp = commonParams

// 路由守护
router.beforeEach((to, from, next) => {
  if (to.name === 'add' && !store.state.store.isLogin) {
    router.push({name: 'login'})
    return
  }
  store.state.store.headerName = to.name
  store.state.store.itemStatus = to.name !== 'plaza' ? to.name : 'plaza'
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
