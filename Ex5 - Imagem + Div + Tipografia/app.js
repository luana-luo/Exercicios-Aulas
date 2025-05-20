const iconeMenu = document.querySelector(".menu-toggle")
const menu = document.querySelector(".nav-links")

iconeMenu.addEventListener("click", function () {
    menu.classList.toggle("mostrar")
})