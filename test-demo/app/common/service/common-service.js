/**
 * 公共服务
 */
import ajax from '../component/home-ajax'
import store from '../store'
import Vue from 'vue'
export default {

  // 判断权限
  checkAuth(auth) {
    return store.getters.permissions.indexOf(auth) > -1
  },

  // 退出登录
  logout() {
    return new Promise((ok, no) => {
      ajax.postJson('/partner/logout', {}).then(({
        data
      }) => {
        if (!data.fail) {
          // 清除登录和权限
          store.commit('loginUser', null)
          store.commit('permissions', null)
          localStorage.clear()
          this.videoWin && this.videoWin.close()
        }
        return ok(data)
      })
    })
  }
}