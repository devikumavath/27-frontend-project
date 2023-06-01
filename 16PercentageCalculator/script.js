// Get DOM elements
const percentageInput = document.getElementById('Percentage');
const numberInput = document.getElementById('number');
const calculateButton = document.getElementById('Calculate');
const resultInput = document.getElementById('result');

// Add event listener to the Calculate button
calculateButton.addEventListener('click', calculatePercentage);

// Function to calculate the percentage
function calculatePercentage() {
  const percentage = parseFloat(percentageInput.value);
  const number = parseFloat(numberInput.value);
  
  if (isNaN(percentage) || isNaN(number)) {
    resultInput.value = 'Invalid input';
  } else {
    const result = (percentage / 100) * number;
    resultInput.value = result;
  }
}
