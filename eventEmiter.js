var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("event", function (arg1, arg2) {
    console.log("event1:" + arg1 + "", arg2 + "");
})
eventEmitter.on("event", function (arg1, arg2) {
    console.log("event2:" + arg1, arg2);
});

/***注册了两个监听，添加到监听队列中，然后依次触发**/
eventEmitter.emit("event", "arg1", "arg2");