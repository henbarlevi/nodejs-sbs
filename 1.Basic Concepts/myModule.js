//variables in the module aren't available outside 
//the module unless you expose them:
var protectedFunction = function () {
    console.log('im protected');
};

var exposedFunction  = function(){
    console.log('im exposed');
};

protectedFunction();
exposedFunction();
// module.exports contains variables that will be exposed outside:
module.exports = exposedFunction;  
