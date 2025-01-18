function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}

sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
function addTwoNumbersReturn(number1, number2){
    let result = number1 + number2
    return result;
}
const result = addTwoNumbers(3,5)
const result2 = addTwoNumbersReturn(3,5)
console.log(result, result2 )

function loginUserMessage(userName){
    if(userName === undefined){
        console.log("Please enter user name")
        return 
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage("pritam"))
console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(2,4,6 ))

function calculateCartPrice1(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice1 (2,4,6 ))

//object passing in function

const user = {
    userName: "Pritam",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`)
}

handleObject(user)
handleObject({
    userName: "sam",
    price: 399
})

const myNewArray = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))