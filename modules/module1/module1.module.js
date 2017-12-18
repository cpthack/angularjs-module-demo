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
			//加载模块工具类
			loadMyUtils:['$ocLazyLoad',function($ocLazyLoad){
				return $ocLazyLoad.load(['common/utils/httpHelper.js','common/utils/stringHelper.js']);
			}],
			//加载模块服务类
			loadMyService:['$ocLazyLoad','loadMyUtils',function($ocLazyLoad,loadMyUtils){
				return $ocLazyLoad.load('common/service/httpService.js');
			}],
			//加载模块控制器类
            loadMyCtrl: ['$ocLazyLoad','loadMyUtils','loadMyService', function($ocLazyLoad,loadMyUtils,loadMyService){
            	return $ocLazyLoad.load('modules/module1/module1.controller.js')
            }]
        }
	})

});