function computerPlay(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection != computerSelection) {
        if (playerSelection == "rock" && computerSelection == "paper") {
            computerScore++;
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            playerScore++;
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            playerScore++;
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore++;
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerScore++;
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerScore++;
        } 
    } else {
        console.log(`Draw! both: ${playerSelection} `);
    }
}

function game(e) {
    if (playerScore >= 5 || computerScore >= 5) {
        console.log((playerScore>computerScore)? "You Win" : "You Lose");
    } else {
        const playerChoice = e.target.textContent.toLowerCase();
        const computerChoice = computerPlay(choices);
        playRound(playerChoice, computerChoice);
        
        para.textContent = `You: ${playerChoice} Computer: ${computerChoice}\r\n`;
        para.textContent += `You: ${playerScore} Computer: ${computerScore}`;
        div.appendChild(para);
    }
}

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const div = document.getElementsByTagName('div')[0];
const para = document.createElement('p');

// get buttons and add event listeners
const buttons = document.getElementsByClassName('choices');
Array.from(buttons).forEach(button => button.addEventListener('click', game));