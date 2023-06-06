document
  .getElementById("surveyForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var frequency = document.getElementById("frequency").value;
    var ads = document.getElementById("ads").value;

    // Add sparkle animation
    var sparkle = document.createElement("div");
    sparkle.classList.add("sparkle-animation");
    document.body.appendChild(sparkle);

    // Remove sparkle after animation ends
    sparkle.addEventListener("animationend", function () {
      sparkle.remove();
    });
  });
