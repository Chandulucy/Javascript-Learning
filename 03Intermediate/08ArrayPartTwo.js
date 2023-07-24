const { element } = require("prop-types")
// Normal one Below

/*var isEven = (element) =>{
if (element % 2 === 0){
    return true;
}
return false;
}

console.log(isEven(3));*/

// Type 2
var isEven =(element) =>{
    return element %2 === 0;
};
console.log(isEven(4));

var result = [2,3,4,6].every(isEven);
console.log(result);
// Type 3

var result = [2,3,4,6].every((e) => (e % 2 === 0));
console.log(result);
