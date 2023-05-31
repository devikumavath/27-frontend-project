


const form = document.querySelector('form');
const result = document.querySelector('.result');
const interestEarned = document.querySelector('.interset-earned');
const principalAmount = document.querySelector('.princple-amount');
const totalValue = document.querySelector('.total-value');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission

  const principal = parseInt(document.getElementById('p').value);
  const rate = parseInt(document.getElementById('r').value);
  const time = parseInt(document.getElementById('t').value);
  const periodunit = document.getElementById('period').value;

  let timeInYears = time;
  switch (periodunit) {
    case 'days':
      timeInYears = time / 365;
      break;
    case 'weeks':
      timeInYears = time / 52;
      break;
    case 'months':
      timeInYears = time / 12;
      break;
    case 'quarters':
      timeInYears = time / 4;
      break;
    case 'years':
      timeInYears = time;
      break;
    default:
      timeInYears = time;
      break;
  }

  const interest = (principal * rate * timeInYears) / 100;
  const total = principal + interest;

  interestEarned.textContent = `Interest earned: ${interest.toFixed(2)} Rs`;
  principalAmount.textContent = `Principal amount: ${principal} Rs`;
  totalValue.textContent = `Total value: ${total.toFixed(2)} Rs`;
  
  
  // Clear input fields
//   document.getElementById('p').value = '';
//   document.getElementById('r').value = '';
//   document.getElementById('t').value = '';
//   document.getElementById('period').value = 'days';
  
});