const toogleMenuElement = document.getElementById("toggle-menu");
const mainMenuElemnt = document.getElementById("main-menu");

toogleMenuElement.addEventListener("click", () => {
    mainMenuElemnt.classList.toggle("header--show");
});