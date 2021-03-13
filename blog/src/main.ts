import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'

import './assets/css/reset.css'
import './assets/css/common.css'

const app = createApp(App)

app.config.globalProperties.$api = () => {
  console.log('调用了全局api')
}


app.use(ElementPlus)
app.use(router)
app.mount('#app')
