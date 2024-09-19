


/** try to avoid this kind of situations */
console.log(null> 0 )
console.log(null == 0)
console.log(null>=0)

// the reason is that an equality check == and comparisons>< >= <= work differently.
// Comparison convert null to a Number, treating it as 0.
// that's why (3) null >= 0 is true and (1) null >0 is false 


console.log(undefined == null)
console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)


/* strict comparison "===" */ 

console.log("2" === 2)
// expected output:
false   /** because data type is not same here */