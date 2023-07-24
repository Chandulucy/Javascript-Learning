const { func } = require("prop-types");

function sayHello(name){
    console.log("Hello there, Chandan");
    console.log(`Hello there,, ${name}`);


}

sayHello("ghandan"); 
// -- calling a function upper line

// sayHello; -- Reffering a function

function namstey(){
    return "hello world"
}

var greetings = namstey();
console.log(greetings);
console.log(namstey());