import Vue from 'vue'
import Router from 'vue-router'
import helloWorld from '@/components/HelloWorld'
import skipLink from '@/components/skipLink'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      component: helloWorld
    },
    {
      path: '/keywordrelated',
      name: 'skipLink',
      component: skipLink
    }
  ]
})
