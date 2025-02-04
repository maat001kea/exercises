"use strict"; // Sikrer streng tilstand for at forhindre utilsigtede fejl

let min, max, guess, attempts;

// Starter spillet ved at nulstille værdier og aktivere knapper
function startGame() {
  min = 0;
  max = 100;
  attempts = 0;
  document.getElementById("forHoej").disabled = false;
  document.getElementById("forLav").disabled = false;
  document.getElementById("korrekt").disabled = false;
  document.getElementById("result").textContent = "";
  laveEtGaet();
}

// Beregner et nyt gæt ved hjælp af binær søgning
function laveEtGaet() {
  guess = Math.floor((min + max) / 2);
  document.getElementById("guess").textContent = "Computeren gætter: " + guess;
  attempts++;
}

// Opdaterer 'max' hvis gættet er for højt
function forHoej() {
  max = guess - 1;
  laveEtGaet();
}

// Opdaterer 'min' hvis gættet er for lavt
function forLav() {
  min = guess + 1;
  laveEtGaet();
}

// Afslutter spillet og viser antal forsøg
function korrektGaet() {
  document.getElementById("result").textContent =
    "Computeren gættede rigtigt på " + attempts + " forsøg!";
  document.getElementById("forHoej").disabled = true;
  document.getElementById("forLav").disabled = true;
  document.getElementById("korrekt").disabled = true;
}

// Tilføjer event listeners til knapperne
document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("forHoej").addEventListener("click", forHoej);
document.getElementById("forLav").addEventListener("click", forLav);
document.getElementById("korrekt").addEventListener("click", korrektGaet);
