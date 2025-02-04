// const list = document.querySelector("ul");

// const li = document.createElement("li");
// li.style.setProperty("--height", "30");
// list.appendChild(li);

"use strict";

const liste = document.querySelector("ul");
const data = Array(20).fill(0); // Initialiserer en liste med 20 værdier

// Funktion til at generere et tilfældigt tal mellem 0 og 100
function genererTilfældigVærdi() {
  return Math.floor(Math.random() * 101);
}

/**
 * Funktion til at opdatere diagrammet:
 * 1. Tilføjer en ny tilfældig værdi til arrayet.
 * 2. Fjerner den ældste værdi, hvis der er mere end 20 elementer.
 * 3. Rydder det eksisterende diagram.
 * 4. Opretter og indsætter nye søjler baseret på data-arrayet.
 */
function opdaterDiagram() {
  // Generer en ny tilfældig værdi
  const nyVærdi = genererTilfældigVærdi();

  // Tilføj ny værdi og fjern den ældste, hvis der er mere end 20 værdier
  data.push(nyVærdi);
  if (data.length > 20) {
    data.shift(); // Fjerner den ældste værdi
  }

  // Ryd eksisterende søjler
  liste.innerHTML = "";

  // Opret nye søjler baseret på data-arrayet
  data.forEach((værdi) => {
    const søjle = document.createElement("li");
    søjle.style.setProperty("--height", værdi);
    liste.appendChild(søjle);
  });
}

// Starter opdatering hvert sekund
setInterval(opdaterDiagram, 1000);

// Initialiser diagrammet
opdaterDiagram();
