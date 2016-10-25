/**
 * Created by Administrator on 2016/10/24.
 */

var http = require("http");
var url = require("url");
function start(route, handle) {
    function requestCallBack(request, response) {
        // request.setEncoding("utf-8");
        // var postData = "";
        var path = url.parse(request.url).pathname;
        // request.addListener("data", function (postDataChunk) {
        //     postData += postDataChunk;
        // });
        // request.addListener("end", function () {
        //     route(handle, path, response,postData);
        // });
        route(handle, path, response, request);
    }

    http.createServer(requestCallBack).listen(9999);
}
exports.start = start;