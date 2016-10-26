//express_demo.js 文件
var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/userlist', function (req, res) {
    res.send('用户列表get请求');
})

app.post('/userlist', function (req, res) {
    res.send("用户列表post请求");
})
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})