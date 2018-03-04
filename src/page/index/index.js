/*
* @Author: Administrator
* @Date:   2018-02-11 20:37:54
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-01 23:29:50
*/

require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var navSide = require('page/common/nav-side/index.js');
var templateBanner = require('./banner.string');
var _mm = require('util/mm.js');

$(function() {
	//渲染banner的html
	var bannerHtml = _mm.renderHtml(templateBanner);
	$('.banner-con').html(bannerHtml);
	//初始化banner
    var $slider = $('.banner').unslider({
    	dots: true
    })
    //前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
    	var forward = $(this).hasClass('prev') ? 'prev' : 'next';
    	$slider.data('unslider')[forward]();
    })
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

