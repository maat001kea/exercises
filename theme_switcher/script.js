"use strict"; // hjælper med at undgå fejl og forbedrer sikkerheden

// Når hele dokumentet er indlæst, køres denne funktion
document.addEventListener("DOMContentLoaded", function () {
  // Finder <select>-elementet med id "temaVælger"
  const temaVælger = document.getElementById("temaVælger");

  // Lytter efter ændringer i dropdown-menuen
  temaVælger.addEventListener("change", function () {
    // Sætter værdien af "data-tema" attributten på <body>, så temaet ændres dynamisk
    document.body.setAttribute("data-tema", this.value);
  });
});
