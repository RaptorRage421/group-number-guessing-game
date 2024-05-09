const express = require('express');
const bodyParser = require('body-parser')
const numberGenerator = require('./numberGenerator.js')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
const numberStorage = [{player1: 23,
  player2: 7
}]



// console.log("Number Generator: ", numberGenerator())
const generatedNumber =[]
generatedNumber.push(numberGenerator())
console.log(generatedNumber[0])
for (i=0; i<numberStorage.length;i++){
  console.log("player 1 number: ", numberStorage[i].player1)
  console.log("player 2 number: ", numberStorage[i].player2)
  let comparison = () => {

  
  
    if (numberStorage[i] == generatedNumber[0]) {
        alert("You picked the correct number!");
    }
    else if (numberStorage[i] > generatedNumber[0]) {
        alert("Too high.");
    }
    else if (numberStorage[i] < generatedNumber[0]) {
        alert("Too low.");
    }
  }
}

console.log(generatedNumber)
app.get('/random', (req,res) => {
  console.log("Number Guesses...", numberStorage)
res.send(generatedNumber)
})

app.get('/guesses', (req,res) => {
  console.log("Number Guesses...", numberStorage)
res.send(numberStorage)
})

app.post('/random', (req, res) => {
  let storedNumber = req.body

  console.log("Goign to add an Item", incomingGuess)
  generatedNumber.push(storedNumber)
  console.log(generatedNumber)
res.sendStatus(201)

})

app.post('/guesses', (req, res) => {
  let incomingGuess = req.body

  console.log("Goign to add an Item", incomingGuess)
  numberStorage.push(incomingGuess)
  console.log(numberStorage)
res.sendStatus(201)

})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
