var menu = document.querySelector('#menu-btn');
var navbar = document.querySelector('.navbar');
var search = document.querySelector('.search-form')
var shopping = document.querySelector('.shopping-cart')
var login = document.querySelector('.login-form')
var table = document.querySelector('.booking-table');


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    login.classList.remove('active');
    shopping.classList.remove('active');
  search.classList.remove('active');
  table.classList.remove('active');
}

document.querySelector('#booked').onclick = () => {
  table.classList.toggle('active');
  menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    login.classList.remove('active');
    shopping.classList.remove('active');
    search.classList.remove('active');
}


document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
  shopping.classList.remove('active');
  table.classList.remove('active');
}
document.querySelector('#shopping-btn').onclick = () => {
    shopping.classList.toggle('active');
    search.classList.remove('active');
    navbar.classList.remove('active');
  login.classList.remove('active');
  table.classList.remove('active');
}
document.querySelector('#user-btn').onclick = () => {
    login.classList.toggle('active');
    shopping.classList.remove('active');
    search.classList.remove('active');
  navbar.classList.remove('active');
  table.classList.remove('active');
}

window.onscroll = () => {
    login.classList.remove('active');
    shopping.classList.remove('active');
    search.classList.remove('active');
  navbar.classList.remove('active');
  table.classList.remove('active');
}

var swiper = new Swiper(".dishes-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction:false,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});
