import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

app.config.globalProperties.post = () => console.log('我是全局post')
app.mount('#app')