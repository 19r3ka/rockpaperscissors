let results = [];
let score = { win: 0, tie: 0, loss: 0 };

function randomChoice() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}

function setDom(
  result = "tie",
  myChoice = "❔",
  aiChoice = "❔",
  outcomes = score
) {
  const myHand = document.getElementById("myChoice");
  const aiHand = document.getElementById("aiChoice");
  const handBox = document.getElementById("choices");
  const wins = document.getElementById("wins");
  const ties = document.getElementById("ties");
  const losses = document.getElementById("losses");

  handBox.className = result;
  myHand.innerText = myChoice;
  aiHand.innerText = aiChoice;

  wins.innerText = outcomes.win;
  ties.innerText = outcomes.tie;
  losses.innerText = outcomes.loss;
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

  score[result]++;
  console.log(score);

  // update the history of hands played
  results = [[result, myChoice, aiChoice], ...results];
  // streak = streak + (result === "tie" ? "-" : result[0]);

  setDom(result, choices[myChoice].symbol, choices[aiChoice].symbol, score);
  setTimeout(setDom, 1000);
}

document
  .querySelectorAll("button")
  .forEach((button) => button.addEventListener("click", reactToClick));
