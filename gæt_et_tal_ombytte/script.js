"use strict"; // Sikrer streng tilstand for at forhindre utilsigtede fejl

let min, max, guess, attempts;

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
}

// Opdaterer 'max' hvis gættet er for højt
function tooHigh() {
  max = guess - 1;
  makeGuess();
}

// Opdaterer 'min' hvis gættet er for lavt
function tooLow() {
  min = guess + 1;
  makeGuess();
}

// Afslutter spillet og viser antal forsøg
function correctGuess() {
  document.getElementById("result").textContent =
    "Computeren gættede rigtigt på " + attempts + " forsøg!";
  document.getElementById("tooHigh").disabled = true;
  document.getElementById("tooLow").disabled = true;
  document.getElementById("correct").disabled = true;
}

// Tilføjer event listeners til knapperne
document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("tooHigh").addEventListener("click", tooHigh);
document.getElementById("tooLow").addEventListener("click", tooLow);
document.getElementById("correct").addEventListener("click", correctGuess);
