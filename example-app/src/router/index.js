import Vue from 'vue'
import Router from 'vue-router'
import { createSandbox } from 'vue-kindergarten'
import Hello from '@/components/Hello'
import Bye from '@/components/Bye'
import Secret from '@/components/Secret'
import perimeters from '@/perimeters';
import child from '@/child'
import store from '@/store'
import RouteGoverness from '@/governesses/RouteGoverness'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/bye',
      name: 'bye',
      component: Bye
    },
    {
      path: '/secret',
      name: 'secret',
      component: Secret
    }
  ]
})

router.beforeEach((to, from, next) => {
  const perimeter = perimeters[`${to.name}Perimeter`]

  if (!perimeter) next()

  const sandbox = createSandbox(child(store), {
    perimeters: [
      perimeter
    ],

    governess: new RouteGoverness({ from, to, next })
  })

  return sandbox.guard('route')
})

export default router