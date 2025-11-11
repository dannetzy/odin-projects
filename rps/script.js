console.log("Welcome to Rock Paper Scissors!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const choice = Math.floor(Math.random() * 3);

  return choices[choice];
}

function getHumanChoice() {
  const choice = prompt("enter \"rock\", \"paper\", or \"scissor\"").toLowerCase();
  if (!choice) {
    alert("thanks for playing (or not) rock paper scissors!");
    return;
  }
  if (choice === 'rock' || choice === 'paper' || choice === 'scissor') {
    return choice;
  }
  alert("please enter a valid keyword (input blank or cancel to abort the game)");
  getHumanChoice();
}

/* returns true if player A wins
  returns false if player B wins
  returns undefined if tie
  returns 0 if choiceA is undefined (ie. game aborted) */
function playRound(choiceA, choiceB) {
/* old code
  if (a === b) {
    console.log("Tie!");
    return;
  }
  switch (a) {
    case "rock":
      switch (b) {
        case "paper":
          console.log("You lose! Rock gets beaten by paper.")
          computerScore++;
          break;
        case "scissor":
          console.log("You win! Rock beats scissor.");
          humanScore++;
          break;
      }
      break;
    case "paper":
      switch (b) {
        case "rock":
          console.log("You win! Paper beats rock.")
          humanScore++;
          break;
        case "scissor":
          console.log("You lose! Paper gets beaten by scissor.");
          computerScore++;
          break;
      }
      break;
    case "scissor":
      switch (b) {
        case "rock":
          console.log("You lose! Scissor gets beaten by rock.")
          computerScore++;
          break;
        case "paper":
          console.log("You win! Scissor beats paper.");
          humanScore++;
          break;
      }
      break;
  }*/
  if (choiceA === undefined) {
    return 0;
  }
  if (choiceA === choiceB) {
    return;
  }
  switch (choiceA) {
    case "rock":
      switch (choiceB) {
        case "paper":
          return false;
        case "scissor":
          return true;
      }
      break;
    case "paper":
      switch (choiceB) {
        case "rock":
          return true;
        case "scissor":
          return false;
      }
      break;
    case "scissor":
      switch (choiceB) {
        case "rock":
          return false;
        case "paper":
          return true;
      }
  }
}

function playGameHTML(times) {
  const gameResultElement = document.querySelector(".game-result");

  //resets
  computerScore = 0;
  humanScore = 0;
  gameResultElement.innerHTML = '';

  for (let i = 0; i < times; i++) {
    const gameResult = playRound(getHumanChoice(), getComputerChoice());

    if (gameResult === 0) {
      gameResultElement.innerHTML += "<p>Game aborted.</p>";
      continue;
    }
    if (gameResult) {
      gameResultElement.innerHTML += "<p>Human wins!</p>";
      humanScore++;
    } else if (gameResult === false) {
      gameResultElement.innerHTML += "<p>Computer wins!</p>";  
      computerScore++;
    } else {
      gameResultElement.innerHTML += "<p>Tie!</p>";
    }
  }
  gameResultElement.innerHTML += `${humanScore > computerScore ? "Human wins!" : humanScore === computerScore ? "Tie" : "Computer wins!"} Score: ${humanScore}:${computerScore}.`;
}

function playGame(times) {
  //resets
  computerScore = 0;
  humanScore = 0;

  for (let i = 0; i < times; i++) {
    const gameResult = playRound(getHumanChoice(), getComputerChoice());

    console.log(gameResult ? "Human wins!" : gameResult === false ? "Computer wins!" : "Tie!");
    gameResult ? humanScore++ : gameResult === false ? computerScore++ : "tie (this code does nothing)";
  }
  console.log(`${humanScore > computerScore ? "Human wins!" : humanScore === computerScore ? "Tie!" : "Computer wins!"} ${humanScore}:${computerScore}`);
}

document.querySelector(".rps").addEventListener("click", () => {
  const times = Number(document.querySelector(".times").value);
  playGameHTML(times ? times : 5);
});

/*
paper paper     \
rock rock        > Tie!
scissor scissor /

paper scissor: B win
rock paper: B win
scissor rock: B win

scissor paper: A win
paper rock: A win
rock scissor: A win
*/