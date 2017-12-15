var module1 = angular.module('module1', ['oc.lazyLoad']);

module1.controller('module1Controller', [ '$scope', "$state",
		function($scope, $state) {
		    
			$scope.moduleName = "module1";
			$scope.test = function() {
				alert("my name is test of " + $scope.moduleName + ".");
			};

		} ]);