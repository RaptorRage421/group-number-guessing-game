const express = require('express');
const bodyParser = require('body-parser')
const numberGenerator = require('./numberGenerator.js')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
const numberStorage = []

const contestResults = []

// console.log("Number Generator: ", numberGenerator())
const generatedNumber = []
generatedNumber.push(numberGenerator())
console.log(generatedNumber[0])



  let comparison = (player1, player2) => {
    if (player1 == generatedNumber[0]) {
      console.log("Player 1 is Winner!")
      contestResults.push("Player 1 is The Winner")
    }
    if (player1 > generatedNumber[0]) {
      console.log("player 1 is too high!")
      contestResults.push("Player 1 is too high!")
    }
    if (player1 < generatedNumber[0]) {
      console.log("Player 1 is too low!")
      contestResults.push("Player 1 is too low")
    }
    if (player2 == generatedNumber[0]) {
      console.log("Player 2 is Winner!")
      contestResults.push("Player 2 is The Winner")
    }
    if (player2 > generatedNumber[0]) {
      console.log("player 2 is too high!")
      contestResults.push("Player 2 is too high")
    }
    if (player2 < generatedNumber[0]) {
      console.log("Player 2 is too low!")
      contestResults.push("Player 2 is too low")
    }
    return contestResults
  }
  
  console.log("contest results", contestResults)





console.log(generatedNumber)


app.get('/guesses', (req, res) => {
  console.log("Number Guesses...", numberStorage)
  res.send(numberStorage)
})



app.post('/guesses', (req, res) => {
  let incomingGuess = req.body
  let compare = comparison(incomingGuess.player1, incomingGuess.player2)
  console.log("Adding our guesses", incomingGuess)
  console.log("comparison is: ", compare)
  numberStorage.push(incomingGuess)
  console.log(numberStorage)
  res.sendStatus(201)

})




app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})
