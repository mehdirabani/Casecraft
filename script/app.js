const navToggle = document.querySelector(".nav__toggle");
const menoMobile =document.querySelector(".menu")


navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("nav__toggle--open");
  menoMobile.classList.toggle("menu--open")
});
