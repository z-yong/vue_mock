/**
 * 全局引用mixin 
 * 变量请使用首字母大写
 * 方法请使用_开头
 */

import CommonService from './common-service.js'

export default {
  data() {
    return {

    }
  },
  computed: {
    LoginUser() {
      return this.$store.getters.loginUser
    },
  },
  components: {},
  methods: {
    // 判断是否有权限
    _auth(key) {
      return CommonService.checkAuth(key)
    },
    // 设置面包悄导航
    _nav(data, showHome = true) {
      var navMap = showHome ? ['首页'] : []
      if (!data || data.length === 0) {
        navMap = []
      } else {
        navMap = navMap.concat(data)
      }
      this.$store.commit('breadCrumb', navMap)
    },
    // 数值为空时显示横线
    _null(val) {
      return val ? val : '<span class="null-fill"></span>'
    },
    // 金额美化
    _beautyMoney(val){
      val = this.$options.filters.money(val)
      val = val.toString()
      var arr = val.split('.')
      return arr[0] + '<span class="font-sm">.'+arr[1]+'</span>'
    }
  },
  // 全局过滤器
  filters: {
    // 金额格式化
    money(val, split = ',', fiexed = 2) {
      val = val || 0.00
      if (typeof val === 'string') { val = parseFloat(val) }
      var valStr = val.toFixed(fiexed)
      if (!split) return valStr
      if (val < 1000) return valStr
      var valArr = valStr.split('.')
      valStr = valArr[0]
      valStr = valStr.split('').reverse().join('')
      valStr = valStr.replace(/\d{3}/g, v => { return v + split })
      if (valStr[valStr.length-1] === split){
        valStr = valStr.substring(0, valStr.length - 1)
      }
      valStr = valStr.split('').reverse().join('')
      if (valArr[1]){
         valStr = valStr + '.' + valArr[1]
      }
      return valStr
    },
    
  },
}