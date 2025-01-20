//for loop
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)
} 


let myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}

//break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`)
        //break
    }
    if(index == 6){
        console.log(`Detected ${index}`)
        continue
    }
    console.log(`Value of i is ${index}`)    
}