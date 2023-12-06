const chooseRock = document.querySelector(".rockBtn");
const choosePaper = document.querySelector(".paperBtn");
const chooseScissors = document.querySelector(".scissorsBtn");
const playerDisplay = document.querySelector(".playerSpan");
const compDisplay = document.querySelector(".compSpan");
const gameWinner = document.querySelector(".gameWinner");
const currentRound = document.querySelector(".currentRound");

function getComputerChoice(min, max) {
  let compChoice = Math.floor(Math.random() * (max - min + 1) + min);
  if (compChoice === 1) {
    return "rock";
  } else if (compChoice === 2) {
    return "paper";
  } else if (compChoice === 3) {
    return "scissors";
  } else {
    return null;
  }
}
// function getPlayerChoice() {
// let playerPrompt = prompt("Rock, Paper or Scissors?");
//   let playerLowerCase = playerPrompt.toLowerCase();
//   return playerLowerCase;
// }

let compScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        ++compScore;
        currentRound.textContent = "You Lose. Paper beats Rock.";
      } else if (computerSelection === "scissors") {
        ++playerScore;
        currentRound.textContent = "You win! Rock beats scissors.";
      } else if (computerSelection === "rock") {
        currentRound.textContent = "It's a tie! Rocks bump each other!";
      }
      break;
    case "paper":
      if (computerSelection === "rock") {
        ++playerScore;
        currentRound.textContent = "You Win! Paper beats Rock.";
      } else if (computerSelection === "scissors") {
        ++compScore;
        currentRound.textContent = "You lose. Scissors beats paper.";
      } else if (computerSelection === "paper") {
        currentRound.textContent =
          "It's a tie! Papers just become one and nothing happens!";
      }
      break;
    case "scissors":
      if (computerSelection === "rock") {
        ++compScore;
        currentRound.textContent = "You lose. Rock beats scissors.";
      } else if (computerSelection === "paper") {
        ++playerScore;
        currentRound.textContent = "You Win! Scissors beats paper.";
      } else if (computerSelection === "scissors") {
        currentRound.textContent = "It's a tie! Scissors just jam each other!";
      }
      break;
    default:
      alert("That isn't either Rock, Paper or Scissors... Try again.");
  }
}

function game(player, computer) {
  // while (playerScore < 5 && compScore < 5) {
  //   const computerSelection = getComputerChoice(1, 3);
  //   const playerSelection = getPlayerChoice();
  //   console.warn("New round!");
  //   playRound(playerSelection, computerSelection);
  //   console.log("Computer current score: " + compScore);
  //   console.log("Player current score: " + playerScore);
  playerDisplay.textContent = playerScore;
  compDisplay.textContent = compScore;
  if (player === 5) {
    gameWinner.textContent = "Game Over! You win!!!";
  } else if (computer === 5) {
    gameWinner.textContent = "Game Over! You lose.";
  }
}

function restartGame() {
  playerScore = 0;
  compScore = 0;
  gameWinner.textContent = "";
  playerDisplay.textContent = 0;
  compDisplay.textContent = 0;
}

chooseRock.addEventListener("click", () => {
  playerSelection = "rock";
  const computerSelection = getComputerChoice(1, 3);
  playRound(playerSelection, computerSelection);
  game(playerScore, compScore);
});
choosePaper.addEventListener("click", () => {
  playerSelection = "paper";
  const computerSelection = getComputerChoice(1, 3);
  playRound(playerSelection, computerSelection);
  game(playerScore, compScore);
});
chooseScissors.addEventListener("click", () => {
  playerSelection = "scissors";
  const computerSelection = getComputerChoice(1, 3);
  playRound(playerSelection, computerSelection);
  game(playerScore, compScore);
});
