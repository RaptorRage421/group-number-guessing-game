function onReady() {
  console.log("JavaScript is loaded!")
}

onReady()

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
  guessOutput.innerHTML = ""
  for (i=0;i<allItems.length;i++){

      console.log(allItems[i].player1)
      console.log(allItems[i].player2)
      guessOutput.innerHTML += `<tr>
      <th>${allItems[i].player1}</th>
      <th>${allItems[i].player2}</th>
    </tr>`
  }
}


