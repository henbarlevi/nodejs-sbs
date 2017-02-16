//there are alot of ways to sturcture an app with express

//for initialization i wrote in the command line:
//1.npm init - for npm initialization
//2.npm install express --save - for installing express
//3.npm install -g nodemon - for installing nodemon globally that rerun the app if there are saved changes
//4.npm install ejs --save - for installing the EJS template engine

console.log('--------------------------Way 1 - express generator --------------------')
//-----------------way 1 - express generator------------- this way implemented in the folder: 8.Structuring An App/myApp
//in commandLine:
//1.npm install express-generator -g
//2.express [name of folder] -create folder with that name
//and will enter the skeleton structure of the app to that folder (i called the folder 'myApp')
//3.cd [name of folder] - enter to the folder created
//4.npm install - install all packages that in the [folder name]/package.json (myApp/package.json)

//the app directory will be structured:
//app.js - the app js
//package.json - the  object that contain details about all packages
//public folder - for static files
//views folder - for views:
//routes folder - where each js file represent '/[something]' in the url

//in that way we use a middleware and attaching to a path
//the middleware we use are local (in the default state this module are in the routes folder - index.js + users.js)
//and each path handle a diffrent url path for example:
//index.js - module that handle 'host:port/~'
//users.js - module that handle 'host:port/users/~'
//look at myApp/app.js and the myApp/routes folder for more understanding

console.log('--------------------------Way 2 - Seperate to Controllers --------------------')
//--------------Way 2 - Seperate to Controllers -----------
//we are implementing that way with similar code like in the 7.Express Part 2 so you can look there
//for compare
//we need a body parser - in the commandLine - npm install body-parser --save

//1.open controllers folder 
//2. entered 2 js files 
// htmlController.js - handle with html files
// apiController.js - hadle api requests

var express = require('express');
var app = express();

//require the Controllers:
var apiController = require('./Controllers/apiController.js');
var htmlController = require('./Controllers/htmlController.js');

app.use('/assets', express.static(__dirname + '/public')); //handle static files
app.set('view engine', 'ejs'); //using ejs template engine : by default the ejs will look for files in the 'views' folder


//Send to the Controllers the app:
htmlController(app);
apiController(app);

app.listen(1337); //listen to port 1337
