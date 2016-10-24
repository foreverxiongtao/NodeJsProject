var http = require("http");
var url = require("url");
// function start(request, response) {
//     console.log("http server received");
//     response.writeHead(200, {"Content-type": "text/plain"});
//     response.write("{hello world}");
//     response.end();
// }
// http.createServer(start).listen(8888);
function start(route) {
    function onRequest(request,response) {
        console.log("server received");
        var path = url.parse(request.url).pathname;
        route.route(path);
        response.writeHead(200,{"Content-type":"text/plain"});
        response.write("hello world");
        response.end();
    }
    http.createServer(onRequest).listen(7777);
    console.log("server create");
}
console.log("http server create ");
exports.start = start;    /*****将helloworld进行模块化，导出函数***/