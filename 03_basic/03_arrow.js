const  user = {
    username: "pritam",
    price: 999,
    
    // using this for current context
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        //console.log(this)
    }

}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this)
//please try in browser console , you get different

// if we use this in function then we get unexpected stuff , it's give expected value in object only
function chai(){
    let username = "hitesh"
    console.log(this.username)
}
chai()

const chai1 = () => {
    let username = "hitesh"
    console.log(this)
}
chai1()

//explicit return
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(1,2))

//implicit return
// if we used curly brases  then must be used return but it's not required in parenthises.
const addTwo1 = (num1, num2) =>  (num1 + num2)
console.log(addTwo1(4,5))

//if we want to return object then must be used parethises
const addTwo3 = (num1, num2) =>  ({username: "pritam"})
console.log(addTwo3(3,4))
