/**
 * 字符串相关工具类
 */
var StringHelper = angular.module("common.utils", []);

StringHelper.service('StringHelper', function() {

	this.isEmpty = function(str) {
		return str == null || str == '' || typeof str == undefined;
	}
	
	this.notEmpty = function(str) {
		return !this.isEmpty(str);
	}

});
