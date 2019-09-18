const fs = require("fs");
const path = require("path");
const http = require("http");

http.createServer(function (req, res) {
    var fileName = process.argv[2];
    var filePath = path.join(__dirname, "/" + fileName);
    if (fileName == undefined) {
        var filePath1 = path.join(__filename);
        fs.open(filePath1, "r+", (err, fd) => {
            var len = fs.statSync(filePath1).size;
            var buf = Buffer.alloc(len);
            fs.read(fd, buf, 0, len, 0, (err, bytesRead, buf) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.end(buf.toString());
                    fs.closeSync(fd);
                }
            });
        });
    }
    else {
        if (fs.existsSync(filePath)) {
            fs.open(filePath, "r+", (err, fd) => {
                var len = fs.statSync(filePath).size;
                var buf = Buffer.alloc(len);
                fs.read(fd, buf, 0, len, 0, (err, bytesRead, buf) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.end(buf.toString());
                        fs.closeSync(fd);
                    }
                });
            });
        }
        else {
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("文件不存在");
        }
    }
}).listen(8081);

console.log("server is listening 8081");