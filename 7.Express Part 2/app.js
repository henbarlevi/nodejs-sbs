//RESTfull API's - rest is an architectural style for bulding api's and it means that
//follow a good url structure and deal with http requests very cleary using the verbs ('GET','POST','DELETE etc..) and the urls ('localhost:port/user/id' for example)

//for initialization i wrote in the command line:
//npm init - for npm initialization
//npm install express --save - for installing express
//npm install -g nodemon - for installing nodemon globally that rerun the app if there are saved changes
//npm install ejs --save - for installing the EJS template engine

//Notice - to run the app.js using nodemon wirte in commandLine : nodemon app.js

console.log('-------------------Query String and Post Parameters----------------------------')
//-------------------------Query String and Post Parameters------------------------------
//--------------------------QueryString----------------------:
var express = require('express');
var app = express();
//using ejs template engine:
app.set('view engine', 'ejs'); //by default the ejs will look for files in the 'views' folder

app.use('/assets', express.static(__dirname + '/public')); //handle static files

app.get('/person/:id', function (req, res) {
    var queryString = req.query.somevalue; //the query string is in the req.query
    //queryString will equal something if the request will be for example :
    //'localhost:1337/person/2?somevalue=123' , 2- id , after ? its the query string 
    res.render('person', { ID: req.params.id, Qstr: queryString });
});
app.listen(1337); //listen to port 1337

//------------------dealing with forms been Posted--------
//we need to handle with the body of the http request
//we need a body parser - in the commandLine - npm install body-parser --save
var express = require('express');
var app2 = express();
var bodyParser = require('body-parser'); //getting the body parser from module
//in order to get the body parser url:
var urlencodedParser = bodyParser.urlencoded({ extended: false }); 

app2.set('view engine', 'ejs'); //set template engine -by default the ejs will look for files in the 'views' folder
app2.use('/assets', express.static(__dirname + '/public')); //handle static files

//GET method
app2.get('/user', function (req, res) {
    res.render('user'); //sending the user.ejs form
});//'localhost:1338/user'
//handling the POST request method sended from the form
app2.post('/user',urlencodedParser, function (req, res) {
    res.send('thank you');
    var firstName = req.body.firstname;
    var lastName = req.body.lastname;
    console.log(firstName + ' ' + lastName);
}); //'localhost:1338/user'

//--------Handling with Json object Post-------
var jsonParser = bodyParser.json();

//GET
app2.get('/userjson', function (req, res) {
    res.render('userjson'); //sending the userjson.ejs that contain script that send a post request with json object
});
//POST
app2.post('/userjson', jsonParser, function (req, res) {
    res.send('thank you for the json object');
    var firstName = req.body.firstname;
    var lastName = req.body.lastname;
    console.log(firstName + ' ' + lastName);
}); //'localhost:1338/tony'
app2.listen(1338);
