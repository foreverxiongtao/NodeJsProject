var express = require('express');
var fs = require('fs');
var app = new express();
//添加的新用户数据
var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}


/***
 * 显示用户
 */
app.get('/listuser', function (req, res) {
    fs.readFile("./public/json/user.json", 'utf-8', function (err, _data) {
        if (err) {
        }
        else {
            res.send(_data);
        }
    });
});

/***
 * 增加用户
 */
app.get("/adduser", function (req, res) {
    fs.readFile("./public/json/user.json", 'utf-8', function (err, _data) {
        if (err) {
        }
        else {
            _data = JSON.parse(_data);
            _data['user4'] = user['user4'];
            res.send(_data);
        }
    });
});


/*****
 * 显示用户详情
 * @type {http.Server}
 */


/*****
 *
 * 删除用户
 ***/



app.get("/deleteuser", function (req, res) {
    fs.readFile("./public/json/user.json", 'utf-8', function (err, _data) {
        if (err) {
        }
        else {
            _data = JSON.parse(_data);
            delete _data['user1'];
            res.send(JSON.stringify(_data));
        }
    });
});
app.get('/:aaa', function (req, res) {
    fs.readFile("./public/json/user.json", 'utf-8', function (err, _data) {
        if (err) {
        }
        else {
            _data = JSON.parse(_data);
            _data = _data['user' + req.params.aaa];
            res.send(_data);
        }
    });
});
var server = app.listen(8090, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});

