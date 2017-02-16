var EventEmitter = require('events');

module.exports = class Animal extends EventEmitter { //extends - name of the super class
    constructor() {
        super(); //instead of using util.inherits (to copy prototype) and call (to copy also props and methods on the ctor function)
        this.name = 'ES6 dog'
    }
    walk() {
        console.log(this.name + ' is walking');
        this.emit('walk'); //raise event
    }
}

