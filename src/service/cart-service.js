/*
* @Author: Administrator
* @Date:   2018-02-18 16:23:52
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-04 22:04:28
*/

var _mm=require('util/mm.js');

var _cart = {
	// 获取购物车数量
	getCartCount : function(resolve, reject){
		_mm.request({
			url : _mm.getServerUrl('/cart/get_cart_product_count.do'),
			success : resolve,
			error : reject
		})
	},
	//添加到购物车
	addTocart : function(productInfo, resolve, reject){
		_mm.request({
			url : _mm.getServerUrl('/product/detail.do'),
			data : productInfo,
			success : resolve,
			error : reject
		})
	}
}
module.exports = _cart;