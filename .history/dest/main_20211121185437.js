
window.onload(function(){ 
    const backtop = document.querySelector(".footer__final a");


    backtop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
})

