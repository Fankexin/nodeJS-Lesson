const events = require("events");
const EventEmitter = events.EventEmitter;
var dog = require("./dog.js");

dog.Dog.prototype.__proto__ = EventEmitter.prototype;
var dog1 = new dog.Dog("taidi", 4);
var dog2 = new dog.Dog("zangao", 8);
dog1.on("bark", function () {
    console.log(this.name + " barked! energy:" + this.energy);
});
dog2.on("bark", function () {
    console.log(this.name + " barked! energy:" + this.energy);
})