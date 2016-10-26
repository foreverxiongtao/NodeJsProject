var express = require('express');
var app = new express();
app.use(express.static('public'));

app.get('/login', function (req, res) {
    var reponse = {
        username: req.query.username,
        password: req.query.password
    }
    res.send(JSON.stringify(reponse));
});

var server = app.listen(8090, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});