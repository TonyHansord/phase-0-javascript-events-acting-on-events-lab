// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "lightBlue";

function moveDodgerLeft(position) {
  if (position > 0) {
    dodger.style.left = `${position - 10}px`;
  }
}

function moveDodgerRight(position) {
  if (position < 360) {
    dodger.style.left = `${position + 10}px`;
  }
}

document.addEventListener("keydown", function (event) {
  const leftNumbers = dodger.style.left.replace("px", "");

  const leftPosition = parseInt(leftNumbers, 10);

  if (event.key === "ArrowLeft") {
    moveDodgerLeft(leftPosition);
  }

  if (event.key === "ArrowRight") {
    moveDodgerRight(leftPosition);
  }
});
