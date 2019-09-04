function Bomb(x){
    this.message = x;
    Bomb.prototype.explode = function(){console.log("%s",this.message)};
}
var bomb = new Bomb("bomb!!!");
setTimeout(function(){
    bomb.explode();
},2000);