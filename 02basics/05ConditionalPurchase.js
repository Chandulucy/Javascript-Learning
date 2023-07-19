// User is only allowed to make purchase When he is:
// Logged in
// email Verified
// cardInfo - Valid
// If any one is misssing, stop purchase

 var isLoggedIn = true;
 var isEmailVerified = true;
 var cardInfo = true;

//  if (isLoggedIn){
//      console.log("Logged In Sucess");
//      if (isEmailVerified){
//          console.log("Email Id is verified");
//          if (cardInfo){
//              console.log("You can make a purchase");
//          }
//      }
//     }


if( isLoggedIn && isEmailVerified && cardInfo){
    console.log("Allow user to make a purchase");
}
else{
    console.log("You are not allowed");
}