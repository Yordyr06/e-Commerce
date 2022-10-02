const navbarEmail = document.querySelector('.navbar-email');
const activeMenu = document.querySelector('.sing-out-menu');
const iconMenu = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-card-icon');
const shoppingCartMenu = document.querySelector('.my-order');

navbarEmail.addEventListener('click', toggleEmailMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCartMenu);

function toggleEmailMenu() {
    shoppingCartMenu.classList.add('inactive');
    activeMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    shoppingCartMenu.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartMenu () {
    activeMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartMenu.classList.toggle('inactive');
}