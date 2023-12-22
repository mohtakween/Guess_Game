// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let remainingAttempts = 5;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);

  // Update remaining attempts
  remainingAttempts--;
  document.getElementById("remainingAttempts").textContent = `Attempts remaining: ${remainingAttempts}`;

  // Check guess and provide feedback
  if (guess === targetNumber) {
    document.getElementById("feedbackText").textContent = "Correct! You guessed the number in " + (5 - remainingAttempts) + " attempts.";
    disableGuessInput(); // prevent further guesses
  } else if (guess > targetNumber) {
    document.getElementById("feedbackText").textContent = "Too high!";
  } else {
    document.getElementById("feedbackText").textContent = "Too low!";
  }

  // Check if game is over
  if (remainingAttempts === 0 && guess !== targetNumber) {
    document.getElementById("feedbackText").textContent = "Game over! The correct number was " + targetNumber;
    disableGuessInput(); // prevent further guesses
  }
}

function disableGuessInput() {
  document.getElementById("guessInput").disabled = true;
}
