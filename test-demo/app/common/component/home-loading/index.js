import Vue from 'vue'
import Main from './main.vue'

var Instance = Vue.extend(Main)
var mainInstance = null

var Action = loaded => {
  // 单例模式
  if (!mainInstance) {
    mainInstance = new Instance({
      el: document.createElement('div')
    })
    document.body.appendChild(mainInstance.$el)
  }
  // 显示或隐藏
  if (loaded === true) {
    mainInstance.show = false
  } else {
    mainInstance.show = true
  }
}

export default {
  install(Vue) {
    Vue.prototype.$loading = Action
  }
}