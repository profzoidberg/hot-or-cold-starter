
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  var random = Math.floor(Math.random() *101);

  // Pressing Enter Key
  // $("#userGuess").keydown(function(e){
  //   if (e.keyCode === 13){
  //     userCompare();
  //     appendGuess();
  //   }
  // });
  $("#guessButton").click(function(){
    userCompare();
    appendGuess();
  })

  // Creating a new game
  function newGame(){
    console.log("new game!");
    $("#guessList li").remove();
    $("#feedback").text("Make your Guess!");
    $("#userGuess").val("");
    $("#count").text(i=0);
    random = Math.floor(Math.random() * d101);
    console.log(random);
  }
  $(".new").click(function(){
    newGame();
  })

  // Compares User Input To The Random Number Generated
 
  function userCompare(){
    var input = $("#userGuess").val();
    console.log(input);
    console.log(random);
    var feedback = ["You Win!", "Very Hot", "Hot", "Cold", "Cold as Planet Hoth"]
    if (input === random) {
      changeFeedback(feedback[0]);
      alert("You Won! Play Again?");
    } else if (random - 5 <= input && input <= random + 5) {
      changeFeedback(feedback[1]);
    } else if (random - 15 <= input && input <= random + 15) {
      changeFeedback(feedback[2]);
    } else if (random - 25 <= input && input <= random + 25) {
      changeFeedback(feedback[3]);
    } else {
      changeFeedback(feedback[4]);
    }
  }

  // Gives the user feedback depending on how close or far their guess is
  function changeFeedback(feedback){
    $("#feedback").text(feedback);
  }

  // List Guesses and Count Guesses
  var i = parseInt("0", 10);
  function guessCounter(){
    $("#count").text(++i);
    console.log("increment");
  }
  function appendGuess(){
    guessCounter();
    var input = $("#userGuess").val();
    if (input >= 101) {
      alert("Pick a number 1-100!");
    } else if (isNaN(parseInt(input))) {
      alert("Please enter a number!");
    } else if (input !== "") {
      $("#guessList").append("<li> "+input+" </li>");
      $("#userGuess").val("");
    }
  }
});

