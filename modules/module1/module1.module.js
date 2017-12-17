/**
 * 测试模块 - module1
 */
var module1 = angular.module('module1', ['oc.lazyLoad']);

module1.config(function($stateProvider,$urlRouterProvider) {
	
	$stateProvider.state('module1', {
		url : '/module1',
		css : 'modules/module1/module1.css',
		templateUrl: 'modules/module1/module1.html',
		controller:'module1Controller',
		resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
            	
            	$ocLazyLoad.load('common/utils/stringHelper.js');
            	$ocLazyLoad.load('common/utils/httpHelper.js');
            	
                return $ocLazyLoad.load('modules/module1/module1.controller.js')
            }]
        }
	})

});