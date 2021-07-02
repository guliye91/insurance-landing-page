const hamburger = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon')
const menu = document.querySelector('.main-menu');
const links = document.querySelectorAll('.main-menu a');


hamburger.addEventListener('click', ()=>{
    menu.classList.add('show');
    hamburger.style.display = 'none';
    closeIcon.style.cssText = 'display:block;';

})
closeIcon.addEventListener('click',()=>{
    menu.classList.remove('show');
    closeIcon.style.display = 'none';
    hamburger.style.display = "block";
})

links.forEach((link)=>{
    link.addEventListener('click',()=>{
        menu.classList.remove('show');
        closeIcon.style.display = 'none';
    hamburger.style.display = "block";
    })
})