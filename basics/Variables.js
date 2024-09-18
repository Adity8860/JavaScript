const accountID ="0770";
let accountemail = "xyz@outlook.com";
var accountpassword = "123456789";
let accountCity = "Delhi";
let accountState;

// accountID = "0610";   // not allowed

console.table(accountID)


accountemail = "abc@gmail.com";
accountpassword = "987654";
accountCity = "Bangaluru"

console.table([
   accountID, accountemail, accountpassword, accountCity, accountState
])



/*
Prefered not to use var 
because of issue in block scope and functional scope

*/