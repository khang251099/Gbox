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

$(document).ready(function () {
  const $carousel = $(".slider__carousel");
  $carousel.flickity({
    cellAlign: "left",
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    freeScroll: true,
  });

  $(".slider__control .btn.--prev a").on("click", function (e) {
    e.preventDefault();
    console.log("prev");
    $carousel.flickity("previous");
  });
  $(".slider__control .btn.--next a").on("click", function (e) {
    e.preventDefault();
    console.log("next");
    $carousel.flickity("next");
  });
});

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
const btnOptions = document.querySelectorAll(".btn-option button");
const btnOption = document.querySelector(".btn-option button");
console.log(btnOption);
btnOptions.forEach(function (val, index) {
  val.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(".btn-option button.active")
      .classList.remove("active");

    val.classList.add("active");
  });
});

// const swiper = new Swiper(".slider__carousel", {
//   navigation: {
//     nextEl: ".slider__control .btn.--next a",
//     prevEl: ".slider__control .btn.--prev a",
//   },
// });

var initPhotoSwipeFromDOM = function (gallerySelector) {
  var parseThumbnailElements = function (el) {
    var thumbElements = el.childNodes,
      numNodes = thumbElements.length,
      items = [],
      figureEl,
      linkEl,
      size,
      item;
    for (var i = 0; i < numNodes; i++) {
      figureEl = thumbElements[i]; // <figure> element
      if (figureEl.nodeType !== 1) {
        continue;
      }
      linkEl = figureEl.children[0]; // <a> element
      size = linkEl.getAttribute("data-size").split("x");
      item = {
        src: linkEl.getAttribute("href"),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10),
      };
      if (figureEl.children.length > 1) {
        item.title = figureEl.children[1].innerHTML;
      }
      if (linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute("src");
      }
      item.el = figureEl; // save link to element for getThumbBoundsFn
      items.push(item);
    }
    return items;
  };
  var closest = function closest(el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn));
  };
  var onThumbnailsClick = function (e) {
    e = e || window.event;
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    var eTarget = e.target || e.srcElement;
    var clickedListItem = closest(eTarget, function (el) {
      return el.tagName && el.tagName.toUpperCase() === "FIGURE";
    });
    if (!clickedListItem) {
      return;
    }
    var clickedGallery = clickedListItem.parentNode,
      childNodes = clickedListItem.parentNode.childNodes,
      numChildNodes = childNodes.length,
      nodeIndex = 0,
      index;
    for (var i = 0; i < numChildNodes; i++) {
      if (childNodes[i].nodeType !== 1) {
        continue;
      }
      if (childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }
    if (index >= 0) {
      openPhotoSwipe(index, clickedGallery);
    }
    return false;
  };
  var photoswipeParseHash = function () {
    var hash = window.location.hash.substring(1),
      params = {};
    if (hash.length < 5) {
      return params;
    }
    var vars = hash.split("&");
    for (var i = 0; i < vars.length; i++) {
      if (!vars[i]) {
        continue;
      }
      var pair = vars[i].split("=");
      if (pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }
    if (params.gid) {
      params.gid = parseInt(params.gid, 10);
    }
    return params;
  };
  var openPhotoSwipe = function (
    index,
    galleryElement,
    disableAnimation,
    fromURL
  ) {
    var pswpElement = document.querySelectorAll(".pswp")[0],
      gallery,
      options,
      items;
    items = parseThumbnailElements(galleryElement);
    options = {
      galleryUID: galleryElement.getAttribute("data-pswp-uid"),
      getThumbBoundsFn: function (index) {
        var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
          pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop,
          rect = thumbnail.getBoundingClientRect();

        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
      },
      showAnimationDuration: 0,
      hideAnimationDuration: 0,
    };
    if (fromURL) {
      if (options.galleryPIDs) {
        for (var j = 0; j < items.length; j++) {
          if (items[j].pid == index) {
            options.index = j;
            break;
          }
        }
      } else {
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    }
    if (isNaN(options.index)) {
      return;
    }
    if (disableAnimation) {
      options.showAnimationDuration = 0;
    }
    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };
  var galleryElements = document.querySelectorAll(gallerySelector);
  for (var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute("data-pswp-uid", i + 1);
    galleryElements[i].onclick = onThumbnailsClick;
  }
  var hashData = photoswipeParseHash();
  if (hashData.pid && hashData.gid) {
    openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
  }
};

$(window).ready(function () {
  // console.log("done");
  initPhotoSwipeFromDOM(".slider__carousel");
  // $(".full a").click(function (e) {
  //   e.preventDefault();

  // });
});
