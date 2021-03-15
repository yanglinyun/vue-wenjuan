import Vue from 'vue'
import Router from 'vue-router'
import Plaza from '@/components/plaza/plaza'
import My from '@/components/my/my'
import wenjuan from '@/components/wenjuan/wenjuan'
import add from '@/components/add/add'
import Login from '@/components/login/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/add/:id',
      name: 'add',
      component: add
    },
    {
      path: '/plaza',
      name: 'plaza',
      component: Plaza
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/wenjuan/:id',
      name: 'wenjuan',
      component: wenjuan
    },
    {
      // 会匹配所有路径
      path: '*',
      name: 'plaza',
      components: {
        scroll: Plaza,
        scroll2: Plaza
      }
    }
  ]
})
