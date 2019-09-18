const fs = require("fs");
const path = require("path");
const http = require("http");

var arr=["请输入要创建的文件夹：","请输入要创建的文件：","请输入要删除的文件：","删除成功，请按回车键结束"];
var i=0;
console.log(arr[i]);
process.stdin.on("data", (data) => { 
  if(i < 3){
    var cmd = data.toString();
    var cmdArr = cmd.split(" ");
    switch(cmdArr[0]){
      case "mkdir":
        fs.mkdirSync(cmdArr[1].slice(0,-2));
        console.log("文件目录创建成功！！");
        break;
      case "touch":
        var filePath = path.join(__dirname,"/filedir/file.txt");
        fs.writeFileSync(filePath,"hello node");
        console.log("文件创建成功");
        break;
      case "delete":
        var filePath = path.join(__dirname,"/filedir/file.txt");
        fs.unlinkSync(filePath);
        break;
      default:
        console.log("something erro");
        break;
    }
    i++;
    console.log(arr[i]);
  }
  else{   
    process.exit();    
  }    
});