const hamburger = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.main-menu');
const links = document.querySelectorAll('.main-menu a');


hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('show');
})

links.forEach((link)=>{
    link.addEventListener('click',()=>{
        menu.classList.remove('show');
    })
})