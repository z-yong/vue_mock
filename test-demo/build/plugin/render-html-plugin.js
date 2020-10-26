/**
 * webpack 自定义插件测试
 * jsp：增加jsp头部。
 * data：模版数据源
 */
const jspHeader = `

`

function RenderHtmlPlugin(options) {
  this.options = Object.assign({
    jsp: false,
    data: null,
  }, options)
}

RenderHtmlPlugin.prototype.apply = function(compiler) {
  var jsp = this.options.jsp
  var mock = this.options.data
  compiler.hooks.compilation.tap('RenderHtmlPlugin', (compilation) => {
    compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap('RenderHtmlPlugin', (data, cb) => {
      
      // 替换模板变量
      if(typeof mock == 'object'){
        data.html = data.html.replace(/\${(\w+(\.\w+)?)}/g, (a, b) => {
          var val = eval('mock.' + b)
          var val = mock[b]
          val = typeof val == 'object' ? JSON.stringify(val) : val
          val = val === undefined ? a : val
          return val
        })
      }

      // 添加jsp头部
      if (jsp) {
        data.html = (jsp === true ? jspHeader : jsp) + data.html
      }
      typeof cb == 'function' && cb(null, data)
    })
  })
}

module.exports = RenderHtmlPlugin