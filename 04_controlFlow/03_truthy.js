const userEmail = "H@pritam.ai"
if(userEmail){
    console.log("Got user email")
}else{
    console.log("Don't have user email")
}

/* Falsy values
false
0
-0
BigInt 0n
""
null
undefined
NaN  */

/*Truthy values 
"0
'false'
" "
[]
{}
function(){}
false == 0
false == ''
0 == ''
*/

let arr = []
if(arr){
    console.log("Array is not-empty")
}
if(arr.length ==0){
    console.log("Array is empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length ==0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 100
console.log(val1)

//Terniary Operator
//consition? true: false

const iceTeaPrice = 100
iceTeaPrice <=80? console.log("Less than 80"): console.log("More than 80")