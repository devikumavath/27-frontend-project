const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

var CurrentActive = 1;
next.addEventListener("click", () => {
  CurrentActive++;
  if (CurrentActive > circles.length) {
    CurrentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  CurrentActive--;
  if (CurrentActive < 1) {
    CurrentActive = 1;
  }

  update();
});
function update() {
  //   upate active class in circle
  circles.forEach((circles, index) => {
    if (index < CurrentActive) {
      circles.classList.add("active");
    } else {
      circles.classList.remove("active");
    }
  });

  // update the progress bar
  var activeCircles = document.querySelectorAll(".active");
  progress.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";

  // change the button enable and disable satte
  if(CurrentActive ==1 )
  {
      prev.disabled = true
  }
  else if(CurrentActive == circles.length){
     next.disabled = true
  }
  else{
      prev.disabled = false;
      next.disabled = false;
  }
}
