document.addEventListener("DOMContentLoaded", function () {
    const popupContainer = document.getElementById("popupContainer");
    const closePopupButton = document.getElementById("closePopup");
  
    function showPopup() {
      popupContainer.style.display = "flex";
      setTimeout(() => {
        popupContainer.classList.add("popup-visible");
      }, 10); // Delay to allow CSS transition to take effect
    }
  
    function closePopup() {
      popupContainer.classList.remove("popup-visible");
      setTimeout(() => {
        popupContainer.style.display = "none";
      }, 500); // Wait for the transition to complete before hiding
    }
  
    showPopup(); // Automatically open the popup when the document is ready
    closePopupButton.addEventListener("click", closePopup); // Close popup on button click
  });
  