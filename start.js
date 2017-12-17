var express = require('express');
var app = express();

var serveStatic = require("serve-static");

var projectDir = __dirname;
var serverPort = 5000;

app.use(serveStatic(projectDir));// 处理静态文件

/**
 * 内测API
 */
app.get('/rest/api/get', function (req, res) {
	res.json({"result":{message:"get successfully."}});
});
app.post('/rest/api/post', function (req, res) {
	res.json({"result":{message:"post successfully."}});
});
app.put('/rest/api/put', function (req, res) {
	res.json({"result":{message:"put successfully."}});
});
app.post('/rest/api/delete', function (req, res) {
	res.json({"result":{message:"delete successfully."}});
});

app.use("/", function(req, res) { // 处理Angularjs H5路由
	console.log("req.url = " + req.url);
	res.sendfile(projectDir + '/index.html');
});

var server = app.listen(serverPort);
console.log("start server port=[%d],projectDir=[%s] successfully.", serverPort,
		projectDir);