//initialize variables
'use strict';
var secretNumber, 
userGuess, 
pastGuesses = [], 
count,
guessHtml, 
userFeedback,
alreadyGuessed,
newButton,
form ,
input,
feedback,
countElement,
guessList;

$(document).ready(pageLoad);

 function pageLoad(){
	
	/*--- Display information modal box ---*/
  	$('.what').click(function(){
    	$('.overlay').fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$('a.close').click(function(){
  		$('.overlay').fadeOut(1000);
  	});

<<<<<<< HEAD
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
=======
  	//fetch dom objects
  	newButton = $('a.new');
  	form = $('form');
  	input = form.find('#userGuess');
  	feedback = $('#feedback');
  	countElement = $('#count');
  	guessList = $('#guessList');

    //page load
    newGame();
    //event handlers
    form.submit(function(event){
      event.preventDefault();
      getUserGuess();
    });
    newButton.click(newGame);
}

//new game function
function newGame(){
	form.find('input[type=submit]').css('opacity','1');
	resetVariables();
	render();
	generateNumber();
}

//get the user guess
function getUserGuess(){
	//get the user guess
	userGuess = input.val();
	//reset input value
	input.val('');
	//focus on input for next guess
	input.focus();
	//ensure valid input
	if(checkGuess()){return ;}
	//generate feedback
	generateFeedback();
	//track the past user guesses
	trackGuess();
	//increment the count
	guessCount();
	//render changes to the page
	render();
}

  	//check for valid input
  	function checkGuess(){
  		if(userGuess % 1 !== 0){
  			alert('please input a number');
  			return true;
  		}
  		if(userGuess < 0 || userGuess > 101){
  			alert('please choose a number between zero and 100');
  			return true;
  		}
  		if(pastGuesses.length > 0){
			$.each(pastGuesses,function(guess,value){
				if(userGuess == value){
					alreadyGuessed = true;
				}
			}); 
		}
		if(alreadyGuessed){
			alreadyGuessed = false;
			alert('You guessed this number already');
			return true;
		}
    return false;
	}

//generate user feedback
function generateFeedback(){
	if(secretNumber == userGuess){
		winner();
	} else if(Math.abs(secretNumber - userGuess) < 10){
		userFeedback = 'hot';
	} else if(Math.abs(secretNumber - userGuess) < 20 && Math.abs(secretNumber - userGuess) > 9){
		userFeedback = ' Kinda hot';
	} else if(Math.abs(secretNumber - userGuess) < 30 && Math.abs(secretNumber - userGuess) > 19){
		userFeedback = 'less than warm';
	} else {
		userFeedback = 'cold';
	}
}

//keep track of the users past guesses
function trackGuess(){
	pastGuesses.push(userGuess);
	guessHtml = '';
	if(pastGuesses[0].length) {
		$.each(pastGuesses,function(guess,value){
			guessHtml += '<li>' + value + '</li>';
		});
	}
}

//keep track of guess count
function guessCount(){
	count++;
}

	//page render function
function render(){
	guessList.html(guessHtml);
	countElement.html(count);
	feedback.html(userFeedback);
}

function winner(){
	userFeedback = 'You Won. Click new game to play again';
	form.find('input[type=submit]').css('opacity','0');
}
  	
//generate secret number
function generateNumber(){
	secretNumber = Math.floor(Math.random()*100)+1;
}

//reset variable 
function resetVariables(){
	count = 0;
	pastGuesses = [];
	guessHtml='';
	userGuess = '';
	userFeedback = 'Make your Guess!';
}
  	
  	

  


>>>>>>> 0ea735abcc4f2eab6b6eaffd2b1227a5cbddb99f

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

