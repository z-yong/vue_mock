// import path from 'path'
const path = require('path')
const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const autoprefixer = require('autoprefixer')
const postcssPxtorem = require('postcss-pxtorem')
const ENV = require('./env.js')
// import webpack from 'webpack'
// import CompressionWebpackPlugin from 'compression-webpack-plugin'
// import ENV from './env.js'

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 1025 // dev port

const productionGzipExtensions = ['ts', 'js', 'css']

/**
 * process.env.npm_lifecycle_event：获取命令入参
 */
const npmEvents = process.env.npm_lifecycle_event.split(':');
const envKey = npmEvents[1] ? npmEvents[1] : npmEvents[0];

if (envKey && ENV[envKey]) {
  for (const key in ENV[envKey]) {
    process.env[key] = ENV[envKey][key]
  }
}
// All configuration item explanations can be find in https://cli.vuejs.org/config/
const config = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_HOST,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    open: false,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@util': resolve('src/util'),
        '@views': resolve('src/views'),
        '@components': resolve('src/components'),
        '@store': resolve('src/store'),
        '@assets': resolve('src/assets')
      }
    },
    resolveLoader: {
      modules: ['node_modules']
    },
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

      // 配置compression-webpack-plugin压缩
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        minChunkSize: 100
      })
    ]
  },
  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  css: {
    loaderOptions: {
      // sass: {
      //   prependData: `@import "@/assets/css/index.scss"`
      // },
      postcss: {
        plugins: [
          autoprefixer({ browsers:  ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie> 8','last 2 versions'] }),
          postcssPxtorem({
            rootValue: 75, // 换算的基数
            selectorBlackList: ['.van', '.el'], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      }
    }
  }
}
// if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
//   console.log('移动端')
//   config.css.loaderOptions = {
//     postcss: {
//       plugins: [
//         require('postcss-pxtorem')({
//           rootValue: 75, // 换算的基数
//           selectorBlackList: ['.van', '.el'], // 忽略转换正则匹配项
//           propList: ['*']
//         })
//       ]
//     }
//   }
// }

module.exports = config;
