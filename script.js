const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const countDisplay = document.getElementById("count");
const starDisplay = document.getElementById("starDisplay");

let count = 0;

function updateCountDisplay() {
  countDisplay.textContent = count;
}

function updateStarDisplay() {
  starDisplay.innerHTML = "*".repeat(count);
}

function incrementCount() {
  count++; // Increment the count value
  updateCountDisplay();
  updateStarDisplay();
}

function decrementCount() {
  if (count > 0) {
    count--;
    updateCountDisplay();
    updateStarDisplay();
  }
}

incrementBtn.addEventListener("click", incrementCount);
decrementBtn.addEventListener("click", decrementCount);
