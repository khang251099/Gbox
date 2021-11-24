const backtop = document.querySelector(".footer__final a");
console.log(backtop);

backtop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
