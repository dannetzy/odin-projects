const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";

const TIE = 0;
const WIN = 1;
const LOSE = 2;

const btnDiv = document.querySelector(".buttons");
const resultDiv = document.querySelector(".results");

let humanScore = 0;
let computerScore = 0;

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

  msgText.textContent = message;
  switch (result) {
    case TIE:
      msgText.classList.add("tie")
      msgText.textContent += ` Current score: ${humanScore}:${computerScore}.`
      break;
    case WIN:
      msgText.classList.add("win")
      humanScore += 1;
      msgText.textContent += ` Current score: ${humanScore}:${computerScore}.`
      break;
    case LOSE:
      msgText.classList.add("lose")
      computerScore += 1;
      msgText.textContent += ` Current score: ${humanScore}:${computerScore}.`
      break;
  }
  element.append(msgText);

  if (humanScore >= 5 || computerScore >= 5) {
    const winnerText = document.createElement("p");
    winnerText.style.fontWeight = "bold"

    if (humanScore >= 5) {
      winnerText.classList.add("win");
      winnerText.textContent = "Congratulations, you win! The scores will be reset.";
    } 
    if (computerScore >= 5) {
      winnerText.classList.add("lose");
      winnerText.textContent = "You lost! The scores will be reset.";
    }
    humanScore = 0;
    computerScore = 0;
    element.append(winnerText);
  }
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