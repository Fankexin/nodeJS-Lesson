const fs = require("fs");
const path = require("path");

var fileName = process.argv[2];
var pathName = path.join(__dirname,fileName);
if(fs.existsSync(pathName)){
    var statObj = fs.statSync(pathName);
    if(statObj.isFile()){
        fs.unlinkSync(pathName);
    }
    else{
        delDir(pathName);
    }
}
else{
    console.log("not exist");
}

function delDir(pathName){
    var files = fs.readdirSync(pathName);
    for(var i = 0;i<files.length;i++){
        var pathName1 = path.join(pathName,files[i]);
        var statObj = fs.statSync(pathName1);
        if(statObj.isFile()){
            fs.unlinkSync(pathName1);
        }
        else if(statObj.isDirectory()){
            delDir(pathName1);
        }
    }
    fs.rmdirSync(pathName);
}