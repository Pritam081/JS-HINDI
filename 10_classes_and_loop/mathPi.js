const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nhi bani")
    }
}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false
})
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

//object itertalble is depend so that's why we used object.entries()
// for (const [key, value] of chai) {
//     console.log(`${key}: ${value}`)
// }
// for (const [key, value] of Object.entries(chai)) {
//     console.log(`${key}: ${value}`)
// }
for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`)
    }
}