const changeCount = () => {
    const productCounterBtns = document.querySelectorAll('.product__counter-btn');
    const productCounterText = document.querySelector('.product__counter-text');
    const productAddToCartBtn = document.querySelector('.product__add-to-cart-btn');

    productCounterBtns.forEach(btn => {
        btn.addEventListener('click', event => {
            const target = event.target;
            const minusBtn = document.querySelector('.product__counter-btn--minus');
            let currentCount = +productCounterText.textContent;
    
            if (target.closest('.product__counter-btn--plus')) {
                currentCount++;
            }
    
            if (target.closest('.product__counter-btn--minus')) {
                currentCount--;    
            }
    
            if (currentCount === 0) {
                productAddToCartBtn.disabled = true;
                minusBtn.disabled = true;
            }
    
            if (currentCount > 0 && minusBtn.hasAttribute('disabled')) {
                minusBtn.removeAttribute('disabled');
                productAddToCartBtn.removeAttribute('disabled');
            }
    
            productCounterText.textContent = currentCount;
            productAddToCartBtn.dataset.count = currentCount;
        });
    });
};

export default changeCount;