const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const cpuMove = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[cpuMove];
  return computerChoice;
}
const computerSelection = getComputerChoice();
/* console.log(computerSelection); */

function getplayerSelection() {
  let validatedInput = false;
  while (validatedInput == false) {
    let userChoice = prompt("Choose either Rock, Paper or Scissors");
    userChoice = capFirst(userChoice);
    if (userChoice == null) {
      continue;
    }
    if (choices.includes(userChoice)) {
      validatedInput = true;
      return userChoice;
    }
  }
}
/* console.log(playerSelection); */

//Converting computerSelection and playerSelection to Sentence case
function capFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    const returnString = "It's a Tie";
    return returnString;
  } else if (result == "Player") {
    const returnString = `You Win! ${playerSelection} beats ${computerSelection}`;
    return returnString;
  } else if (result == "Computer") {
    const returnString = `You Lose! ${computerSelection} beats ${playerSelection}`;
    return returnString;
  }
}

/* console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection)); */

function game() {
  let gameScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = getplayerSelection();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      gameScore++;
    }
  }
  /*   console.log(gameScore); */
  if (gameScore < 3) {
    console.log("You Lose");
  } else {
    console.log("You Win");
  }
}

game();
