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

	this.isBlank = function(str) {
		return str == null || /^\s*$/.test(str);
	}

	this.isNotBlank = function(str) {
		return !this.isBlank(str);
	}

	this.trim = function(str) {
		return str.replace(/^\s+|\s+$/, '');
	}

	this.startsWith = function(str, prefix) {
		return str.indexOf(prefix) === 0;
	}

	this.endsWith = function(str, suffix) {
		return str.lastIndexOf(suffix) === 0;
	}

	this.contains = function(str, search) {
		return this.indexOf(search) >= 0;
	}

	this.equals = function(str1, str2) {
		return str1 == str2;
	}

});
