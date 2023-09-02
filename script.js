function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
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

const game = () => {
  let roundsPlayed = 0;
  let playerScore = 0;
  let cpuScore = 0;

  while (roundsPlayed < 5) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt(`Round ${roundsPlayed + 1}! PLAY`).toLowerCase();
    const result = playRound(computerSelection, playerSelection);
    if (result.includes("win")) ++playerScore;
    if (result.includes("lose")) ++cpuScore;
    console.log(result);
    ++roundsPlayed;
  }

  return `Final Score: PLAYER ${playerScore} - ${cpuScore} CPU`;
};

console.log(game());
