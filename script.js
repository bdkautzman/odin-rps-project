let pScore = 0, // Player score
    cScore = 0, // Computer score
    tScore = 0; // Ties

const rockBtn = document.querySelector("#R");
rockBtn.addEventListener("click", ()=> {
    playGame("Rock");
});

const paperBtn = document.querySelector("#P");
paperBtn.addEventListener("click", ()=> {
    playGame("Paper");
});

const scissorsBtn = document.querySelector("#S");
scissorsBtn.addEventListener("click", ()=> {
    playGame("Scissors");
});

const pDiv = document.querySelector("#pScore");
const cDiv = document.querySelector("#cScore");
const tDiv = document.querySelector("#tScore");

// Randomly returns either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
    // Generate random 0, 1 or 3
    let num = Math.floor((Math.random()*3));

    // Return r, p or s depending on num
    switch(num) {
        case 0:
            return "Rock";
        
        case 1:
            return "Paper";

        case 2:
            return "Scissors";
    }
}

// Plays a single round of RPS, declares winner or tie
function playRPS(playerSelection, computerSelection) {
    // Format string to uniform pattern
    playerSelection = playerSelection.toLowerCase();
    formattedString = playerSelection.charAt(0);
    formattedString = formattedString.toUpperCase();
    formattedString = formattedString + playerSelection.substr(1);

    // Compare choices and return winner
    if (formattedString === computerSelection) {
        tScore++;
        tDiv.textContent = "Tie score: " + tScore;
        return "Tie!";
    }
    else if ((formattedString === "Rock" && computerSelection === "Scissors") ||
            (formattedString === "Paper" && computerSelection === "Rock") || 
            (formattedString === "Scissors" && computerSelection === "Paper")) {
                pScore++;
                pDiv.textContent = "Player score: " + pScore;
                if(pScore >= 5){
                    endGame();
                }
                return "You win! " + formattedString + " beats " + computerSelection + "!";
    }
    else {
        cScore++;
        cDiv.textContent = "Comupter score: " + cScore;
        if(cScore >= 5){
            endGame();
        }
        return "You lose! " + computerSelection + " beats " + formattedString + "!"; 
    }  
}

// Plays a five round game of RPS, keeps score and declares
// winner or loser at the end
function playGame(userChoice) {
    playRPS(userChoice, getComputerChoice());
}

function endGame(){
    if(pScore === 5){
        alert("Player wins! Good game!");
    }else{
        alert("Computer wins! Better luck next time!");
    }
    pScore = 0;
    cScore = 0;
    tScore = 0;
    pDiv.textContent = '';
    cDiv.textContent = '';
    tDiv.textContent = '';
}