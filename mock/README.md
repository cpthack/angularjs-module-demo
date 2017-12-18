# 本地JSON数据mock

基于本地服务及本地JSON数据文件做mock测试.

## 一、本地JSON生成：

#### 1、在线生成json文件
> 参考地址: 
  https://www.bejson.com/jsoneditoronline/

## 二、mock地址：

#### 1、本地mock地址
> 参考示例: 
   http://127.0.0.1:5000/mock/test.json

```
{
    "status": 200,      //请求状态码，可自定义状态表示码，如：10000表示登录超时
    "msg": "请求成功.",  //一般返回成功/错误提示语  
    "data": {          //具体的业务数据对象
        "name": "cpthack",
        "age": 18,
        "descp": "my name is cpthack"
    }   
}
```