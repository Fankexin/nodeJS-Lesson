const events = require("events");
const EventEmitter = events.EventEmitter;

function Dog(name, energy) {
    EventEmitter.call(this);
    this.name = name;
    this.energy = energy;
    var that = this;

    var begin = setInterval(function () {
        that.emit("bark");
        that.energy--;
        if (that.energy < 0) {
            clearInterval(begin);
        }
    }, 1000);

}
module.exports = {
    Dog: Dog
}
