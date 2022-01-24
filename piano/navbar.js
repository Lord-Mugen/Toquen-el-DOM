/* document.querySelector seleciona todo tipo de elementos dentro del documento de html */

let navbar = document.querySelector(".navbar");
let navbarList = document.querySelector(".navbar__list");
let menuButton = document.getElementById("menu");

menuButton.addEventListener("click", openMenu);

function openMenu() {
  navbar.classList.toggle("active");
  navbarList.classList.toggle("active");
}

let hola = 15;
