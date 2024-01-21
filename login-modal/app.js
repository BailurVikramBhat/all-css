const hamburgerMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links-w-logo");

hamburgerMenu.addEventListener("click", addMovement);
function addMovement() {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  console.log("clicked");
}
const popup = document.getElementById("login-main");

function showPopup() {
  popup.classList.toggle("open-popup");
}
