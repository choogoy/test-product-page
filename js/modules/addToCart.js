const addToCart = () => {
    const productAddToCartBtn = document.querySelector('.product__add-to-cart-btn');

    productAddToCartBtn.addEventListener('click', event => {
        const message = productAddToCartBtn.querySelector('.message');
        const title = document.querySelector('.product__title');
        
        message.classList.add('show');
        message.textContent = `товар "${title.textContent}" в количестве ${event.target.dataset.count} единиц добавлен в корзину`;
        productAddToCartBtn.disabled = true;
    
        setTimeout(() => message.classList.add('fade'), 1000);
    
        setTimeout(() => {
            productAddToCartBtn.removeAttribute('disabled');
            message.classList.remove('fade');
            message.classList.remove('show');
            message.textContent = '';
        }, 1500);
    });
};

export default addToCart;