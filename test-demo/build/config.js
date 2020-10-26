module.exports = {
  // 纯前端本地配置 --> 开发环境
  dev: {
    // 本地server的host，为空时默认自动获取本机ip
    host: '0.0.0.0',
    // 本地server端口
    port: 9002,
    // 代理配置，建议与mock不要同时开启
    proxy: {
      '/api': 'http://10.1.104.20:9066/api',
      // '/api': 'http://hz.91qycl.com/api',
    },
    baseUrl: '/api',
    // watch: true,
    cdnUrl: '/',
    // mock数据请求前辍,请在/mock中配置json数据，不启用请设为false
    mock: '/web-vrsp-agent-vamp/mock',
    // 是否启用热更新
    hot: false,
    // 打包输出目录
    dist: '../dist',
    root: '',
  },
  // 公共配置，可在其他配置中覆盖
  base: {
    // 根url，用于ajax请求路径前辍定义
    baseUrl: '/web-vrsp-agent-vamp',
    // cnd地址，同output.publicPath
    cdnUrl: '/web-vrsp-agent-vamp/',
    // 打包输出目录
    dist: '../../backend/src/main/resources/public',
    // 是否将vue文件中的css提取到单独css文件中
    cssFile: false,
    // postcss兼容性
    browsers: ['ie >= 10', 'last 2 versions'],
    // 应用的根目录
    root: '',
    // px2rem自动转换, 如 100px => 1rem
    // px2rem: 100,
  },
  // 测试环境 
  test: {
    cssFile: true,
  },
  // 生产环境
  prod: {
    cssFile: true
  }
}