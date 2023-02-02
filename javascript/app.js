const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
    nav.classList.toggle('fixed-nav')
    menuBtn.classList.toggle('fixed')
});