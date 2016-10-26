var net = require('net');
var client = net.connect({port: 8090}, function () {
    console.log("connection is successful")
});
client.on("data", function (data) {
    console.log("data=" + data.toString());
});
client.on("end", function () {
    cosole.log("connection has ended");
})