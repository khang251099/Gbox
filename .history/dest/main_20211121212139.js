/*Back to top*/
const backtop = document.querySelector(".footer__final a");

backtop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

/*Nav mobile menu*/
const btnMenu = document.querySelector(".header__item-menu");

const nav = document.querySelector(".nav");

const navmenus = document.querySelectorAll(".nav ul li a");

btnMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("active");
});

const about = document.querySelector(".menu__item-wrap .left a");

about.addEventListener("click", function (e) {
  // about.forEach(function (aboutElement, index) {
  //   aboutElement.classList.remove("active");
  // });
  // this.classList.add("active");
  this.classList.add("active");
});

const center = $(".center__item li a");
const removeMenuActive = () => {
  center.forEach(function (centerElement, index) {
    centerElement.classList.remove("active");
  });
};

center.forEach(function (val, index) {
  val.addEventListener("click", function (e) {
    e.preventDefault();
    removeMenuActive();
    val.classList.add("active");
  });
});
// center.click(function (e) {
//   e.preventDefault();
//   $("a").removeClass("active");
//   $(this).addClass("active");
// });

// const contact = document.querySelector(".menu__item-wrap .right a");
// contact.addEventListener("click", function (e) {
//   this.classList.add("active");
// });
