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
    console.log("Tie!")
    return TIE;
  }
  switch (humanChoice) {
    case ROCK:
      switch (computerChoice) {
        case PAPER:
          console.log(`You lose! ${ROCK} gets beaten by ${PAPER}!`);
          return LOSE;
        case SCISSOR:
          console.log(`You win! ${ROCK} beats ${SCISSOR}!`);
          return WIN;
      }
      break;
    case PAPER:
      switch (computerChoice) {
        case ROCK:
          console.log(`You win! ${PAPER} beats ${ROCK}!`);
          return WIN;
        case SCISSOR:
          console.log(`You lose! ${PAPER} gets beaten by ${SCISSOR}!`);
          return LOSE;
      }
    case SCISSOR:
      switch (computerChoice) {
        case ROCK:
          console.log(`You lose! ${SCISSOR} gets beaten by ${ROCK}!`);
          return LOSE;
        case PAPER:
          console.log(`You win! ${SCISSOR} beats ${PAPER}!`);
          return WIN;
      }
  }
}