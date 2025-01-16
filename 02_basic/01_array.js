const myArr = [0,1,2,3,4,5]
console.log(myArr)
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4,5) 
console.log(myArr2[1])

// Array methods

myArr.push(6)
myArr.pop()
myArr.unshift(6)
myArr.shift()
console.log(myArr.includes(9))
console.log(myArr.indexOf(9))

const newArr = myArr.join()

// slice or splice
console.log("A ", myArr)
const myN1 = myArr.slice(1, 3)
console.log(myN1)
console.log("B ", myArr)
const myN2 = myArr.splice(1, 3)
console.log(myN2)
console.log("C ", myArr)




console.log(myArr)
console.log(typeof newArr)
