"use strict";
let secretNumber = Math.floor(Math.random() * 20) + 1;
let highscore = 0;
// initial score given to each player as an initial player
let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // no input given by user
  if (!guess) {
    document.querySelector(".message").textContent = " No number";
  }
  // if the guess is correct
  else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = " 🥳Correct Number!";
    document.querySelector("body").style.backgroundColor = "# 60b347";
    document.querySelector(".number").style.width = "30rem";
    // updating highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // when guess is wrong
  // when guess is too high
  else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? " Too high📈 !" : "too low📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " you lost the game !";
      document.querySelector(".score").textContent = "0";
    }
  }
});
// if users click again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});
