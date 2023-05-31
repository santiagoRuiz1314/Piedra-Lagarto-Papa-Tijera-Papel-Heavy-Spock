// set-up event listeners for the 5 player choice options  

let rockButton = document.getElementById("rock");
let scissorsButton = document.getElementById("scissors");
let paperButton = document.getElementById("paper");
let lizardButton = document.getElementById("lizard");
let spockButton = document.getElementById("spock");

rockButton.addEventListener("click",function() {
    playerImage('rock');
})

paperButton.addEventListener("click",function() {
    playerImage('paper');
})

scissorsButton.addEventListener("click",function() {
    playerImage('scissors');
})

lizardButton.addEventListener("click",function() {
    playerImage('lizard');
})

spockButton.addEventListener("click",function() {
    playerImage('spock');
})

/*
* Feeds correct image into player selection area based 
* on what is clicked
*/

function playerImage(playType) {
    switch (playType) {
        case "rock":
            document.getElementById('player-image').style.background="url(/assets/images/Rock.png)";
            break;
        case "paper":
            document.getElementById('player-image').style.background="url(/assets/images/Paper.png)";
            break;
        case "scissors":
            document.getElementById('player-image').style.background="url(/assets/images/Scissors.png)";
            break; 
        case "lizard":
            document.getElementById('player-image').style.background="url(/assets/images/Lizard.png)";
            break;
        case "spock":
            document.getElementById('player-image').style.background="url(/assets/images/Spock.png)";
            break;
    }
  }

