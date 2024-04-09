let pScore = 0, // Player score
    cScore = 0, // Computer score
    tScore = 0; // Ties

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
        return "Tie!";
    }
    else if ((formattedString === "Rock" && computerSelection === "Scissors") ||
            (formattedString === "Paper" && computerSelection === "Rock") || 
            (formattedString === "Scissors" && computerSelection === "Paper")) {
                pScore++;
                return "You win! " + formattedString + " beats " + computerSelection + "!";
    }
    else {
        cScore++;
        return "You lose! " + computerSelection + " beats " + formattedString + "!"; 
    }  
}

// Plays a five round game of RPS, keeps score and declares
// winner or loser at the end
function playGame() {

}