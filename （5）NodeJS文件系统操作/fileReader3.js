const fs = require("fs");
const path = require("path");
const http = require("http");

http.createServer(function(req,res){
    var fileName = process.argv[2];
    var filePath = path.join(__dirname,"/"+fileName);
    if(fileName == undefined){
        var filePath1 = path.join(__filename);
        var readStream = fs.createReadStream(filePath1);
        readStream.pipe(res);
    }
    else{
        if(fs.existsSync(filePath)){
            var readStream = fs.createReadStream(filePath);
            readStream.pipe(res);
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("文件不存在");
        }
    }
}).listen(8081);

console.log("server is listening 8081");