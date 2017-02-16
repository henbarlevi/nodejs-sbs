//function ctor:
function Greetr() {
    this.greeting = 'hello greet3';
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();