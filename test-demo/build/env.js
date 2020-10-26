/**
 * webpack 共用配置
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-px2rem')
const merge = require('webpack-merge')
const webpack = require('webpack')
const RenderHtmlPlugin = require('./plugin/render-html-plugin')
const fs = require('fs')
const util = require('./util.js')
const { url } = require('inspector')
const configUser = util.getConfig()

// webpack mode 转换
const Mode = {
  'local': 'development',
  'dev': 'development',
  'test': 'production',
  'prod': 'production',
}[process.env.NODE_ENV] || 'production'


// postcss 插件设置
const PostCssPlugins = [
  autoprefixer({ browsers: configUser.browsers })
]
if (configUser.px2rem) {
  PostCssPlugins.push(px2rem({ remUnit: configUser.px2rem }))
}

// css单独提取设置
var vueOptLoader = {}
if (configUser.cssFile) {
  vueOptLoader = {
    css: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          minimize: Mode == 'production'
        }
      },
    ],
    scss: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          minimize: Mode == 'production'
        }
      },
      'sass-loader'
    ],
  }
}

// 多入口获取
const Entries = {
  entry: {},
  html: [],
}
const files = fs.readdirSync(util.appResolve())
files.map(item => {
  if (item === 'common') return
  Entries.entry[item] = util.appResolve(`${item}/entry/main.js`)
  var filename = configUser.root ? configUser.root.substring(1) + '/entry/' + item + '.html' : 'entry/' + item + '.html'
  var template = fs.existsSync(util.appResolve(item + '/entry/index.html')) ? util.appResolve(item + '/entry/index.html') : util.appResolve('common/entry/index.html')
  var excludes = files.filter((el) => {
    return el!==item && el!=='common'
  })
  Entries.html.push(
    new HtmlWebpackPlugin({
      template,
      filename,
      // chunks: ['vendor', item]
      chunks: 'all', //此处不能只引入vendor及当前入口js文件, 因为还有element等js需要引入
      excludeChunks: excludes //剔除其他入口js文件
    })
  )
})
// webpack基本配置
var config = {
  mode: Mode,
  devtool: Mode === 'development' ? 'cheap-module-eval-source-map' : 'none',
  entry: Entries.entry,
  output: {
    path: util.distResolve(),
    filename: 'static/chunk/js/[name].[contenthash:6].js',
    chunkFilename: 'static/chunk/js/[name].[contenthash:6].js',
    publicPath: configUser.cdnUrl.endsWith('/') ? configUser.cdnUrl : configUser.cdnUrl + '/',
  },
  // stats: { children: false },
  // 代码分割
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 9,
          maxInitialRequests: 9,
          minSize: 0
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 1,
          enforce: true
        },
        element: {
          test: /element/,
          chunks: 'initial',
          name: 'element',
          priority: 2,
          enforce: true
        },
      }
    },
  },

  // 加载器
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: Mode == 'production'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: PostCssPlugins
            }
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: Mode == 'production'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: PostCssPlugins
            }
          },
          'sass-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: PostCssPlugins,
          loaders: vueOptLoader,
        }
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg|eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1,
            name: 'static/chunk/asset/[name].[hash:6].[ext]'
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
    ]
  },

  // 插件
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify(configUser.baseUrl),
      CDN_URL: JSON.stringify(configUser.cdnUrl),
      ENV: JSON.stringify(process.env.NODE_ENV),
    }),
    // 清空编译目录
    new CleanWebpackPlugin([util.distResolve()], {
      root: util.distResolve('..'),
      // verbose: true,
    }),
    // 拷贝静态文件
    new CopyWebpackPlugin([{
      from: util.appResolve('common/static'),
      to: util.distResolve('static'),
    }]),
    // 生成html
    new HtmlWebpackPlugin({ //单入口
      template: util.appResolve('common/entry/index.html'),
      filename: configUser.root ? (configUser.root + '/index.html') : 'index.html',
    }),
    // ...Entries.html, //开通多入口
    // 模板数据替换
    new RenderHtmlPlugin({
      data: configUser
    }),
    // 生成css
    new MiniCssExtractPlugin({
      filename: 'static/chunk/css/[name].[contenthash:6].css',
      chunkFilename: 'static/chunk/css/[name].[contenthash:6].css'
    }),
  ],
  // 路径别名
  resolve: {
    alias: {
      '@': util.appResolve(),
      '@home': util.appResolve('home'),
      '@huaxun': util.appResolve('huaxun'),
      '@common': util.appResolve('common'),
      '@asset': util.appResolve('common/asset'),
      '@component': util.appResolve('common/component'),
      '@service': util.appResolve('common/service'),
      '@store': util.appResolve('common/store'),
      '@static': util.appResolve('common/static'),
    }
  },
}

// 是否开启文件兼听,dev环境常用
if (configUser.watch) {
  config = merge(config, {
    watch: true,
    watchOptions: {
      poll: 1000,
      aggregateTimeout: 1000,
      ignored: /node_modules/
    },
  })
}

// 是否启动本地服务,local环境常用
if (configUser.port) {
  // 代理列表
  var proxys = {}
  for (var key in configUser.proxy) {
    var res = {
      target: configUser.proxy[key],
      pathRewrite: {},
      changeOrigin: true
    }
    res.pathRewrite['^' + key] = ''
    proxys[key] = res
  }
  // 主机和端口
  var host = configUser.host || util.getLocalIp()
  var ip = configUser.port || 9000

  config = merge(config, {
    devServer: {
      proxy: proxys,
      // app拦截请求
      before: app => {
        configUser.mock && require('./mock.js')(app)
      },
      host: host,
      port: ip,
      contentBase: util.distResolve(),
      noInfo: true,
      inline: true,
      watchOptions: {
        poll: 1000,
        aggregateTimeout: 1000,
        ignored: /node_modules/
      },
    },
    entry: (configUser.hot ? {
      _server: `webpack-dev-server/client?http://${host}:${ip}/`
    } : {})
  })
  // if (configUser.hot) {
  //   config.plugins.push(new webpack.HotModuleReplacementPlugin())
  //   config.output = Object.assign({}, config.output, {
  //     filename: config.output.filename.replace(/contenthash/, 'hash'),
  //     chunkFilename: config.output.chunkFilename.replace(/contenthash/, 'hash')
  //   })
  // }
}
module.exports = config