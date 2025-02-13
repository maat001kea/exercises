let theText =
  "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";

// Løsning med split / join
let newText1 = theText.split("ord").join("ting");

// Løsning med replaceAll()
let newText2 = theText.replaceAll("ord", "ting");

// Indsætter resultaterne i HTML
document.getElementById("original-text").innerText = theText;
document.getElementById("split-join-result").innerText = newText1;
document.getElementById("replaceAll-result").innerText = newText2;
