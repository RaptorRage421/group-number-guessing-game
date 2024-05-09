const express = require('express');
const bodyParser = require('body-parser')
let numberGenerator = require('./numberGenerator.js')
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

app.get('/guesses', (req,res) => {
  console.log("Number Guesses...", numberStorage)
res.send(numberStorage)
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
