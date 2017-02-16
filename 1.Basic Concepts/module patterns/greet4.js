//only exposing the function - the revealing module pattern:
var greeting = 'hello using private prop';


function greet() {
    console.log(greeting);
}

module.exports = {
    greet : greet
}