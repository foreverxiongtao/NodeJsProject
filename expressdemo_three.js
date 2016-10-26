var express = require('express');
var body_parser = require('body-parser');
var app = new express();
app.use(express.static('public'));
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = body_parser.urlencoded({extended: false})

app.get('/register', function (req, res) {
    res.sendFile(__dirname + "/public/html/register.html");
});
app.post('/submit', urlencodedParser, function (req, res) {
    response = {
        username: req.body.username,
        password: req.body.password
    }
    res.send(JSON.stringify(response));
});
var server = app.listen(8091, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});