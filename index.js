// Your code here
const dodger = getElementById('dodger');

function moveDodgerLeft() {

const leftNumbers = dodger.style.left.replace("px", "");

const left = parseInt(leftNumbers, 10);

if (left > 0) {
dodger.style.left = `${left - 1}px`;

}

}

function moveDodgerRight() {

}

document.addEventListener("keydown" function(event) {

if (event.key === "ArrowLeft") {

moveDodgerLeft();

}

if (event.key === "ArrowRight") {

moveDodgerRight();

}

}
);