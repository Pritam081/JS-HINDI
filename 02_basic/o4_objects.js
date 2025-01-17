//singleton object 
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName : {
        userFullName:{
            firstName: "Pritam",
            lastName: "Swami"
        }
    }
}
console.log(regularUser.fullName)
console.log(regularUser.fullName.userFullName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({} , obj1, obj2)
const obj3= {...obj1, ...obj2 }
console.log(obj3)

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"P@gmail.com"
    }
]

console.log(users[1].email)
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))   
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

//object destructure
const course  = {
    courseName: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course
console.log(instructor)

