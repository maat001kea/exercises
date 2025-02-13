"use strict";

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

// Hent gemt sprog fra localStorage eller brug "da" som standard
let locale = localStorage.getItem("selectedLanguage") || "da";

// Funktion til at opdatere teksten baseret på valgt sprog
function updateText() {
  const translations = texts[locale]?.texts || [];

  translations.forEach(({ text, location }) => {
    const element = document.querySelector(location);
    if (element) {
      element.textContent = text; // Opdater teksten dynamisk
    }
  });

  // Opdater dropdown til at vise det aktuelle sprog
  document.getElementById("languageSelect").value = locale;
}

// Funktion til at ændre sproget dynamisk
function changeLanguage(event) {
  locale = event.target.value; // Hent valgt sprog fra dropdown
  localStorage.setItem("selectedLanguage", locale); // Gem valget
  updateText(); // Opdater teksten på siden
}

// Tilføj dropdown-menu til sprogvalg
document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<label for="languageSelect">Choose</label>
     <select id="languageSelect">
       <option value="da">Dansk</option>
       <option value="de">Tysk</option>
     </select>`
  );

  // Lyt efter ændringer i dropdown
  document
    .getElementById("languageSelect")
    .addEventListener("change", changeLanguage);

  // Opdater teksten når siden indlæses
  updateText();
});
