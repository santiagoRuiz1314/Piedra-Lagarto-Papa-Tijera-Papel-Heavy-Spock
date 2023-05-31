// set-up event listeners for the 5 player choice options  

let rockButton = document.getElementById("rock");
let scissorsButton = document.getElementById("scissors");
let paperButton = document.getElementById("paper");
let lizardButton = document.getElementById("lizard");
let spockButton = document.getElementById("spock");

rockButton.addEventListener("click",function() {
    playerChoice('rock');
})

paperButton.addEventListener("click",function() {
    playerChoice('paper');
})

scissorsButton.addEventListener("click",function() {
    playerChoice('scissors');
})

lizardButton.addEventListener("click",function() {
    playerChoice('lizard');
})

spockButton.addEventListener("click",function() {
    playerChoice('spock');
})

/*
* Feeds correct image into player selection area based 
* on what is clicked
*/

function playerChoice(playType) {
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

/* 
* Random number generator makes computer choice and 
* function feeds the correct image into the computer 
* selection area of the game
*/

function computerChoice() {
    
    let ranNum = Math.floor(Math.random() * 4)
   
    switch (ranNum) {
        case "0":
            document.getElementById('computer-image').style.background="url(/assets/images/Rock.png)";
            break;
        case "1":
            document.getElementById('computer-image').style.background="url(/assets/images/Paper.png)";
            break;
        case "2":
            document.getElementById('computer-image').style.background="url(/assets/images/Scissors.png)";
            break; 
        case "3":
            document.getElementById('computer-image').style.background="url(/assets/images/Lizard.png)";
            break;
        case "4":
            document.getElementById('computer-image').style.background="url(/assets/images/Spock.png)";
            break;
    }
}

// main game function loop 

function () {
    
}