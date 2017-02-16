//character sets - what number is each letter represent by- ( 'h' - 104)
//character encoding - how many bits are we using to store that number - utf8 - 8 bits
//Buffer - temporary holding spot for data being moved from one place to another

//Dealing with Binary Data : 
var buf = new Buffer('Hello', 'utf8'); //tell buffer to take the 'Hello' and convert to binary using utf8 encoding
console.log(buf); //<Buffer 48 65 6c 6c 6f> -binary data
console.log(buf.toString()); // 'Hello'
console.log(buf.toJSON()); // json object {type:'Buffer', data: [72,101,108.108,111]}
console.log(buf[2]); // 108

buf.write('wo');
console.log(buf.toString()); //'wollo'

//------------------callbacks--------------
function greet(callback) {
    console.log('hi');
    var data = {
        name: 'hen'
    };
    //invoking callback:
    callback(data);
}

greet(function (data) {
    console.log('greet was invoked by :');
    console.log(data);
});

console.log('---------------------reading files---------------------------------');
//-------------reading files------------------
var fs = require('fs'); // load the file system module
var text = fs.readFileSync(__dirname + '/ReadMe.txt', 'utf8'); //read the binary data by loading the content of the file into a buffer
//__dirname  - give me the current path the code is in
console.log(text); //'this is a text file'

//reading file async:
var callbackFn = function(err,data){  //err- errors, null if there's none
    console.log(err);
    console.log(data); 
}
var text2 = fs.readFile(__dirname + '/ReadMe.txt', 'utf8', callbackFn); // 'utf8' - in order to get the data as string, otherwise it will get it in bits

//if the file is very large and many people (clients) using this programm we could end 
//up using many buffers that are large in size to load the file - end up with memory problem


console.log('---------------------Using Streams---------------------------------');
//-------------Using Streams------------------
//Streams are event emitters (they inherite from Event Emitter - util.inherits(Stream,EE);

//using readStream:
var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/VeryBigFile.txt');

readable.on('data', function (chunk) { //that event raise each time the buffer is full of data/all data transfered to the buffer
//chunk - a piece of data being sent through the stream
    console.log(chunk); //print data as bits
    console.log(chunk.length);
});
//notice that we dont need to raise the 'data' event because its not custom event
//its a system event that raise automatically by the node c++ side

//in order to get the data as string + limit the buffer size:
console.log('reading data as string and limit the buffer size:');
readable = fs.createReadStream(__dirname + '/VeryBigFile.txt', { encoding: 'utf8', highWaterMark: 8 * 1024 });
//encoding utf8 - reading data as string , highWaterMark - declare buffer size
//because the buffer size is smaller that the file size
//the function will happen multi times and get smaller chunks each time
var i = 1;
readable.on('data', function (chunk) {
    console.log('chunk number  ' + i++);
    console.log(chunk); //print data as string
    console.log(chunk.length);
});
//coping the file using writStream::
console.log('reading data and copying to another file:');
readable = fs.createReadStream(__dirname + '/VeryBigFile.txt', {  highWaterMark: 8 * 1024 });
var writable = fs.createWriteStream(__dirname + '/VeryBigFileCopy.txt');
readable.on('data', function (chunk) {
    writable.write(chunk); //in each chunk you get - write it to the other file
});

//the idea of sending data from a readable stream to a writable stream
//is very common so node js have implemented an easier way to do this
//called pipe:
console.log('----------implementing pipes-----------');
//using pipes:

var readable2 = fs.createReadStream(__dirname + '/ReadMe.txt', { highWaterMark: 8 * 1024 });
var writable2 = fs.createWriteStream(__dirname + '/ReadMeCopy.txt');
readable2.pipe(writable2);

console.log('----------using pipes with Zlib--------');
//using pipes and zlib:
//zlib : create a compressed version of file (gzip):
var zlib = require('zlib'); // using zlib module

var readable2 = fs.createReadStream(__dirname + '/ReadMe.txt', { highWaterMark: 8 * 1024 });
var compressed = fs.createWriteStream(__dirname + '/ReadMeCopy.txt.gz');

var gzip = zlib.createGzip(); //create a transform stream (both writable and readable) and every time a chunk send to it - it compress it
 
//the pipe method return the stream entered as an argument (gzip)
readable2.pipe(gzip).pipe(compressed); //it will read the ReadMe file and on every chunk pipe to gzip that will compress every chunk and after that the chunk will pipe to the compressed stream (writeable stream)
