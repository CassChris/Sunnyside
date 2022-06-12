const  navToggle = document.querySelector('.toggle__hamburger')    ;
const  navMenu = document.querySelector('.nav__ul')    


navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav__menu-visible");
});