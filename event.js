/***引入events模块**/
var events = require("events");

/***创建eventEmitter对象实例**/
var eventEmitter = new events.EventEmitter();

var connectionHandler = function connected() {
    console.log("连接成功");
    eventEmitter.emit("dataReceived");
}
eventEmitter.on('connected', connectionHandler);

var dataReceivedHandler = function receivedData() {
    console.log("接受到数据");

}
eventEmitter.on("dataReceived", dataReceivedHandler);
eventEmitter.emit("connected");
