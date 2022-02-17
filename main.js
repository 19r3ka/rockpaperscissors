let results = [];
let streak = "";

function randomChoice() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}

function setDom(result = "tie", myChoice = "❔", aiChoice = "❔", results) {
  const myHand = document.getElementById("myChoice");
  const aiHand = document.getElementById("aiChoice");
  const handBox = document.getElementById("choices");
  const streakBox = document.getElementById("streak");

  handBox.className = result;
  myHand.innerText = myChoice;
  aiHand.innerText = aiChoice;
  if (!!results) streakBox.innerText = results;
}

function reactToClick(e) {
  const choices = {
    rock: { weakness: "paper", symbol: "✊🏽" },
    paper: { weakness: "scissors", symbol: "✋🏽" },
    scissors: { weakness: "rock", symbol: "✌🏽" },
  };
  const myChoice = e.target.value;
  const aiChoice = randomChoice();
  let result = "tie";

  // handle a tie...
  if (myChoice !== aiChoice) {
    result = aiChoice === choices[myChoice].weakness ? "loss" : "win";
  }

  // update the history of hands played
  results = [[result, myChoice, aiChoice], ...results];
  streak = streak + (result === "tie" ? "-" : result[0]);

  setDom(result, choices[myChoice].symbol, choices[aiChoice].symbol, streak);
  setTimeout(setDom, 1000);
}

document
  .querySelectorAll("button")
  .forEach((button) => button.addEventListener("click", reactToClick));
