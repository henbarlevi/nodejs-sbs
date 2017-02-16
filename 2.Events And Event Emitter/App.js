//------using our own event emitter-------:
var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('greet', function () {//subs to the 'greet' event
    console.log('someone say hello');
});
emtr.on('greet', function () { //subs to the 'greet' event
    console.log('a greet accurred');
});

console.log('hello');
emtr.emit('greet'); //raise the greet event

console.log('---------using NodeJs event emitter------------');
//---------using NodeJs event emitter------------
Emitter = require('events'); // using the native emitter module
emtr = new Emitter();
//works the same way:
emtr.on('greet', function () {//subs to the 'greet' event
    console.log('someone say hello');
});
emtr.on('greet', function () { //subs to the 'greet' event
    console.log('a greet accurred');
});

console.log('hello');
emtr.emit('greet'); //raise the greet event
console.log('---------inheriting from the event emitter------------');

//---------inheriting from the event emitter------------
var EventEmitter = require('events'); 
var util = require('util');

//func ctor
function Greetr() {
    this.greeting = 'hello world';
}
//Greetr inherite all the methods and props of the EventEmitter Ctor (except those that not include in the prototype)
util.inherits(Greetr, EventEmitter);// using Object.create behind the scenes - ctor.prototype = Object.create(superCtor.prototype)
//assign to the Greetr.prototype an empty object with his __proto__ assign to the EventEmitter.prototype
//adding extra methods to Greetr:
Greetr.prototype.greet = function (data) {
    console.log(this.greeting + ' said :' + data);
    this.emit('greet' , data); //raise event and pass params
}

var greeter = new Greetr();
greeter.on('greet', function (data) { console.log('someone greeted :' + data); })
greeter.greet('Tony'); //'hello world' + 'someone greeted'

//-------------inheriting using call/apply:
//person Ctor
function Person() {
    this.firstName = 'hen';
    this.lastName = 'bar levi';
}
Person.prototype.sayHi = function () {
    console.log('hi im ' + this.firstName + ' ' + this.lastName);
}
//policMan Ctor
function PoliceMan() {
    this.badgeNumber = '2131';
}
util.inherits(PoliceMan, Person); //assign to the policeMan.prototype an empty object with his __proto__ assign to the Person.prototype
var policeMan = new PoliceMan();
policeMan.sayHi(); // 'hi im undefiend undefiend - because firstName and LastName not include in Person prototype
//how we over come this using call:
function PoliceMan2() {
    Person.call(this); //run on the PoliceMan Created the Person Ctor
    this.badgeNumber = '1231';
}
util.inherits(PoliceMan2,Person)
policeMan = new PoliceMan2();
policeMan.sayHi(); // 'hi im hen bar levi'

//---------------inheriting with ES6:

class Animal extends EventEmitter { //extends - name of the super class
    constructor() {
        super(); //instead of using util.inherits (to copy prototype) and call (to copy also props and methods on the ctor function)
        this.name = 'Donkey'
    }
    walk() {
        console.log(this.name + ' is walking');
        this.emit('walk'); //raise event
    }
}

var donkey = new Animal();
donkey.on('walk', function () { console.log('someone is walking') });

donkey.walk();
//using a module :

var ES6Animal = require('./ES6Module.js');
var dog = new ES6Animal();

dog.walk();
