const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";

function getComputerChoice() {
  const option = [ROCK, PAPER, SCISSOR];
  return option[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  return prompt(`Type "${ROCK}", "${PAPER}", or "${SCISSOR}" to play the game.`);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  switch (humanChoice) {
    case ROCK:
      switch (computerChoice) {
        case PAPER:
          computerScore += 1;
          console.log(`You lose! ${ROCK} gets beaten by ${PAPER}!`);
          break;
        case SCISSOR:
          humanScore += 1;
          console.log(`You win! ${ROCK} beats ${SCISSOR}!`);
          break;
      }
      break;
    case PAPER:
      switch (computerChoice) {
        case ROCK:
          humanScore += 1;
          console.log(`You win! ${PAPER} beats ${ROCK}!`);
          break;
        case SCISSOR:
          computerScore += 1;
          console.log(`You lose! ${PAPER} gets beaten by ${SCISSOR}!`);
          break;
      }
    case SCISSOR:
      switch (computerChoice) {
        case ROCK:
          computerScore += 1;
          console.log(`You lose! ${SCISSOR} gets beaten by ${ROCK}!`);
          break;
        case PAPER:
          humanScore += 1;
          console.log(`You win! ${SCISSOR} beats ${PAPER}!`);
          break;
      }
  }
}

function win() {

}

function lose() {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);