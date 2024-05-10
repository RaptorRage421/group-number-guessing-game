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


let renderResults = (resultValues) => {
  let results = document.getElementById('results')
  for (i=0;i<resultValues.length;i++){
    results.innerHTML = `${resultValues[i]}`
    console.log(resultValues[i])
  }
}

let renderGuesses = (allItems) => {
  console.log("renderItems is Working...", allItems)
  let guessOutput = document.getElementById('guesses_go_here')
  let totalRounds = document.getElementById('totalguesses')
  

  console.log("total Guesses", totalGuesses)
  console.log("Total Rounds: " , totalRounds)
  guessOutput.innerHTML = ""
  totalRounds.innerHTML = ""
// totalRounds.innerHTML = totalGuesses
totalGuesses ++
  for (i=0;i<allItems.length;i++){
    
      console.log(allItems[i].player1)
      console.log(allItems[i].player2)
      guessOutput.innerHTML += `<tr>
      <th>${allItems[i].player1}</th>
      <th>${allItems[i].player2}</th>
    </tr>`
  }
  totalRounds.innerHTML = totalGuesses

}

// let addNewComparison = () => {
//   console.log("in comparison")
//   axios ({
//         method: 'POST',
//         url: '/results',
//         data:

//   })
// }
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
  
  
  guessList()
})
.catch((error) => {
console.log('POST for /guesses has not been added.')
alert("Ooooopsies Add new Guess Failed")
})
  document.getElementById("inputForm").reset()
}



// let comparison = () => {

//   console.log("comparison is working")
//   axios({
//       method: 'GET', // HTTP method
//       url: '/results'
//   })
//   .then((response) => { // Captures the response from server
//       // Must be response.data
//       let resultValues = response.data
//       console.log("guesses are...", resultValues)
//           // Render quotes to DOM
          
//          renderResults()
//   })
//   .catch((error) => { // Manages errors
//       console.log("GET for /guesses didnt work...", error)
//       alert("Oopsie, that didnt work.")
//   })
// }
// guessList()


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