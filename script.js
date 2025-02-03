window.addEventListener("load", function() {

  let randomNumber = Math.floor(Math.random() * 100);

  const guessInput = document.getElementById("guessInput");
  const guessBtn = document.getElementById("guessBtn");
  const feedback = document.getElementById("feedback");

  guessBtn.addEventListener("click", function() {

    let userGuess = parseInt(guessInput.value, 10);

    // Tjek for gyldigt input
    if (isNaN(userGuess)) {
      feedback.textContent = "Du skal indtaste et gyldigt tal!";
      return;
    }
    if (userGuess < 0 || userGuess > 100) {
      feedback.textContent = "Tallet skal være mellem 0 og 100.";
      return;
    }

    if (userGuess < randomNumber) {
      feedback.textContent = "For lavt! Prøv igen.";
    } else if (userGuess > randomNumber) {
      feedback.textContent = "For højt! Prøv igen.";
    } else {
      
      feedback.textContent = "Du gættede rigtigt! Tillykke!";
    }

    // Ryd inputfeltet og sæt fokus til det igen
    guessInput.value = "";
    guessInput.focus();
  });
});
