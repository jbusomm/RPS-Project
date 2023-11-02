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

let compScore = 0
let playerScore = 0

function playRound(playerSelection , computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper") {
                compScore++
                return console.log("You Lose. Paper beats Rock.")
            } else if (computerSelection === "scissors") {
                playerScore++
                return console.log("You win! Rock beats scissors.")
            } else if (computerSelection === "rock") {
                return console.log("It's a tie! Rocks bump each other!")
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                playerScore++
                return console.log("You Win! Paper beats Rock.")
            } else if (computerSelection === "scissors") {
                compScore++
                return console.log("You lose. Scissors beats paper.")
            } else if (computerSelection === "paper") {
                return console.log("It's a tie! Papers just become one and nothing happens!")
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                compScore++
                return console.log("You lose. Rock beats .")
            } else if (computerSelection === "paper") {
                playerScore++
                return console.log("You Win! Scissors beats paper.")
            } else if (computerSelection === "scissors") {
                return console.log("It's a tie! Scissors just jam each other!")
            }
            break;
        default:
            alert("That isn't either Rock, Paper or Scissors... Try again.")
    }
}

function game() {
    while (playerScore != 3 || compScore != 3) {
    const computerSelection = getComputerChoice(1 , 3)
    const playerSelection = getPlayerChoice()
    playRound(playerSelection , computerSelection)
    }
    if (playerScore === 3) {
        return alert("Game Over! You win!!!")
    } else if (compScore === 3) {
        return alert("Game Over! You lose...")
    }
}