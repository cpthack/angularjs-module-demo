var connect = require("connect");
var serveStatic = require("serve-static");

var app = connect();
app.use(serveStatic("/Users/cptahck/git/angularjs-module-demo"));

app.listen(5000);