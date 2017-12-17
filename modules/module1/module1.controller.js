var module1 = angular.module('module1', [ "common.utils" ]);

module1.controller('module1Controller', [ '$scope', "$state", "stringHelper",
		"httpHelper", function($scope, $state, stringHelper, httpHelper) {

			$scope.moduleName = "module1";

			$scope.testNgReapeat = function() {
				$scope.testRepeat = [ {
					"name" : "cpthack1",
					"descp" : "test1"
				}, {
					"name" : "cpthack2",
					"descp" : "test2"
				} ];
			};

			$scope.test = function() {
				console.log(stringHelper.isEmpty(""));
			};

			$scope.testPost = function() {
				var result = "";
				httpHelper.restPost({
					url : "http://127.0.0.1:5000/rest/api/post",
					data : {
						"name" : "cpthack",
						"descp" : "my name is cpthack"
					},
					success : function(data) {
						//data = JSON.parse(data || '{}');
						result = data.message;
						console.log(data);
					},
					after : function() {
						alert(result);
					}
				});
			}

		} ]);