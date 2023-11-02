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
            if (computerSelection === "paper") {
                return console.log("You Lose. Paper beats Rock.")
            } else if (computerSelection === "scissors") {
                return console.log("You win! Rock beats scissors.")
            } else if (computerSelection === "rock") {
                return console.log("It's a tie! Rocks bump each other!")
            }
        case "paper":
            if (computerSelection === "rock") {
                return console.log("You Win! Paper beats Rock.")
            } else if (computerSelection === "scissors") {
                return console.log("You lose. Scissors beats paper.")
            } else if (computerSelection === "paper") {
                return console.log("It's a tie! Papers just become one and nothing happens!")
            }
        case "scissors":
            if (computerSelection === "rock") {
                return console.log("You lose. Rock beats .")
            } else if (computerSelection === "paper") {
                return console.log("You Win! Scissors beats paper.")
            } else if (computerSelection === "scissors") {
                return console.log("It's a tie! Scissors just jam each other!")
            }
    }
}

playRound(playerSelection , computerSelection)