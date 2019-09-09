var http = require("http");
var fs = require("fs");
var path = require("path");
http.createServer(function(req,res){
    var imgPath = path.join(__dirname,"./1.png");
    var imgContent = fs.readFileSync(imgPath);
    var base64Str = imgContent.toString("base64");
    var imgSrc = "data:image/png;base64,"+base64Str;
    var htmlStr = "<!DOCTYPE HTML><head></head>"+
                    "<body><img src='"+imgSrc+"'/></body>"+
                    "</html>";
    
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlStr);
    res.end();
}).listen(8081);

console.log("server is listening 8081");