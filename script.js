const menuIcon = document.getElementById("menu");
const closeIcon = document.getElementById("close");
const navMenu = document.getElementById("nav-menu");

menuIcon.addEventListener("click", () => {
  navMenu.style.right = "0";
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  navMenu.style.right = "-100%";
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});
