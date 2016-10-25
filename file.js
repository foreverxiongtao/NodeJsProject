var fs = require("fs");
var path = "./test.txt";
if (fs.existsSync(path)) {
    fs.readFile(path, function (err, data) {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log(data.toString());
        }
    });
    var readStream = fs.createReadStream(path);
    var _temp = "";
    readStream.on("data", function (_data) {
        _temp += _data;
    });
    readStream.on("end", function () {
        console.log(_temp);
    })
    readStream.on("err", function (err) {
        console.log(err.message);
    })
}