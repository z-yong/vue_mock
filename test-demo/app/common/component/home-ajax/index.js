import axios from 'axios'
import Vue from 'vue'
import nprogress from 'nprogress'

nprogress.configure({
  showSpinner: false
})

// 通用配置
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  timeout: 15000, 
  error: true,
}
axios.defaults.baseURL = BASE_URL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

/**
 * ajax请求
 * @param {*} opt 
 */
const ajax = async (opt) => {
  nprogress.start()
  return new Promise((resolve, reject) => {
    // 自动处理错误
    function handleError(err) {
      if (opt.error === undefined) {
        Vue.prototype.$toast(err.msg)
        if (err.code == '100001') {
          
        }
      }
      typeof opt.error == 'function' && opt.error(err)
      reject(err)
    }
    axios({
      ...config,
      ...opt,
    }).then(resp => {
      nprogress.done()
      resp.data && resp.data.fail && handleError(resp.data)
      return resolve(resp.data)
    }).catch(() => {
      nprogress.done()
      let msg = {
        fail: true,
        code: '504',
        msg: '网络出故障了~'
      }
      return handleError(msg)
    })
  })
}

/**
 * 提交get请求
 * @param {*} url 
 * @param {*} params
 * @param {*} opt 
 */
ajax.get = (url, params, opt) => {
  return ajax({
    ...opt,
    url,
    params,
    method: 'get'
  })
}

/**
 * 提交post请求
 * @param {*} url 
 * @param {*} data 
 * @param {*} opt 
 */
ajax.post = (url, data, opt) => {
  return ajax({
    ...opt,
    method: 'post',
    url,
    data: typeof data == 'string' ? data : urlTool.stringify(data),
  })
}

/**
 * 提交json请求
 * @param {*} url 
 * @param {*} data 
 * @param {*} opt 
 */
ajax.postJson = (url, data, opt) => {
  return ajax({
    ...opt,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    url,
    data,
  })
}

/**
 * ajax上传文件请求
 * @param {*} url 
 * @param {*} data 
 * @param {*} opt 
 */
ajax.postFile = (url, formData, opt) => {
  return ajax({
    ...opt,
    method: 'post',
    headers:{
      'Content-Type': 'multipart/form-data'
    },
    url,
    data: formData
  })
}


export default ajax