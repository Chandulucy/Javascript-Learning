const uid = "abc123";
const firstName = "Chandan";
const lastName = "K A";
const emailID = "chandan@gmail.com";
const password = "123123";
const confirmPassowrd = "123123";
const countryName = "India";
const stateName = "Karnataka";
const loggedIn = false;
const courseCount ="0";
const loggedInFromGoogle = false;
const loggedInFromMobile =true;

// uid = "abcd234"; we can't change with the UID once provided with the data, 
// as name suggests unique id we get an error 'MODULE_NOT_FOUND',

console.log(
    `
    Unique ID as : ${uid}
    With First Name as : ${firstName}
    and Last Name Ending with : ${lastName}
    Email ID of the Person : ${emailID}
    Which contains with the Password as : ${password}
    Confirmed with the Password: ${confirmPassowrd}
    Lives : ${countryName} Country
    With State : ${stateName}
    Logged In and course count is : ${courseCount}
    Did the Person Looged in from Google : ${loggedInFromGoogle}
    Did the Person Logged in from Mobile Number : ${loggedInFromMobile}
    `
);