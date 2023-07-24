var user = {
    firstName : "Chandan",
    lastName : "K A",
    role : "Risk Analyst",
    signedFromFaceook : true,
    loginCount : 22,
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 67;
console.log(user.loginCount);