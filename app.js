const hamburger = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.main-menu');

console.log(menu)

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('show');
    console.log(menu)
})