// window.onscroll = () => {
//   header.classList.remove("sticky");
// };

// scroll reveal

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(
  "#Home .carousel-inner .carousel-item .main h1,.containers .card-body h5,#Menu .card-title,#Special .text-center .card-title,#RESERVATIONS .cd .card-body .card-title,#chefs .cd .card-body h5,#dishes .cd .card-body h5",
  {
    origin: "top",
  }
);

ScrollReveal().reveal(
  "#Home .carousel-inner .carousel-item .main button, .containers .card-body .btn,#Menu .content,#Special .row,#RESERVATIONS .contact ,#RESERVATIONS .cd .btn,#chefs .chef-box .content .box,.carousel-fade .carousel-item,#dishes .card-group .card .carousel-inner,.containers .card-body .card-text",
  {
    origin: "bottom",
  }
);

ScrollReveal().reveal(
  "#Home .carousel-inner .carousel-item .main h3 , .containers .card-body .card-texts",
  {
    origin: "left",
  }
);

ScrollReveal().reveal("#Home .carousel-inner .carousel-item .main p", {
  origin: "right",
});

// typed.js
const typed = new Typed(".multiple-txt", {
  strings: ["Delicious Food", "Fresh and Tasty", "Healthy Foods"],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true,
});

// menubar
var menu = document.querySelector("#menubar");
var nav = document.querySelector(".nav");
var header = document.querySelector("header");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
  header.classList.toggle("stickys");
};

// window scroll navbar sticky
var header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
  menu.classList.remove("fa-times");
  nav.classList.remove("active");
});
