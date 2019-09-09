var name = process.argv[2];
var password = process.argv[3];

if(name!=undefined && password!=undefined){
    console.log("用户名："+name+" 密码："+password);
    var loginStr = name+":"+password;
    var buf1 = Buffer.from(loginStr,"utf-8");
    var base64Str = buf1.toString("base64");
    console.log("base64加密："+base64Str);
}
else{
    console.log("用户名密码不能为空");
}