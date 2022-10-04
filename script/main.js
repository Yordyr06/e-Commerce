const navbarEmail = document.querySelector('.navbar-email');
const activeMenu = document.querySelector('.sing-out-menu');
const iconMenu = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-card-icon');
const shoppingCartMenu = document.querySelector('.my-order');
const cardsContainer = document.querySelector('.cards-container')
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

function toggleShoppingCartMenu() {
    activeMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartMenu.classList.toggle('inactive');
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