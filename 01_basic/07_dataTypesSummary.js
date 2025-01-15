/*  Primitive Data Types
7 types : String, Number, Boolean, null, undefined, BigInt, Symbol

Non-primitive Dave types 
3 types : Array, Objects, Functions 

JavaScript is a dynamically typed language
*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 49615158n 
console.log(typeof(bigNumber))

// Non-primitibe

const heros = ["shaktiman", "naagraj"] 

let myObj = {
    name : "hitesh",
    Age: 22
}

const myFunction = function(){
    console.log("Hello World")
}

/* Memory
Stack(Primitive) : We gate a copy memory. / get copy
Heap(Non-Primitive) : value changed in original memory / get reference
*/
let myYoutubeName = "Pritamjoaidjfo"
let anotherName = myYoutubeName
anotherName = "bedreamer"
console.log(anotherName)
console.log(myYoutubeName)

let userOne = {
    Email: "user@google.com",
    Age: 45
}

let UserTwo = userOne

UserTwo.Email = "Pritam@google.com"

console.log(userOne.Email)
console.log(UserTwo.Email)