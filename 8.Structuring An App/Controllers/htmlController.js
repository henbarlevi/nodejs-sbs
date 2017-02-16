//--------------------HTML Controller---------------:
var bodyParser = require('body-parser'); //getting the body parser from module
//in order to get the body parser url:
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
    app.get('/person/:id', function (req, res) {
        var queryString = req.query.somevalue; //the query string is in the req.query
        //queryString will equal something if the request will be for example :
        //'localhost:1337/person/2?somevalue=123' , 2- id , after ? its the query string 
        res.render('person', { ID: req.params.id, Qstr: queryString });
    });
    //GET method
    app.get('/user', function (req, res) {
        res.render('user'); //sending the user.ejs form
    });//'localhost:1338/user'
    //handling the POST request method sended from the form
    app.post('/user', urlencodedParser, function (req, res) {
        res.send('thank you');
        var firstName = req.body.firstname;
        var lastName = req.body.lastname;
        console.log(firstName + ' ' + lastName);
    }); //'localhost:1338/user'
}
