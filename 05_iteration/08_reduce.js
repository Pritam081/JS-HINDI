 const myNums = [1,2,3]
 const myTotal = myNums.reduce(function (acc , CV) {
    console.log(`acc : ${acc} amd CV : ${CV}`)
    return acc + CV
 },3)

 const myTotal1 = myNums.reduce((acc,CV) =>acc+CV,0)
 console.log(myTotal1)

 const shoppingCart = [
    {
        itemName: "js course",
        Price: 2999
    },
    {
        itemName: "python",
        Price: 999
    },
    {
        itemName: "Android Development",
        Price: 4999
    },
    {
        itemName: "Data Science",
        Price: 12999
    }
 ]

 const totalPrice = shoppingCart.reduce((acc,CV) => {
    console.log(`acc : ${acc} and CV : ${CV.Price}`)
    return acc+CV.Price},0
 )

 console.log(totalPrice)

