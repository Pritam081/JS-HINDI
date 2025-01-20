const coding = ["js", "ruby", "CPP"]

coding.forEach( function (item) {
    console.log(item)
}  )
coding.forEach( (item)=> {
    console.log(item)
}  )


function printMe(item){
    console.log(item)
}

coding.forEach(printMe)

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr)
})

const myCoding = [
    {
        langauageName: "javaScript",
        langauageFileName: "js"
    },
    {
        langauageName: "java",
        langauageFileName: "java"
    },
    {
        langauageName: "python",
        langauageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.langauageName)
})