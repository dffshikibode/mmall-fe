/*
* @Author: Administrator
* @Date:   2018-02-18 12:39:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-02-18 13:08:28
*/

var _mm=require('util/mm.js');

var _user = {
	// 检查登录状态
	checkLogin : function(resolve, reject){
		_mm.request({
			url : _mm.getServerUrl('/user/get_user_info.do'),
			method : 'POST',
			success : resolve,
			error : reject
		})
	},
	// 登出
	logout : function(resolve, reject){
		_mm.request({
			url : _mm.getServerUrl('/user/logout.do'),
			method : 'POST',
			success : resolve,
			error : reject
		})
	}
}
module.exports = _user;