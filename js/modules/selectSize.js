const selectSize = () => {
    const sizeSelect = document.querySelector('.size-select');
    const productSelectTitle = document.querySelector('.size-select__title');

    sizeSelect.addEventListener('click', event => {
        productSelectTitle.textContent = 'Выбрать размер';
        sizeSelect.classList.toggle('size-select--active');

        if (event.target.closest('.size-select__item')) {
            productSelectTitle.textContent = event.target.textContent;
            sizeSelect.classList.remove('size-select--active');            
        }
    });
};

export default selectSize;