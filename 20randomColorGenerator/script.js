const container = document.querySelector(".container");
const colorCard = document.querySelector(".color-card");
const btn = document.querySelector("button");
const hex = document.querySelector("span");

function getNewColor() {
  const symbols = "0123456789ABCDEF";

  let color = "#";

  for (let i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  document.body.style.background = color;
  colorCard.style.background = color;
  hex.innerHTML = color
}

btn.addEventListener("click", getNewColor);

// getNewColor();
