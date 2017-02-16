//for initialization of the node app i wrote in the command line:
//1.npm init - for npm initialization
//2.npm install express --save - for installing express
//3.npm install -g nodemon - for installing nodemon globally that rerun the app if there are saved changes
//4.npm install ejs --save - for installing the EJS template engine
//--------------------------
console.log('-------------------------MongoDB (noSql database) using Mongoose --------------------------');
//-------------------------MongoDB (noSql database) using Mongoose --------------------------
//in order to use mongoDB:
//1.installation:
//install mongoDB on your computer (www.mongoDB.com) - NOTICE installation will need a reebot of computer 
// OR\ use mongolab.com to create database on the cloud
//2.set up environment:
//MongoDB requires a data directory to store all data. MongoDB’s default data directory path is C:\data\db. Create this folder manually or using the following commands from a Command Prompt:
//creating a folder to store data : in CommandLine when path is C:\ - md data\db (make directory named 'data' and inside it a dir 'db')
//3.start mongoDB:
//write in commandLine the path to mongod.exex - "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" ( "" - are nessecary)
//The waiting for connections message in the console output indicates that the mongod.exe process is running successfully.
//Depending on the security level of your system, Windows may pop up a Security Alert dialog box about blocking some features - see more details in https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
//no the database running in the background and waiting for connections (you can see in the CommandLine the port it listen to) 
//***Tip - instead of writing all the path we can create a shortcut by copying the path and right click This PC - properties - advanced system settings - Einviorment variables - Add - variable name:'PATH' value:paste the path
//4.the mongoDB is runing with the currentCommandPromt Window (DONT CLOSE IT)
//open anoter Command Window to run the node app (app.js)

//in order to use mongoDB from the code will intall the npm package mongoose:
//in CommandLine : npm install mongoose --save

//First, we need to define a connection. If your app uses only one database, 
//you should use mongoose.connect. If you need to create additional connections, use mongoose.createConnection.
//Both connect and createConnection take a mongodb:// URI, or the parameters host, database, port, options.
//var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/my_database');

//var Schema = mongoose.Schema; //getting the Schema function Ctor
////creating a person schema using the Schema Ctor:
//var personSchema = new Schema({
//    firstname: String,
//    lastname: String,
//    address: String
//});
////create a func Ctor Person(model Ctor):
//var Person = mongoose.model('Person', personSchema);
////using Person Ctor to create models:
//var john = Person({
//    firstname: 'jhon',
//    lastname: 'Doe',
//    address:'555 Main St.'
//});

////save the model to db:
////the function save - saving the model to mongodb 
////it gets a callback function that execute after the saving
//john.save(function (err) { //err - errors
//    if (err) {
//        throw err;
//    }
//    console.log('person saved');
//});

////getting data from database - getting the person models from the person schema
////get all the persons:
//Person.find({}, function (err, people) {
//    if (err) throw err; //handling errors if happend
//    console.log(people); //print all models got from the db
//});

console.log('-------NOTWORKING------------------SQL Server using mssql package --------------------------');
//-------------------------SQL Server using mssql package  --------------------------
//after sql server is installed in the computer:
//in CommandLine : npm install mssql/ npm install mssql --save
//then in code:

var sql = require('mssql');
//-----------------------------------quick look-------------------------------
//sql.connect("mssql://username:password@localhost/database").then(function() {
//    // Query 
    
//    new sql.Request().query('select * from mytable').then(function(recordset) {
//        console.dir(recordset);
//    }).catch(function(err) {
//        // ... query error checks 
//    });
 
//    // Stored Procedure 
    
//    new sql.Request()
//    .input('input_parameter', sql.Int, value)
//    .output('output_parameter', sql.VarChar(50))
//    .execute('procedure_name').then(function(recordsets) {
//        console.dir(recordsets);
//    }).catch(function(err) {
//        // ... execute error checks 
//    });
//---------------------------------------------------------
//-------------my Example:
    //connection configuration to db:
    var config = {
        user: '',
        password: '',
        server: 'localhost\\SqlExpress', // You can use 'localhost\\instance' to connect to named instance 
        database: 'MyDB',
        //options: {
        //    encrypt: true // Use this if you're on Windows Azure 
        //}
    }
//Connect to DB:
    sql.connect(config).then(function() {
        // Query 
        console.log('succes');
        new sql.Request()
        .input('input_parameter', sql.Int, 1)
        .query('SELECT TOP 1000 [ID] ,[name] FROM [MyDB].[dbo].[City] where id = @input_parameter').then(function(recordset) {
            console.log(recordset);
        }).catch(function(err) {
            // ... error checks 
        });
 
        // Stored Procedure 
    
        //new sql.Request()
        //.input('input_parameter', sql.Int, value)
        //.output('output_parameter', sql.VarChar(50))
        //.execute('procedure_name').then(function(recordsets) {
        //    console.dir(recordsets);
        //}).catch(function(err) {
        //    // ... error checks 
        //});
    }).catch(function(err) {
        // ... error checks 
    });