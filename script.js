//script for page with buttons

//create a rock paper scissors game.
//allow user to select from 3 box choices
//allow computer to randomly select from 3 array options
//have user play against computer (compare)
//display winner of each round (track)
//BONUS: create a reset button (every 3 rounds), add a score tracker


//function with array for options for computer

function randomPick () {
    const gameOptions = ["rock", "paper", "scissors"];
    const computersTurn = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[computersTurn];
}

//function to check whether player wins or not
function userWins(player, computer) {
    return  (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    )
}


//initialization of scores
let playerScore = 0;
let computerScore = 0;

//function to display results!
function getResults (userSelection) {
    const computerSelection = randomPick();

    if(userWins(userSelection, computerSelection)) {
        playerScore++;
        return `You win! ${computerSelection} can't defeat ${userSelection}`;
    } else if (computerSelection === userSelection) {
        return `It's a tie! ${userSelection}s are useless against each other.`;
    } else {
        computerScore++;
        return `Gladiator "Computer" wins this match! ${computerSelection} beat ${userSelection}. Play again?`;
    }
}

//function that keeps scores, increases the value on score <div>
var playerDiv = document.getElementById("player-score");
var computerDiv = document.getElementById("computer-score");
const textDisplay = document.getElementById("text-display");

function results (userChoice) {
    textDisplay.innerText = getResults(userChoice);
    playerDiv.innerText = playerScore;
    computerDiv.innerText = computerScore;
}

//call elements from html buttons
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

//add click events to buttons
rockBtn.addEventListener("click", function () {
    results("rock");
});

paperBtn.addEventListener("click", function () {
    results("paper");
})

scissorsBtn.addEventListener("click", function () {
    results("scissors");
})

