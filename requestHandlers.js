/**
 * Created by Administrator on 2016/10/25.
 */
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");
var drive = "F:/"; // Drive name. (The file will be uploaded to "G:/tmp/test.png")
function start(response) {
    console.log("Request handler 'start' was called.");
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" ' +
        'content="text/html; charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" ' +
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

var cacheFolder = './public/images/uploadcache/';
function upload(response, request) {
    console.log("Request handler 'upload' was called.");
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    // form.parse(request, function (error, fields, files) {
    var userDirPath = cacheFolder;
    if (!fs.existsSync(userDirPath)) {
        fs.mkdirSync(userDirPath);
    }
    console.log("Request handler 'upload' was called.");
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8'; //设置编辑
    form.uploadDir = userDirPath; //设置上传目录
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024; //文件大小
    form.type = true;
    console.log("about to parse");
    form.parse(request, function (error, fields, files) {
        console.log("parsing done");
        fs.renameSync(files.upload.path, "./public/images/uploadcache/test.png");
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
    // console.log("parsing done");
    // var userDirPath=drive + "/tmp/test.png";
    // if (!fs.existsSync(userDirPath)) {
    //     fs.mkdirSync(userDirPath);
    // }
    // fs.rename(files.upload.path,userDirPath , function (err) {
    //     var tmp = files.upload.path;
    //     fs.createReadStream(files.upload.path).pipe(fs.createWriteStream(userDirPath));
    //     fs.unlink(files.upload.path, function (err) {
    //         console.log("/upload : Remove the following temporary file;\n" + tmp);
    //         if (err) throw err;
    //     });
    // });
    // response.writeHead(200, {"Content-Type": "text/html"});
    // response.write("received image:<br/>");
    // response.write("<img src='/show' />");
    // response.end();
    // });
}

function show(response) {
    console.log("Request handler 'show' was called.");
    fs.readFile("./public/images/uploadcache/test.png", "binary", function (error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
