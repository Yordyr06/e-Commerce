const navbarEmail = document.querySelector('.navbar-email');
const activeMenu = document.querySelector('.sing-out-menu');
const iconMenu = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', toggleEmailMenu);
iconMenu.addEventListener('click', toggleMobileMenu);

function toggleEmailMenu() {
    activeMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}
