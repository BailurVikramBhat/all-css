const hamburgerMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links-w-logo");

hamburgerMenu.addEventListener("click", addMovement);
function addMovement() {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  console.log("clicked");
}
