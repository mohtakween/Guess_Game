// Variables
const targetNumber = Math.floor(Math.random() * 100) + 1;
let remainingAttempts = 5;
let currentLevel = 1;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);

  // Update remaining attempts and level progress
  remainingAttempts--;
  document.getElementById("remainingAttempts").textContent = `Attempts remaining: ${remainingAttempts}`;

  // Check guess and provide feedback based on level range
  if (guess === targetNumber) {
    document.getElementById("feedbackText").textContent = `Correct! You conquered level ${currentLevel} in ${5 - remainingAttempts} attempts.`;
    currentLevel++; // Increase level on win
    document.getElementById("levelText").textContent = `Level: ${currentLevel}`; // Update displayed level
    startNewLevel(); // Reset for next level
  } else if (guess > targetNumber) {
    document.getElementById("feedbackText").textContent = "Too high!";
  } else {
    document.getElementById("feedbackText").textContent = "Too low!";
  }

  // Check if game is over
  if (remainingAttempts === 0 && guess !== targetNumber) {
    document.getElementById("feedbackText").textContent = `Game over! The correct number for level ${currentLevel} was ${targetNumber}`;
    disableGuessInput(); // prevent further guesses
  }

  // Additional logic specific to level progression, bonuses, etc.
}

function startNewLevel() {
  // Update target number based on new level range
  // Award bonus points/attempts?
  // Reset remaining attempts
  remainingAttempts = 5;
  document.getElementById("remainingAttempts").textContent = `Attempts remaining: ${remainingAttempts}`;
  // Generate new target number within updated range
  targetNumber = ... // Implement updated number generation logic
  // Clear guess input
  document.getElementById("guessInput").value = "";
}
