const submit = document.getElementById("submit");
const ratingButtons = document.querySelectorAll(".rating-button");
const resultContainer = document.getElementById("rateChoice");

let selectedRating = null;

// Add click event listeners to rating buttons
ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedRating = button.getAttribute("data-value");
    ratingButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

submit.addEventListener("click", () => {
  document.getElementById("rating").classList.add("hidden");
  document.getElementById("thankYou").classList.remove("hidden");
  if (selectedRating !== null) {
    resultContainer.textContent = `${selectedRating}`;
    
  } else {
    resultContainer.textContent = "?";
  }
});
