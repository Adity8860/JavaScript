// let a = 10
// const b = 20
// var c = 30


let a = 300
/************************* block scope******************** */
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a)
// console.log(b)
// console.log(c);


function one(){
    const username = "Aditya Gaur "

    function two(){
        const website = "Instagram"
        // console.log(username)

    }
    // console.log(website)

    two()

}
// one()



if (true) {
    const username = "Aditya "

    if (username==="Aditya ") {
        const website = "Instagram"
        console.log(username +website)
    }
    // console.log(website)
}
// console.log(username)

addOne(5)
function addOne(num){
    return num+1

}
// addOne(5)
 addTwo(5)
const addTwo = function (num){
    return num+4

}
// addTwo(5)