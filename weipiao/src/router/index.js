import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dongtai from '@/components/dongtai'
import shezhi from '@/components/shezhi'
import gerenziliao from '@/components/gerenziliao'
import search from '@/components/search'
import login from '@/components/login'
import register from '@/components/register'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/dongtai',
      component: dongtai
    },
    {
    	path: '/shezhi',
    	component: shezhi
    },
    {
    	path: '/gerenziliao',
    	component: gerenziliao
    },
    {
    	path: '/search',
    	component: search
    },
    {
    	path: '/login',
    	component: login
    },
    {
    	path: '/register',
    	component: register
    },
		{
			path: '/index',
			component: index
		}
  ]
})
