# angularjs-module-demo

基于node.js环境下的angularjs模块化demo，演示了基本的功能，可以做案例参考.

## 一、运行环境搭建：

#### 1、安装node.js及npm环境
> 参考地址: 
  http://www.runoob.com/nodejs/nodejs-install-setup.html

#### 2、拉取代码到本地后切换到项目路径下并安装依赖
> 命令操作示例

```
cd /Users/cptahck/git/angularjs-module-demo
npm install
```
#### 3、运行代码
> 命令操作示例

```
cd /Users/cptahck/git/angularjs-module-demo
node start.js
或者 
npm start
```
## 二、项目目录结构：

#### 1、目录结构说明
> 仅供参考: 

```
/angularjs-module-demo            -->项目根目录
    /config                       -->配置相关
    /lib                          -->项目使用的第三方库文件夹
    /css                          --全局的项目css样式文件夹
    /js                           --全局的项目js文件夹
    /images                       --全局的项目图片文件夹
    /modules                      -->业务模块文件夹，里面按照业务以独立模块进行划分
       /module1                   -->业务模块1
          /xxx.module.js          -->模块中的模块入口文件
          /xxx.Controller.js      -->模块中的控制器文件
          /xxx.Service.js         -->模块中的服务文件
          /xxx.html               -->模块中的模板文件
          /xxx.css                -->模块中的样式文件
       /module2                   --业务模块2
          ....
    index.html                    --应用的入口文件
    package.json                  --Node配置信息
    start.js                      --基于node的http服务启动脚本，使用命令:node start.js
```