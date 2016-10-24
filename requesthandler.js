/**
 * Created by Administrator on 2016/10/24.
 */
function start(delayTime) {
    console.log("method start is called");
    return "method start is called";
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + delayTime);
}
function upload() {
    console.log("method upload is called");
}
exports.start = start;
exports.upload = upload;