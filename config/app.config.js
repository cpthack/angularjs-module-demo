/**
 * 模块配置入口
 */
angular.module('myApp', [
// 添加通用模块
'ui.router',// 添加路由模块
'angularCSS',// 添加CSS懒加载模块
// 自定义业务模块
'module1','module2' ]).config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/launch')
});