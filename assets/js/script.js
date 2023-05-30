// Declare constants

const buttons = document.getElementsByClassName("button");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

/**
 * Wait for DOM to load before running the game
 * Get button elements and add event listeners for each button
 */

document.addEventListener("DOMContentLoaded", function(){
    for (let button of buttons) {
        if (playerScore || computerScore > 10) {
        button.addEventListener("click", runGame())
        } else  if (playerScore === 10) {
            alert("You win");
          } else (computerScore === 10) {
            alert("Computer wins");
          }
    }
})

//The main game loop used for each players choice

function (runGame) {

}


function (playerChoice) {

}

function (computerChoice) {
    let computer = Math.floor(Math.random() *5);

    switch (computer) {
        case 0:
            document.getElementById("computer-image").background = "url(/assets/images/Rock.png) no-repeat center center";
            break;

        case 1:
            document.getElementById("computer-image").background = "url(/assets/images/Paper.png) no-repeat center center";
            break;

        case 2:
            document.getElementById("computer-image").background = "url(/assets/images/Scissors.png) no-repeat center center";
            break;

        case 3:
            document.getElementById("computer-image").background = "url(/assets/images/Lizard.png) no-repeat center center";
            break;

        case 4:
        document.getElementById("computer-image").background = "url(/assets/images/Spock.png) no-repeat center center";
        break;
    }