function evaluateRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase()) {
    case "paper": {
      if (computerSelection == "rock") return "You win! Paper beats Rock";
      if (computerSelection == "scissors") return "You lose! Scissors beats Paper";
      return "It's a tie!";
    }
    case "rock": {
      if (computerSelection == "scissors") return "You win! Rock beats Scissors";
      if (computerSelection == "paper") return "You lose! Paper beats Rock";
      return "It's a tie!";
    }
    case "scissors": {
      if (computerSelection == "paper") return "You win! Scissors beats Paper";
      if (computerSelection == "rock") return "You lose! Rock beats Scissors";
      return "It's a tie!";
    }

    default:
      return "Invalid choice! You can only play Rock, Paper or Scissors";
  }
}
const getComputerChoice = () => {
  const randomN = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];
  return choices[randomN];
};

// console.log(game());
let roundsPlayed = 0;
let playerScore = 0;
let cpuScore = 0;

const handleSelection = (e) => {
  buttons.forEach((el) => el.classList.remove("selected"));
  e.target.classList.toggle("selected");
  playRound(e);
};

const playRound = (e) => {
  let playerSelection = document.querySelector("span.selected");
  if (!playerSelection) return (document.querySelector(".result h1").textContent = "You need to select something");
  playerSelection = playerSelection.getAttribute("data-item");
  const computerSelection = getComputerChoice();
  const result = evaluateRound(playerSelection, computerSelection);

  if (result.includes("win")) ++playerScore;
  if (result.includes("lose")) ++cpuScore;

  document.querySelector(".playerScore").textContent = playerScore;
  document.querySelector(".cpuScore").textContent = cpuScore;

  if (playerScore > 4 || cpuScore > 4) {
    document.querySelector(".result h1").textContent = `Final Score ${playerScore - cpuScore > 0 ? "PLAYER WINS" : "CPU WINS"}`;
    playerScore = 0;
    cpuScore = 0;
  } else {
    document.querySelector(".result h1").textContent = result;
  }
};

const buttons = document.querySelectorAll("span.option");
buttons.forEach((el) => {
  el.addEventListener("click", handleSelection);
});

const playButton = document.querySelector("button.play").addEventListener("click", playRound);
