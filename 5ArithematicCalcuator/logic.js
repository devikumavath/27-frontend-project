
// console.log("hii");
function calculator() {
  const val1 = parseInt(document.getElementById("val1").value);

  const val2 = parseInt(document.getElementById("val2").value);

  const symbol = document.getElementById("op").value;

  if (symbol === "+") {
    document.getElementById("result").value = val1 + val2;
  }

  if (symbol === "-") {
    document.getElementById("result").value = val1 - val2;
  }

  if (symbol === "*") {
    document.getElementById("result").value = val1 * val2;
  }

  if (symbol === "/") {
    document.getElementById("result").value = val1 / val2;
  }

  if (symbol === "%") {
    document.getElementById("result").value = val1 % val2;
  }
}
