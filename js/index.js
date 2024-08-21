var navContainer = document.getElementById("navLinks");

function showMenu() {
  navContainer.style.top = "0";
}
function hideMenu() {
  navContainer.style.top = "-100vh";
}

//Smoooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
