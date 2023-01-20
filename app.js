var btn = document.querySelector("#btn-click");
var light = document.getElementById("light");
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");


btn.addEventListener("click", function() {
    btn.classList.toggle("light-active");
    light.classList.toggle("lamp-on");
});


menu.addEventListener("click", function () {
  //menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});