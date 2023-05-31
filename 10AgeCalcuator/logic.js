let dob = document.getElementById("birthdata");
let currdate = document.getElementById("currentdata");

let output = document.getElementById("output");

document.getElementById("submitbtn").addEventListener("click", () => {
  if (dob.value == "" || currdate.value == "") {
    return (output.innerHTML = "please select date ");
  } else {
    calculateAgeDifference(dob.value, currdate.value);
  }
});



function calculateAgeDifference(start, end) {
  let dobYear = parseInt(start.substring(0, 4), 10);
  let dobMonth = parseInt(start.substring(5, 7), 10);
  let dobDate = parseInt(start.substring(8, 10), 10);

  let currYear = parseInt(end.substring(0, 4), 10);
  let currMonth = parseInt(end.substring(5, 7), 10);
  let currDate = parseInt(end.substring(8, 10), 10);

  let yearAgeDiff = currYear - dobYear;

  let monthAgeDiff;
  if (currMonth >= dobMonth) {
    monthAgeDiff = currMonth - dobMonth;
  } else {
    yearAgeDiff--;
    monthAgeDiff = 12 + currMonth - dobMonth;
  }

  let dateAgeDiff;
  if (currDate >= dobDate) {
    dateAgeDiff = currDate - dobDate;
  } else {
    monthAgeDiff--;
    let noOfDaysInDob = daysInMonth(dobMonth, dobYear);
    dateAgeDiff = noOfDaysInDob + currDate - dobDate;

    if (monthAgeDiff < 0) {
      monthAgeDiff = 11;
      yearAgeDiff--;
    }
  }
  
  console.log(yearAgeDiff , monthAgeDiff , dateAgeDiff);
  output.innerHTML =
    yearAgeDiff + " Years " + monthAgeDiff + " Months " + dateAgeDiff + " Days.";
}




function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}


