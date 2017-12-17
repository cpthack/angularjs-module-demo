/**
 * 基于http请求辅助工具服务封装的逻辑层数据请求服务
 */
commonService.service('httpService', ['$injector','$ocLazyLoad',function($injector,$ocLazyLoad) {
	
	/**
	 * 手动注入httpHelper工具辅助服务
	 */
	var httpHelper;
	$ocLazyLoad.load(['common/utils/common.utils.module.js','common/utils/httpHelper.js']).then(function(){
		httpHelper = $injector.get("httpHelper");
	});
	
	// 定义通用状态码
	var statusCode = {
		// 请求成功
		success : 200,
		// 登录过期
		sessionTimeOut : 10000
	}
	
	this.sendHttp = function(options){
		var result = {};
		httpHelper.sendHttp({
			url:options.url,
			data:options.data||{},
			before:options.before,
			success:function(data){
				result = data;
			},
			error:function(data, header, config, status){
				console.error(data);
			},
			after:options.after
		});
		return result;
	}
	
	this.test = function() {
		alert(statusCode.success);
		var result = "";
		var data = {
				"name" : "cpthack",
				"descp" : "my name is cpthack"
			};
		httpHelper.restGet({
			url : "http://127.0.0.1:5000/rest/api/get",
			data : data,
			headers:{'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
			success : function(data) {
				result = data.result.message;
				console.log(data);
			},
			after : function() {
				alert(result);
			}
		});
	}

} ]);