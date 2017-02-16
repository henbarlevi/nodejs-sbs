//npm - node package manager

//how to use packages in your app:
//*first check if you have a npm by write in command line : npm -v
//1. write in the commnad line: npm init
//fill the field like name,description etc..
//this is creating a json object that contain the settings of the npm (file name - packege.json)
//---install package from the npm registery (www.npmjs.com):
//2.for installing moment package for example:
//write in the command line - npm install moment --save  
//(--save is making a note in the package.json about the installed package - npm look at that file in order to manage packages (automatic updates etc..))

//npm install - download all dependencies packages mentioned in the package.json that not found

var moment = require('moment'); //first it look for the module in the node core, wont find it and search for node_modules in the App.
console.log(moment().format());

//some packages are needed only for development and not to run the app, in that case:
//we can write : npm install [package name] --save--dev  - and it will download the package
//but in the package.json it will save the package info in the "devDependencies" in order that the server ignore this dependencies when development is done

//npm install -g - install packages and put them in global space that we can use them anywhere (just like core modules)
//npm update - update packages

//nodemon - usful package that when use save changes on your app it cancel the runing up and execute it with the new changes automatically
//to install nodemon - 
//1.write in command line :npm install -g nodemon 
//2.to run the file with nodemon write in the command : nodemon app.js[name of the js file] 