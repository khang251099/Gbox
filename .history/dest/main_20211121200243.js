/*Back to top*/
const backtop = document.querySelector(".footer__final a");

backtop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

/*Nav menu*/
const btnMenu = document.querySelector(".header__item-menu");
console.log(btnMenu);
const nav = document.querySelector(".nav");
console.log(nav);
const navmenus = document.querySelectorAll(".nav ul li a");
console.log(navmenus);

btnMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("active");
});

const about = document.querySelector(".menu__item-wrap .left a");
console.log(about);
