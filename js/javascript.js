playGame();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  let round = 1;
  while (round <= 5) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);

    if (result === "computer") computerScore++;
    if (result === "human") humanScore++;

    displayScore(humanScore, computerScore);
    round++;
  }

  if (humanScore === computerScore) {
    console.log("Nobody wins! It's a draw!");
  } else if (humanScore > computerScore) {
    console.log("Congrats! You are the winner.");
  } else{
    console.log("Better luck next time, you lost.")
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("A draw!");
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(`The computer won! ${computerChoice} beats ${humanChoice}`);
    return "computer";
  } else {
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    return "human";
  }
}

function displayScore(score1, score2) {
  console.log(`The current score is player: ${score1}, computer: ${score2}`);
}

function getHumanChoice() {
  let choice = prompt("Choose rock, paper or scissors!");
  choice = choice.toLowerCase();

  return choice;
}

function getComputerChoice() {
  let choice = "";
  let randomNum = getRandomInt(0, 3);

  if (randomNum === 0) {
    choice = "rock";
  } else if (randomNum === 1) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  return choice;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
