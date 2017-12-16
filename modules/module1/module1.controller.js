var module1 = angular.module('module1', [ "common.utils" ]);

module1.controller('module1Controller', [ '$scope', "$state", "StringHelper",
		function($scope, $state, StringHelper) {

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
				console.log(StringHelper.isEmpty(""));
			};

		} ]);