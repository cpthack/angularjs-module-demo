/**
 * http请求辅助工具服务
 */
commonUtils.service('httpHelper', function($http) {
	// 发送GET请求
	this.restGet = function(options) {
		options.method = "GET";

		if (options.data) {
			var data = "";
			if (options.url.indexOf("?") < 0) {
				data = "?";
			}
			for ( var key in options.data) {
				data = data + '' + key + '=' + options.data[key] + '&';
			}
			options.url += data;
		}
		this.sendHttp(options);
	}
	// 发送POST请求
	this.restPost = function(options) {
		options.method = "POST";
		this.sendHttp(options);
	}
	// 发送PUT请求
	this.restPut = function(options) {
		options.method = "PUT";
		this.sendHttp(options);
	}
	// 发送DELETE请求
	this.restDelete = function(options) {
		options.method = "DELETE";
		this.sendHttp(options);
	}
	// 发送自定义的HTTP请求
	this.sendHttp = function(options) {
		if (options.before) {
			options.before();// 执行前调用
		}
		http(options);
	}

	// 私有http请求具体实现
	var http = function(options) {
		options = options || "";
		if (options == "") {
			console.error("the request options is not allow Null.");
			return false;
		}
		var url = options.url || "";
		if (url == "") {
			console.error("the request url is not allow Null.");
			return false;
		}
		var method = options.method || "GET";
		var headers = options.headers || {};
		var data = options.data || {};

		$http({
			url : url,
			method : method,
			headers : headers,
			data : data,
		}).success(function(data, header, config, status) {
			if (options.success) {
				options.success(data, header, config, status);
			}
		}).error(function(data, header, config, status) {
			// 处理响应失败，回调函数
			if (options.error) {
				options.error(data, header, config, status);
			}
		}).catch(function(e) {
	        console.log('Error: ', e);
	        throw e;
	    }).finally(function() {
	    	if (options.after) {
				options.after();
			}
	    });

	}

});
