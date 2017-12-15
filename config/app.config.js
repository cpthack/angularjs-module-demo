/**
 * 模块配置入口
 */
var allModule = [ 'ui.router', 'angularCSS', 'module1', 'module2' ];

var app = angular.module('myApp', allModule);

app.config(
		function($stateProvider, $urlRouterProvider, $locationProvider) {
			/**
			 * 可以去除#号路由来访问，如果需要直接访问路由有效，则需针对应用容器进行额外配置
			 * http://blog.csdn.net/lxhjh/article/details/50614393
			 */
			$locationProvider.html5Mode(true);
			$urlRouterProvider.otherwise('/');

		});

app.constant('ENV', '');