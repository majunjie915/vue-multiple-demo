import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend'
import skipLink from '@/components/skipLink'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/keywordrelated',
      name: 'skipLink',
      component: skipLink
    }
  ]
})
