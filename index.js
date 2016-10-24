var server = require("./server");
var route = require("./route");
var newrequesthandler = require("./newrequesthandler");

var handle = {};
handle['/'] = newrequesthandler.start;
handle['/upload'] = newrequesthandler.upload;
handle['/start'] = newrequesthandler.start;
handle['/submit'] = newrequesthandler.submit;
handle['/showImage'] = newrequesthandler.showImage;
handle['/uploadImg'] = newrequesthandler.uploadImg;
handle['/uploadImage'] = newrequesthandler.uploadImage;
server.start(route.router, handle);