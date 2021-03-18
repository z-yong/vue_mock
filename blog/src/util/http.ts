import axios from 'axios'
import { ElMessage, ElMessageBox, ElNotification, ElLoading } from 'element-plus';

let flag = false //当token失效时 只允许跳转一次到登录页(用于内嵌h5页面)

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function goLogin() {
  if (flag) return;
  flag = true;
  ElMessageBox.confirm(
    '登录状态已过期，请重新登录',
    '系统提示',
    {
      confirmButtonText: '重新登录',
      showCancelButton: false,
      closeOnClickModal: false,
      showClose: false,
      type: 'warning'
    }
  ).then(() => {
    // store.dispatch('LogOut').then(() => {
    //   location.reload() // 为了重新实例化vue-router对象 避免bug
    // })
  });
}

let loading: any;

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const http = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 10000
})

// request拦截器
http.interceptors.request.use(config => {
  // 是否需要设置 token
  // const isToken = (config.headers || {}).isToken === false
  // if (getToken() && !isToken) {
  //   config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  // }
  if (config.headers.loading) {
    loading = ElLoading.service({
      lock: true,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)",
    });
  }
  return config
}, error => {
  Promise.reject(error)
})
// 响应拦截器
http.interceptors.response.use(async res => {
  if (loading) {
    await delay(1000)
    loading.close()
  }
  // 未设置状态码则默认成功状态
  const code = res.data.code || 200
  switch (code) {
    case 200:
      return res.data.data;

    case 401:
      goLogin();
      break;

    case 500:
      ElMessage.error(res.data.msg)
      break;

    default:
      ElNotification({
        title: res.data.msg,
        type: 'error'
      })
  }
  return Promise.reject(new Error(res.data.msg))
},
  error => {
    if (loading) loading.close()
    let { message } = error;
    const status = error.response.status || ''
    switch (status) {
      case 401:
        if (message == "Network Error") message = "后端接口连接异常";
        else if (message.includes("timeout")) message = "系统接口请求超时";
        else if (message.includes("Request failed with status code")) message = "系统接口" + message.substr(message.length - 3) + "异常";
        ElMessage.error(message)
        break;
      case 404:
        ElMessage.error('接口路径错误！')
        break;
    }
    return Promise.reject(error)
  });

// 通用下载方法
export function download(url: string, params: object, filename: string, fileType: string) {
  return http.post(url, params, {
    // transformRequest: [(params) => {
    //   return tansParams(params)
    // }],
    responseType: 'blob'
  }).then((data) => {
    const content: any = data
    const blob = new Blob([content], { type: 'application/vnd.ms-excel;charset=utf-8' });
    if ('download' in document.createElement('a')) {
      const elink = document.createElement('a')
      elink.download = filename
      elink.style.display = 'none'
      elink.href = URL.createObjectURL(blob)
      document.body.appendChild(elink)
      elink.click()
      URL.revokeObjectURL(elink.href)
      document.body.removeChild(elink)
    } else {
      navigator.msSaveBlob(blob, filename)
    }
  }).catch((error) => {
    console.error(error)
  })
}

export function get(url: string, params = {}, headers = {}) {
  return http({
    url,
    method: 'get',
    params,
    headers
  })
}

export function post(url: string, data = {}, headers = {}) {
  return http({
    url,
    method: 'post',
    data,
    headers
  })
}

export function del(url: string, data = {}, headers = {}) {
  return http({
    url,
    method: 'delete',
    data,
    headers
  })
}

export function put(url: string, data = {}, headers = {}) {
  return http({
    url,
    method: 'put',
    data,
    headers
  })
}

export default http
