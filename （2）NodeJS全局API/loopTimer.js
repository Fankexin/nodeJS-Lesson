var looptime = setInterval(loop,500);
function loop(){
    console.log('I will loop forver!');
}
setTimeout(function(){
    console.log("Game over");
    process.exit();
},5000);