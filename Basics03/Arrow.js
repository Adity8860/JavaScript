const user ={
    username:"Aditya",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

    }
    // user.welcomeMessage()
    // user.username = "Sam"
    // user.welcomeMessage()
    
 console.log(this)
    


//  function One(){
//     let username = "Aditya"
//     console.log(this.username)
//  }
//  One()

 function One(){
    // let username = "Aditya"
    console.log(this)
 }
 One()


 const Two = ()=>{
    let username = "Aditya"
    console.log(this)
 }
//  Two()

// const addOne = (num1,num2)=>{
//     return num1+num2
// }
// addOne(3,4)

// const addTwo = (num1,num2)=> num1+num2


 


// const addTwo = (num1,num2)=> (num1+num2)

const addTwo = (num1,num2)=> ({username:"Aditya"})

console.log(addTwo(3,4))
