function onReady() {
  console.log("JavaScript is loaded!")
}
onReady()
totalGuesses = 0
let guessList = () => {

  console.log("Guess List is working!")
  axios({
      method: 'GET', // HTTP method
      url: '/guesses'
  })
  .then((response) => { // Captures the response from server
      // Must be response.data
      let guesses = response.data
      console.log("guesses are...", guesses)
          // Render quotes to DOM
          
          renderGuesses(guesses)
  })
  .catch((error) => { // Manages errors
      console.log("GET for /guesses didnt work...", error)
      alert("Oopsie, that didnt work.")
  })
}
guessList()



let renderGuesses = (allItems) => {
  console.log("renderItems is Working...", allItems)
  let guessOutput = document.getElementById('guesses_go_here')
  let totalRounds = document.getElementById('totalguesses')
  console.log("total Guesses", totalGuesses)
  console.log("Total Rounds: " , totalRounds.innerHTML)
  guessOutput.innerHTML = ""
  totalRounds.innerHTML = ""
console.log("Actually all Items:", allItems)
  for (i=0;i<allItems.length;i++){
    console.log("Guesses from the client js", allItems[i])
   
      guessOutput.innerHTML += ` 
      <tr>
      <td class="player1">Guess: ${allItems[i].player1guess}<div>
      ${allItems[i].player1results}</div></td>
      <td class="player2">Guess: ${allItems[i].player2guess}<div>
      ${allItems[i].player2results}</div></div></td>
    </tr>
    
    `
  }
  totalRounds.innerHTML = totalGuesses

}

let addNewGuess = (event) => {
  event.preventDefault()
  console.log("in add item")

  axios ({
      method: 'POST',
      url: '/guesses',
      data:{
          player1: parseFloat(document.getElementById('player_1_guess').value),
          player2: parseFloat(document.getElementById('player_2_guess').value)
      }
  })
.then((response) => {
  console.log("SUCCESS")
  
  totalGuesses ++
  guessList()
})
.catch((error) => {
console.log('POST for /guesses has not been added.')
alert("Ooooopsies Add new Guess Failed")
})
  document.getElementById("inputForm").reset()
}
