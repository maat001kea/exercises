"use strict";

document.addEventListener("mousemove", function (event) {
  // Henter musens position
  const xPos = event.clientX;
  const yPos = event.clientY;

  // Får vinduets bredde og højde
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Beregner procentværdier for lightness og saturation
  const lightness = (xPos / width) * 100; // X-styrer lysstyrken (0-100%)
  const saturation = (yPos / height) * 100; // Y-styrer mætning (0-100%)

  // Opdaterer CSS variablerne
  document.documentElement.style.setProperty("--lightness", `${lightness}%`);
  document.documentElement.style.setProperty("--saturation", `${saturation}%`);
});
