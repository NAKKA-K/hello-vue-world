import Vue from 'vue'
import Router from 'vue-router'
import Scene1 from '@/components/Scene1'
import Scene2 from '@/components/Scene2'
import Scene3 from '@/components/Scene3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Scene1
    },
    {
      path: '/scene2',
      name: 'Scene2',
      component: Scene2
    },
    {
      path: '/scene3',
      name: 'Scene3',
      component: Scene3
    }

  ]
})
