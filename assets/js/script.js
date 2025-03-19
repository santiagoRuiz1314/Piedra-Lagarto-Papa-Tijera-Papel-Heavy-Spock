// Global variables 
var computerPlay;
var start = 0;
var gameMode = "computer"; // Default mode: vs computer
var currentPlayer = 1; // Track current player in 2-player mode
var player1Choice = ""; // Store player 1's choice in 2-player mode
var player2Choice = ""; // Store player 2's choice in 2-player mode

// Wait for the DOM to fully load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");

    // Hides quit button and reset button
    document.getElementById("quit").style.display = "none";
    document.getElementById("reset").style.display = "none";
    
    // Game mode selector event listeners
    let vsComputerBtn = document.getElementById("vs-computer");
    let vsPlayerBtn = document.getElementById("vs-player");
    
    vsComputerBtn.addEventListener("click", function() {
        gameMode = "computer";
        vsComputerBtn.classList.add("active");
        vsPlayerBtn.classList.remove("active");
        document.getElementById("player1-name").textContent = "Player";
        document.getElementById("player2-name").textContent = "Computer";
        document.getElementById("player-labels").classList.add("hidden");
        document.getElementById("turn-indicator").classList.add("hidden");
        document.querySelector(".score:nth-of-type(1)").textContent = "Player score:";
        document.querySelector(".score:nth-of-type(3)").textContent = "Computer score:";
        resetGame();
    });
    
    vsPlayerBtn.addEventListener("click", function() {
        gameMode = "player";
        vsPlayerBtn.classList.add("active");
        vsComputerBtn.classList.remove("active");
        document.getElementById("player1-name").textContent = "Player 1";
        document.getElementById("player2-name").textContent = "Player 2";
        document.querySelector(".score:nth-of-type(1)").textContent = "Player 1 score:";
        document.querySelector(".score:nth-of-type(3)").textContent = "Player 2 score:";
        resetGame();
    });

    // Start button event listener
    let startButton = document.getElementById("start");
    console.log("Start button:", startButton);

    startButton.addEventListener("click", function() {
        console.log("Start button clicked");
        start = 1;
        document.getElementById("player-image").style.background = "";
        document.getElementById("computer-image").style.background = "";
        document.getElementById("quit").style.display = "";
        document.getElementById("start").style.display = "none";
        
        if (gameMode === "computer") {
            document.getElementById("result-para").innerText = "Make your choice using the buttons above and see the result here";
            document.getElementById("turn-indicator").classList.add("hidden");
            document.getElementById("player-labels").classList.add("hidden");
            
            // setTimeOut function taken from W3Schools
            setTimeout(()=> {
                document.getElementById('computer-image').innerText = "Waiting for player";
            }, 500);
        } else {
            // Two-player mode setup
            document.getElementById("result-para").innerText = "Players take turns to make your choices";
            document.getElementById("turn-indicator").classList.remove("hidden");
            document.getElementById("player-labels").classList.remove("hidden");
            document.getElementById("turn-text").innerText = "Player 1's turn to choose";
            currentPlayer = 1;
            player1Choice = "";
            player2Choice = "";
            document.getElementById('computer-image').innerText = "Player 2 will choose";
        }
    });

    // Quit button event listener
    let quitButton = document.getElementById("quit");

    quitButton.addEventListener("click", function() {
        console.log("Quit button clicked");
        resetGame();
    });

    // Reset button event listener
    let resetButton = document.getElementById("reset");

    resetButton.addEventListener("click", function() {
        console.log("Reset button clicked");
        resetGame();
    });

    /* Set-up event listeners for the 7 player choice options
    * and run functions when clicked
    */
    let rockButton = document.getElementById("rock");
    let paperButton = document.getElementById("paper");
    let scissorsButton = document.getElementById("scissors");
    let lizardButton = document.getElementById("lizard");
    let spockButton = document.getElementById("spock");
    let papaButton = document.getElementById("papa");
    let heavyButton = document.getElementById("heavy");

    rockButton.addEventListener("click", function() {
        handleChoice("rock");
    });

    paperButton.addEventListener("click", function() {
        handleChoice("paper");
    });

    scissorsButton.addEventListener("click", function() {
        handleChoice("scissors");
    });

    lizardButton.addEventListener("click", function() {
        handleChoice("lizard");
    });

    spockButton.addEventListener("click", function() {
        handleChoice("spock");
    });

    papaButton.addEventListener("click", function() {
        handleChoice("papa");
    });

    heavyButton.addEventListener("click", function() {
        handleChoice("heavy");
    });
});

// Function to handle player choices based on game mode
function handleChoice(choice) {
    console.log(`${choice} button clicked, start = ${start}, gameMode = ${gameMode}, currentPlayer = ${currentPlayer}`);
    
    if (start !== 1) return;
    
    if (gameMode === "computer") {
        // Original vs computer mode
        playerChoice(choice);
        computerChoice();
        runGame(choice);
    } else {
        // Two-player mode
        if (currentPlayer === 1) {
            // Player 1's turn
            player1Choice = choice;
            playerChoice(choice);
            document.getElementById("turn-text").innerText = "Player 2's turn to choose";
            currentPlayer = 2;
        } else {
            // Player 2's turn
            player2Choice = choice;
            document.getElementById('computer-image').innerText = "";
            document.getElementById('computer-image').style.background = `url(assets/images/${capitalizeFirstLetter(choice)}.png)`;
            document.getElementById('computer-image').style.backgroundSize = "contain";
            document.getElementById('computer-image').style.backgroundRepeat = "no-repeat";
            document.getElementById('computer-image').style.backgroundPosition = "center";
            
            // Compare choices and determine winner
            runTwoPlayerGame(player1Choice, player2Choice);
            
            // Reset for next round
            document.getElementById("turn-text").innerText = "Player 1's turn to choose";
            currentPlayer = 1;
        }
    }
}

// Function to reset the game
function resetGame() {
    start = 0;
    currentPlayer = 1;
    player1Choice = "";
    player2Choice = "";
    document.getElementById("player-image").style.background = "";
    document.getElementById("computer-image").style.background = "";
    document.getElementById("player-image").innerText = "";
    document.getElementById("computer-image").innerText = "";
    document.getElementById("pScore").innerText = " 0 ";
    document.getElementById("cScore").innerText = " 0 ";
    document.getElementById("quit").style.display = "none";
    document.getElementById("reset").style.display = "none";
    document.getElementById("start").style.display = "";
    document.getElementById("result-para").innerText = "Click the Start button to begin!";
    document.getElementById("result-para").style.backgroundColor = "";
    document.getElementById("result-para").style.color = "";
    document.getElementById("result-para").style.borderColor = "black";
    
    if (gameMode === "player") {
        document.getElementById("turn-indicator").classList.add("hidden");
    }
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/*
* Feeds correct image into player selection area based 
* on what is clicked
*/
function playerChoice(playType) {
    console.log("Player chose:", playType);
    
    // Clear previous content
    document.getElementById('player-image').innerText = "";
    
    switch (playType) {
        case "rock":
            document.getElementById('player-image').style.background="url(assets/images/Rock.png)";
            document.getElementById('player-image').style.backgroundSize="contain";
            document.getElementById('player-image').style.backgroundRepeat="no-repeat";
            document.getElementById('player-image').style.backgroundPosition="center";
            break;
        case "paper":
            document.getElementById('player-image').style.background="url(assets/images/Paper.png)";
            document.getElementById('player-image').style.backgroundSize="contain";
            document.getElementById('player-image').style.backgroundRepeat="no-repeat";
            document.getElementById('player-image').style.backgroundPosition="center";
            break;
        case "scissors":
            document.getElementById('player-image').style.background="url(assets/images/Scissors.png)";
            document.getElementById('player-image').style.backgroundSize="contain";
            document.getElementById('player-image').style.backgroundRepeat="no-repeat";
            document.getElementById('player-image').style.backgroundPosition="center";
            break; 
        case "lizard":
            document.getElementById('player-image').style.background="url(assets/images/Lizard.png)";
            document.getElementById('player-image').style.backgroundSize="contain";
            document.getElementById('player-image').style.backgroundRepeat="no-repeat";
            document.getElementById('player-image').style.backgroundPosition="center";
            break;
        case "spock":
            document.getElementById('player-image').style.background="url(assets/images/Spock.png)";
            document.getElementById('player-image').style.backgroundSize="contain";
            document.getElementById('player-image').style.backgroundRepeat="no-repeat";
            document.getElementById('player-image').style.backgroundPosition="center";
            break;
        case "papa":
            document.getElementById('player-image').style.background="url(assets/images/Papa.png)";
            document.getElementById('player-image').style.backgroundSize="contain";
            document.getElementById('player-image').style.backgroundRepeat="no-repeat";
            document.getElementById('player-image').style.backgroundPosition="center";
            break;
        case "heavy":
            document.getElementById('player-image').style.background="url(assets/images/Heavy.png)";
            document.getElementById('player-image').style.backgroundSize="contain";
            document.getElementById('player-image').style.backgroundRepeat="no-repeat";
            document.getElementById('player-image').style.backgroundPosition="center";
            break;
        default:
            console.log("Unknown player choice:", playType);
            document.getElementById('player-image').innerText = playType;
            break;
    }
}

/* 
* Random number generator makes computer choice and 
* function feeds the correct image into the computer 
* selection area of the game
*/
function computerChoice() {
    computerPlay = Math.floor(Math.random() * 7); // Changed to 7 options
    console.log("Computer chose:", computerPlay);
    
    // Clear previous content
    document.getElementById('computer-image').innerText = "";
    
    let choiceNames = ["rock", "paper", "scissors", "lizard", "spock", "papa", "heavy"];
    console.log("Computer chose:", choiceNames[computerPlay]);
   
    switch (computerPlay) {
        case 0:
            document.getElementById('computer-image').innerText = "";
            document.getElementById('computer-image').style.background="url(assets/images/Rock.png)";
            document.getElementById('computer-image').style.backgroundSize="contain";
            document.getElementById('computer-image').style.backgroundRepeat="no-repeat";
            document.getElementById('computer-image').style.backgroundPosition="center";
            break;
        case 1:
            document.getElementById('computer-image').innerText = "";
            document.getElementById('computer-image').style.background="url(assets/images/Paper.png)";
            document.getElementById('computer-image').style.backgroundSize="contain";
            document.getElementById('computer-image').style.backgroundRepeat="no-repeat";
            document.getElementById('computer-image').style.backgroundPosition="center";
            break;
        case 2:
            document.getElementById('computer-image').innerText = "";
            document.getElementById('computer-image').style.background="url(assets/images/Scissors.png)";
            document.getElementById('computer-image').style.backgroundSize="contain";
            document.getElementById('computer-image').style.backgroundRepeat="no-repeat";
            document.getElementById('computer-image').style.backgroundPosition="center";
            break; 
        case 3:
            document.getElementById('computer-image').innerText = "";    
            document.getElementById('computer-image').style.background="url(assets/images/Lizard.png)";
            document.getElementById('computer-image').style.backgroundSize="contain";
            document.getElementById('computer-image').style.backgroundRepeat="no-repeat";
            document.getElementById('computer-image').style.backgroundPosition="center";
            break;
        case 4:
            document.getElementById('computer-image').innerText = "";
            document.getElementById('computer-image').style.background="url(assets/images/Spock.png)";
            document.getElementById('computer-image').style.backgroundSize="contain";
            document.getElementById('computer-image').style.backgroundRepeat="no-repeat";
            document.getElementById('computer-image').style.backgroundPosition="center";
            break;
        case 5:
            document.getElementById('computer-image').innerText = "";
            document.getElementById('computer-image').style.background="url(assets/images/Papa.png)";
            document.getElementById('computer-image').style.backgroundSize="contain";
            document.getElementById('computer-image').style.backgroundRepeat="no-repeat";
            document.getElementById('computer-image').style.backgroundPosition="center";
            break;
        case 6:
            document.getElementById('computer-image').innerText = "";
            document.getElementById('computer-image').style.background="url(assets/images/Heavy.png)";
            document.getElementById('computer-image').style.backgroundSize="contain";
            document.getElementById('computer-image').style.backgroundRepeat="no-repeat";
            document.getElementById('computer-image').style.backgroundPosition="center";
            break;
        default:
            console.log("Error in computer choice:", computerPlay);
            document.getElementById('computer-image').innerText = "Error!";
            break;
    }
}

// Function to handle two player game logic
function runTwoPlayerGame(player1, player2) {
    console.log(`Player 1 chose: ${player1}, Player 2 chose: ${player2}`);
    
    if (player1 === player2) {
        // Draw
        resultMsg("draw");
        return;
    }
    
    // Create a map of what each option beats
    const winConditions = {
        "rock": ["scissors", "lizard"],
        "paper": ["rock", "heavy"],
        "scissors": ["paper", "lizard", "heavy"],
        "lizard": ["paper", "spock"],
        "spock": ["rock", "scissors"],
        "papa": ["rock", "paper", "scissors"],
        "heavy": ["rock", "lizard", "spock"]
    };
    
    const player1Wins = winConditions[player1].includes(player2);
    
    if (player1Wins) {
        resultMsg(`${player1}${capitalizeFirstLetter(player2)}`);
        playerScore();
    } else {
        resultMsg(`${player2}${capitalizeFirstLetter(player1)}`);
        computerScore(); // In 2-player mode, this updates player 2's score
    }
}

// Main game function loop for computer mode
function runGame(playType) {
    switch (computerPlay){
    // ROCK (0)
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
        } else if (playType == "scissors") {
            resultMsg("rockScissors");
            computerScore();
        } else if (playType == "papa") {
            resultMsg("rockPapa");
            computerScore();
        } else if (playType == "heavy") {
            resultMsg("rockHeavy");
            playerScore();
        }
        break;
        
    // PAPER (1)
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
        } else if (playType == "scissors") {
            resultMsg("paperScissors");
            playerScore();
        } else if (playType == "papa") {
            resultMsg("paperPapa");
            computerScore();
        } else if (playType == "heavy") {
            resultMsg("paperHeavy");
            playerScore();
        }
        break;

    // SCISSORS (2)
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
        } else if (playType == "scissors") {
            resultMsg("draw");
        } else if (playType == "papa") {
            resultMsg("scissorsPapa");
            computerScore();
        } else if (playType == "heavy") {
            resultMsg("scissorsHeavy");
            playerScore();
        }
        break;

    // LIZARD (3)
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
        } else if (playType == "scissors") {
            resultMsg("lizardScissors");
            playerScore();
        } else if (playType == "papa") {
            resultMsg("lizardPapa");
            playerScore();
        } else if (playType == "heavy") {
            resultMsg("lizardHeavy");
            computerScore();
        }
        break;

    // SPOCK (4)
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
        } else if (playType == "scissors") {
            resultMsg("spockScissors");
            computerScore();
        } else if (playType == "papa") {
            resultMsg("spockPapa");
            playerScore();
        } else if (playType == "heavy") {
            resultMsg("spockHeavy");
            computerScore();
        }
        break;

    // PAPA (5)
    case 5:
        if (playType == "paper") {
            resultMsg("papaPaper");
            playerScore();
        } else if (playType == "spock") {
            resultMsg("papaSpock");
            computerScore();
        } else if (playType == "rock") {
            resultMsg("papaRock");
            playerScore();
        } else if (playType == "lizard") {
            resultMsg("papaLizard");
            computerScore();
        } else if (playType == "scissors") {
            resultMsg("papaScissors");
            playerScore();
        } else if (playType == "papa") {
            resultMsg("draw");
        } else if (playType == "heavy") {
            resultMsg("papaHeavy");
            computerScore();
        }
        break;

    // HEAVY (6)
    case 6:
        if (playType == "paper") {
            resultMsg("heavyPaper");
            computerScore();
        } else if (playType == "spock") {
            resultMsg("heavySpock");
            playerScore();
        } else if (playType == "rock") {
            resultMsg("heavyRock");
            computerScore();
        } else if (playType == "lizard") {
            resultMsg("heavyLizard");
            playerScore();
        } else if (playType == "scissors") {
            resultMsg("heavyScissors");
            computerScore();
        } else if (playType == "papa") {
            resultMsg("heavyPapa");
            playerScore();
        } else if (playType == "heavy") {
            resultMsg("draw");
        }
        break;
    }
}

/*
* Takes outcome from runGame and displays 
* the correct results message for that round
*/

function resultMsg(resultType) {
    // For 2-player mode, adjust the message
    let player1Term = gameMode === "computer" ? "player" : "Player 1";
    let player2Term = gameMode === "computer" ? "computer" : "Player 2";
    
    switch (resultType){
        case "draw":
            document.getElementById("result-para").innerText = "Its a draw - go again!";
            document.getElementById("result-para").style.borderColor = "#6FA8DC";
            break; 

        // Rock outcomes
        case "rockPaper":
            document.getElementById("result-para").innerText = `Paper covers rock - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "rockSpock":
            document.getElementById("result-para").innerText = `Spock vaporizes rock - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "rockLizard":
            document.getElementById("result-para").innerText = `Rock crushes lizard - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "rockScissors":
            document.getElementById("result-para").innerText = `Rock crushes scissors - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "rockPapa":
            document.getElementById("result-para").innerText = `Papa beats rock - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "rockHeavy":
            document.getElementById("result-para").innerText = `Heavy beats rock - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;

        // Paper outcomes
        case "paperRock":
            document.getElementById("result-para").innerText = `Paper covers rock - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "paperScissors":
            document.getElementById("result-para").innerText = `Scissors cut paper - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "paperLizard":
            document.getElementById("result-para").innerText = `Lizard eats paper - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "paperSpock":
            document.getElementById("result-para").innerText = `Paper disproves spock - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "paperPapa":
            document.getElementById("result-para").innerText = `Papa beats paper - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "paperHeavy":
            document.getElementById("result-para").innerText = `Paper beats heavy - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;

        // Scissors outcomes
        case "scissorsRock":
            document.getElementById("result-para").innerText = `Rock crushes scissors - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "scissorsPaper":
            document.getElementById("result-para").innerText = `Scissors cut paper - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "scissorsLizard":
            document.getElementById("result-para").innerText = `Scissors decapitates lizard - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "scissorsSpock":
            document.getElementById("result-para").innerText = `Spock smashes scissors - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "scissorsPapa":
            document.getElementById("result-para").innerText = `Papa beats scissors - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "scissorsHeavy":
            document.getElementById("result-para").innerText = `Scissors beat heavy - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;

        // Lizard outcomes
        case "lizardRock":
            document.getElementById("result-para").innerText = `Rock crushes lizard - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "lizardPaper":
            document.getElementById("result-para").innerText = `Lizard eats paper - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "lizardScissors":
            document.getElementById("result-para").innerText = `Scissors decapitates lizard - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "lizardSpock":
            document.getElementById("result-para").innerText = `Lizard poisons spock - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "lizardPapa":
            document.getElementById("result-para").innerText = `Lizard beats papa - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "lizardHeavy":
            document.getElementById("result-para").innerText = `Heavy beats lizard - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;

        // Spock outcomes
        case "spockRock":
            document.getElementById("result-para").innerText = `Spock vaporizes rock - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "spockPaper":
            document.getElementById("result-para").innerText = `Paper disproves spock - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "spockScissors":
            document.getElementById("result-para").innerText = `Spock smashes scissors - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "spockLizard":
            document.getElementById("result-para").innerText = `Lizard poisons spock - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "spockPapa":
            document.getElementById("result-para").innerText = `Spock beats papa - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "spockHeavy":
            document.getElementById("result-para").innerText = `Heavy beats spock - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;

        // Papa outcomes
        case "papaRock":
            document.getElementById("result-para").innerText = `Papa beats rock - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "papaPaper":
            document.getElementById("result-para").innerText = `Papa beats paper - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "papaScissors":
            document.getElementById("result-para").innerText = `Papa beats scissors - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "papaLizard":
            document.getElementById("result-para").innerText = `Lizard beats papa - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "papaSpock":
            document.getElementById("result-para").innerText = `Spock beats papa - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "papaHeavy":
            document.getElementById("result-para").innerText = `Heavy beats papa - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;

        // Heavy outcomes
        case "heavyRock":
            document.getElementById("result-para").innerText = `Heavy beats rock - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "heavyPaper":
            document.getElementById("result-para").innerText = `Paper beats heavy - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "heavyScissors":
            document.getElementById("result-para").innerText = `Scissors beat heavy - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "heavyLizard":
            document.getElementById("result-para").innerText = `Heavy beats lizard - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "heavySpock":
            document.getElementById("result-para").innerText = `Heavy beats spock - ${player1Term} wins!`;
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "heavyPapa":
            document.getElementById("result-para").innerText = `Papa beats heavy - ${player2Term} wins!`;
            document.getElementById("result-para").style.borderColor = "red";
            break;
    }
}

/* 
* Checks if either score is at 10 and declares a winner
* If score hasn't reached 10, updates score counter
*/

function playerScore() {
    let pScore = document.getElementById("pScore").innerText;
    let winnerText = gameMode === "computer" ? "Player wins!" : "Player 1 wins!";

    if (pScore <= 9) {
        document.getElementById("pScore").innerText = ++pScore;
    } else {
        document.getElementById("result-para").innerText = `${winnerText} Click Reset to play again.`;
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
    let winnerText = gameMode === "computer" ? "Computer wins!" : "Player 2 wins!";

    if (cScore <= 9) {   
        document.getElementById("cScore").innerText = ++cScore;
    } else {
        document.getElementById("result-para").innerText = `${winnerText} Click Reset to play again.`;
        document.getElementById("result-para").style.backgroundColor = "red";
        document.getElementById("result-para").style.color = "white";
        document.getElementById("reset").style.display = "";
        document.getElementById("quit").style.display = "none";
        document.getElementById("start").style.display = "none";
        start = 0;
    }
}