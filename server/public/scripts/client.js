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
  console.log("Total Rounds: " , totalRounds)
  guessOutput.innerHTML = ""
// totalRounds.innerHTML = totalGuesses
  for (i=0;i<allItems.length;i++){
    totalGuesses ++
      console.log(allItems[i].player1)
      console.log(allItems[i].player2)
      guessOutput.innerHTML += `<tr>
      <th>${allItems[i].player1}</th>
      <th>${allItems[i].player2}</th>
    </tr>`
  }
  totalRounds.innerHTML = totalGuesses
}


let addNewGuess = () => {
  
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
  
  
  guessList()
})
.catch((error) => {
console.log('POST for /inventory did not work')
alert("Ooooopsies")
})
  document.getElementById("inputForm").reset()
}



// let initializeRandom = () => {
    
//     console.log("Guess List is working!")
//     axios({
//         method: 'GET', // HTTP method
//         url: '/random'
//     })
//     .then((response) => { // Captures the response from server
//         // Must be response.data
//         let generatedNumber = response.data
//         console.log("guesses are...", generatedNumber)
    
//             // Render quotes to DOM
//     })
//     .catch((error) => { // Manages errors
//         console.log("GET for /guesses didnt work...", error)
//         alert("Oopsie, that didnt work.")
//     })
//   }