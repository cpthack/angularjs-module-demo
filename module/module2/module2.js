/**
 * 测试模块 - module2
 */

var module2 = angular.module('module2', [ 'oc.lazyLoad' ]);

module2.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('module2', {
		url : '/module2',
		templateUrl : 'module/module2/module2.html',
		controller : 'module2Controller',
		css : 'module/module2/module2.css',
		resolve : {
			loadMyCtrl : [ '$ocLazyLoad', function($ocLazyLoad) {
				$ocLazyLoad.load([// 添加额外依赖文件
				// {type: 'css', path: 'testModuleCtrl'},
				// {type: 'html', path: 'testModuleCtrl.html'},
				 {type: 'js', path: 'https://cdn.bootcss.com/jquery.form/4.2.2/jquery.form.min.js'}
				], {
					cache : true,
					timeout : 5000
				});
				return $ocLazyLoad.load('module/module2/module2Controller.js')
			} ]
		}
	})

});