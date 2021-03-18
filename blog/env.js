module.exports = {
  // ------------------------------------------开发环境-------------------------------------------------
  //本地教育
  'dev-edu': {
    VUE_APP_BASE_NAME: '本地教育分享平台——开发环境',// 平台名称
    VUE_APP_BASE_TITLE: '来学好课',// 平台标题
    VUE_APP_BASE_ENNAME: 'edu', // 平台名称简称
    VUE_APP_WX_APPID: 'wx681bffce4cd87945',//微信公众服务号appid
    VUE_APP_BASE_HOST: 'http://192.168.31.196:8082',// 接口地址
    VUE_APP_BASE_IM_URL: `wss://im.xiaolaiyingcai.com`,//im服务地址
    VUE_APP_BASE_ZOGO_APPID: 4094868422,//即构APPID
    VUE_APP_BASE_ZOGO_SOCKET: 'wss://webliveroom-test.zego.im/ws',//即构socket地址
    VUE_APP_BASE_API: '/api',// 本地开发代理配置
    VUE_APP_BASE_PUBLIC_PATH: '/',// 路由基路径，对应生产环境文件目录
    VUE_APP_BASE_IOS_OPENPAGE: 'iOSLearnEdu://function/path',// iosApp首页地址
    VUE_APP_BASE_IOS_DOWNLOAD: 'http://itunes.apple.com/cn/app/id1541084077?mt=8',// iosApp下载地址
    VUE_APP_BASE_ANDROID_OPENPAGE: 'xlyc://shixue/app',// androidApp首页地址
    VUE_APP_BASE_ANDROID_DOWNLOAD: 'http://back.sx.xiaolaiyingcai.com/mobileBusiness/app/downloadApp?id=102',// androidApp下载地址
  },
  // ------------------------------------------测试环境-------------------------------------------------
  //本地教育
  'test-edu': {
    VUE_APP_BASE_NAME: '本地教育分享平台',// 平台名称
    VUE_APP_BASE_TITLE: '来学好课',// 平台标题
    VUE_APP_BASE_ENNAME: 'edu', // 平台名称简称
    VUE_APP_WX_APPID: 'wx681bffce4cd87945',//微信公众服务号appid
    VUE_APP_BASE_HOST: '/api',// 接口地址
    VUE_APP_BASE_IM_URL: `wss://im.xiaolaiyingcai.com`,//im服务地址
    VUE_APP_BASE_ZOGO_APPID: 4094868422,//即构APPID
    VUE_APP_BASE_ZOGO_SOCKET: 'wss://webliveroom-test.zego.im/ws',//即构socket地址
    VUE_APP_BASE_API: '',// 本地开发代理配置
    VUE_APP_BASE_PUBLIC_PATH: '/',// 路由基路径，对应生产环境文件目录
    VUE_APP_BASE_IOS_OPENPAGE: 'iOSLearnEdu://function/path',// iosApp首页地址
    VUE_APP_BASE_IOS_DOWNLOAD: 'http://itunes.apple.com/cn/app/id1541084077?mt=8',// iosApp下载地址
    VUE_APP_BASE_ANDROID_OPENPAGE: 'xlyc://shixue/app',// androidApp首页地址
    VUE_APP_BASE_ANDROID_DOWNLOAD: 'http://back.sx.xiaolaiyingcai.com/mobileBusiness/app/downloadApp?id=102',// androidApp下载地址
  },
  // ------------------------------------------生产环境-------------------------------------------------
  //本地教育
  'prod-edu': {
    VUE_APP_BASE_NAME: '本地教育分享平台',// 平台名称
    VUE_APP_BASE_TITLE: '来学好课',// 平台标题
    VUE_APP_BASE_ENNAME: 'edu', // 平台名称简称
    VUE_APP_WX_APPID: 'wx681bffce4cd87945',//微信公众服务号appid
    VUE_APP_BASE_HOST: '',// 接口地址
    VUE_APP_BASE_IM_URL: `wss://im.xiaolaiyingcai.com`,//im服务地址
    VUE_APP_BASE_ZOGO_APPID: 4094868422,//即构APPID
    VUE_APP_BASE_ZOGO_SOCKET: 'wss://webliveroom4094868422-api.zego.im/ws',//即构socket地址
    VUE_APP_BASE_API: '/prod-api',// 代理配置
    VUE_APP_BASE_PUBLIC_PATH: '/',// 路由基路径，对应生产环境文件目录
    VUE_APP_BASE_IOS_OPENPAGE: 'iOSLearnEdu://function/path', //iosApp首页地址
    VUE_APP_BASE_IOS_DOWNLOAD: 'http://itunes.apple.com/cn/app/id1541084077?mt=8',// iosApp下载地址
    VUE_APP_BASE_ANDROID_OPENPAGE: 'xlyc://shixue/app',// androidApp首页地址
    VUE_APP_BASE_ANDROID_DOWNLOAD: 'http://back.sx.xiaolaiyingcai.com/mobileBusiness/app/downloadApp?id=102',// androidApp下载地址
  }
};
