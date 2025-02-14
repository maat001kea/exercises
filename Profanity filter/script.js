// Liste med ord der skal erstattes
const forbudteOrd = [
  { dårlig: "var", god: "const" },
  { dårlig: "float", god: "grid" },
  { dårlig: "marquee", god: "just don't" },
];

// Hent elementerne fra HTML
const tekstElement = document.getElementById("tekst");
const erstatKnap = document.getElementById("erstatKnap");
const infoDialog = document.getElementById("infoDialog");
const lukDialogKnap = document.getElementById("lukDialog");

// Funktion der erstatter de dårlige ord
function erstatOrd() {
  let tekst = tekstElement.innerHTML;
  let opdateret = false; // Flag for at tjekke om vi har ændret noget

  forbudteOrd.forEach(({ dårlig, god }) => {
    let regex = new RegExp(`\\b${dårlig}\\b`, "gi"); // Matcher hele ordet (ignorerer store/små bogstaver)
    if (regex.test(tekst)) {
      tekst = tekst.replace(regex, `<span class="highlight">${god}</span>`);
      opdateret = true;
    }
  });

  // Opdater teksten eller vis besked, hvis intet blev ændret
  if (opdateret) {
    tekstElement.innerHTML = tekst;
  } else {
    infoDialog.showModal();
  }
}

// Event listener til knappen
erstatKnap.addEventListener("click", erstatOrd);

// Luk dialogen, når der klikkes på "Luk"
lukDialogKnap.addEventListener("click", () => {
  infoDialog.close();
});
