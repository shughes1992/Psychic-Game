
//!!START!!

var wins = 0;
var losses = 0;
var guessesLeft = 11;
var guesses = [];


document.onkeyup = function (event) {
    //player guesses a letter ranging from a-z (onkeyUP)
    var userGuesses = String.fromCharCode(event.keyCode).toLowerCase();

    //cptr chooses random letter a-z 
    var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //displaying user's input in console
    console.log("user's guess: " + userGuesses);

    // user has to enter an alphabet character, not any key


    //computer guess

    var computerInput = compChoices[Math.floor(Math.random() * 26)];

    //displaying computer's input in console
    console.log("computer input: " + computerInput);

    // document.getElementById("guessesLeft").innerHTML = guessesLeft;

    var updateGuessesLeft = function () {
        document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
        //!!CORRECT!!
    };

    //if computerInput = userInput, then "Wins:" increases by 1 (update)

    if (computerInput === userGuesses) {
        wins++;
        document.getElementById("wins").textContent = wins;
        guesses.length = 0;
    }
    //Start game over (do not refresh page)

    //cptr chooses new letter


    //!!INCORRECT!!

    //if letter is wrong

    else if (computerInput != userGuesses) {

        //# of guesses left decreases by 1 (update)
        document.getElementById("guessesLeft").innerHTML = guessesLeft --;
        //"guesses so far" are displayed... show what the user has entered (.innerHTML?)
        document.getElementById("guesses").innerHTML = userGuesses;
    }

    var updateGuessesSoFar = function () {
        // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
        document.querySelector('#guesses').innerHTML = "Your Guesses so far: " + guesses.join(', ');
    };


    //!!LOSSES

    //if user guesses 9 times, then "Losses:" increase by 1 (update)

    if (guessesLeft == 0) {
        losses++;
        document.getElementById("losses").textContent = losses;
        guessesLeft = 11;
    }

    if (wins == 5) {
        document.getElementById("Message").textContent = "You Won... Now celebrate!";
        losses = 0;
        wins = 0;
        guessesLeft = 11;
    }

    if (losses == 5 ) {
        document.getElementById("message").textContent = "Sorry, you lost to a computer. Better luck next time!";
        losses = 0;
        wins = 0;
        guessesLeft = 11;
    }
}


    //Start game over (do not refresh page)

        //cptr chooses new letter



