
//----------in order to run the node js server--------------
//1.enter to command line and enter the directory of where the js file of the server is
//[current address of the file - C:\Users\hen\Desktop\NodeJsStepByStep\1.Basic Concepts
//in the command line :
// cd- change directory, so : cd Desktop\NodeJsStepByStep\1.Basic Concepts
// dir - see the files in the direcotry
// cd .. - go up directory
//2.run the file by writing : node [name of the file] (app.js)

console.log('-------------------------Modules----------------');
//---------------Modules------------------------------------------//
//module - a reusable block of code whose existence doesnt accidentall
var exposedFunc = require('./myModule.js');  // import the module (and execute it) and get value in the module.exports
exposedFunc();//print 'im exposed' 

//** how does require works under the hood - it make a IIFE - imddiet invocation function expression (function(){}()); that returns module.exports

//import multi modules in a single line by import one module that contain many modules :
var greet = require('./modules'); //the nodejs will search for modules.js, wont find it so he will grab that folder and search for index.js
greet.english(); // 'hello'
greet.spanish(); // 'hola'
//import json Files:
var greetJson = require('./greetings.json'); //return the json object
console.log(greetJson); //object
console.log(greetJson.es); // 'hola json'

console.log('-------------------------Module Patterns----------------');
//---------------Module patterns------------------------------------------//
//way 1:
var greet1 = require('./module patterns/greet1.js');
greet1(); // 'hello greet1
//way 2
var greet2 = require('./module patterns/greet2.js').greet;
greet2();//'hello greet2'
//way 3 - using func ctor:
var greet3 = require('./module patterns/greet3.js');
greet3.greet(); // 'hello greet3'
//calling the same module to create new object but getting the same 
//object by ref - this is happening because node saves the module result IN A CACHE
//(module.exports) in case we call the same module again  - so when that happen
//it wont run the module, it will give us the same saved result by ref:
greet3.greeting = 'hello changed obj prop'; //changing obj prop
var greet3b = require('./module patterns/greet3.js'); //suppose to get new obj but getting the same obj because of node cache
greet3b.greet() // 'hello changed obj prop' - same obj
//how to overcome this situation - return the function ctor and not a new obj

var greet4 = require('./module patterns/greet4.js'); //the revealing module pattern
greet4.greet();

console.log('-------------------------Native Module ----------------');
//----------------Native Module ---------------------------------------------//
var util = require('util'); //using the utility built in module - dont need the './' 

var name = 'Tony';
var greeting = util.format('Hello, %s', name);
util.log(greeting);
console.log('-------------------------new way of using require ----------------');
//----------------ES6 new way of using require---------------------------------------------//
//import * as ES6greetr from './ES6Require.js'; // *- get everyting from exports, we can also specify what we wont to get
//ES6greetr.greet();