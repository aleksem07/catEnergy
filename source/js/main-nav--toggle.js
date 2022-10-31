var navToggle = document.querySelector(".main-nav__toogle");
var navMain = document.querySelector(".main-nav");

navMain.classList.add("main-nav--close");

// navToggle.addEventListener("click", function () {
//   if (navToggle.classList.contains("main-nav--closed")) {
//     navToggle.classList.remove("main-nav--closed");
//     navToggle.classList.add("main-nav--opened");
//     navMain.classList.remove("main-nav--close");
//   } else {
//     navToggle.classList.remove("main-nav--opened");
//     navToggle.classList.add("main-nav--closed");
//     navMain.classList.add("main-nav--close");
//   }
// });
navToggle.addEventListener("click", (evt) => {
  evt.preventDefault();
  navMain.classList.toggle("main-nav--close");
  navToggle.classList.toggle("main-nav--opened");
  navToggle.classList.toggle("main-nav--closed");
});
