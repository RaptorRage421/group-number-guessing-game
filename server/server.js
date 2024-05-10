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



// console.log("Number Generator: ", numberGenerator())
const generatedNumber = numberGenerator()

console.log(generatedNumber)



  let comparison = (player1, player2) => {
    const compareResults = {}
    compareResults.player1guess = player1
    compareResults.player2guess = player2
    if (player1 === generatedNumber) {
      console.log("Player 1 is Winner!")
      compareResults.player1results = "Player 1 Wins"
    }
    if (player1 > generatedNumber) {
      console.log("player 1 is too high!")
      compareResults.player1results = "Too high..."
    }
    if (player1 < generatedNumber) {
      console.log("Player 1 is too low!")
      compareResults.player1results = "Too low..."
    }
    if (player2 === generatedNumber) {
      console.log("Player 2 is Winner!")
      compareResults.player2results = "Player 2 Wins!"
    }
    if (player2 > generatedNumber) {
      console.log("player 2 is too high!")
      compareResults.player2results = "Too high..."
    }
    if (player2 < generatedNumber) {
      console.log("Player 2 is too low!")
      compareResults.player2results = "Too low..."
    }
    numberStorage.push(compareResults)
  }
  


app.get('/guesses', (req, res) => {
  console.log("Number Guesses...", numberStorage)
  res.send(numberStorage)
})



app.post('/guesses', (req, res) => {
  let incomingGuess = req.body
  let compare = comparison(incomingGuess.player1, incomingGuess.player2)
  console.log("Adding our guesses", incomingGuess)
  console.log("comparison is: ", compare)
 
  res.sendStatus(201)

})




app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})
