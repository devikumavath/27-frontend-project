const number = document.getElementById("number");
const generatorBtn = document.getElementById("generatorBtn");

const randomNumberGenerator = () => {
  const randomNumber =  Math.floor(Math.random() * 6) + 1;

  number.textContent = randomNumber
};

generatorBtn.addEventListener('click' , 
randomNumberGenerator);

randomNumberGenerator();

