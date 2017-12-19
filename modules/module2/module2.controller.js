var module2 = angular.module('module2');

module2.controller('module2Controller',
		[ '$scope', "$state", function($scope, $state) {
			$scope.moduleName = "module2";
			$scope.test = function() {
				alert("my name is test of " + $scope.moduleName + ".");
			};
			
			//测试ECMAScript6的语法
			$scope.testES6 = function(){
				let name = "cpthack";//支持块级作用域
				while(true){
					let name ="name";
					console.log("name = %s",name);
					break;
				}
				console.log("name = %s",name);
				
				const math = Math.PI;//定义常量，不可变
				console.log(math);
				//math = 1;//常量在程序中改变时会报错
				
				//定义动物的类对象
				class Animal{
					constructor()
					{
						this.name="animal";
					}
					sayHello(){
						console.log("hello! my name is %s",this.name);
					}
				}
				let animal  = new Animal();
				animal.sayHello();
				//定义猫对象并继承动物对象
				class Cat extends Animal{
					constructor()
					{
						super();
						this.name = "mimi";
					}
				}
				let cat  = new Cat();
				cat.sayHello();
				
				//函数式编程
				() => {let name = "cpthck";console.log("array function. name : %s",name);}
				
				//string template，类似于模板引擎
				console.log(`this is the string template. my name is ${cat.name}`);
				
				//destructuring 解构
				let pig = "dudu";
				let dog = "wangwang";
				let zoo = {pig,dog};
				console.log(zoo);
				
			}
			
		} ]);