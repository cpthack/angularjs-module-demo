var module2 = angular.module('module2');

module2.controller('module2Controller',
		[ '$scope', "$state", function($scope, $state) {
			$scope.moduleName = "module2";
			$scope.test = function() {
				alert("my name is test of " + $scope.moduleName + ".");
			};

		} ]);