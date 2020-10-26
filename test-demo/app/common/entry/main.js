import Vue from 'vue'
import store from '@store/index'
import App from './app.vue'
import router from './router'


// 取消控制台无关提示
Vue.config.devtools = false
Vue.config.productionTip = false

// 引入样式
import 'element-ui/lib/theme-chalk/index.css'
import '@asset/css/common.scss'

// 引入全局组件
import toast from '@component/home-toast'
import loading from '@component/home-loading'
Vue.use(toast)
Vue.use(loading)

// 引入ajax
import ajax from '@component/home-ajax'
Vue.prototype.$ajax = ajax

// 引入全局组件
import ElementUI from 'element-ui'
Vue.use(ElementUI)

// 引入全局 mixin
import MixinService from '@service/mixin-service'
Vue.mixin(MixinService)

// 实例化
export default extRouter => {
  return new Vue({
      el: '#app',
      router: router(extRouter),
      store,
      render: h => h(App)
  })
}