let theText =
  "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";

// Løsning med split / join
let newText1 = theText.split("ord").join("ting");
console.log("Med split/join:", newText1);

// Løsning med replaceAll()
let newText2 = theText.replaceAll("ord", "ting");
console.log("Med replaceAll():", newText2);
