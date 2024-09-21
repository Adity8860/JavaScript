//singleton

//object.create

//object literals

const mySum = Symbol("key1");

const JsUser = {
  name: "Aditya",
  "full name": "Aditya Gaur",
  [mySum]: "myKey1",
  age: 22,
  email: "xyz@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySum]);
// console.log(typeof JsUser.mySum)

JsUser.email = "abc@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "xyz@gmail.com"
// console.log(JsUser.email)

 

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

