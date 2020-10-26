# Vue前端开发框架简介

## 介绍
利用目前最新的webpack搭建的vue前端开发框架，兼容ie9+、chrome、firefox等主流浏览器；  
默认支持多入口，集成mock数据模拟服务，可以实现无任何其他依赖的前端开发；  
使用最少的package依赖，实现最快的编译速度和最稳定高效的代码产出。  

## 安装运行
在实际开发之前，请打开 build/config.js 按项目实际环境配置各参数。  
```
npm install
npm run local
```
命令说明:   
npm run local 本地开发，会启动本地server，自动获取本机ip并打开浏览器  
npm run dev 开发环境打包，具有文件兼听功能，可在文件修改后自动编译  
npm run test 测试环境打包  
npm run prod 生产环境打包  

## 技术栈组合
webpack @4.x  
vue @2.x  
vuex @3.x  
vue-router @3.x  
axios @0.18.x  

## 兼容性
IE9+  
Chrome  
360  
FireFox  
Safari  
Edge  
IOS 8.0 +  
Android 4.0+  

## 目录规划
* app								| 应用主目录
	* common						| 公共模块
		* component					| 公共组件，存放通用性强的组件，例如toast,loading,dialog等
		* static					| 公共静态资源，最终会与打包后的dist/static合并
		* util						| 工具类
	* home							| 业务模块
		* asset						| 模块静态资源，用于页面引用，由wepack自动打包
		* component					| 模块组件，适用于本模块下的组件，文件夹以'模块名-组件名'命名
		* entry						| 存放模块入口相关文件
			* app.vue				| 模块入口vue
			* index.html			| 模块入口html模板,通过 ${var}可以获取config中的变量
			* main.js				| 模块入口js
			* router.js				| 模块路由
		* page						| 模块页面，大型应用可以按功能划分文件夹
		* service  					| 模块逻辑层，主要存放公共服务和方法，以'服务名-service'命名
		* store  					| 模块状态管理
	* ... 							| 其他业务模块,目录结构同home
* build								| 构建脚本目录
	* plugin						| 自定义webpack插件
	* build.js						| 构建脚本入口
	* config.js						| 用户配置参数，提取经常需要改动的配置
	* env.js						| webpack在不同环境下的所有配置
	* mock.js						| mock数据请求，直接拦截本地服务路径，可在./mock下按url添加文件
	* util.js						| 配置工具类，包含项目路径，打包路径及其他方法
* dist								| 打包目录，相当于网站根目录
	* static						| 静态资源目录,编译的文件和common/static的合并
		* chunk						| 打包目录
			* asset					| 打包的资源目录，
			* css					| 打包的css，
			* js					| 打包的js，
	* index.html 					| 访问入口html文件
* mock								| mock数据文件夹，文件结构同请求url
* .babelrc 							| babel配置文件
* .gitignore 						| git文件排除
* package.json 						| 项目包配置
* README.md     					| 说明文档