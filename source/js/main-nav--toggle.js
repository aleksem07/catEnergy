var navToggle = document.querySelector(".main-nav__toogle");
var navMain = document.querySelector(".main-nav");

navMain.classList.add("main-nav--close");

navToggle.addEventListener("click", (evt) => {
  evt.preventDefault();
  navMain.classList.toggle("main-nav--close");
  navToggle.classList.toggle("main-nav--opened");
  navToggle.classList.toggle("main-nav--closed");
});
