import Vue, { VNode } from 'vue'
import Router from 'vue-router'
import CardsDemo from "./views/Cards.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import("./Index.vue")
    },
    {
      path: '/cards',
      component: CardsDemo
    },
    {
      path: '/modals',
      component: () => import("./views/Modals.vue")
    },
    {
      path: '/tags',
      component: () => import("./views/Tags.vue")
    }
  ]
})
