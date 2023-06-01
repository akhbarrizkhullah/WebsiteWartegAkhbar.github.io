// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Active ham
document.querySelector("#ham-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Non active
const ham = document.querySelector("#ham-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-button");

document.addEventListener("click", function (e) {
  if (!ham.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !ShoppingCart.contains(e.target)) {
    ShoppingCart.classList.remove("active");
  }
});

//Search Form
const searchForm = document.querySelector(".search");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Shopping
const ShoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-button").onclick = (e) => {
  ShoppingCart.classList.toggle("active");
  e.preventDefault();
};

//alert
function myFunction() {
  alert("Pesan Telah Terkirim");
}
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    input.value = "";
  });
});

const navs = document.querySelectorAll("nav");

//Vidio Slider
const btns = document.querySelectorAll(".slider-btn");
const slides = document.querySelectorAll(".vidio-slides");
const contens = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contens.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contens[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// STICKY NAVBAR
var nav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

function scrollToTop() {
  window.scrollTo(0, 0);
}
