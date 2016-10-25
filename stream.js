var fs = require("fs");
var zlib = require("zlib");
/***文件流的读取***/
// var readStream = fs.createReadStream("test.txt");
// var _data = "";
// readStream.on("data", function (chunk) {
//     _data += chunk;
// });
//
// readStream.on("end", function () {
//     console.log("end:" + _data);
// });
// readStream.on("err", function (err) {
//     console.log(err.message);
// });
// console.log("final data:" + _data);
/***文件流的写入****/
// var writeStream = fs.createWriteStream("test_write.txt");
// var data = "这个是测试数据";
// writeStream.write(data);
// writeStream.end();
// /****标记为结束****/
//
// writeStream.on("finish", function () {
//     console.log("写入成功");
// });
// writeStream.on("err", function (err) {
//     console.log(err.stack);
// })

/***管道流***/
// var readStream = fs.createReadStream("test.txt");
// var writeStream = fs.createWriteStream("test_copy.txt");
// readStream.pipe(writeStream);
// console.log("程序执行完毕");
/****压缩文件***/
// var readStream = fs.createReadStream("test.txt");
// readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream("input_txt_gzip.gz"));
// console.log("文件压缩成功");

var readStream = fs.createReadStream("input_txt_gzip.gz");
readStream.pipe(zlib.createGunzip()).pipe(fs.createWriteStream("gun_txt.txt"));
console.log("文件解压缩成功");