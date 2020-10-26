import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import store from '@common/store'

// 引入页面组件
import Index from '@home/page/base/index.vue'
import Login from '@home/page/base/login.vue'

let Router = {
  Index, Login,
}

export default extRouter => {
  // 路由覆盖
  Router = {
      ...Router,
      ...extRouter
  }
  const routes = [{
    path: '/',
    component: Router.Index
  },
  {
    path: '/login',
    component: Router.Login,
    meta: { auth: false }
  }]

  // 防止element-ui框架重复点击菜单报错问题
  const routerPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location){
      return routerPush.call(this, location).catch(error => error)
  }

  // 跳由实例化
  const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
  })
  // 拦截路由判断是否登录
  router.beforeEach((to, from, next) => {
    // 不用拦截
    if (to.meta.auth === false)
      return next()
    // 获取登录用户
    // var loginUser = store.getters.loginUser
    // if (!loginUser) {
    //   var nextObj = {
    //     path: '/login',
    //   }
    //   return next(nextObj)
    // } 
    // 判断权限
    if (to.meta.auth) {
      
    }
    return next()
  })
  return router
}