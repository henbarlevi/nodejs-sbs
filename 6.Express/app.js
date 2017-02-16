//HTTP METHOD - specifies the type of action the request wishes to make (GET,POST,DELETE etc..) 
//after installing express by the commands -
//1.npm init 2.npm install express --save

//Using Express Package 
//Its easier with handling requests and routhing:
var express = require('express');
var app = express();

//handle requests and routing with Express:
app.get('/', function (request, response) {
    response.send('hello world with express')
}); //handle with GET http method Request where the url is :'localhost:port'

app.get('/hen', function (request, response) {
    response.json({name:'hen' , lastname:'doe' });//sending json object
}); //handle with GET http method Request where the url is :'localhost:port/hen'

app.listen(1337);  //'1337 -the port the server listen to'

//---------------------Routhing With Express----------------------

//-----------Url parameter----(getting an id value)
app.get('/person/:id', function (request, response) {
    var id = request.params.id;//getting the id paramter from url
    response.send('you sent an person id :' + id);
}); //handle with GET http method Request where the url is :'localhost:port/person' + /id-parameter

//can do MULTI Parameters : app.get('/preson/:name/:age/:id')

//-----------Static Files And Middleware with Express--------------
//Middleware - code that sits between two layers of software (in express - between the request and response)

//handling with sending static files:
//1.open folder that contain the static files(like css,images etc..) (in this case - 'public folder')
//2.handling the request in the middleware:

var express = require('express');
var app2 = express();
var path = require("path");
//Middleware:
app2.use('/assets', express.static(__dirname + '/public'));
//handle requests and routing with Express:
app2.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/index.html')); 
    //*NOTICE - if we would write in the index.html a link to the css file like this - href='public/StyleSheet.css'
    //the client will fail to get the css file (because their isnt a route who handling that.
    //we handling this situation with the middleWare that saying that every time that a url request '/assets' is sended
    //it will handle it by sending files from the public folder
}); //'localhost:1338'
app2.listen(1338); //- NOTICE -1338! (not 1337)

//---------------Middleware with Next :
var express = require('express');
var app3 = express();
//Middleware (with next):
app3.use('/', function (request,response,next) {
    console.log('request url:' + request.url); //each http req will cause a console.log of the url
    next(); //will continue to handling the request and wont stop here
});
//handle requests and routing with Express:
app3.get('/hen', function (request, response) {
    response.send('hen -- this page sended to you after the code in the middleware is executed');
}); //'localhost:1339/hen'
app3.get('/', function (request, response) {
    response.send('this page sended to you after the code in the middleware is executed');
}); //'localhost:1339/'
//no matter what the url req is, it will print the url to console
app3.listen(1339);//NOTICE - 1339!

//---------------Templates and Template engines with Express-------------
//template engine - take text and translate it to what should be deliverd in the http response
//we will use EJS template engine:
//1.in commandLine : npm install ejs --save
//2. in code:
var express = require('express');
var app4 = express();
//set the template engine to ejs:
app4.set('view engine', 'ejs'); //by default the ejs will look for files in the 'views' folder

app4.use('/assets', express.static(__dirname + '/public')); //handle static files

app4.get('/tony', function (req, res) {
    res.render('tony'); //will go to where the views are (by default - in the 'views' folder) 
    //and search for 'tony' + extention of the view engine (ejs) - 'tony.ejs'
}); //'localhost:1340/tony'

//With Parameter sended dynamically to the html file response:
app4.get('/person/:id', function (req, res) {
    var id  = req.params.id;
    res.render('person', { ID: id }); //go to views folder and search for 'person.ejs' file and render the Object sended(wit the ID value) and send the proper html
}); //'localhost:1340/person/{parameter}'
app4.listen(1340);//NOTICE - 1340