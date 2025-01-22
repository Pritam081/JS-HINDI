const user = {
    username: "Pritam",
    loginCount: 8,
    signedIn: true,

    getuserDetails: function(){
        console.log("Got user details from database")
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount  = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
   // return this
}

const userOne = new User("Hitesh" , 12, true)
const userTwo = new User("Pritam", 10, false)
console.log(userOne)
console.log(userOne.constructor)

// console.log(user.username)
// console.log(user.getuserDetails( ))
// console.log(this)