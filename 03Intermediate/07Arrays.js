var countries = ["India", "USA", "Japan","Russia" ];

var states = new Array("Karnataka", "Goa", "Kerala");

console.log(states[1]);

console.log(states.length);

states[1] = "Punjab";
console.log(states);

var user = ["Chandan", "Chand@123gmail.com", ,23,true];
console.log(user);

user.pop();
console.log(user);

user.unshift("new value");
console.log(user);

user.shift();
console.log(user);

console.log(user.indexOf(23));
console.log(user.indexOf(2));

console.log(Array.from("Chandan"));