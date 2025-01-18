var c = 300
let a  = 100
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log(a)
}
console.log(c)
console.log(a)
//console.log(b)
console.log(c)

function one(){
    const userName = "Pritam"
    function two(){
        const website = "Youtube"
        console.log(userName)
    }
    //console.log(website)
    two()
}
one()

if(true){
    const username = "Pritam"
    if(username === "Pritam"){
        const website = " youtube"
        console.log(username + website)
    }

}

// *********** Interesting *********************
console.log(addone(5))
function addone(num){
    return num+1;
}

console.log(addTwo(5))
const addTwo = function(num){
    return num+2;
}

