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

/*Resize nav*/
window.addEventListener("resize", function (e) {
  if (this.innerWidth > 992) {
    btnMenu.classList.remove("active");
    nav.classList.remove("active");
  }
});

const about = document.querySelector(".menu__item-wrap .left a");

about.addEventListener("click", function (e) {
  this.classList.add("active");
});

const center = document.querySelectorAll(".center__item li a");
const removeMenuActive = () => {
  center.forEach(function (centerElement, index) {
    centerElement.classList.remove("active");
  });
};

center.forEach(function (val, index) {
  val.addEventListener("click", function (e) {
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

// const $carousel = $(".slider__carousel");
// $carousel.flickity({
//   cellAlign: "left",
//   contain: true,
//   prevNextButtons: false,
//   pageDots: false,
//   wrapAround: true,
//   freeScroll: true,
// });

// $(".slider__control .btn.--prev a").on("click", function (e) {
//   e.preventDefault();
//   console.log("prev");
//   $carousel.flickity("previous");
// });
// $(".slider__control .btn.--next a").on("click", function (e) {
//   e.preventDefault();
//   console.log("next");
//   $carousel.flickity("next");
// });
$(document).ready(function () {
  const $studio = $(".studio__carousel .details__center");
  $studio.flickity({
    cellAlign: "left",
    contain: true,
    pageDots: false,
    wrapAround: true,
    freeScroll: true,
    // prevNextButtons: false,
    on: {
      change: function (index) {
        const number = $(".details-bottom .number");
        let indexPage = index + 1;
        number.text(indexPage.toString().padStart(2, 0));
      },
    },
  });

  $(".details-control .btn.--prev a").on("click", function (e) {
    e.preventDefault();
    console.log("prev");
    $studio.flickity("previous");
  });
  $(".details-control .btn.--next a").on("click", function (e) {
    e.preventDefault();
    console.log("next");
    $studio.flickity("next");
  });
});

// flkty.on("fullscreenChange", function (isFullscreen) {});

/*Tab*/
const tabs = document.querySelectorAll(".product-tab a");
const tab = document.querySelector(".product-tab a");
const tabItems = document.querySelectorAll(".product__item-list");
tabs.forEach(function (tab, index) {
  const tabItem = tabItems[index];
  tab.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(".product__item-list.active")
      .classList.remove("active");
    document.querySelector(".product-tab a.active").classList.remove("active");
    this.classList.add("active");
    tabItem.classList.add("active");
  });
});

/*Rental*/
const btnOption = document.querySelectorAll(".btn-option button");
console.log(btnOption);
btnOption.forEach(function (val, index) {
  val.addEventListener("click", function (e) {
    this.classList.remove("active");
    val.classList.add("active");
  });
});
