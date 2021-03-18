import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'

import Vant from 'vant';
import 'vant/lib/index.css';

// 计算rem单位换算
import 'amfe-flexible'

import '@assets/css/reset.css'
import '@assets/css/common.css'

import Navbar from '@/components/Navbar.vue';

const app = createApp(App)

app.config.globalProperties.$api = () => {
  console.log('调用了全局api')
}
app.mixin({
  methods: {
    myApi: function () {
      console.log('调用了全局myapi')
    }
  }
})

app.use(ElementPlus)
app.use(Vant)

app.component('Navbar', Navbar)
app.use(router)
app.mount('#app')



// 不检查ts语法 @ts-ignore 
// watch 第三个参数 { immediate: true } 即页面已加载就执行  不需要等到值发生变化后再执行
