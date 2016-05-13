
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

   $('#userGuess').keydown(function(e){
    if (e.keyCode === 13){
      userCompare();
      appendGuess();
    }
  });
  var random = Math.floor((Math.random() *100) +1);
  function changeFeedback(feedback){
    $("#feedback").text(feedback);
  }
  function appendGuess(){
    var input=$("#userGuess").val();
    if (input !== "") {
      $("#guessList").append("<li> "+input+" </li>");
      $("#userGuess").val("");
    }
  }
  function userCompare(){
    var input=$("#userGuess").val();
    console.log(random);
    console.log(input);
    var feedback = ["You Win!", "Very Hot", "Hot", "Cold", "Cold as Planet Hoth"]
    if (input == random) {
      changeFeedback(feedback[0]);
      alert("You Won! Play Again?")
    } else if (random - 5 <= input && input <= random + 5) {
      changeFeedback(feedback[1]);
    } else if (random - 15 <= input && input <= random + 15) {
      changeFeedback(feedback[2]);
    } else if (random - 20 <= input && input <= random + 20) {
      changeFeedback(feedback[3]);
    } else {
      changeFeedback(feedback[4]);
    }
  }
  function changeFeedback(feedback){
    $("#feedback").text(feedback);
  }
  function appendGuess(){
    var input=$("#userGuess").val();
    if (input !== "") {
      $("#guessList").append("<li> "+input+" </li>");
      $("#userGuess").val("");
    }
  }
});

