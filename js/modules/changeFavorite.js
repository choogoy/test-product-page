const changeFavorite = () => {
    const productAddToFavoriteBtn = document.querySelector('.product__add-to-favorite-btn');

    productAddToFavoriteBtn.addEventListener('click', () => {
        const message = productAddToFavoriteBtn.querySelector('.message');
        const title = document.querySelector('.product__title');

        productAddToFavoriteBtn.classList.toggle('product__add-to-favorite-btn--active');

        if (productAddToFavoriteBtn.classList.contains('product__add-to-favorite-btn--active')) {
            message.textContent = `товар "${title.textContent}" добавлен в избранное`;
        } else {
            message.textContent = `товар "${title.textContent}" удален из избранного`;
        }

        message.classList.add('show');

        setTimeout(() => message.classList.add('fade'), 1000);

        setTimeout(() => {
            message.classList.remove('fade');
            message.classList.remove('show');
            message.textContent = '';
        }, 1500);
    });
};

export default changeFavorite;