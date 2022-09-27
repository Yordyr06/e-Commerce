const navbarEmail = document.querySelector('.navbar-email')
const activeMenu = document.querySelector('.sing-out-menu');

navbarEmail.addEventListener('click', toggleEmailMenu);

function toggleEmailMenu() {
    activeMenu.classList.toggle('inactive');
}
