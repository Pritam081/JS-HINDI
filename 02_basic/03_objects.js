//singleton

//object literals

const mySym = Symbol("key1")

const jsUser ={
    name: "Pritam",
    "full name": "Pritam Swami",
    [mySym]: "myKey1",
    age: 18,
    location: "jaipur",
    email: "pritam@gmial.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday, Saturday, Friday "]
}

console.log(jsUser.email)
console.log(jsUser["full name"])
console.log(jsUser[mySym])
console.log(typeof(jsUser[mySym]))

jsUser.email = "Pritam@chatgpt.com"
//Object.freeze(jsUser)
//after using freeze you cann't change the value
jsUser.email = "pritam@microsoft.com"
console.log(jsUser)
jsUser.greeting = function(){
    console.log("Hello JS User")
}
console.log(jsUser.greeting)
console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}
console.log(jsUser.greetingTwo())