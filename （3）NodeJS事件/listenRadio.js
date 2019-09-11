const events = require("events");
const util = require('util');
const EventEmitter = events.EventEmitter;
var radio = require("./radio.js");

util.inherits(radio.radio, EventEmitter);
var radio1 = new radio.radio("music radio","FM 106.7");
radio1.on("play", radio1.play);
radio1.on("stop", radio1.stop);

radio1.emit('play');

setTimeout(function() {
    radio1.emit('stop');
}, 2000);
