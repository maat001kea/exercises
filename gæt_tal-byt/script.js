"use strict";

// Starter spillet ved at nulstille værdier og aktivere knapper
function startGame() {
  min = 0;
  max = 100;
  attempts = 0;
  document.getElementById("tooHigh").disabled = false;
  document.getElementById("tooLow").disabled = false;
  document.getElementById("correct").disabled = false;
  document.getElementById("result").textContent = "";
  makeGuess();
}

// Beregner et nyt gæt ved hjælp af binær søgning
function makeGuess() {
  guess = Math.floor((min + max) / 2);
  document.getElementById("guess").textContent = "Computeren gætter: " + guess;
  attempts++;
  console.log(getElementById);
}
