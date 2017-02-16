//build our own event emitter :
//func ctor
var Emitter = function () {
    this.events = {};
}

Emitter.prototype.on = function (type, listener) { //type - type of event , listener - code need to run when event happens
    //the events object willl contain a name value pair of
    //event type and the functions need to run when that event happens:
    this.events[type] = this.events[type] || []; //create a name value pair named by the type of the event that contains an array
    this.events[type].push(listener); //add the function to the array
}

// execute event listeners:
Emitter.prototype.emit = function (type) {
    if (this.events[type]) { //if that type of event exist
        //execute listeners:
        this.events[type].forEach(function (listener) {
            listener();
        });
    }
}

module.exports = Emitter;
