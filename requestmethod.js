// var http = require('http');
// var url = require('url');
// var util = require('util');
// var querystring = require('querystring');
// /***获取get请求***/
// // function onRequest(request, response) {
// //     response.writeHead(200, {"Content-type": "text/plain"});
// //     response.end(util.inspect(url.parse(request.url), true));
// // }
// // http.createServer(onRequest).listen(9000);
//
// function onRequest(req, res) {
//     var _data = ""
//     req.on("data", function (postData) {
//         _data += postData;
//     });
//     req.on("end", function () {
//         var final = querystring.parse(_data);
//         res.writeHead(200, {"Content-type": "text/plain"});
//         res.end(util.inspect(final, true));
//     })
// }
// http.createServer(onRequest).listen(9000);


var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req, res){
    var post = '';     //定义了一个post变量，用于暂存请求体的信息

    req.on('data', function(chunk){    //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        post += chunk;
    });

    req.on('end', function(){    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        post = querystring.parse(post);
        res.end(util.inspect(post));
    });
}).listen(3000);