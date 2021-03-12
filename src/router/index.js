import Vue from 'vue'
import Router from 'vue-router'
import Body from '@/components/body/body'
import Plaza from '@/components/plaza/plaza'
import My from '@/components/my/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/body',
      name: 'Body',
      component: Body,
      children: [
        {
          path: 'my',
          name: 'My',
          component: My
        },
        {
          path: 'plaza',
          name: 'Plaza',
          component: Plaza
        }
      ]
    },
    {
      // 会匹配所有路径
      path: '*',
      name: 'Plaza',
      component: Plaza
    }
  ]
})
