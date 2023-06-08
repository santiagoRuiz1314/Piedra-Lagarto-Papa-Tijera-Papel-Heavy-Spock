// Stating global variables 
var computerPlay;
var start = 0;

// Hides quit button and reset button
document.getElementById("quit").style.display = "none";
document.getElementById("reset").style.display = "none";

// Start button event listener
let startButton = document.getElementById("start")

startButton.addEventListener("click",function() {
    start = 1;
    document.getElementById("player-image").style.background = "";
    document.getElementById("computer-image").style.background = "";
    document.getElementById("quit").style.display = "";
    document.getElementById("start").style.display = "none";
    document.getElementById("result-para").innerText = "Make your choice using the buttons above and see the result here";

    setTimeout(()=> {
        document.getElementById('computer-image').innerText = "Waiting for player";
     }
     ,500);
})

// Quit button event listener
let quitButton = document.getElementById("quit")

quitButton.addEventListener("click", function() {
    location.reload();
})

// Reset button event listener
let resetButton = document.getElementById("reset")

resetButton.addEventListener("click", function() {
    location.reload();
})

/* Set-up event listeners for the 5 player choice options
* and run functions when clicked
*/
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let lizardButton = document.getElementById("lizard");
let spockButton = document.getElementById("spock");

rockButton.addEventListener("click",function() {
    if (start ===1){
    playerChoice('rock');
    computerChoice();
    runGame('rock');
    }
})

paperButton.addEventListener("click",function() {
    if (start ===1){
    playerChoice('paper');
    computerChoice();
    runGame('paper');
    }
})

scissorsButton.addEventListener("click",function() {
    if (start ===1){
    playerChoice('scissors');
    computerChoice();
    runGame('scissors');
    }
})

lizardButton.addEventListener("click",function() {
    if (start ===1){
    playerChoice('lizard');
    computerChoice();
    runGame('lizard');
    }
})

spockButton.addEventListener("click",function() {
    if (start ===1){
    playerChoice('spock');
    computerChoice();
    runGame('spock');
    }
})

/*
* Feeds correct image into player selection area based 
* on what is clicked
*/

function playerChoice(playType) {
    switch (playType) {
        case "rock":
            document.getElementById('player-image').style.background="url(assets/images/Rock.png)";
            document.getElementById('player-image').style.backgroundSize="cover";
            break;
        case "paper":
            document.getElementById('player-image').style.background="url(assets/images/Paper.png)";
            document.getElementById('player-image').style.backgroundSize="cover";
            break;
        case "scissors":
            document.getElementById('player-image').style.background="url(assets/images/Scissors.png)";
            document.getElementById('player-image').style.backgroundSize="cover";
            break; 
        case "lizard":
            document.getElementById('player-image').style.background="url(assets/images/Lizard.png)";
            document.getElementById('player-image').style.backgroundSize="cover";
            break;
        case "spock":
            document.getElementById('player-image').style.background="url(assets/images/Spock.png)";
            document.getElementById('player-image').style.backgroundSize="cover";
            break;
    }
  }

/* 
* Random number generator makes computer choice and 
* function feeds the correct image into the computer 
* selection area of the game
*/

function computerChoice() {
    
    computerPlay = Math.floor(Math.random() * 5);
   
    switch (computerPlay) {
        case 0:
            document.getElementById('computer-image').innerText = "";
            document.getElementById('computer-image').style.background="url(assets/images/Rock.png)";
            document.getElementById('computer-image').style.backgroundSize="cover";
            break;
        case 1:
            document.getElementById('computer-image').innerText = "";
            document.getElementById('computer-image').style.background="url(assets/images/Paper.png)";
            document.getElementById('computer-image').style.backgroundSize="cover";
            break;
        case 2:
            document.getElementById('computer-image').innerText = "";
            document.getElementById('computer-image').style.background="url(assets/images/Scissors.png)";
            document.getElementById('computer-image').style.backgroundSize="cover";
            break; 
        case 3:
            document.getElementById('computer-image').innerText = "";    
            document.getElementById('computer-image').style.background="url(assets/images/Lizard.png)";
            document.getElementById('computer-image').style.backgroundSize="cover";
            break;
        case 4:
            document.getElementById('computer-image').innerText = "";
            document.getElementById('computer-image').style.background="url(assets/images/Spock.png)";
            document.getElementById('computer-image').style.backgroundSize="cover";
            break;
    }
}

// Main game function loop 

function runGame(playType) {

    switch (computerPlay){
    case 0:
        if (playType == "paper") {
            resultMsg("rockPaper");
            playerScore();
        } else if (playType == "spock") {
            resultMsg("rockSpock");
            playerScore();
        } else if (playType == "rock") {
            resultMsg("draw");
        } else if (playType == "lizard") {
            resultMsg("rockLizard");
            computerScore();
        } else {
            resultMsg("rockScissors");
            computerScore();
        } 
        break;
        
    case 1:
        if (playType == "paper") {
            resultMsg("draw");
        } else if (playType == "spock") {
            resultMsg("paperSpock");
            computerScore();
        } else if (playType == "rock") {
            resultMsg("paperRock");
            computerScore();
        } else if (playType == "lizard") {
            resultMsg("paperLizard");
            playerScore();
        } else {
            resultMsg("paperScissors");
            playerScore(); 
        } 
        break;

    case 2:
        if (playType == "paper") {
            resultMsg("scissorsPaper");
            computerScore();
        } else if (playType == "spock") {
            resultMsg("scissorsSpock");
            playerScore();
        } else if (playType == "rock") {
            resultMsg("scissorsRock");
            playerScore();
        } else if (playType == "lizard") {
            resultMsg("scissorsLizard");
            computerScore();
        } else {
            resultMsg("draw");
        } 
        break;

    case 3:
        if (playType == "paper") {
            resultMsg("lizardPaper");
            computerScore();
        } else if (playType == "spock") {
            resultMsg("lizardSpock");
            computerScore();
        } else if (playType == "rock") {
            resultMsg("lizardRock");
            playerScore();
        } else if (playType == "lizard") {
            resultMsg("draw");
        } else {
            resultMsg("lizardScissors");
            playerScore();
        } 
        break;

    case 4:
        if (playType == "paper") {
            resultMsg("spockPaper");
            playerScore();
        } else if (playType == "spock") {
            resultMsg("draw");
        } else if (playType == "rock") {
            resultMsg("spockRock");
            computerScore();
        } else if (playType == "lizard") {
            resultMsg("spockLizard");
            playerScore();
        } else {
            resultMsg("spockScissors");
            computerScore();
        } 
        break;
    }
}

/*
* Takes outcome from runGame and displays 
* the correct results message for that round
*/

function resultMsg (resultType) {
    switch (resultType){
        case "draw":
            document.getElementById("result-para").innerText = "Its a draw - go again!";
            document.getElementById("result-para").style.borderColor = "#6FA8DC";
            break; 

        case "rockPaper":
            document.getElementById("result-para").innerText = "Paper covers rock - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "rockSpock":
            document.getElementById("result-para").innerText = "Spock vaporizes rock - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "rockLizard":
            document.getElementById("result-para").innerText = "Rock crushes lizard - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "rockScissors":
            document.getElementById("result-para").innerText = "Rock crushes scissors - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;

        case "paperRock":
            document.getElementById("result-para").innerText = "Paper covers rock - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "paperScissors":
            document.getElementById("result-para").innerText = "Scissors cut paper - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "paperLizard":
            document.getElementById("result-para").innerText = "Lizard eats paper - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "paperSpock":
            document.getElementById("result-para").innerText = "Paper disproves spock - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;

        case "scissorsRock":
            document.getElementById("result-para").innerText = "Rock crushes scissors - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "scissorsPaper":
            document.getElementById("result-para").innerText = "Scissors cut paper - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "scissorsLizard":
            document.getElementById("result-para").innerText = "Scissors decapitates lizard - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "scissorsSpock":
            document.getElementById("result-para").innerText = "Spock smashes scissors - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;

        case "lizardRock":
            document.getElementById("result-para").innerText = "Rock crushes lizard - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "lizardPaper":
            document.getElementById("result-para").innerText = "Lizard eats paper - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "lizardScissors":
            document.getElementById("result-para").innerText = "Scissors decapitates lizard - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "lizardSpock":
            document.getElementById("result-para").innerText = "Lizard poisons spock - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;

        case "spockRock":
            document.getElementById("result-para").innerText = "Spock vaporizes rock - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "spockPaper":
            document.getElementById("result-para").innerText = "Paper disproves spock - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "spockScissors":
            document.getElementById("result-para").innerText = "Spock smashes scissors - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "spockLizard":
            document.getElementById("result-para").innerText = "Lizard poisons spock - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
    }
}


/* 
* Checks if either score is at 10 and declares a winner
* If score hasn't reached 10, updates score counter
*/

function playerScore() {
    let pScore = document.getElementById("pScore").innerText;

    if (pScore <=9) {
        document.getElementById("pScore").innerText = ++pScore;
    } else {
        document.getElementById("result-para").innerText = "Player wins! Click Reset to play again.";
        document.getElementById("result-para").style.backgroundColor = "green";
        document.getElementById("result-para").style.color = "white";
        document.getElementById("reset").style.display = "";
        document.getElementById("quit").style.display = "none";
        document.getElementById("start").style.display = "none";
        start = 0;
    }
}

function computerScore() {
    let cScore = document.getElementById("cScore").innerText;

    if (cScore <=9) {   
    document.getElementById("cScore").innerText = ++cScore;
    } else {
        document.getElementById("result-para").innerText = "Unlucky! Computer wins! Click Reset to play again.";
        document.getElementById("result-para").style.backgroundColor = "red";
        document.getElementById("result-para").style.color = "white";
        document.getElementById("reset").style.display = "";
        document.getElementById("quit").style.display = "none";
        document.getElementById("start").style.display = "none";
        start = 0;
    }
}
