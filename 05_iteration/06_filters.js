const coding = ["JS","ruby","java","python"]
//forEach loop doesn't return any value in variable
// const values = coding.forEach((item)=>{
//     console.log(item)
// })

// console.log(values)

// const values1 = coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(values1)

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => num>4)
console.log(newNums)

// if we need to use curly brashes then must be used return keyword
const newNums1 = myNums.filter((num) =>{
    return num>4
} )
console.log(newNums1)

const newNums2 = []
myNums.forEach((num) => {
    if(num > 4){
        newNums2.push(num)
    }
})
console.log(newNums2)

const books = [
    {title: 'Book One', genre: 'Fiction', Publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', Publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', Publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', Publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Science', Publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', Publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', Publish: 1986, edition: 1996},
    {title: 'Book Eight', genre: 'Science', Publish: 2013, edition: 2004},
    {title: 'Book Nine', genre: 'Fiction', Publish: 1981, edition: 2004},
    {title: 'Book Ten', genre: 'Non-Fiction', Publish: 1981, edition: 2004},
]

const userBooks = books.filter((bk)=>bk.genre === 'History')
const publish = books.filter((bk)=> (bk.Publish>=1995 && bk.genre === 'Science'))
//console.log(userBooks)
console.log(publish)