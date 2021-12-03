function computerPlay(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection != computerSelection) {
        if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
            computerScore++;
        } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
            playerScore++;
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
            playerScore++;
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
            computerScore++;
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
            computerScore++;
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
            playerScore++;
        } 
    } else {
        console.log(`Draw! both: ${playerSelection} `);
    }
}

function game() {
    for (let i=0; i<5;i++) {
        const computerChoice = computerPlay(choices);
        let playerChoice = prompt("What do you choose? Rock, Paper or Scissors.");
        while (playerChoice.toLowerCase() != "rock" && playerChoice.toLowerCase() != "paper" && playerChoice.toLowerCase() != "scissors") {
            playerChoice = prompt("Please choose between Rock, Paper or Scissors!");
        }
        playRound(playerChoice, computerChoice);
    }
    console.log((playerScore>computerScore)? "You Win" : "You Lose");
    console.log(`You: ${playerScore} Computer: ${computerScore}`);
}

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
game();