// Declare constants

const buttons = document.getElementsByClassName("button");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

/**
 * Wait for DOM to load before running the game
 * Get button elements and add event listeners for each button
 */

document.addEventListener("DOMContentLoaded", function()) {
    for (let button of buttons) {
        if (playerScore || computerScore > 10) {
        button.addEventListener("click", runGame())
        } else  if (playerScore === 10) {
            alert("You win");
          } else (computerScore === 10) {
            alert("Computer wins")
          }
    }
}