function getComputerChoice(min , max) {
    let compChoice = Math.floor(Math.random() * (max - min + 1) + min);
    if (compChoice === 1 ) {
        return "rock"
    } else if (compChoice === 2) {
        return "paper"
    } else if (compChoice === 3) {
        return "scissors"
    } else {
        return null
    }
}

function getPlayerChoice() {
    let playerPrompt = prompt("Rock, Paper or Scissors?")
    let playerLowerCase = playerPrompt.toLowerCase()
    return playerLowerCase
}

const computerSelection = getComputerChoice(1 , 3)
const playerSelection = getPlayerChoice()
function playRound(playerSelection , computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper")
    }
}

playRound(playerSelection , computerSelection)