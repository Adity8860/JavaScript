let score = "33abs";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abs" => NaN
// true => 1 oR false =>0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1 =>true; oR 0 => false
// " " => false
// "Aditya" => true

let someNumber = 23;
let stringNumber = String(someNumber);
console.log(stringNumber);

//******************Operation*******************/

let value = 3;
let negValue = -value;

// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)

let str1 = "Hello ";
let str2 = "Aditya";
let str3 = str1 + str2;

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// Expected output:
// Hello Aditya
// 12
// 12
// 122
// 32

console.log(true);
console.log(+true);
// console.log(true+)  Show error

console.log(+"");

//postfix
let count =100
count++
console.log(count)

//prefix
let Count =100
++Count
console.log(count)