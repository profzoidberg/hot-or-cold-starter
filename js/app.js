$(document).ready(function(){
  
  /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

  var random = Math.floor((Math.random() * 100) + 1);

  $("#guessButton").click(function(){
      userCompare();
      appendGuess();
  });

  // Creating a new game
  function newGame(){
    console.log("new game!");
    $("#guessList li").remove();
    $("#feedback").text("Make your Guess!");
    $("#userGuess").val("");
    $("#count").text(i = 0);
    random = Math.floor((Math.random() * 100) + 1);
    console.log(random);
  }
  $(".new").click(function(){
    newGame();
  })

  // Compares User Input To The Random Number Generated
 
  function userCompare(){
    var input = parseInt($("#userGuess").val());
    console.log(input);
    console.log(random);
    var feedback = ["You Win! Click New Game To Play Again", "Very Hot", "Hot", "Cold", "Cold as Planet Hoth", "Please enter a number!", "Pick a number 1-100!"]
    if (input == random) {
      changeFeedback(feedback[0]);
    } else if (input >= 101 || input == 0) {
      changeFeedback(feedback[6]);
    } else if (random - 5 <= input && input <= random + 5) {
      changeFeedback(feedback[1]);
    } else if (random - 15 <= input && input <= random + 15) {
      changeFeedback(feedback[2]);
    } else if (random - 25 <= input && input <= random + 25) {
      changeFeedback(feedback[3]);
    } else if (isNaN(input)) {
      changeFeedback(feedback[5]);
    } else {
      changeFeedback(feedback[4]);
    }
  }

  // Gives the user feedback depending on how close or far their guess is
  function changeFeedback(feedback){
    $("#feedback").text(feedback);
  }

  // List Guesses and Count Guesses
  var i = 0;
  function guessCounter(){
    $("#count").text(++i);
  }
  function appendGuess(){
    guessCounter();
    var input = parseInt($("#userGuess").val());
    if (!isNaN(input)) {
      $("#guessList").append("<li> "+input+" </li>");
      $("#userGuess").val("");
    } else if (input === "") {
      changeFeedback(feedback[5]);
    }
  }
});