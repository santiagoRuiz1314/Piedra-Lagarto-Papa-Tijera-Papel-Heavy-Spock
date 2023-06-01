// start button 

var computerPlay;
var playType;

let startButton = document.getElementById("start")

startButton.addEventListener("click",function() {
    setTimeout(()=> {
        document.getElementById('computer-image').innerText = "Waiting for player";
     }
     ,1000);
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
    computerChoice();
    runGame();
})

paperButton.addEventListener("click",function() {
    playerChoice('paper');
    computerChoice();
    runGame();
})

scissorsButton.addEventListener("click",function() {
    playerChoice('scissors');
    computerChoice();
    runGame();
})

lizardButton.addEventListener("click",function() {
    playerChoice('lizard');
    computerChoice();
    runGame();
})

spockButton.addEventListener("click",function() {
    playerChoice('spock');
    computerChoice();
    runGame();
})

/*
* Feeds correct image into player selection area based 
* on what is clicked
*/

function playerChoice(playType) {
    switch (playType) {
        case "rock":
            document.getElementById('player-image').style.background="url(/assets/images/Rock.png)";
            console.log("player picks rock");
            break;
        case "paper":
            document.getElementById('player-image').style.background="url(/assets/images/Paper.png)";
            console.log("player picks paper");
            break;
        case "scissors":
            document.getElementById('player-image').style.background="url(/assets/images/Scissors.png)";
            console.log("player picks scissors");
            break; 
        case "lizard":
            document.getElementById('player-image').style.background="url(/assets/images/Lizard.png)";
            console.log("player picks lizard");
            break;
        case "spock":
            document.getElementById('player-image').style.background="url(/assets/images/Spock.png)";
            console.log("player picks spock");
            break;
    }
  }

/* 
* Random number generator makes computer choice and 
* function feeds the correct image into the computer 
* selection area of the game
*/

function computerChoice() {
    
    computerPlay = Math.floor(Math.random() * 5)
   
    switch (computerPlay) {
        case 0:
            document.getElementById('computer-image').style.background="url(/assets/images/Rock.png)";
            console.log("computer picks rock");
            break;
        case 1:
            console.log("computer picks paper");
            document.getElementById('computer-image').style.background="url(/assets/images/Paper.png)";
            break;
        case 2:
            document.getElementById('computer-image').style.background="url(/assets/images/Scissors.png)";
            console.log("computer picks scissors");
            break; 
        case 3:
            document.getElementById('computer-image').style.background="url(/assets/images/Lizard.png)";
            console.log("computer picks lizard");
            break;
        case 4:
            document.getElementById('computer-image').style.background="url(/assets/images/Spock.png)";
            console.log("computer picks spock");
            break;
    }
}

// main game function loop 

function runGame() {
    console.log(computerPlay);

   if (computerPlay === 0) {
        if (playType == "paper" || playType == "spock") {
        console.log("Computer wins!");
        } else if (playType == "rock") {
        console.log("Draw");
        } else {
        console.log("User wins");
        }
    } else if (computerPlay === 1) {
        if (playType == "rock" || playType == "spock") {
        console.log("Computer wins!");
         } else if (playType == "paper") {
        console.log("Draw");
        } else {
        console.log("User wins");
        }
    } else if (computerPlay === 2) {
        if (playType == "paper" || playType == "lizard") {
            console.log("Computer Wins!");
        } else if (playType == "scissors") {
            console.log("Draw");
        } else {
            console.log("User wins");
        }
    } else if (computerPlay === 3) {
        if (playType == "paper" || playType == "spock") {
            console.log("Computer Wins!");
        } else if (playType == "lizard") {
            console.log("Draw");
        } else {
            console.log("User wins");
        }
    } else if (computerPlay === 4) {
        if (playType == "rock" || playType == "scissors") {
            console.log("Computer Wins!");
        } else if (playType == "spock") {
            console.log("Draw");
        } else {
            console.log("User wins");
        }
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
        //declare winner or round
    } else if (pScore === 10){

    } else {

    }
}