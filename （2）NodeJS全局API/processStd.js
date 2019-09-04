var arr=["name:","email:","qq:","mobile:"];
var brr=[];
var i=0;
console.log(arr[i]);
process.stdin.on("data",function(data){   
    if(i < 3){
        brr[i]=data.toString();
        i++;
        console.log(arr[i]);        
    }
    else{   
        brr[i]=data.toString(); 
        var user = {
            name: brr[0],
            email: brr[1],
            qq: brr[2],
            mobile: brr[3]
        }
        console.log("%j",user);
        process.exit();    
    }    
})