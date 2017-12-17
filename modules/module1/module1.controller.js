var module1 = angular.module('module1', [ "common.utils" ]);

module1.controller('module1Controller', [ '$scope', "$state", "stringHelper",
		"httpHelper", function($scope, $state, stringHelper, httpHelper) {

			$scope.moduleName = "module1";
			
			//测试ng-repeat
			$scope.testNgReapeat = function() {
				$scope.testRepeat = [ {
					"name" : "cpthack1",
					"descp" : "test1"
				}, {
					"name" : "cpthack2",
					"descp" : "test2"
				} ];
			};

			$scope.testString = function() {
				console.log(stringHelper.isEmpty(""));
			};
			
			//测试 GET请求
			$scope.testGet = function() {
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
			//测试POST请求
			$scope.testPost = function() {
				var result = "";
				var data = {
						"name" : "cpthack",
						"descp" : "my name is cpthack"
					};
				httpHelper.restPost({
					url : "http://127.0.0.1:5000/rest/api/post",
					data : $.param(data),
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
			//测试PUT请求
			$scope.testPut = function() {
				var result = "";
				var data = {
						"name" : "cpthack",
						"descp" : "my name is cpthack"
					};
				httpHelper.restPut({
					url : "http://127.0.0.1:5000/rest/api/put",
					data :$.param(data),
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
			//测试DELETE请求
			$scope.testDelete = function() {
				var result = "";
				var data = {
						"name" : "cpthack",
						"descp" : "my name is cpthack"
					};
				httpHelper.restDelete({
					url : "http://127.0.0.1:5000/rest/api/delete",
					data :$.param(data),
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