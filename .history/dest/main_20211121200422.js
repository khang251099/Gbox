/*Back to top*/
const backtop = document.querySelector(".footer__final a");

backtop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

/*Nav menu*/
const btnMenu = document.querySelector(".header__item-menu");

const nav = document.querySelector(".nav");

const navmenus = document.querySelectorAll(".nav ul li a");

btnMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("active");
});

const about = document.querySelector(".menu__item-wrap .left a");
console.log(about);
about.addEventListener("click", function (e) {
  e.preventDefault();
  this.classList.toggle("active");
  //   nav.classList.toggle("active");
});
