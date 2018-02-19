/*
* @Author: Administrator
* @Date:   2018-02-11 20:53:47
* @Last Modified by:   Administrator
* @Last Modified time: 2018-02-19 19:00:39
*/
var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

//环境变量配置，dev/online
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
console.log(WEBPACK_ENV);

//获取html-webpack-plugin参数的方法
var getHtmlConfig = function(name,title){
  return {
    template : './src/view/' + name + '.html',
    filename : 'view/' + name + '.html',
    title : title,
    inject  : true,
    hash : true,
    chunks : ['common', name]

  }

}

//webpack config
var config = {
  entry:{ 
  	'common' : [ './src/page/common/index.js'],
  	'index' : ['./src/page/index/index.js'],
  	'login' : ['./src/page/login/index.js'],
    'result' : ['./src/page/result/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'js/[name].js'
  },
  externals: {
  	'jquery': 'window.jQuery'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf)\??.*s/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name:'resource/[name].[ext]'  
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf)\??.*$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name:'resource/[name].[ext]' 
            }  
          }
        ]
      },
      {
        test: /\.string$/, loader: 'html-loader'
      }
    ]
  },
  resolve : {
    alias : {
      node_modules : __dirname + '/node_modules',
      util : __dirname + '/src/util',
      page : __dirname + '/src/page',
      service : __dirname + '/src/service',
      image : __dirname + '/src/image'
    }
  },
  plugins: [
    //独立通用模块到js/base.js
	  new webpack.optimize.CommonsChunkPlugin({
	  	name : 'common',
	  	filename : 'js/base.js'
	  }),
    //把css单独打包到文件里
    new ExtractTextPlugin("css/[name].css"),
    //html模板的初始
    new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
    new HtmlWebpackPlugin(getHtmlConfig('login', '用户登录')),
    new HtmlWebpackPlugin(getHtmlConfig('result', '操作结果')),

  ]
};

if('dev' === WEBPACK_ENV){
  config.entry.common.push('webpack-dev-server/client?http://localhost:8088/')

}

module.exports = config;