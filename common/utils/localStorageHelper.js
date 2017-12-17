/**
 * 本地存储数据操作辅助工具服务
 */
commonUtils.service('localStorage', [ "$window", function() {

	// 存储单个基础数据类型值
	this.setValue = function(key, value) {
		$window.localStorage[key] = value;
	}
	// 读取单个基础数据类型值
	this.getValue = function(key, defaultValue) {
		return $window.localStorage[key] || defaultValue;
	}
	// 存储对象信息
	this.setObject = function(key, object) {
		$window.localStorage[key] = JSON.stringify(object);// 将对象以字符串保存
	}
	// 读取对象信息
	this.getObject = function(key) {
		return JSON.parse($window.localStorage[key] || '{}');// 获取字符串并解析成对象
	}

} ]);
