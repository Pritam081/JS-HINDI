let myName = "Pritam   "
let myChannel = "chai    "
console.log(myName.trim().length)
console.log(myChannel.trueLength)

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`)
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`)
}
heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
//heroPower.heyHitesh()

//inheritance
const user = {
    name: "chai",
    email: "chai@google.com"
}
const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const taSupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:teachingSupport
}

teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "ChaiAurCode  "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)
} 

anotherUsername.trueLength()

"hitesh".trueLength()