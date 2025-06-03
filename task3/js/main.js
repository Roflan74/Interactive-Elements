const menu = document.querySelector('.main-nav');
const burgerBtn = document.querySelector(".menu__burger");
console.log(menu);

burgerBtn.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
});