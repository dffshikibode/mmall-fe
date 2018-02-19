/*
* @Author: Administrator
* @Date:   2018-02-11 20:37:54
* @Last Modified by:   Administrator
* @Last Modified time: 2018-02-19 13:19:48
*/

require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');

navSide.init({
	name : 'user-center'
})

//网络数据请求功能
// _mm.request({
// 	url : '/product/list.do?keyword=1',
// 	success : function(res){
// 		console.log(res);
// 	},
// 	error : function(errMsg){
// 		console.log(errMsg);
// 	}
// })

//获取服务端参数功能
// console.log(_mm.getUrlParam('test'));

//渲染html模板
// var html = '<div>{{data}}</div>';
// var data = {
// 	data : 123
// }
// console.log(_mm.renderHtml(html,data));

