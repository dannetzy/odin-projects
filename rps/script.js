const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";

const TIE = 0;
const WIN = 1;
const LOSE = 2;

function getComputerChoice() {
  const option = [ROCK, PAPER, SCISSOR];
  return option[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  return prompt(`Type "${ROCK}", "${PAPER}", or "${SCISSOR}" to play the game.`);
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log(`Tie! ${humanChoice} ties with ${computerChoice}`)
    return TIE;
  }
  switch (humanChoice) {
    case ROCK:
      switch (computerChoice) {
        case PAPER:
          console.log(`You lose! ${humanChoice} gets beaten by ${computerChoice}!`);
          return LOSE;
        case SCISSOR:
          console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
          return WIN;
      }
      break;
    case PAPER:
      switch (computerChoice) {
        case ROCK:
          console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
          return WIN;
        case SCISSOR:
          console.log(`You lose! ${humanChoice} gets beaten by ${computerChoice}!`);
          return LOSE;
      }
    case SCISSOR:
      switch (computerChoice) {
        case ROCK:
          console.log(`You lose! ${humanChoice} gets beaten by ${computerChoice}!`);
          return LOSE;
        case PAPER:
          console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
          return WIN;
      }
  }
}

const btnDiv = document.querySelector(".buttons")

btnDiv.addEventListener("click", (ev) => {
  switch (ev.target.className) {
    case "rock":
      playRound(ROCK, getComputerChoice());
      break;
    case "paper":
      playRound(PAPER, getComputerChoice());
      break;
    case "scissor":
      playRound(SCISSOR, getComputerChoice());
      break;
  }
})