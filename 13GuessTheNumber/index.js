const btn = document.getElementById("btn");
const outputtext = document.getElementById("outputtext");

let number = [Math.floor(Math.random() * 100)];

console.log(number);

btn.addEventListener("click", function () {
  const userinput = document.getElementById("userinput").value;
//   console.log(userinput);

  if (userinput == number) {
    outputtext.innerHTML = `congratulations 💃 you have guess the correct numer  ${userinput}. `;
  }  else if (userinput >= 101 || userinput < 1) {
    outputtext.innerHTML = `Choose random No 1-100.`;
  }
  
  else if (userinput > number) {
    outputtext.innerHTML = `${userinput} is greater than the actual number.`;
  } else if (userinput < number) {
    outputtext.innerHTML = `${userinput} is smaller than the actual number.`;
  } 
});
