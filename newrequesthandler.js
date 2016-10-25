var exec = require("child_process").exec;
var querystring = require("querystring");
fs = require("fs");
var  formidable = require("formidable");
function start(response) {
    exec("ls -lah", {timeout: 10000, maxBuffer: 20000 * 1024}, function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout + "result success");
        response.end();
    });
}
function uploadImage(response) {
    console.log("Request handler 'start' was called.");
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/uploadImg" enctype="multipart/form-data" ' +
        'method="post">' +
        '<input type="file" name="upload" multiple="multiple">' +
        '<input type="submit" value="Upload file" />' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}


function submit(response) {
    console.log("Request handler 'start' was called.");
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/uploadImg" method="post">' +
        '<textarea name="txt" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
function upload(response, postData) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(querystring.parse(postData).text);
    response.end();
}

var cacheFolder = './public/images/uploadcache/';

function uploadImg(response, request) {
    var userDirPath =cacheFolder;
    if (!fs.existsSync(userDirPath)) {
        fs.mkdirSync(userDirPath);
    }
    console.log("Request handler 'upload' was called.");
    var form =new formidable.IncomingForm();
    form.encoding = 'utf-8'; //设置编辑
    form.uploadDir = userDirPath; //设置上传目录
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024; //文件大小
    form.type = true;
    console.log("about to parse");
    form.parse(request,function(error, fields, files){
        console.log("parsing done");
        fs.renameSync(files.upload.path,"/tmp/test.png");
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/showImage' />");
        response.end();
    });
}
function showImage(response) {
    console.log("showImage has been called");
    fs.readFile("./public/images/test.jpg", "binary", function (err, file) {
        if (err) {
            /***失败**/
            response.writeHead(500, {"Content-type": "text/plain"});
            response.write("err=" + err);
            response.end();
        }
        else {
            response.writeHead(200, {"Content-type": "image/jpg"});
            response.write(file, "binary");
            response.end();
        }
    });
}
exports.start = start;
exports.upload = upload;
exports.submit = submit;
exports.showImage = showImage;
exports.uploadImg = uploadImg;
exports.uploadImage = uploadImage;
