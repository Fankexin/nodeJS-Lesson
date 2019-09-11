const events = require("events");
const EventEmitter = events.EventEmitter;

function radio(a,b) {
    EventEmitter.call(this);
    this.a=a;
    this.b=b;
    var that = this;
    this.play = function() {
        console.log(this.a, this.b, "opened");
        setTimeout(function() {
            console.log("lalala...");
        }, 2000);
    }
    this.stop = function() {
        console.log(this.a, this.b, "closed");
    }

}
module.exports = {
    radio:radio
}
