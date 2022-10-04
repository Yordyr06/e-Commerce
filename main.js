const navbarEmail = document.querySelector('.navbar-email');
const iconMenu = document.querySelector('.icon-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-card-icon');
const productCard = document.querySelector('.product-card');
const productDetailClose = document.querySelector('.product-details-close');

const showMenu = document.querySelector('.sing-out-menu');
const showMobileMenu = document.querySelector('.mobile-menu');
const showCartMenu = document.querySelector('.my-order');
const showDetail = document.querySelector('.product-details');

const cardsContainer = document.querySelector('.cards-container');

const productList = [];
productList.push({
        name: 'Sneakers',
        price: 120.00,
        img: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    });
productList.push({
        name: 'Sneakers',
        price: 150.00,
        img: 'https://images.pexels.com/photos/1464624/pexels-photo-1464624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10',
    });

{/*Testing ... 

const orderList = [];

*/}

navbarEmail.addEventListener('click', toggleEmailMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCartMenu);
productDetailClose.addEventListener('click', closeProductDetail);

function toggleEmailMenu() {
    showMenu.classList.toggle('inactive');
    showCartMenu.classList.add('inactive');
}

function toggleMobileMenu() {
    showMobileMenu.classList.toggle('inactive');
    showCartMenu.classList.add('inactive');
}

function toggleShoppingCartMenu() {
    showCartMenu.classList.toggle('inactive');
    showMenu.classList.add('inactive');
    showMobileMenu.classList.add('inactive');
}

function openProductDetail() {
    showDetail.classList.remove('inactive');
    showMenu.classList.add('inactive');
    showMobileMenu.classList.add('inactive');
    showCartMenu.classList.add('inactive');
}

function closeProductDetail() {
    showDetail.classList.add('inactive')
}

function productRender(arr) {
    {/* <div class="product-card">
        <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg" alt="sneakers">
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Sneakers</p>
            </div>
            <figure>
                <img src="/assets/icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div>

    <div class="product-card">
        <img src="https://images.pexels.com/photos/1464624/pexels-photo-1464624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sneakers">
        <div class="product-info">
            <div>
                <p>$150,00</p>
                <p>Sneakers</p>
            </div>
            <figure>
                <img src="/assets/icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div> */}

    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productImg.addEventListener('click', openProductDetail)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productFigure = document.createElement('figure');

        const producImgCart = document.createElement('img');
        producImgCart.setAttribute('src', '/assets/icons/bt_add_to_cart.svg');

        cardsContainer.append(productCard);
        productCard.append(productImg, productInfo);
        productInfo.append(productInfoDiv, productFigure);
        productInfoDiv.append(productPrice, productName);
        productFigure.append(producImgCart);
    }
}

productRender(productList);

