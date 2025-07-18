const modal = document.getElementById("my_modal");
modal.style.display = "none"; // Initially hide the modal
let activeButton = null;

// Get all icon buttons
document.querySelectorAll(".icon-button").forEach((button) => {
  button.addEventListener("click", () => {
    if (modal.style.display === "block" && activeButton === button) {
      // If modal is open and clicked same button → close
      modal.style.display = "none";
      activeButton = null;
    } else {
      // Otherwise → open modal
      modal.style.display = "block";
      activeButton = button;
    }
  });
});
