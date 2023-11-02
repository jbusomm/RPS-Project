function getComputerChoice(min , max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function getPlayerChoice() {
    let playerPrompt = prompt("Rock, Paper or Scissors?")
    let playerLowerCase = playerPrompt.toLowerCase()
    return playerLowerCase
}

const computerSelection = getComputerChoice(1 , 3)
const playerSelection = getPlayerChoice()
console.log(playerSelection)
function playRound(playerSelection , computerSelection) {
    switch (playerSelection) {
        case "rock":
            return console.log("checkers")
    }
}

playRound(playerSelection , computerSelection)