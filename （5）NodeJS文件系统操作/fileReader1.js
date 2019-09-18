const fs = require("fs");
const path = require("path");
const http = require("http");

http.createServer(function(req,res){
    var str = "hello";
    /**
     * fs.readFile()是一个异步方法，执行到该句不会等待
     * 文件读取完成，就直接执行后面的语句，
     * 回调函数是等到文件读取完成之后才执行
     */
    var fileName = process.argv[2];
    var filePath = path.join(__dirname,"/"+fileName);
    if(fileName == undefined){
        fs.readFile(process.argv[1],(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                str = data.toString();
                res.end(str);
            }
            
        })
    }
    else{
        if(fs.existsSync(filePath)){
            fs.readFile(filePath,(err,data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    res.end(data.toString());
                }
                
            })
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("文件不存在");
        }
    }
}).listen(8081);

console.log("server is listening 8081");