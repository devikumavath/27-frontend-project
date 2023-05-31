const pInput = document.getElementById("p");
const rInput = document.getElementById("r");
const nInput = document.getElementById("n");
const result = document.getElementById("result");

const btn = document.getElementById("btn");
btn.addEventListener("click", function () {


  if (pInput.value === "" || rInput.value === "" || nInput.value === "") {
    alert("Please enter data in all fields.");
    return;
  }



  const p = parseFloat(pInput.value);
  const r = parseFloat(rInput.value);
  const n = parseFloat(nInput.value);

  console.log(p, r, n);

  const CI = p * (Math.pow(1 + r / 100, n) - 1);
  const TA = p + CI;

  const CIResult = result.querySelector("#CI");
  CIResult.textContent = "Compound Interest: " + CI.toFixed(2);

  const TAResult = result.querySelector("#TA");
  TAResult.textContent = "Total Amount: " + TA.toFixed(2);

  // Clear the input fields
  pInput.value = "";
  rInput.value = "";
  nInput.value = "";
});
