/*
Define a function that can answer the role of a user.
A user can be following roles:
admin - with all access
Subadmin - with access to create/delete courses
testprep - with access to create and delete tests
user - consume all content
other - trial user.

Input : getUserRole(name, role)
*/

var getUserRole = function (name, role){
    switch (role) {
        case "admin":
           return ` ${name} has full access to control`;
        case "subadmin":
            return `${name} has access to create and delete`;
        case "testprep":
            return `${name} has with access to create and delete tests`;
        case "user":
            return `${name} consume all content`;
    
        default:
            return `${name} is a test user`;
    }
};

console.log(getUserRole("Chandan", "testprep"));
var getRole = getUserRole("Sunny", "user");
console.log(getRole);