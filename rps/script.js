const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";

const TIE = 0;
const WIN = 1;
const LOSE = 2;

const btnDiv = document.querySelector(".buttons");
const resultDiv = document.querySelector(".results");

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
    appendResult(resultDiv, `Tie! ${humanChoice} ties with ${computerChoice}!`, TIE);
    return TIE;
  }
  switch (humanChoice) {
    case ROCK:
      switch (computerChoice) {
        case PAPER:
          appendResult(resultDiv, `You lose! ${humanChoice} gets beaten by ${computerChoice}!`, LOSE);
          return LOSE;
        case SCISSOR:
          appendResult(resultDiv, `You win! ${humanChoice} beats ${computerChoice}!`, WIN);
          return WIN;
      }
      break;
    case PAPER:
      switch (computerChoice) {
        case ROCK:
          appendResult(resultDiv, `You win! ${humanChoice} beats ${computerChoice}!`, WIN);
          return WIN;
        case SCISSOR:
          appendResult(resultDiv, `You lose! ${humanChoice} gets beaten by ${computerChoice}!`, LOSE);
          return LOSE;
      }
      break;
    case SCISSOR:
      switch (computerChoice) {
        case ROCK:
          appendResult(resultDiv, `You lose! ${humanChoice} gets beaten by ${computerChoice}!`, LOSE);
          return LOSE;
        case PAPER:
          appendResult(resultDiv, `You win! ${humanChoice} beats ${computerChoice}!`, WIN);
          return WIN;
      }
      break;
  }
}
function appendResult(element, message, result) {
  const msgText = document.createElement("p");
  switch (result) {
    case TIE:
      msgText.style.backgroundColor = "lightgrey";
      break;
    case WIN:
      msgText.style.backgroundColor = "limegreen";
      break;
    case LOSE:
      msgText.style.backgroundColor = "red";
      break;
  }
  msgText.textContent = message;

  element.append(msgText);
}

btnDiv.addEventListener("click", (event) => {
  switch (event.target.className) {
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
});