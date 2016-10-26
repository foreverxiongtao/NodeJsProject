var net = require('net');


var server = net.createServer(function (connection) {
    console.log("connection is called");
    connection.write("hello");
    connection.on("end",function () {
        console.log("connection closed");
    })
    connection.pipe(connection);
});
server.listen(8090, function () {
    console.log("server is linstening")
});