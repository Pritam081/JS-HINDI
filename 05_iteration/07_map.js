const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map((num)=> num+10)
console.log(newNums)

//chaining
const newNums1 = myNumbers.map((num)=> num*10).map((num)=>num+1)
console.log(newNums1)

const newNums2 = myNumbers.map((num)=> num*10).filter((num)=>num>=30)
console.log(newNums2)