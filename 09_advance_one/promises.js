const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptogrpahy, network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 revolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "Chai@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName: "Pritam" , password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user)
    return user.userName
})
.then((userNamee)=>{
    console.log(userNamee)
})
.catch(function(error){
    console.log(error)
})
.finally(() =>console.log("The promise is either resolved or rejected"))
