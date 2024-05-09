

let randomNumber = () => {
    return Math.floor(Math.random() * ((25-1) + 1) + 1)
}


// function randomNumber(){
//     return Math.floor(Math.random() * ((25-1) + 1) + 1)
// }
// console.log(randomNumber(0,100))
// console.log(randomNumber())
module.exports = randomNumber