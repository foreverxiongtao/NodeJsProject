var express = require('express');
var app = express();
var fs = require("fs");
var cookieParser = require('cookie-parser');

// var bodyParser = require('body-parser');
// var multer = require('multer');
app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({dest: '/public/images'}).array('image'));
// app.use(express.static('public'));
app.use(cookieParser);
// app.get('/start', function (req, res) {
//     console.log("aaaaaaa");
// })


app.get("/start", function (req, res) {
    res.sendfile(__dirname + "/public/html/fileupload.html");
});
// app.post('/file_upload', function (req, res) {
//     console.log(req.files[0]);
//     // fs.readFile(req.files[0]);
// });
// app.post('/file_upload', function (req, res) {
//     console.log(req.files[0]);  // 上传的文件信息
//     var des_file = __dirname + "/" + req.files[0].originalname;
//     fs.readFile(req.files[0].path, function (err, data) {
//         fs.writeFile(des_file, data, function (err) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 response = {
//                     message: 'File uploaded successfully',
//                     filename: req.files[0].originalname
//                 };
//             }
//             console.log(response);
//             res.end(JSON.stringify(response));
//         });
//     });
// })
var server = app.listen(8095);