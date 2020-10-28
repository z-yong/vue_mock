import Router from 'vue-router'

import Home from '@view/home.vue'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    components: Home
  }]
})
 
export default router
