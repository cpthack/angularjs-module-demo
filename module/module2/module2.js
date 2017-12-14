/**
 * 测试模块 - module2
 */
angular.module('module2', []).config(
		function($stateProvider, $urlRouterProvider) {

			$stateProvider.state('module2', {
				url : '/module2',
				templateUrl : 'module/module2/module2.html',
				controller : 'module2Controller',
				css : 'module/module2/module2.css'
			})

		})

.controller('module2Controller',
		[ '$scope', "$state", function($scope, $state) {
			$scope.moduleName = "module2";
			$scope.test = function() {
				alert("my name is test of " + $scope.moduleName + ".");
			};

		} ]);