// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

const myStates = [
    "Karnataka", 
    "Andhra Pradesh",
    1427,
    "Goa",
    "Kerala"
];

for( let i=0; i <= myStates.length; i++){
    if(typeof myStates[i] !== "string") continue;
    console.log(myStates[i]);
}