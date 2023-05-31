// start button 

let startButton = document.getElementById("start")

startButton.addEventListener("click",function() {
    setTimeout(()=> {
        document.getElementById('computer-image').innerText = "Waiting for player";
     }
     ,1000);
     runGame();
     computerChoice();
})

/* Set-up event listeners for the 5 player choice options
* and run playerChoice function when clicked
*/

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
    
    let computerChoice = Math.floor(Math.random() * 5)
   
    switch (computerChoice) {
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

/* 
* Checks if either score is at 10 and declares a winner
* If score hasn't reached 10, declares winner for the round
* and updates score counter
*/

function scores() {
    let pScore = document.getElementById("pScore")
    let cScore = document.getElementById("cScore")
   
    if (pScore || cScore < 10) {
        //declare winner or round]
    } else if (pScore === 10){

    } else {

    }
}

// main game function loop 

function runGame(playType) {
    var result;

   if (computerChoice == 0) {
    if (playType == "paper" || playtype == "spock") {
        console.log("userWins");
    } else if (playType == "rock") {
        result = draw;
    } else {
        result = computerWins;
    }
   }

    
}

