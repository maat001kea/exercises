// Liste med ord der skal erstattes
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

// Hent elementerne fra HTML
const textElement = document.getElementById("text");
const replaceButton = document.getElementById("replaceButton");
const infoDialog = document.getElementById("infoDialog");
const closeDialogButton = document.getElementById("closeDialog");

// Funktion der erstatter de dårlige ord
function replaceWords() {
  let text = textElement.innerHTML;
  let updated = false; // Flag for at tjekke om vi har ændret noget

  curseWords.forEach(({ bad, good }) => {
    let regex = new RegExp(`\\b${bad}\\b`, "gi"); // Matcher hele ordet (ignorerer store/små bogstaver)
    if (regex.test(text)) {
      text = text.replace(regex, `<span class="highlight">${good}</span>`);
      updated = true;
    }
  });

  // Opdater teksten eller vis besked, hvis intet blev ændret
  if (updated) {
    textElement.innerHTML = text;
  } else {
    infoDialog.showModal();
  }
}

// Event listener til knappen
replaceButton.addEventListener("click", replaceWords);

// Luk dialogen, når der klikkes på "Luk"
closeDialogButton.addEventListener("click", () => {
  infoDialog.close();
});
