/**
 * 测试模块 - module1
 */
angular.module('module1', []).config(
		function($stateProvider, $urlRouterProvider) {

			$stateProvider.state('module1', {
				url : '/module1',
				templateUrl : 'module/module1/module1.html',
				controller : 'module1Controller',
				css : 'module/module1/module1.css'
			})

		})

.controller('module1Controller',
		[ '$scope', "$state", function($scope, $state) {
			$scope.moduleName = "module1";
			$scope.test = function() {
				alert("my name is test of " + $scope.moduleName + ".");
			};

		} ]);