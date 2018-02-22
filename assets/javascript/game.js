
//!!START!!

var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guesses = 0;



document.onkeyup = function (event) {
    //player guesses a letter ranging from a-z (onkeyUP)
    var userGuesses = event.key.toLowerCase();
    //cptr chooses random letter a-z 
    var compChoices = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    console.log("user's guess: " + userGuesses);

    //computer guess

    var computerInput = compChoices[Math.floor(Math.random() * 26)];

    console.log("computer input: " + computerInput);

        //!!CORRECT!!
    //if player guesses correct letter, then "Wins:" increase by 1 (update)

    if (computerInput === userGuesses) {
        wins++;
        document.getElementById("wins").textContent = wins;
    }
}


    //Start game over (do not refresh page)

        //cptr chooses new letter


//!!INCORRECT!!

    //if letter is wrong 
        //# of guesses left decreases by 1 (update)


        //"guesses so far" are displayed... show what the user has entered (.innerHTML?)

//!!LOSSES
    //if user guesses 9 times, then "Losses:" increase by 1 (update)

    //Start game over (do not refresh page)

        //cptr chooses new letter
