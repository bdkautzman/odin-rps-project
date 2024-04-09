
// Randomly returns either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
    let num = Math.floor((Math.random()*3));

    switch(num) {
        case 0:
            return "rock";
        
        case 1:
            return "paper";

        case 2:
            return "scissors";
    }
}

// Plays a single round of RPS, declares winner or tie
function playRPS(playerSelection, computerSelection) {

}

// Plays a five round game of RPS, keeps score and declares
// winner or loser at the end
function playGame() {

}