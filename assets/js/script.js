var computerPlay;

// start button 
// need to lock out rest of game here until button has been clicked

let startButton = document.getElementById("start")

startButton.addEventListener("click",function() {
    setTimeout(()=> {
        document.getElementById('computer-image').innerText = "Waiting for player";
     }
     ,1000);
})

/* Set-up event listeners for the 5 player choice options
* and games functions when clicked
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
            var pType = "rock";
            break;
        case "paper":
            document.getElementById('player-image').style.background="url(/assets/images/Paper.png)";
            console.log("player picks paper");
            var pType = "paper";
            break;
        case "scissors":
            document.getElementById('player-image').style.background="url(/assets/images/Scissors.png)";
            console.log("player picks scissors");
            var pType = "scissors";
            break; 
        case "lizard":
            document.getElementById('player-image').style.background="url(/assets/images/Lizard.png)";
            console.log("player picks lizard");
            var pType = "lizard";
            break;
        case "spock":
            document.getElementById('player-image').style.background="url(/assets/images/Spock.png)";
            console.log("player picks spock");
            var pType = "spock";
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

// issues with playType being carried through functions

function runGame() {
    console.log(computerPlay);
    console.log(pType);

    switch (computerPlay){
    case 0:
        if (pType == "paper") {
            console.log("User wins!");
            playScore();
            resultMsg("rockPaper");
        } else if (pType == "spock") {
            console.log("User wins!");
            playScore();
            resultMsg("rockSpock");
        } else if (pType == "rock") {
            console.log("Draw");
            resultMsg("draw");
        } else if (pType == "lizard") {
            console.log("Computer wins");
            computerScore();
            resultMsg("rockLizard");
        } else (pType == "scissors") {
            console.log("Computer wins");
            computerScore(); 
            resultMsg("rockScissors");
        } 
        break;
        
    case 1:
        if (pType == "paper") {
            console.log("Draw");
            resultMsg("draw");
        } else if (pType == "spock") {
            console.log("Computer wins!");
            computerScore();
            resultMsg("paperSpock");
        } else if (pType == "rock") {
            console.log("Computer wins!");
            computerScore();
            resultMsg("paperRock");
        } else if (pType == "lizard") {
            console.log("Player wins");
            playerScore();
            resultMsg("paperLizard");
        } else (pType == "scissors") {
            console.log("Player wins");
            playerScore(); 
            resultMsg("paperScissors");
        } 
        break;

    case 2:
        if (pType == "paper") {
            console.log("Computer wins!");
            computerScore();
            resultMsg("scissorsPaper");
        } else if (pType == "spock") {
            console.log("Player wins!");
            playerScore();
            resultMsg("scissorsSpock");
        } else if (pType == "rock") {
            console.log("Player wins!");
            playerScore();
            resultMsg("scissorsRock");
        } else if (pType == "lizard") {
            console.log("Computer wins");
            computerScore();
            resultMsg("scissorsLizard");
        } else (pType == "scissors") {
            console.log("Draw");
            resultMsg("draw");
        } 
        break;

    case 3:
        if (pType == "paper") {
            console.log("Computer wins!");
            computerScore();
            resultMsg("lizardPaper");
        } else if (pType == "spock") {
            console.log("Computer wins!");
            computerScore();
            resultMsg("lizardSpock");
        } else if (pType == "rock") {
            console.log("Player wins!");
            playerScore();
            resultMsg("lizardRock");
        } else if (pType == "lizard") {
            console.log("Draw");
            resultMsg("draw");
        } else (pType == "scissors") {
            console.log("Player wins!");
            playerScore();
            resultMsg("lizardScissors");
        } 
        break;

    case 4:
        if (pType == "paper") {
            console.log("Player wins!");
            playerScore();
            resultMsg("spockPaper");
        } else if (pType == "spock") {
            console.log("Draw");
            resultMsg("draw");
        } else if (pType == "rock") {
            console.log("Computer wins!");
            computerScore();
            resultMsg("spockRock");
        } else if (pType == "lizard") {
            console.log("Player wins!");
            playerScore();
            resultMsg("spockLizard");
        } else (pType == "scissors") {
            console.log("Computer wins!");
            computerScore();
            resultMsg("spockScissors");
        } 
        break;
    }
}

/*
* Takes outcome from runGame and displays 
* the correct results message for the game
*/

function resultMsg (resultType) {
    switch (resultType){
        case "draw":
            document.getElementById("result").innerText = "Its a draw - go again!"; 
            break; 

        case "rockPaper":
            document.getElementById("result").innerText = "Paper covers rock - player wins!";
            break;
        case "rockSpock":
            document.getElementById("result").innerText = "Spock vaporizes rock - player wins!";
            break;
        case "rockLizard":
            document.getElementById("result").innerText = "Rock crushes lizard - computer wins!";
            break;
        case "rockScissors":
            document.getElementById("result").innerText = "Rock crushes scissors - computer wins!";
            break;

        case "paperRock":
            document.getElementById("result").innerText = "Paper covers rock - computer wins!";
            break;
        case "paperScissors":
            document.getElementById("result").innerText = "Scissors cut paper - player wins!";
            break;
        case "paperLizard":
            document.getElementById("result").innerText = "Lizard eats paper - player wins!";
            break;
        case "paperSpock":
            document.getElementById("result").innerText = "Paper disproves spock - computer wins!";
            break;

        case "scissorsRock":
            document.getElementById("result").innerText = "Rock crushes scissors - player wins!";
            break;
        case "scissorsPaper":
            document.getElementById("result").innerText = "Scissors cut paper - computer wins!";
            break;
        case "scissorsLizard":
            document.getElementById("result").innerText = "Scissors decapitates lizard - computer wins!";
            break;
        case "scissorsSpock":
            document.getElementById("result").innerText = "Spock smashes scissors - player wins!";
            break;

        case "lizardRock":
            document.getElementById("result").innerText = "Rock crushes lizard - player wins!";
            break;
        case "lizardPaper":
            document.getElementById("result").innerText = "Lizard eats paper - computer wins!";
            break;
        case "lizardScissors":
            document.getElementById("result").innerText = "Scissors decapitates lizard - player wins!";
            break;
        case "lizardSpock":
            document.getElementById("result").innerText = "Lizard poisons spock - computer wins!";
            break;

        case "spockRock":
            document.getElementById("result").innerText = "Spock vaporizes rock - computer wins!";
            break;
        case "spockPaper":
            document.getElementById("result").innerText = "Paper disproves spock - player wins!";
            break;
        case "spockScissors":
            document.getElementById("result").innerText = "Spock smashes scissors - computer wins!";
            break;
        case "spockLizard":
            document.getElementById("result").innerText = "Lizard poisons spock - player wins!";
            break;
    }
}


/* 
* Checks if either score is at 10 and declares a winner
* If score hasn't reached 10, declares winner for the round
* and updates score counter
*/

function playScore() {
    let pOldScore = document.getElementById("pScore").innerText;
    document.getElementById("pScore").innerText = ++pOldScore;
    console.log('pScore');
}

function computerScore() {
    let cOldScore = document.getElementById("cScore").innerText;
    document.getElementById("cScore").innerText = ++cOldScore;
    console.log("cScore");
}
   
/* if (pScore || cScore < 10) {
        //declare winner or round
    } else if (pScore === 10){

    } else {

    }
*/
