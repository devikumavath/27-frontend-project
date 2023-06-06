function play(userChoice) {
  const options = ["snake", "water", "gun"];
  const computerChoice = options[Math.floor(Math.random() * options.length)];

  const snakeSound = document.getElementById("snake-sound");
  const waterSound = document.getElementById("water-sound");
  const gunSound = document.getElementById("gun-sound");

  snakeSound.pause();
  waterSound.pause();
  gunSound.pause();

  if (userChoice === "snake") {
    snakeSound.currentTime = 0;
    snakeSound.play();
  } else if (userChoice === "water") {
    waterSound.currentTime = 0;
    waterSound.play();
  } else if (userChoice === "gun") {
    gunSound.currentTime = 0;
    gunSound.play();
  }

  const result = document.getElementById("result");
  const userChoiceText = document.getElementById("user-choice");
  const machineChoiceText = document.getElementById("machine-choice");

  userChoiceText.textContent = `You chose: ${userChoice}`;
  machineChoiceText.textContent = `Machine chose: ${computerChoice}`;

  if (userChoice === computerChoice) {
    result.textContent = "It's a tie!";
  } else if (
    (userChoice === "snake" && computerChoice === "water") ||
    (userChoice === "water" && computerChoice === "gun") ||
    (userChoice === "gun" && computerChoice === "snake")
  ) {
    result.textContent = "You win!";
  } else {
    result.textContent = "You lose!";
  }
}
