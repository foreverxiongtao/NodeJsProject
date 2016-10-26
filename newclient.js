var http = require('http');

var options = {
    host: 'localhost',
    port: '9999',
    path: '/start'
}

function callBack(response) {
    var data = "";
    response.addListener("data", function (_data) {
        data += _data;
    });
    response.addListener("end", function () {
        console.log(data);
    });
}

http.request(options, callBack);