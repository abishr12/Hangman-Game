function hangmanGame(){


 alert("Select a letter")
  var word = "superman";
  var guessCounter = 0;
  var guesses = document.getElementById("guess");



  for (var i = 0; i < word.length; i++) {
    var space = document.createElement("div")
    space.id = "blanks" + i
    space.innerHTML = "_"
    guesses.appendChild(space)
  }
  document.onkeyup = function(event){
    var userGuess = event.key

    if(word.indexOf(userGuess)===-1){
      alert("Wrong!")
      guessCounter++
      if (guessCounter === 5){
        guessCounter++
        alert("Game Over!")
        confirm("Would you like to play again?")
          if (true){
            location.reload()
          }
        }

      console.log(userGuess)
      document.getElementById("count").innerHTML = guessCounter;
    }
    else{
      alert("Good Job!!")
      document.getElementById("blanks"+ word.indexOf(userGuess)).innerHTML = userGuess;
      console.log(userGuess)
    }
  }

}

hangmanGame();
