//ip - the id of the computer over the internet
//Socket - the line which information flows between the computers
//http - sets of rules for how the information is structures
//an http request/response contain a status (http/1.1 200 ok), headers (name value pairs) and a body
//TCP - the way that the information is sent - protcol that says lets
//take the information and devide it to piceses and send the piceses one at 
//a time (each individual piece - Packet)
//Port - once a computer receives a packet, how it knows
//what program to send it to
//MIME type - a standard for specifying the type of data being sent (application/json ,text/html etc..)
//API - set if tools for building a software application

//----------Creating a Server ---------
//var http = require('http');

//http.createServer(function (request, response) { //this function will be executed when a request happens
//    //bulding a response:
//    response.writeHead(200, {
//        'Content-Type': 'text/plain'}); //200 - status code
//    response.end('Hello World');
//}).listen(1337); //1337 -tell the node which port to listen to

//---------Creating Server that send html file------------
//var http = require('http');
//var fs = require('fs');

//http.createServer(function (request, response) { //this function will be executed when a request happens
//    //bulding a response:
//    response.writeHead(200, {'Content-Type': 'text/html'}); 
//    var html = fs.readFileSync(__dirname + '/index.html'); //read the html file
//    response.end(html); //send the html file
//}).listen(1337); //1337 -tell the node which port to listen to

//--------Server send html with dynamic value (Template):
//var http = require('http');
//var fs = require('fs');

//http.createServer(function (request, response) { //this function will be executed when a request happens
//    //bulding a response:
//    response.writeHead(200, { 'Content-Type': 'text/html' });
//    var html = fs.readFileSync(__dirname + '/index.html'
//        , 'utf8'); //read the html file as string
//    html = html.replace('{Message}', 'message i have entered from the app.js'); //change html content
//    response.end(html); //send the html file
//}).listen(1337); //1337 -tell the node which port to listen to

//---------Server Using Streams--------------------
//var http = require('http');
//var fs = require('fs');

//http.createServer(function (request, response) { 
//    response.writeHead(200, { 'Content-Type': 'text/html' });
//    //instead of pulling the entire file and then sending it, we sending each chunk at a time:
//    fs.createReadStream(__dirname + '/index.html').pipe(response);
//    //they browsers are already used to deal with data been sent in chunks (TCP)
//}).listen(1337); //1337 -tell the node which port to listen to

//---------Server Sending JSON--------------------
//SERIALIZE -translating an object into a format that can be stored or transferd
//var http = require('http');


//http.createServer(function (request, response) {
//    response.writeHead(200, { 'Content-Type': 'application/json' });

//    var obj = { name: 'hen', lastName: 'Doe' };
//    response.end(JSON.stringify(obj)); //convert obj to string which will be format as json

//}).listen(1337); //1337 -tell the node which port to listen to

//------------------------------ROUTING----------------------------------------------
console.log('-----------------------------------ROUTING-------------------------------');
var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    //checking the url simply by - request.url
    if (request.url === '/') { // 'localhost:1337'
        response.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    }
    else if (request.url === '/hen') { //'localhost:1337/hen'
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('you entered hen in the url');
    }
    else { //in case of other url's:
        res.writeHead(404);
        response.end();
    }

}).listen(1337); //1337 -tell the node which port to listen to

