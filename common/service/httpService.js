/**
 * 基于http请求辅助工具服务封装的逻辑层数据请求服务
 */
commonService.service('httpService', ['$injector','$ocLazyLoad','$q','httpHelper',function($injector,$ocLazyLoad,$q,httpHelper) {
	
	/**
	 * 手动注入httpHelper工具辅助服务
	 */
//	var httpHelper;
//	$ocLazyLoad.load(['common/utils/common.utils.module.js','common/utils/httpHelper.js']).then(function(){
//		httpHelper = $injector.get("httpHelper");
//	});
	
	// 定义通用状态码
	var statusCode = {
		// 请求成功
		success : 200,
		// 登录过期
		sessionTimeOut : 10000
	}
	
	//发送GET方式的请求
	this.restGet = function(url,data,headers){
		return this.sendHttp({
			url:url,
			method:"GET",
			data:data,
			headers:headers
		});
	}
	
	//发送POST方式的请求
	this.restPost = function(url,data,headers){
		return this.sendHttp({
			url:url,
			method:"POST",
			data:data,
			headers:headers
		});
	}
	
	//发送PUT方式的请求
	this.restPut = function(url,data,headers){
		return this.sendHttp({
			url:url,
			method:"PUT",
			data:data,
			headers:headers
		});
	}
	
	//发送DELETE方式的请求
	this.restDelete = function(url,data,headers){
		return this.sendHttp({
			url:url,
			method:"DELETE",
			data:data,
			headers:headers
		});
	}
	
	//发送自定义的http请求
	this.sendHttp = function(options){
		var deferred  = $q.defer();
		httpHelper.sendHttp({
			url:options.url,
			data:options.data||{},
			headers:options.headers||{},
			before:options.before||function(){
				console.log("before http");
			},
			success:function(data, header, config, status){
				/**
				 * 根据statusCode状态码处理通用逻辑
				 */
				deferred.resolve(data, header, config, status);
			},
			error:function(data, header, config, status){
				deferred.reject(data, header, config, status);
			},
			after:options.after||function(){
				console.log("after http");
			}
		});
		return deferred.promise;
	}
	
	//内部测试httpHelper
	var httpHelperTest = function() {
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