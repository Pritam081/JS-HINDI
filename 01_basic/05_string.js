const name = "Pritam"
const repoCount = 50
//console.log(name + repoCount)
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`)
const Name = new String("Pritam_swwami")
console.log(Name.__proto__)
console.log(Name.length)
console.log(Name.charAt(2))
console.log(Name.indexOf("t"))
const newStr = Name.substring(0,2)
console.log(newStr)
const anotherStr = Name.slice(-5,2)
console.log(anotherStr)
const newStr1 = "     Pritam    "
console.log(newStr1)
console.log(newStr1.trim())

const url = "https://pritam.com/Pritam%20Swami"
console.log(url.replace('%20', '_'))
console.log(url.includes('Pritam'))
console.log(Name.split('_'))