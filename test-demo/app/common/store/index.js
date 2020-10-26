import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import cookie from '@common/util/cookie.js'

const store = new Vuex.Store({
  state: {
    // 登录用户
    loginUser: ''
  },
  getters: {
    // 获取已登录用户
    loginUser(state) {
      if (state.loginUser) return state.loginUser
      if (!cookie.get('token')) {
        return ''
      }
      state.loginUser = cache.store('loginUser')
      return state.loginUser || ''
    },
  },
  mutations: {
    // 设置当前登录用户
    loginUser(state, data) {
      if (data && data.photo !== undefined) {
        data.photo = data.photo || '00'
        if (!data.photo.match(/^(http|\/)/)) {
          data.photo = window.pageConfig.cdnUrl + 'static/image/user/' + data.photo + '.png'
        }
      }
      state.loginUser = data
      cache.store('loginUser', data)
    }
  }
})

export default store